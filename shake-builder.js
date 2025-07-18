// בנאי שייקים - JavaScript מתקדם
class ShakeBuilderApp {
    constructor() {
        this.mixBuilder = new CustomMixBuilder();
        this.currentIngredientId = null;
        this.filteredIngredients = [];
        this.selectedCategory = '';
        this.searchQuery = '';
        
        this.initializeApp();
    }

    async initializeApp() {
        try {
            // אתחול מסד הנתונים
            await this.mixBuilder.dbManager.openDB();
            
            // טעינת רכיבים
            this.loadIngredients();
            
            // הוספת מאזיני אירועים
            this.setupEventListeners();
            
            // עדכון תצוגה ראשונית
            this.updateUI();
            
            console.log('Shake Builder initialized successfully');
        } catch (error) {
            console.error('Error initializing Shake Builder:', error);
            this.showError('שגיאה באתחול האפליקציה');
        }
    }

    setupEventListeners() {
        // חיפוש רכיבים
        const searchInput = document.getElementById('ingredientSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value;
                this.filterIngredients();
            });
        }

        // סינון קטגוריות
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.selectedCategory = e.target.value;
                this.filterIngredients();
            });
        }

        // מידע המיקס
        const mixName = document.getElementById('mixName');
        if (mixName) {
            mixName.addEventListener('input', (e) => {
                this.mixBuilder.currentMix.name = e.target.value;
            });
        }

        const mixDescription = document.getElementById('mixDescription');
        if (mixDescription) {
            mixDescription.addEventListener('input', (e) => {
                this.mixBuilder.currentMix.description = e.target.value;
            });
        }

        const mixCategory = document.getElementById('mixCategory');
        if (mixCategory) {
            mixCategory.addEventListener('change', (e) => {
                this.mixBuilder.currentMix.category = e.target.value;
            });
        }

        // Modal הוספת רכיב
        const amountSlider = document.getElementById('amountSlider');
        const amountInput = document.getElementById('amountInput');
        
        if (amountSlider && amountInput) {
            amountSlider.addEventListener('input', (e) => {
                amountInput.value = e.target.value;
                this.updateIngredientNutrition();
            });

            amountInput.addEventListener('input', (e) => {
                amountSlider.value = e.target.value;
                this.updateIngredientNutrition();
            });
        }

        // מקשי קיצור
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 's':
                        e.preventDefault();
                        this.saveMix();
                        break;
                    case 'r':
                        e.preventDefault();
                        this.resetMix();
                        break;
                }
            }
            
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    loadIngredients() {
        this.filteredIngredients = ingredientUtils.getAllIngredients();
        this.displayIngredients();
    }

    filterIngredients() {
        let ingredients = ingredientUtils.getAllIngredients();

        // סינון לפי קטגוריה
        if (this.selectedCategory) {
            ingredients = ingredients.filter(ingredient => 
                ingredient.category === this.selectedCategory
            );
        }

        // סינון לפי חיפוש
        if (this.searchQuery) {
            ingredients = ingredientUtils.searchIngredients(this.searchQuery);
        }

        this.filteredIngredients = ingredients;
        this.displayIngredients();
    }

    displayIngredients() {
        const grid = document.getElementById('ingredientsGrid');
        if (!grid) return;

        if (this.filteredIngredients.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: #666;">לא נמצאו רכיבים</p>';
            return;
        }

        grid.innerHTML = this.filteredIngredients.map(ingredient => 
            this.createIngredientCard(ingredient)
        ).join('');
    }

    createIngredientCard(ingredient) {
        const isSelected = this.mixBuilder.currentMix.ingredients.some(i => i.id === ingredient.id);
        const categoryName = categoryNames[ingredient.category] || ingredient.category;
        
        return `
            <div class="ingredient-card ${isSelected ? 'selected' : ''}" 
                 onclick="app.openAddIngredientModal(${ingredient.id})">
                <button class="add-ingredient-btn" onclick="event.stopPropagation(); app.quickAddIngredient(${ingredient.id})">
                    <i class="fas fa-plus"></i>
                </button>
                <div class="ingredient-card-header">
                    <div class="ingredient-card-icon">${ingredient.icon}</div>
                    <div>
                        <h4 class="ingredient-card-name">${ingredient.name}</h4>
                        <div class="ingredient-card-category">${categoryName}</div>
                    </div>
                </div>
                <div class="ingredient-card-nutrition">
                    <span>${ingredient.calories} קלוריות</span>
                    <span>${ingredient.protein}g חלבון</span>
                </div>
                <div class="ingredient-card-benefits">
                    ${ingredient.benefits.slice(0, 3).map(benefit => 
                        `<span class="benefit-tag">${benefit}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    quickAddIngredient(ingredientId) {
        this.mixBuilder.addIngredient(ingredientId, 50);
        this.updateUI();
        this.showSuccess('רכיב נוסף בהצלחה!');
    }

    openAddIngredientModal(ingredientId) {
        const ingredient = ingredientUtils.getIngredientById(ingredientId);
        if (!ingredient) return;

        this.currentIngredientId = ingredientId;
        
        // עדכון תוכן המודל
        document.getElementById('ingredientModalTitle').textContent = `הוספת ${ingredient.name}`;
        
        const details = document.getElementById('ingredientDetails');
        details.innerHTML = `
            <div class="ingredient-main-info">
                <div class="ingredient-modal-icon">${ingredient.icon}</div>
                <div>
                    <h3 class="ingredient-modal-name">${ingredient.name}</h3>
                    <p class="ingredient-modal-category">${categoryNames[ingredient.category] || ingredient.category}</p>
                </div>
            </div>
            <div class="ingredient-benefits">
                <h4>יתרונות:</h4>
                <div class="benefits-list">
                    ${ingredient.benefits.map(benefit => 
                        `<span class="benefit-tag">${benefit}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        // איפוס כמות
        document.getElementById('amountSlider').value = 50;
        document.getElementById('amountInput').value = 50;
        
        this.updateIngredientNutrition();
        
        // הצגת המודל
        document.getElementById('addIngredientModal').style.display = 'block';
    }

    updateIngredientNutrition() {
        const ingredient = ingredientUtils.getIngredientById(this.currentIngredientId);
        if (!ingredient) return;

        const amount = parseFloat(document.getElementById('amountSlider').value);
        const factor = amount / 100;

        const nutrition = document.getElementById('ingredientNutrition');
        nutrition.innerHTML = `
            <h4>מידע תזונתי עבור ${amount}g:</h4>
            <div class="nutrition-grid">
                <div class="preview-nutrition-item">
                    <div class="preview-nutrition-value">${Math.round(ingredient.calories * factor)}</div>
                    <div class="preview-nutrition-label">קלוריות</div>
                </div>
                <div class="preview-nutrition-item">
                    <div class="preview-nutrition-value">${Math.round(ingredient.protein * factor * 10) / 10}</div>
                    <div class="preview-nutrition-label">חלבון (g)</div>
                </div>
                <div class="preview-nutrition-item">
                    <div class="preview-nutrition-value">${Math.round(ingredient.carbs * factor * 10) / 10}</div>
                    <div class="preview-nutrition-label">פחמימות (g)</div>
                </div>
                <div class="preview-nutrition-item">
                    <div class="preview-nutrition-value">${Math.round(ingredient.fat * factor * 10) / 10}</div>
                    <div class="preview-nutrition-label">שומן (g)</div>
                </div>
                <div class="preview-nutrition-item">
                    <div class="preview-nutrition-value">${Math.round(ingredient.fiber * factor * 10) / 10}</div>
                    <div class="preview-nutrition-label">סיבים (g)</div>
                </div>
                <div class="preview-nutrition-item">
                    <div class="preview-nutrition-value">${Math.round(ingredient.sugar * factor * 10) / 10}</div>
                    <div class="preview-nutrition-label">סוכר (g)</div>
                </div>
            </div>
            <div class="detailed-nutrition">
                <h5>מינרלים וויטמינים:</h5>
                <div class="nutrition-grid">
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round((ingredient.sodium || 0) * factor * 10) / 10}</div>
                        <div class="preview-nutrition-label">נתרן (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round((ingredient.potassium || 0) * factor * 10) / 10}</div>
                        <div class="preview-nutrition-label">אשלגן (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round((ingredient.vitaminC || 0) * factor * 10) / 10}</div>
                        <div class="preview-nutrition-label">ויטמין C (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round((ingredient.calcium || 0) * factor * 10) / 10}</div>
                        <div class="preview-nutrition-label">סידן (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round((ingredient.iron || 0) * factor * 10) / 10}</div>
                        <div class="preview-nutrition-label">ברזל (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round((ingredient.magnesium || 0) * factor * 10) / 10}</div>
                        <div class="preview-nutrition-label">מגנזיום (mg)</div>
                    </div>
                </div>
            </div>
        `;
    }

    confirmAddIngredient() {
        const amount = parseFloat(document.getElementById('amountSlider').value);
        this.mixBuilder.addIngredient(this.currentIngredientId, amount);
        this.updateUI();
        this.closeAddIngredient();
        this.showSuccess('רכיב נוסף למיקס!');
    }

    closeAddIngredient() {
        document.getElementById('addIngredientModal').style.display = 'none';
        this.currentIngredientId = null;
    }

    removeIngredient(ingredientId) {
        this.mixBuilder.removeIngredient(ingredientId);
        this.updateUI();
        this.showSuccess('רכיב הוסר מהמיקס');
    }

    updateIngredientAmount(ingredientId, change) {
        const ingredient = this.mixBuilder.currentMix.ingredients.find(i => i.id === ingredientId);
        if (!ingredient) return;

        const newAmount = Math.max(10, ingredient.amount + change);
        this.mixBuilder.updateIngredientAmount(ingredientId, newAmount);
        this.updateUI();
    }

    updateUI() {
        this.updateNutritionSummary();
        this.updateSelectedIngredients();
        this.updateNutritionalBalance();
        this.displayIngredients(); // רענון כרטיסי הרכיבים
    }

    updateNutritionSummary() {
        const nutrition = this.mixBuilder.currentMix.nutrition;
        
        document.getElementById('totalCalories').textContent = Math.round(nutrition.calories);
        document.getElementById('totalProtein').textContent = Math.round(nutrition.protein * 10) / 10;
        document.getElementById('totalCarbs').textContent = Math.round(nutrition.carbs * 10) / 10;
        document.getElementById('totalFat').textContent = Math.round(nutrition.fat * 10) / 10;
        document.getElementById('totalVolume').textContent = Math.round(this.mixBuilder.currentMix.volume);
        
        // עדכון ערכים תזונתיים מפורטים
        if (document.getElementById('totalSugar')) {
            document.getElementById('totalSugar').textContent = Math.round(nutrition.sugar * 10) / 10;
        }
        if (document.getElementById('totalFiber')) {
            document.getElementById('totalFiber').textContent = Math.round(nutrition.fiber * 10) / 10;
        }
        if (document.getElementById('totalSodium')) {
            document.getElementById('totalSodium').textContent = Math.round(nutrition.sodium * 10) / 10;
        }
        if (document.getElementById('totalPotassium')) {
            document.getElementById('totalPotassium').textContent = Math.round(nutrition.potassium * 10) / 10;
        }
        if (document.getElementById('totalVitaminC')) {
            document.getElementById('totalVitaminC').textContent = Math.round(nutrition.vitaminC * 10) / 10;
        }
        if (document.getElementById('totalCalcium')) {
            document.getElementById('totalCalcium').textContent = Math.round(nutrition.calcium * 10) / 10;
        }
        if (document.getElementById('totalIron')) {
            document.getElementById('totalIron').textContent = Math.round(nutrition.iron * 10) / 10;
        }
        if (document.getElementById('totalMagnesium')) {
            document.getElementById('totalMagnesium').textContent = Math.round(nutrition.magnesium * 10) / 10;
        }
    }

    updateSelectedIngredients() {
        const container = document.getElementById('selectedIngredients');
        const ingredients = this.mixBuilder.currentMix.ingredients;

        if (ingredients.length === 0) {
            container.innerHTML = `
                <div class="empty-mix">
                    <i class="fas fa-glass-water"></i>
                    <p>התחל לבנות את המיקס שלך על ידי הוספת רכיבים</p>
                </div>
            `;
            return;
        }

        container.innerHTML = ingredients.map(ingredient => `
            <div class="ingredient-item">
                <div class="ingredient-info">
                    <div class="ingredient-icon">${ingredient.icon}</div>
                    <div class="ingredient-details">
                        <h4>${ingredient.name}</h4>
                        <p>${Math.round(ingredient.calories * ingredient.amount / 100)} קלוריות • ${Math.round(ingredient.protein * ingredient.amount / 100)}g חלבון</p>
                    </div>
                </div>
                <div class="ingredient-controls">
                    <div class="amount-control">
                        <button class="amount-btn" onclick="app.updateIngredientAmount(${ingredient.id}, -10)">-</button>
                        <span class="amount-display">${ingredient.amount}g</span>
                        <button class="amount-btn" onclick="app.updateIngredientAmount(${ingredient.id}, 10)">+</button>
                    </div>
                    <button class="remove-btn" onclick="app.removeIngredient(${ingredient.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateNutritionalBalance() {
        const balance = this.mixBuilder.getNutritionalBalance();
        const balanceDiv = document.getElementById('mixBalance');
        
        if (!balance || this.mixBuilder.currentMix.ingredients.length === 0) {
            balanceDiv.style.display = 'none';
            return;
        }

        balanceDiv.style.display = 'block';
        
        // עדכון תרשים
        document.getElementById('proteinBar').style.width = balance.protein + '%';
        document.getElementById('carbsBar').style.width = balance.carbs + '%';
        document.getElementById('fatBar').style.width = balance.fat + '%';
        
        // עדכון אחוזים
        document.getElementById('proteinPercent').textContent = balance.protein + '%';
        document.getElementById('carbsPercent').textContent = balance.carbs + '%';
        document.getElementById('fatPercent').textContent = balance.fat + '%';
        
        // עדכון המלצות
        const recommendations = document.getElementById('balanceRecommendations');
        if (balance.recommendations.length > 0) {
            recommendations.innerHTML = `
                <h5>המלצות לשיפור האיזון:</h5>
                <ul>
                    ${balance.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            `;
        } else {
            recommendations.innerHTML = `
                <h5>איזון תזונתי מעולה! 🎉</h5>
                <p>המיקס שלך מאוזן בצורה טובה מבחינה תזונתית</p>
            `;
        }
    }

    async saveMix() {
        if (!this.mixBuilder.currentMix.name.trim()) {
            this.openSaveMixModal();
            return;
        }

        try {
            await this.mixBuilder.saveMix();
            this.showSuccess('המיקס נשמר בהצלחה!');
            this.resetMix();
        } catch (error) {
            console.error('Error saving mix:', error);
            this.showError('שגיאה בשמירת המיקס: ' + error.message);
        }
    }

    openSaveMixModal() {
        // מילוי שדות מהמיקס הנוכחי
        document.getElementById('saveMixName').value = this.mixBuilder.currentMix.name || '';
        document.getElementById('saveMixDescription').value = this.mixBuilder.currentMix.description || '';
        document.getElementById('saveMixCategory').value = this.mixBuilder.currentMix.category || 'custom';
        document.getElementById('saveMixFavorite').checked = this.mixBuilder.currentMix.isFavorite || false;
        
        document.getElementById('saveMixModal').style.display = 'block';
    }

    async confirmSaveMix() {
        const name = document.getElementById('saveMixName').value.trim();
        const description = document.getElementById('saveMixDescription').value.trim();
        const category = document.getElementById('saveMixCategory').value;
        const isFavorite = document.getElementById('saveMixFavorite').checked;

        if (!name) {
            this.showError('שם המיקס חובה');
            return;
        }

        if (this.mixBuilder.currentMix.ingredients.length === 0) {
            this.showError('יש להוסיף לפחות רכיב אחד');
            return;
        }

        try {
            this.mixBuilder.currentMix.name = name;
            this.mixBuilder.currentMix.description = description;
            this.mixBuilder.currentMix.category = category;
            this.mixBuilder.currentMix.isFavorite = isFavorite;

            await this.mixBuilder.saveMix();
            this.showSuccess('המיקס נשמר בהצלחה!');
            this.closeSaveMix();
            this.resetMix();
        } catch (error) {
            console.error('Error saving mix:', error);
            this.showError('שגיאה בשמירת המיקס: ' + error.message);
        }
    }

    closeSaveMix() {
        document.getElementById('saveMixModal').style.display = 'none';
    }

    resetMix() {
        this.mixBuilder.resetMix();
        
        // איפוס שדות
        document.getElementById('mixName').value = '';
        document.getElementById('mixDescription').value = '';
        document.getElementById('mixCategory').value = 'custom';
        
        this.updateUI();
        this.showSuccess('המיקס אופס בהצלחה');
    }

    loadRandomMix() {
        this.resetMix();
        
        // בחירת רכיבים אקראיים
        const randomIngredients = [];
        const categories = ['fruits', 'vegetables', 'proteins', 'liquids'];
        
        categories.forEach(category => {
            const categoryIngredients = ingredientUtils.getIngredientsByCategory(category);
            if (categoryIngredients.length > 0) {
                const randomIngredient = categoryIngredients[Math.floor(Math.random() * categoryIngredients.length)];
                randomIngredients.push(randomIngredient);
            }
        });

        // הוספת רכיבים למיקס
        randomIngredients.forEach(ingredient => {
            const randomAmount = Math.floor(Math.random() * 100) + 30; // 30-130g
            this.mixBuilder.addIngredient(ingredient.id, randomAmount);
        });

        // שם אקראי
        const randomNames = ['מיקס אקראי', 'הפתעת היום', 'מיקס מיוחד', 'גילוי חדש', 'מיקס הרגע'];
        this.mixBuilder.currentMix.name = randomNames[Math.floor(Math.random() * randomNames.length)];
        document.getElementById('mixName').value = this.mixBuilder.currentMix.name;

        this.updateUI();
        this.showSuccess('מיקס אקראי נוצר!');
    }

    togglePreview() {
        const modal = document.getElementById('previewModal');
        const title = document.getElementById('previewTitle');
        const body = document.getElementById('previewBody');
        
        if (!this.mixBuilder.currentMix.name) {
            this.showError('יש להוסיף שם למיקס');
            return;
        }

        title.textContent = this.mixBuilder.currentMix.name;
        
        const nutrition = this.mixBuilder.currentMix.nutrition;
        const ingredients = this.mixBuilder.currentMix.ingredients;
        
        body.innerHTML = `
            <div class="preview-nutrition">
                <h4>💪 מידע תזונתי בסיסי</h4>
                <div class="nutrition-grid">
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.calories)}</div>
                        <div class="preview-nutrition-label">קלוריות</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.protein * 10) / 10}</div>
                        <div class="preview-nutrition-label">חלבון (g)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.carbs * 10) / 10}</div>
                        <div class="preview-nutrition-label">פחמימות (g)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.fat * 10) / 10}</div>
                        <div class="preview-nutrition-label">שומן (g)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.fiber * 10) / 10}</div>
                        <div class="preview-nutrition-label">סיבים (g)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.sugar * 10) / 10}</div>
                        <div class="preview-nutrition-label">סוכר (g)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(this.mixBuilder.currentMix.volume)}</div>
                        <div class="preview-nutrition-label">נפח (ml)</div>
                    </div>
                </div>
            </div>
            <div class="preview-nutrition">
                <h4>🧪 מינרלים וויטמינים</h4>
                <div class="nutrition-grid">
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.sodium * 10) / 10}</div>
                        <div class="preview-nutrition-label">נתרן (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.potassium * 10) / 10}</div>
                        <div class="preview-nutrition-label">אשלגן (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.vitaminC * 10) / 10}</div>
                        <div class="preview-nutrition-label">ויטמין C (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.calcium * 10) / 10}</div>
                        <div class="preview-nutrition-label">סידן (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.iron * 10) / 10}</div>
                        <div class="preview-nutrition-label">ברזל (mg)</div>
                    </div>
                    <div class="preview-nutrition-item">
                        <div class="preview-nutrition-value">${Math.round(nutrition.magnesium * 10) / 10}</div>
                        <div class="preview-nutrition-label">מגנזיום (mg)</div>
                    </div>
                </div>
            </div>
            <div class="preview-ingredients">
                <h4>רכיבים</h4>
                <ul class="preview-ingredient-list">
                    ${ingredients.map(ingredient => `
                        <li>
                            <span>${ingredient.icon} ${ingredient.name}</span>
                            <span>${ingredient.amount}g</span>
                        </li>
                    `).join('')}
                </ul>
                ${this.mixBuilder.currentMix.description ? `
                    <div class="preview-description">
                        <h4>תיאור</h4>
                        <p>${this.mixBuilder.currentMix.description}</p>
                    </div>
                ` : ''}
            </div>
        `;
        
        modal.style.display = 'block';
    }

    closePreview() {
        document.getElementById('previewModal').style.display = 'none';
    }

    async exportMix() {
        if (!this.mixBuilder.currentMix.name) {
            this.showError('יש להוסיף שם למיקס');
            return;
        }

        try {
            const mixData = this.mixBuilder.getCurrentMix();
            const jsonString = JSON.stringify(mixData, null, 2);
            
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `${mixData.name}.json`;
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
        // יצירת התראה
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'}"></i>
            <span>${message}</span>
        `;
        
        // הוספת CSS לתראות
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
        
        // הסרה אוטומטית
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

// פונקציות גלובליות לקריאה מה-HTML
function resetMix() {
    app.resetMix();
}

function loadRandomMix() {
    app.loadRandomMix();
}

function togglePreview() {
    app.togglePreview();
}

function closePreview() {
    app.closePreview();
}

function saveMix() {
    app.saveMix();
}

function closeAddIngredient() {
    app.closeAddIngredient();
}

function confirmAddIngredient() {
    app.confirmAddIngredient();
}

function closeSaveMix() {
    app.closeSaveMix();
}

function confirmSaveMix() {
    app.confirmSaveMix();
}

function exportMix() {
    app.exportMix();
}

// אתחול האפליקציה
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ShakeBuilderApp();
}); 