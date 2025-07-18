// מסד נתונים של שייקים
const shakesData = [
    // שייקי בריאות כללית
    {
        id: 1,
        name: "שייק ירוק מחזק",
        category: "health",
        description: "שייק עתיר בוויטמינים ומינרלים לחיזוק מערכת החיסון",
        base: "מים",
        baseIcon: "💧",
        calories: 120,
        weight: "300ml",
        overallValue: 9.2,
        ingredients: [
            { name: "תרד טרי", amount: "100g" },
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "תפוח ירוק", amount: "1 יחידה" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["חיזוק מערכת החיסון", "ניקוי רעלים", "אנרגיה טבעית"],
        image: "🥬"
    },
    {
        id: 2,
        name: "שייק אנטי-אוקסידנטים",
        category: "health",
        description: "שייק עשיר באנטי-אוקסידנטים לבריאות מיטבית",
        base: "מיץ רימון",
        baseIcon: "🧃",
        calories: 150,
        weight: "350ml",
        overallValue: 8.8,
        ingredients: [
            { name: "פירות יער קפואים", amount: "150g" },
            { name: "מיץ רימון", amount: "200ml" },
            { name: "אוכמניות", amount: "50g" },
            { name: "שקדים", amount: "10 יחידות" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["מלא אנטי-אוקסידנטים", "מונע הזדקנות", "מגן על הלב"],
        image: "🫐"
    },
    
    // שייקי ניקוז וניקוי
    {
        id: 3,
        name: "שייק ניקוי דטוקס",
        category: "detox",
        description: "שייק מטהר לניקוי הגוף מרעלים ושיפור העיכול",
        base: "מים",
        baseIcon: "💧",
        calories: 80,
        weight: "250ml",
        overallValue: 8.9,
        ingredients: [
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "סלרי", amount: "2 גבעולים" },
            { name: "פטרוזיליה", amount: "1 כוס" },
            { name: "לימון", amount: "1 יחידה" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "מנטה", amount: "10 עלים" }
        ],
        benefits: ["ניקוי רעלים", "שיפור עיכול", "הידרציה"],
        image: "🥒"
    },
    {
        id: 4,
        name: "שייק ירוק מנקה",
        category: "detox",
        description: "שייק ירוק מנקה לשחרור רעלים מהכבד",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 100,
        weight: "300ml",
        overallValue: 8.7,
        ingredients: [
            { name: "קייל", amount: "2 כוסות" },
            { name: "מי קוקוס", amount: "200ml" },
            { name: "אננס", amount: "100g" },
            { name: "אבוקדו", amount: "1/2 יחידה" },
            { name: "מנטה", amount: "10 עלים" }
        ],
        benefits: ["ניקוי כבד", "איזון pH", "הידרציה"],
        image: "🥬"
    },
    
    // שייקי הורדה במשקל
    {
        id: 5,
        name: "שייק שורף שומן",
        category: "weight-loss",
        description: "שייק דל קלוריות המסייע בשריפת שומן",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 85,
        weight: "250ml",
        overallValue: 8.5,
        ingredients: [
            { name: "אננס", amount: "100g" },
            { name: "מי קוקוס", amount: "200ml" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "קינמון", amount: "1 כפית" },
            { name: "מנטה", amount: "5 עלים" }
        ],
        benefits: ["שריפת שומן", "מטבוליזם מואץ", "רגש שובע"],
        image: "🍍"
    },
    {
        id: 6,
        name: "שייק תחליף ארוחה",
        category: "weight-loss",
        description: "שייק מזין ומשביע המתאים כתחליף לארוחה",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 180,
        weight: "400ml",
        overallValue: 8.3,
        ingredients: [
            { name: "חלב שקדים", amount: "250ml" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "אוכמניות", amount: "50g" },
            { name: "שיבולת שועל", amount: "2 כפות" },
            { name: "חמאת שקדים", amount: "1 כף" }
        ],
        benefits: ["שובע ממושך", "אנרגיה יציבה", "ירידה במשקל"],
        image: "🥤"
    },
    
    // שייקי חלבון
    {
        id: 7,
        name: "שייק חלבון שוקולד",
        category: "protein",
        description: "שייק חלבון עשיר לבניית שריר והתאוששות",
        base: "חלב פרות",
        baseIcon: "🥛",
        calories: 280,
        weight: "400ml",
        overallValue: 9.1,
        ingredients: [
            { name: "חלב פרות", amount: "300ml" },
            { name: "אבקת חלבון שוקולד", amount: "30g" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "חמאת בוטנים", amount: "1 כף" },
            { name: "קוקוס", amount: "1 כף" }
        ],
        benefits: ["בניית שריר", "התאוששות מהירה", "שיפור כוח"],
        image: "🍫"
    },
    {
        id: 8,
        name: "שייק חלבון וניל",
        category: "protein",
        description: "שייק חלבון קלאסי עם טעם וניל עדין",
        base: "חלב עיזים",
        baseIcon: "🐐",
        calories: 250,
        weight: "350ml",
        overallValue: 8.9,
        ingredients: [
            { name: "חלב עיזים", amount: "250ml" },
            { name: "אבקת חלבון וניל", amount: "30g" },
            { name: "דבש", amount: "1 כף" },
            { name: "שקדים", amount: "8 יחידות" },
            { name: "קינמון", amount: "1 כפית" }
        ],
        benefits: ["חלבון איכותי", "קל לעיכול", "טעם מעולה"],
        image: "🥛"
    },
    
    // שייקי אנרגיה
    {
        id: 9,
        name: "שייק בוסטר אנרגיה",
        category: "energy",
        description: "שייק אנרגיה טבעי למתח יומיומי",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 160,
        weight: "300ml",
        overallValue: 8.6,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "תמר", amount: "3 יחידות" },
            { name: "קפה קר", amount: "50ml" },
            { name: "אגוזי מלך", amount: "6 יחידות" }
        ],
        benefits: ["אנרגיה מיידית", "ריכוז משופר", "סיבולת גבוהה"],
        image: "⚡"
    },
    {
        id: 10,
        name: "שייק מטה אנרגיה",
        category: "energy",
        description: "שייק מטה למטען אנרגיה ממושך",
        base: "מיץ תפוזים",
        baseIcon: "🧃",
        calories: 140,
        weight: "280ml",
        overallValue: 8.4,
        ingredients: [
            { name: "מיץ תפוזים", amount: "200ml" },
            { name: "מטה", amount: "1 כפית" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "דבש", amount: "1 כף" },
            { name: "מנטה", amount: "5 עלים" }
        ],
        benefits: ["אנרגיה טבעית", "ריכוז משופר", "אנטי-אוקסידנטים"],
        image: "🍃"
    },
    
    // שייקי יופי ועור
    {
        id: 11,
        name: "שייק קולגן יופי",
        category: "beauty",
        description: "שייק עשיר בקולגן לבריאות העור",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 190,
        weight: "350ml",
        overallValue: 8.8,
        ingredients: [
            { name: "חלב שקדים", amount: "250ml" },
            { name: "אבקת קולגן", amount: "15g" },
            { name: "תותים", amount: "100g" },
            { name: "אוכמניות", amount: "50g" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["עור צעיר", "קולגן טבעי", "אנטי-אייג'ינג"],
        image: "🍓"
    },
    {
        id: 12,
        name: "שייק ויטמין C זוהר",
        category: "beauty",
        description: "שייק עתיר ויטמין C לעור זוהר וחיוני",
        base: "מיץ כתומים",
        baseIcon: "🧃",
        calories: 130,
        weight: "300ml",
        overallValue: 8.7,
        ingredients: [
            { name: "מיץ כתומים", amount: "200ml" },
            { name: "קיווי", amount: "2 יחידות" },
            { name: "מנגו", amount: "50g" },
            { name: "ג'ינג'ר", amount: "1 כפית" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["ויטמין C גבוה", "עור זוהר", "מערכת חיסון"],
        image: "🥝"
    }
];

// משתני מצב האפליקציה
let currentFilter = 'all';
let currentShakes = shakesData;

// פונקציות עזר
function getShakesByCategory(category) {
    if (category === 'all') return shakesData;
    return shakesData.filter(shake => shake.category === category);
}

function searchShakes(query) {
    const searchTerm = query.toLowerCase();
    return shakesData.filter(shake => 
        shake.name.toLowerCase().includes(searchTerm) ||
        shake.description.toLowerCase().includes(searchTerm) ||
        shake.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
    );
}

function getCategoryName(category) {
    const categories = {
        'health': 'בריאות כללית',
        'detox': 'ניקוז וניקוי',
        'weight-loss': 'הורדה במשקל',
        'protein': 'חלבונים',
        'energy': 'אנרגיה',
        'beauty': 'יופי ועור'
    };
    return categories[category] || category;
}

// יצירת כרטיס שייק
function createShakeCard(shake) {
    return `
        <div class="shake-card" onclick="openShakeModal(${shake.id})">
            <div class="shake-image">
                ${shake.image}
            </div>
            <div class="shake-content">
                <div class="shake-category">${getCategoryName(shake.category)}</div>
                <h3 class="shake-title">${shake.name}</h3>
                <p class="shake-description">${shake.description}</p>
                <div class="shake-info">
                    <div class="shake-base">
                        <span>${shake.baseIcon}</span>
                        <span>${shake.base}</span>
                    </div>
                    <div class="shake-calories">${shake.calories} קלוריות</div>
                </div>
                <div class="shake-weight">משקל: ${shake.weight}</div>
                <div class="shake-rating">⭐ ${shake.overallValue}/10</div>
            </div>
        </div>
    `;
}

// הצגת שייקים
function displayShakes(shakes) {
    const shakesGrid = document.getElementById('shakesGrid');
    if (shakes.length === 0) {
        shakesGrid.innerHTML = '<p style="text-align: center; color: #666; font-size: 1.2rem;">לא נמצאו שייקים מתאימים</p>';
        return;
    }
    
    shakesGrid.innerHTML = shakes.map(shake => createShakeCard(shake)).join('');
}

// פתיחת מודל שייק
function openShakeModal(shakeId) {
    const shake = shakesData.find(s => s.id === shakeId);
    if (!shake) return;
    
    const modalContent = `
        <div class="modal-shake-title">${shake.name}</div>
        <div class="modal-shake-details">
            <div class="detail-item">
                <div class="detail-value">${shake.calories}</div>
                <div class="detail-label">קלוריות</div>
            </div>
            <div class="detail-item">
                <div class="detail-value">${shake.weight}</div>
                <div class="detail-label">משקל</div>
            </div>
            <div class="detail-item">
                <div class="detail-value">${shake.baseIcon} ${shake.base}</div>
                <div class="detail-label">בסיס</div>
            </div>
            <div class="detail-item">
                <div class="detail-value">⭐ ${shake.overallValue}/10</div>
                <div class="detail-label">דירוג כללי</div>
            </div>
        </div>
        
        <div class="ingredients-section">
            <h4>רכיבים:</h4>
            <ul class="ingredients-list">
                ${shake.ingredients.map(ingredient => 
                    `<li><span>${ingredient.name}</span><span>${ingredient.amount}</span></li>`
                ).join('')}
            </ul>
        </div>
        
        <div class="benefits-section">
            <h4>יתרונות:</h4>
            <ul class="benefits-list">
                ${shake.benefits.map(benefit => 
                    `<li>✓ ${benefit}</li>`
                ).join('')}
            </ul>
        </div>
    `;
    
    document.getElementById('modalContent').innerHTML = modalContent;
    document.getElementById('shakeModal').style.display = 'block';
}

// סגירת מודל
function closeModal() {
    document.getElementById('shakeModal').style.display = 'none';
}

// סינון שייקים
function filterShakes(category) {
    currentFilter = category;
    currentShakes = getShakesByCategory(category);
    displayShakes(currentShakes);
    
    // עדכון כפתורי סינון
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
    
    // עדכון כותרת
    const sectionTitle = document.getElementById('sectionTitle');
    sectionTitle.textContent = category === 'all' ? 'כל השייקים' : `שייקי ${getCategoryName(category)}`;
}

// חיפוש שייקים
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query === '') {
        currentShakes = getShakesByCategory(currentFilter);
    } else {
        currentShakes = searchShakes(query);
    }
    
    displayShakes(currentShakes);
    
    // עדכון כותרת
    const sectionTitle = document.getElementById('sectionTitle');
    if (query !== '') {
        sectionTitle.textContent = `תוצאות חיפוש: "${query}"`;
    } else {
        sectionTitle.textContent = currentFilter === 'all' ? 'כל השייקים' : `שייקי ${getCategoryName(currentFilter)}`;
    }
}

// אירועים
document.addEventListener('DOMContentLoaded', function() {
    // הצגת כל השייקים בטעינה
    displayShakes(shakesData);
    
    // הוספת אירועי לחיצה על קטגוריות
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterShakes(category);
            
            // גלילה לסעיף השייקים
            document.querySelector('.shakes-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // הוספת אירועי לחיצה על כפתורי סינון
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterShakes(filter);
        });
    });
    
    // הוספת אירוע חיפוש
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // סגירת מודל בלחיצה על רקע
    document.getElementById('shakeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // סגירת מודל עם ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// הוספת CSS דינמי למודל
const style = document.createElement('style');
style.textContent = `
    .benefits-section {
        margin-top: 1.5rem;
    }
    
    .benefits-section h4 {
        margin-bottom: 1rem;
        color: #333;
        font-size: 1.2rem;
    }
    
    .benefits-list {
        list-style: none;
        padding: 0;
    }
    
    .benefits-list li {
        padding: 0.5rem 0;
        color: #667eea;
        font-weight: 500;
    }
    
    .shake-weight {
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 0.5rem;
    }
    
    .shake-rating {
        font-size: 0.9rem;
        color: #ff6b6b;
        font-weight: 600;
    }
`;
document.head.appendChild(style); 