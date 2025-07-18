// מנהל מסד הנתונים IndexedDB לשמירת מיקסים אישיים
class ShakesMixManager {
    constructor() {
        this.dbName = 'ShakesDB';
        this.dbVersion = 1;
        this.db = null;
        this.storeName = 'customMixes';
    }

    // פתיחת מסד הנתונים
    async openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // יצירת store למיקסים אישיים
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const store = db.createObjectStore(this.storeName, { 
                        keyPath: 'id', 
                        autoIncrement: true 
                    });
                    
                    // אינדקסים לחיפוש
                    store.createIndex('name', 'name', { unique: false });
                    store.createIndex('category', 'category', { unique: false });
                    store.createIndex('dateCreated', 'dateCreated', { unique: false });
                    store.createIndex('rating', 'rating', { unique: false });
                }
            };
        });
    }

    // שמירת מיקס חדש
    async saveMix(mixData) {
        if (!this.db) {
            await this.openDB();
        }

        const mix = {
            ...mixData,
            dateCreated: new Date().toISOString(),
            dateModified: new Date().toISOString()
        };

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.add(mix);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // עדכון מיקס קיים
    async updateMix(id, mixData) {
        if (!this.db) {
            await this.openDB();
        }

        const updatedMix = {
            ...mixData,
            id: id,
            dateModified: new Date().toISOString()
        };

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put(updatedMix);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // קבלת כל המיקסים
    async getAllMixes() {
        if (!this.db) {
            await this.openDB();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // קבלת מיקס לפי ID
    async getMixById(id) {
        if (!this.db) {
            await this.openDB();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(id);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // חיפוש מיקסים
    async searchMixes(query) {
        const allMixes = await this.getAllMixes();
        const searchTerm = query.toLowerCase();
        
        return allMixes.filter(mix =>
            mix.name.toLowerCase().includes(searchTerm) ||
            mix.description.toLowerCase().includes(searchTerm) ||
            mix.category.toLowerCase().includes(searchTerm) ||
            mix.ingredients.some(ingredient => 
                ingredient.name.toLowerCase().includes(searchTerm)
            )
        );
    }

    // קבלת מיקסים לפי קטגוריה
    async getMixesByCategory(category) {
        if (!this.db) {
            await this.openDB();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const index = store.index('category');
            const request = index.getAll(category);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // מחיקת מיקס
    async deleteMix(id) {
        if (!this.db) {
            await this.openDB();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.delete(id);

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // קבלת מיקסים מועדפים
    async getFavoriteMixes() {
        const allMixes = await this.getAllMixes();
        return allMixes.filter(mix => mix.isFavorite);
    }

    // הוספת מיקס למועדפים
    async toggleFavorite(id) {
        const mix = await this.getMixById(id);
        if (mix) {
            mix.isFavorite = !mix.isFavorite;
            return await this.updateMix(id, mix);
        }
        return false;
    }

    // דירוג מיקס
    async rateMix(id, rating) {
        const mix = await this.getMixById(id);
        if (mix) {
            mix.rating = rating;
            return await this.updateMix(id, mix);
        }
        return false;
    }

    // קבלת סטטיסטיקות
    async getStats() {
        const allMixes = await this.getAllMixes();
        const categories = {};
        let totalCalories = 0;
        let totalProtein = 0;
        let avgRating = 0;

        allMixes.forEach(mix => {
            // ספירת קטגוריות
            categories[mix.category] = (categories[mix.category] || 0) + 1;
            
            // סכום תזונתי
            totalCalories += mix.nutrition.calories;
            totalProtein += mix.nutrition.protein;
            
            // ממוצע דירוג
            if (mix.rating) {
                avgRating += mix.rating;
            }
        });

        return {
            totalMixes: allMixes.length,
            categories,
            favorites: allMixes.filter(m => m.isFavorite).length,
            avgCalories: Math.round(totalCalories / allMixes.length) || 0,
            avgProtein: Math.round(totalProtein / allMixes.length) || 0,
            avgRating: Math.round((avgRating / allMixes.length) * 10) / 10 || 0
        };
    }

    // ייצוא מיקס לJSON
    async exportMix(id) {
        const mix = await this.getMixById(id);
        if (mix) {
            return JSON.stringify(mix, null, 2);
        }
        return null;
    }

    // ייבוא מיקס מJSON
    async importMix(jsonString) {
        try {
            const mix = JSON.parse(jsonString);
            delete mix.id; // מסיר ID כדי ליצור חדש
            return await this.saveMix(mix);
        } catch (error) {
            throw new Error('Invalid JSON format');
        }
    }

    // ניקוי מסד הנתונים
    async clearAllMixes() {
        if (!this.db) {
            await this.openDB();
        }

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.clear();

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }
}

// מחלקה לניהול מיקסים אישיים
class CustomMixBuilder {
    constructor() {
        this.currentMix = this.initializeMix();
        this.dbManager = new ShakesMixManager();
    }

    // אתחול מיקס חדש
    initializeMix() {
        return {
            name: '',
            description: '',
            category: 'custom',
            ingredients: [],
            nutrition: {
                calories: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
                fiber: 0,
                sugar: 0
            },
            volume: 0,
            rating: 0,
            isFavorite: false,
            tags: [],
            difficulty: 'easy',
            prepTime: 5,
            serves: 1
        };
    }

    // הוספת רכיב למיקס
    addIngredient(ingredientId, amount = 50) {
        const ingredient = ingredientUtils.getIngredientById(ingredientId);
        if (!ingredient) return false;

        const existingIndex = this.currentMix.ingredients.findIndex(
            item => item.id === ingredientId
        );

        if (existingIndex >= 0) {
            // עדכון כמות אם הרכיב כבר קיים
            this.currentMix.ingredients[existingIndex].amount += amount;
        } else {
            // הוספת רכיב חדש
            this.currentMix.ingredients.push({
                ...ingredient,
                amount: amount
            });
        }

        this.updateNutrition();
        return true;
    }

    // הסרת רכיב מהמיקס
    removeIngredient(ingredientId) {
        this.currentMix.ingredients = this.currentMix.ingredients.filter(
            item => item.id !== ingredientId
        );
        this.updateNutrition();
    }

    // עדכון כמות רכיב
    updateIngredientAmount(ingredientId, newAmount) {
        const ingredient = this.currentMix.ingredients.find(
            item => item.id === ingredientId
        );
        if (ingredient) {
            ingredient.amount = newAmount;
            this.updateNutrition();
        }
    }

    // חישוב מחדש של הערכים התזונתיים
    updateNutrition() {
        this.currentMix.nutrition = ingredientUtils.calculateNutrition(
            this.currentMix.ingredients
        );
        this.currentMix.volume = this.calculateVolume();
    }

    // חישוב נפח השייק
    calculateVolume() {
        return this.currentMix.ingredients.reduce((total, ingredient) => {
            // חישוב גס של נפח בהתבסס על כמות
            return total + (ingredient.amount * 1.2); // גורם המרה גס
        }, 0);
    }

    // שמירת המיקס
    async saveMix() {
        if (!this.currentMix.name) {
            throw new Error('Mix name is required');
        }

        if (this.currentMix.ingredients.length === 0) {
            throw new Error('At least one ingredient is required');
        }

        return await this.dbManager.saveMix(this.currentMix);
    }

    // איפוס המיקס הנוכחי
    resetMix() {
        this.currentMix = this.initializeMix();
    }

    // קבלת המיקס הנוכחי
    getCurrentMix() {
        return { ...this.currentMix };
    }

    // טעינת מיקס קיים לעריכה
    async loadMix(id) {
        const mix = await this.dbManager.getMixById(id);
        if (mix) {
            this.currentMix = { ...mix };
            return true;
        }
        return false;
    }

    // קבלת המלצות רכיבים
    getIngredientRecommendations(category = null) {
        if (category) {
            return ingredientUtils.getIngredientsByCategory(category);
        }
        
        // המלצות בהתבסס על הרכיבים הקיימים
        const currentCategories = this.currentMix.ingredients.map(i => i.category);
        const missingCategories = Object.keys(categoryNames).filter(
            cat => !currentCategories.includes(cat)
        );
        
        if (missingCategories.length > 0) {
            return ingredientUtils.getIngredientsByCategory(missingCategories[0]);
        }
        
        return ingredientUtils.getAllIngredients().slice(0, 20);
    }

    // בדיקת איזון תזונתי
    getNutritionalBalance() {
        const nutrition = this.currentMix.nutrition;
        const totalCalories = nutrition.calories;
        
        if (totalCalories === 0) return null;
        
        const proteinPercent = (nutrition.protein * 4 / totalCalories) * 100;
        const carbsPercent = (nutrition.carbs * 4 / totalCalories) * 100;
        const fatPercent = (nutrition.fat * 9 / totalCalories) * 100;
        
        return {
            protein: Math.round(proteinPercent),
            carbs: Math.round(carbsPercent),
            fat: Math.round(fatPercent),
            recommendations: this.getBalanceRecommendations(proteinPercent, carbsPercent, fatPercent)
        };
    }

    // המלצות לאיזון
    getBalanceRecommendations(protein, carbs, fat) {
        const recommendations = [];
        
        if (protein < 15) {
            recommendations.push('הוסף יותר חלבון - נסה אבקת חלבון או אגוזים');
        }
        if (carbs < 25) {
            recommendations.push('הוסף פחמימות - נסה פירות או שיבולת שועל');
        }
        if (fat < 20) {
            recommendations.push('הוסף שומנים בריאים - נסה אבוקדו או שמן קוקוס');
        }
        if (this.currentMix.nutrition.fiber < 5) {
            recommendations.push('הוסף סיבים - נסה זרעי צ\'יה או ירקות עליים');
        }
        
        return recommendations;
    }
}

// אתחול גלובלי
if (typeof window !== 'undefined') {
    window.ShakesMixManager = ShakesMixManager;
    window.CustomMixBuilder = CustomMixBuilder;
    
    // יצירת מופע גלובלי
    window.mixManager = new ShakesMixManager();
    window.mixBuilder = new CustomMixBuilder();
} 