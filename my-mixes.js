// My Mixes - JavaScript לניהול מיקסים אישיים
class MyMixesApp {
    constructor() {
        this.dbManager = new ShakesMixManager();
        this.allMixes = [];
        this.filteredMixes = [];
        this.showFavoritesOnly = false;
        this.sortBy = 'dateCreated';
        this.sortOrder = 'desc';
        this.searchQuery = '';
        this.currentEditingMix = null;
        this.currentDeletingMix = null;
        this.selectedRating = 0;
        
        this.initializeApp();
    }

    async initializeApp() {
        try {
            await this.dbManager.openDB();
            await this.loadMixes();
            this.setupEventListeners();
            this.updateStats();
            this.displayMixes();
            
            console.log('My Mixes initialized successfully');
        } catch (error) {
            console.error('Error initializing My Mixes:', error);
            this.showError('שגיאה באתחול האפליקציה');
        }
    }

    setupEventListeners() {
        // חיפוש
        const searchInput = document.getElementById('mixSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value;
                this.filterAndDisplayMixes();
            });
        }

        // מיון
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortBy = e.target.value;
                this.filterAndDisplayMixes();
            });
        }

        // ייבוא קובץ
        const importFile = document.getElementById('importFile');
        if (importFile) {
            importFile.addEventListener('change', (e) => {
                this.importFromFile(e.target.files[0]);
            });
        }

        // דירוג
        const ratingStars = document.querySelectorAll('.rating-input .star');
        ratingStars.forEach((star, index) => {
            star.addEventListener('click', () => {
                this.selectedRating = index + 1;
                this.updateRatingDisplay();
            });
        });

        // סגירת מודלים עם ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    async loadMixes() {
        try {
            this.allMixes = await this.dbManager.getAllMixes();
            this.filteredMixes = [...this.allMixes];
        } catch (error) {
            console.error('Error loading mixes:', error);
            this.showError('שגיאה בטעינת המיקסים');
        }
    }

    async updateStats() {
        try {
            const stats = await this.dbManager.getStats();
            
            document.getElementById('totalMixes').textContent = stats.totalMixes;
            document.getElementById('favoriteCount').textContent = stats.favorites;
            document.getElementById('avgRating').textContent = stats.avgRating || '0';
            document.getElementById('avgCalories').textContent = stats.avgCalories || '0';
        } catch (error) {
            console.error('Error updating stats:', error);
        }
    }

    filterAndDisplayMixes() {
        let filtered = [...this.allMixes];

        // סינון מועדפים
        if (this.showFavoritesOnly) {
            filtered = filtered.filter(mix => mix.isFavorite);
        }

        // סינון חיפוש
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(mix =>
                mix.name.toLowerCase().includes(query) ||
                mix.description.toLowerCase().includes(query) ||
                mix.category.toLowerCase().includes(query) ||
                mix.ingredients.some(ingredient =>
                    ingredient.name.toLowerCase().includes(query)
                )
            );
        }

        // מיון
        filtered.sort((a, b) => {
            let aValue = a[this.sortBy];
            let bValue = b[this.sortBy];

            if (this.sortBy === 'dateCreated' || this.sortBy === 'dateModified') {
                aValue = new Date(aValue);
                bValue = new Date(bValue);
            }

            if (this.sortBy === 'calories') {
                aValue = a.nutrition.calories;
                bValue = b.nutrition.calories;
            }

            if (this.sortBy === 'name') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (this.sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        this.filteredMixes = filtered;
        this.displayMixes();
    }

    displayMixes() {
        const grid = document.getElementById('mixesGrid');
        const emptyState = document.getElementById('emptyState');

        if (this.filteredMixes.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        grid.style.display = 'grid';
        emptyState.style.display = 'none';

        grid.innerHTML = this.filteredMixes.map(mix => this.createMixCard(mix)).join('');
    }

    createMixCard(mix) {
        const categoryNames = {
            'custom': 'אישי',
            'health': 'בריאות',
            'weight-loss': 'הורדה במשקל',
            'muscle': 'בניית שריר',
            'energy': 'אנרגיה',
            'detox': 'ניקוי',
            'beauty': 'יופי'
        };

        const formattedDate = new Date(mix.dateCreated).toLocaleDateString('he-IL');
        const stars = this.createStarsHTML(mix.rating || 0);
        const topIngredients = mix.ingredients.slice(0, 3);

        return `
            <div class="mix-card ${mix.isFavorite ? 'favorite' : ''}" onclick="mixesApp.openMixDetails(${mix.id})">
                <div class="mix-card-header">
                    <div>
                        <div class="mix-card-category">${categoryNames[mix.category] || mix.category}</div>
                        <h3 class="mix-card-title">${mix.name}</h3>
                    </div>
                    <div class="mix-card-actions">
                        <button class="mix-action-btn favorite ${mix.isFavorite ? 'active' : ''}" 
                                onclick="event.stopPropagation(); mixesApp.toggleFavorite(${mix.id})"
                                title="מועדפים">
                            <i class="fas fa-star"></i>
                        </button>
                        <button class="mix-action-btn edit" 
                                onclick="event.stopPropagation(); mixesApp.openEditMix(${mix.id})"
                                title="עריכה">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="mix-action-btn export" 
                                onclick="event.stopPropagation(); mixesApp.exportMix(${mix.id})"
                                title="ייצוא">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="mix-action-btn delete" 
                                onclick="event.stopPropagation(); mixesApp.openDeleteConfirm(${mix.id})"
                                title="מחיקה">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                
                ${mix.description ? `<div class="mix-card-description">${mix.description}</div>` : ''}
                
                <div class="mix-card-nutrition">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.nutrition.calories)}</div>
                        <div class="nutrition-label">קלוריות</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.nutrition.protein * 10) / 10}</div>
                        <div class="nutrition-label">חלבון</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.volume || 0)}</div>
                        <div class="nutrition-label">נפח (ml)</div>
                    </div>
                </div>
                
                <div class="mix-card-ingredients">
                    <h5>רכיבים עיקריים:</h5>
                    <div class="ingredients-preview">
                        ${topIngredients.map(ingredient => 
                            `<span class="ingredient-tag">${ingredient.name}</span>`
                        ).join('')}
                        ${mix.ingredients.length > 3 ? 
                            `<span class="ingredient-tag">+${mix.ingredients.length - 3} נוספים</span>` : ''}
                    </div>
                </div>
                
                <div class="mix-card-footer">
                    <div class="mix-card-date">${formattedDate}</div>
                    <div class="mix-card-rating">${stars}</div>
                </div>
            </div>
        `;
    }

    createStarsHTML(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<span class="star">★</span>';
            } else {
                stars += '<span class="star empty">★</span>';
            }
        }
        return stars;
    }

    async openMixDetails(mixId) {
        const mix = await this.dbManager.getMixById(mixId);
        if (!mix) return;

        const categoryNames = {
            'custom': 'אישי',
            'health': 'בריאות',
            'weight-loss': 'הורדה במשקל',
            'muscle': 'בניית שריר',
            'energy': 'אנרגיה',
            'detox': 'ניקוי',
            'beauty': 'יופי'
        };

        const content = `
            <div class="mix-details-info">
                <h3>${mix.name}</h3>
                <div class="mix-category">${categoryNames[mix.category] || mix.category}</div>
                ${mix.description ? `<p>${mix.description}</p>` : ''}
                <div class="mix-meta">
                    <p><strong>נוצר:</strong> ${new Date(mix.dateCreated).toLocaleDateString('he-IL')}</p>
                    <p><strong>דירוג:</strong> ${this.createStarsHTML(mix.rating || 0)}</p>
                    <p><strong>מועדף:</strong> ${mix.isFavorite ? 'כן' : 'לא'}</p>
                </div>
            </div>
            
            <div class="mix-details-nutrition">
                <h4>מידע תזונתי</h4>
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.nutrition.calories)}</div>
                        <div class="nutrition-label">קלוריות</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.nutrition.protein * 10) / 10}</div>
                        <div class="nutrition-label">חלבון (g)</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.nutrition.carbs * 10) / 10}</div>
                        <div class="nutrition-label">פחמימות (g)</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.nutrition.fat * 10) / 10}</div>
                        <div class="nutrition-label">שומן (g)</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.nutrition.fiber * 10) / 10}</div>
                        <div class="nutrition-label">סיבים (g)</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${Math.round(mix.volume || 0)}</div>
                        <div class="nutrition-label">נפח (ml)</div>
                    </div>
                </div>
            </div>
            
            <div class="mix-details-ingredients">
                <h4>רכיבים מלאים</h4>
                <ul class="ingredients-list">
                    ${mix.ingredients.map(ingredient => `
                        <li>
                            <div class="ingredient-name">
                                <span class="ingredient-icon">${ingredient.icon}</span>
                                <span>${ingredient.name}</span>
                            </div>
                            <div class="ingredient-amount">${ingredient.amount}g</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        document.getElementById('mixDetailsContent').innerHTML = content;
        document.getElementById('mixDetailsModal').style.display = 'block';
    }

    async openEditMix(mixId) {
        const mix = await this.dbManager.getMixById(mixId);
        if (!mix) return;

        this.currentEditingMix = mix;
        this.selectedRating = mix.rating || 0;

        document.getElementById('editMixName').value = mix.name;
        document.getElementById('editMixDescription').value = mix.description || '';
        document.getElementById('editMixCategory').value = mix.category;
        document.getElementById('editMixFavorite').checked = mix.isFavorite || false;

        this.updateRatingDisplay();
        document.getElementById('editMixModal').style.display = 'block';
    }

    async confirmEditMix() {
        if (!this.currentEditingMix) return;

        const name = document.getElementById('editMixName').value.trim();
        const description = document.getElementById('editMixDescription').value.trim();
        const category = document.getElementById('editMixCategory').value;
        const isFavorite = document.getElementById('editMixFavorite').checked;

        if (!name) {
            this.showError('שם המיקס חובה');
            return;
        }

        try {
            const updatedMix = {
                ...this.currentEditingMix,
                name,
                description,
                category,
                isFavorite,
                rating: this.selectedRating
            };

            await this.dbManager.updateMix(this.currentEditingMix.id, updatedMix);
            await this.loadMixes();
            this.updateStats();
            this.filterAndDisplayMixes();
            this.closeEditMix();
            this.showSuccess('המיקס עודכן בהצלחה!');
        } catch (error) {
            console.error('Error updating mix:', error);
            this.showError('שגיאה בעדכון המיקס');
        }
    }

    openDeleteConfirm(mixId) {
        const mix = this.allMixes.find(m => m.id === mixId);
        if (!mix) return;

        this.currentDeletingMix = mix;
        document.getElementById('deleteMixName').textContent = mix.name;
        document.getElementById('deleteConfirmModal').style.display = 'block';
    }

    async confirmDeleteMix() {
        if (!this.currentDeletingMix) return;

        try {
            await this.dbManager.deleteMix(this.currentDeletingMix.id);
            await this.loadMixes();
            this.updateStats();
            this.filterAndDisplayMixes();
            this.closeDeleteConfirm();
            this.showSuccess('המיקס נמחק בהצלחה!');
        } catch (error) {
            console.error('Error deleting mix:', error);
            this.showError('שגיאה במחיקת המיקס');
        }
    }

    async toggleFavorite(mixId) {
        try {
            await this.dbManager.toggleFavorite(mixId);
            await this.loadMixes();
            this.updateStats();
            this.filterAndDisplayMixes();
        } catch (error) {
            console.error('Error toggling favorite:', error);
            this.showError('שגיאה בעדכון מועדפים');
        }
    }

    async exportMix(mixId) {
        try {
            const jsonString = await this.dbManager.exportMix(mixId);
            if (!jsonString) {
                this.showError('שגיאה בייצוא המיקס');
                return;
            }

            const mix = await this.dbManager.getMixById(mixId);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `${mix.name}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.showSuccess('המיקס יוצא בהצלחה!');
        } catch (error) {
            console.error('Error exporting mix:', error);
            this.showError('שגיאה בייצוא המיקס');
        }
    }

    async exportAllMixes() {
        try {
            const allMixes = await this.dbManager.getAllMixes();
            if (allMixes.length === 0) {
                this.showError('אין מיקסים לייצוא');
                return;
            }

            const jsonString = JSON.stringify(allMixes, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `my-mixes-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.showSuccess('כל המיקסים יוצאו בהצלחה!');
        } catch (error) {
            console.error('Error exporting all mixes:', error);
            this.showError('שגיאה בייצוא המיקסים');
        }
    }

    async importFromFile(file) {
        if (!file) return;

        try {
            const text = await file.text();
            await this.importFromText(text);
        } catch (error) {
            console.error('Error importing from file:', error);
            this.showError('שגיאה בייבוא מהקובץ');
        }
    }

    async importFromText(jsonString = null) {
        try {
            const text = jsonString || document.getElementById('importJson').value.trim();
            if (!text) {
                this.showError('יש להדביק או לבחור קובץ JSON');
                return;
            }

            const data = JSON.parse(text);
            let imported = 0;

            // בדיקה אם זה מיקס יחיד או רשימה
            if (Array.isArray(data)) {
                for (const mixData of data) {
                    await this.dbManager.importMix(JSON.stringify(mixData));
                    imported++;
                }
            } else {
                await this.dbManager.importMix(text);
                imported = 1;
            }

            await this.loadMixes();
            this.updateStats();
            this.filterAndDisplayMixes();
            this.closeImportMix();
            this.showSuccess(`${imported} מיקס/ים יובאו בהצלחה!`);
        } catch (error) {
            console.error('Error importing mix:', error);
            this.showError('שגיאה בייבוא המיקס - בדוק את פורמט הJSON');
        }
    }

    async clearAllMixes() {
        if (!confirm('האם אתה בטוח שברצונך למחוק את כל המיקסים? פעולה זו אינה ניתנת לביטול.')) {
            return;
        }

        try {
            await this.dbManager.clearAllMixes();
            await this.loadMixes();
            this.updateStats();
            this.filterAndDisplayMixes();
            this.showSuccess('כל המיקסים נמחקו בהצלחה!');
        } catch (error) {
            console.error('Error clearing all mixes:', error);
            this.showError('שגיאה במחיקת המיקסים');
        }
    }

    toggleFavoritesOnly() {
        this.showFavoritesOnly = !this.showFavoritesOnly;
        const btn = document.querySelector('[onclick="toggleFavoritesOnly()"]');
        const text = document.getElementById('favoritesToggleText');
        
        if (this.showFavoritesOnly) {
            btn.classList.add('active');
            text.textContent = 'הצג הכל';
        } else {
            btn.classList.remove('active');
            text.textContent = 'מועדפים בלבד';
        }
        
        this.filterAndDisplayMixes();
    }

    toggleSortOrder() {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        const icon = document.getElementById('sortIcon');
        const text = document.getElementById('sortOrderText');
        
        if (this.sortOrder === 'asc') {
            icon.className = 'fas fa-sort-amount-up';
            text.textContent = 'עולה';
        } else {
            icon.className = 'fas fa-sort-amount-down';
            text.textContent = 'יורד';
        }
        
        this.filterAndDisplayMixes();
    }

    updateRatingDisplay() {
        const stars = document.querySelectorAll('.rating-input .star');
        stars.forEach((star, index) => {
            if (index < this.selectedRating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // פונקציות סגירת מודלים
    closeMixDetails() {
        document.getElementById('mixDetailsModal').style.display = 'none';
    }

    closeEditMix() {
        document.getElementById('editMixModal').style.display = 'none';
        this.currentEditingMix = null;
        this.selectedRating = 0;
    }

    closeDeleteConfirm() {
        document.getElementById('deleteConfirmModal').style.display = 'none';
        this.currentDeletingMix = null;
    }

    openImportMix() {
        document.getElementById('importMixModal').style.display = 'block';
    }

    closeImportMix() {
        document.getElementById('importMixModal').style.display = 'none';
        document.getElementById('importJson').value = '';
        document.getElementById('importFile').value = '';
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'}"></i>
            <span>${message}</span>
        `;
        
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: white;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    min-width: 300px;
                    animation: slideIn 0.3s ease;
                }
                
                .notification.success {
                    border-right: 4px solid #4caf50;
                    color: #2e7d32;
                }
                
                .notification.error {
                    border-right: 4px solid #f44336;
                    color: #c62828;
                }
                
                .notification.info {
                    border-right: 4px solid #2196f3;
                    color: #1565c0;
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// פונקציות גלובליות
function toggleFavoritesOnly() {
    mixesApp.toggleFavoritesOnly();
}

function toggleSortOrder() {
    mixesApp.toggleSortOrder();
}

function closeMixDetails() {
    mixesApp.closeMixDetails();
}

function closeEditMix() {
    mixesApp.closeEditMix();
}

function confirmEditMix() {
    mixesApp.confirmEditMix();
}

function closeDeleteConfirm() {
    mixesApp.closeDeleteConfirm();
}

function confirmDeleteMix() {
    mixesApp.confirmDeleteMix();
}

function openImportMix() {
    mixesApp.openImportMix();
}

function closeImportMix() {
    mixesApp.closeImportMix();
}

function importFromText() {
    mixesApp.importFromText();
}

function exportAllMixes() {
    mixesApp.exportAllMixes();
}

function clearAllMixes() {
    mixesApp.clearAllMixes();
}

// אתחול האפליקציה
let mixesApp;
document.addEventListener('DOMContentLoaded', () => {
    mixesApp = new MyMixesApp();
}); 