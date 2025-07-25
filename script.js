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
        nutrition: {
            protein: 4.2,
            carbs: 28.5,
            fat: 0.8,
            sugar: 22.1,
            fiber: 6.8,
            saturatedFat: 0.1,
            unsaturatedFat: 0.7,
            sodium: 45,
            potassium: 680,
            vitaminC: 85,
            calcium: 120,
            iron: 2.8,
            vitaminA: 450,
            vitaminK: 180,
            folate: 65,
            magnesium: 58
        },
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
    },
    
    // שייקי בריאות כללית נוספים
    {
        id: 13,
        name: "שייק סופר ירוק",
        category: "health",
        description: "שייק ירוק עוצמתי עם ספירולינה וכלורלה",
        base: "מים",
        baseIcon: "💧",
        calories: 95,
        weight: "250ml",
        overallValue: 9.0,
        ingredients: [
            { name: "תרד", amount: "80g" },
            { name: "קייל", amount: "50g" },
            { name: "ספירולינה", amount: "1 כף" },
            { name: "כלורלה", amount: "1 כף" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "מי קוקוס", amount: "200ml" }
        ],
        benefits: ["ויטמינים טבעיים", "ניקוי גוף", "אנרגיה נקייה"],
        image: "🌱"
    },
    {
        id: 14,
        name: "שייק ויטמין B קומפלקס",
        category: "health",
        description: "שייק לחיזוק מערכת העצבים ואנרגיה",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 160,
        weight: "350ml",
        overallValue: 8.9,
        ingredients: [
            { name: "חלב שקדים", amount: "250ml" },
            { name: "זרעי חמניות", amount: "2 כפות" },
            { name: "שמרי בירה", amount: "1 כף" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["ויטמין B", "מערכת עצבים", "אנרגיה יציבה"],
        image: "🧠"
    },
    {
        id: 15,
        name: "שייק ברזל טבעי",
        category: "health",
        description: "שייק עשיר בברזל למניעת אנמיה",
        base: "מיץ רימון",
        baseIcon: "🧃",
        calories: 140,
        weight: "300ml",
        overallValue: 8.8,
        ingredients: [
            { name: "מיץ רימון", amount: "200ml" },
            { name: "תרד", amount: "100g" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "אגוזי מלך", amount: "6 יחידות" },
            { name: "לימון", amount: "1/2 יחידה" }
        ],
        benefits: ["ברזל טבעי", "מניעת אנמיה", "אנרגיה"],
        image: "🍷"
    },
    {
        id: 16,
        name: "שייק אומגה 3",
        category: "health",
        description: "שייק עשיר באומגה 3 לבריאות הלב והמוח",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 180,
        weight: "350ml",
        overallValue: 9.1,
        ingredients: [
            { name: "מי קוקוס", amount: "250ml" },
            { name: "זרעי צ'יא", amount: "2 כפות" },
            { name: "אגוזי מלך", amount: "8 יחידות" },
            { name: "תות", amount: "100g" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["אומגה 3", "בריאות הלב", "פונקציות מוח"],
        image: "🧠"
    },
    {
        id: 17,
        name: "שייק פרוביוטיק",
        category: "health",
        description: "שייק לבריאות המעי והמערכת העיכול",
        base: "קפיר",
        baseIcon: "🥛",
        calories: 150,
        weight: "300ml",
        overallValue: 8.7,
        ingredients: [
            { name: "קפיר", amount: "200ml" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "תותים", amount: "80g" },
            { name: "דבש", amount: "1 כף" },
            { name: "קינמון", amount: "1 כפית" }
        ],
        benefits: ["פרוביוטיקה", "בריאות המעי", "עיכול בריא"],
        image: "🦠"
    },
    {
        id: 18,
        name: "שייק מגנזיום הרגעה",
        category: "health",
        description: "שייק למתח וחרדה עם מגנזיום טבעי",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 130,
        weight: "280ml",
        overallValue: 8.6,
        ingredients: [
            { name: "חלב שקדים", amount: "200ml" },
            { name: "שקדים", amount: "10 יחידות" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "מגנזיום", amount: "1 כף" },
            { name: "וניל", amount: "1 כפית" }
        ],
        benefits: ["מגנזיום", "הרגעה", "איכות שינה"],
        image: "😴"
    },
    {
        id: 19,
        name: "שייק זינק חיסון",
        category: "health",
        description: "שייק לחיזוק מערכת החיסון עם זינק",
        base: "מיץ תפוזים",
        baseIcon: "🧃",
        calories: 145,
        weight: "320ml",
        overallValue: 8.8,
        ingredients: [
            { name: "מיץ תפוזים", amount: "200ml" },
            { name: "זרעי דלעת", amount: "2 כפות" },
            { name: "קיווי", amount: "2 יחידות" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["זינק", "חיסון", "ויטמין C"],
        image: "🛡️"
    },
    {
        id: 20,
        name: "שייק סידן עצמות",
        category: "health",
        description: "שייק לחיזוק העצמות והשיניים",
        base: "חלב עיזים",
        baseIcon: "🐐",
        calories: 175,
        weight: "350ml",
        overallValue: 8.9,
        ingredients: [
            { name: "חלב עיזים", amount: "250ml" },
            { name: "טחינה", amount: "1 כף" },
            { name: "תמרים", amount: "3 יחידות" },
            { name: "שקדים", amount: "8 יחידות" },
            { name: "קינמון", amount: "1 כפית" }
        ],
        benefits: ["סידן", "עצמות חזקות", "שיניים בריאות"],
        image: "🦴"
    },
    {
        id: 21,
        name: "שייק ויטמין D",
        category: "health",
        description: "שייק לבריאות העצמות ומערכת החיסון",
        base: "חלב פרות",
        baseIcon: "🥛",
        calories: 165,
        weight: "320ml",
        overallValue: 8.7,
        ingredients: [
            { name: "חלב פרות", amount: "250ml" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "שמן קוד", amount: "1 כפית" },
            { name: "דבש", amount: "1 כף" },
            { name: "וניל", amount: "1 כפית" }
        ],
        benefits: ["ויטמין D", "חיסון", "עצמות"],
        image: "☀️"
    }, 
    {
        id: 22,
        name: "שייק אנזימים עיכול",
        category: "health",
        description: "שייק לשיפור העיכול עם אנזימים טבעיים",
        base: "מיץ אננס",
        baseIcon: "🧃",
        calories: 125,
        weight: "300ml",
        overallValue: 8.5,
        ingredients: [
            { name: "מיץ אננס", amount: "200ml" },
            { name: "פפאיה", amount: "100g" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "מנטה", amount: "10 עלים" },
            { name: "לימון", amount: "1/2 יחידה" }
        ],
        benefits: ["אנזימים", "עיכול", "נוגד דלקת"],
        image: "🍍"
    },
    {
        id: 23,
        name: "שייק אנטי-אייג'ינג",
        category: "health",
        description: "שייק נוגד הזדקנות עם אנטי-אוקסידנטים",
        base: "מיץ רימון",
        baseIcon: "🧃",
        calories: 155,
        weight: "330ml",
        overallValue: 9.0,
        ingredients: [
            { name: "מיץ רימון", amount: "200ml" },
            { name: "גוג'י ברי", amount: "2 כפות" },
            { name: "אוכמניות", amount: "80g" },
            { name: "אגוזי מלך", amount: "6 יחידות" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["אנטי-אוקסידנטים", "נוגד הזדקנות", "עור צעיר"],
        image: "⏰"
    },
    {
        id: 24,
        name: "שייק אלקליין איזון",
        category: "health",
        description: "שייק לאיזון חומציות הגוף",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 110,
        weight: "280ml",
        overallValue: 8.4,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "סלרי", amount: "2 גבעולים" },
            { name: "לימון", amount: "1 יחידה" },
            { name: "מנטה", amount: "8 עלים" }
        ],
        benefits: ["איזון pH", "אלקליין", "ניקוי"],
        image: "⚖️"
    },
    {
        id: 25,
        name: "שייק פיטוכימיקלים",
        category: "health",
        description: "שייק עשיר בפיטוכימיקלים מגוון פירות",
        base: "מיץ אוכמניות",
        baseIcon: "🧃",
        calories: 170,
        weight: "350ml",
        overallValue: 8.9,
        ingredients: [
            { name: "מיץ אוכמניות", amount: "150ml" },
            { name: "גזר", amount: "1 יחידה" },
            { name: "אוכמניות", amount: "50g" },
            { name: "רימון", amount: "1/2 יחידה" },
            { name: "ג'ינג'ר", amount: "1 כף" }
        ],
        benefits: ["פיטוכימיקלים", "מגוון ויטמינים", "חיסון"],
        image: "🌈"
    },
    {
        id: 26,
        name: "שייק פולי-ויטמין",
        category: "health",
        description: "שייק רב ויטמינים ומינרלים",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 185,
        weight: "380ml",
        overallValue: 9.2,
        ingredients: [
            { name: "חלב שקדים", amount: "250ml" },
            { name: "אספירולינה", amount: "1 כף" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "תות", amount: "100g" },
            { name: "שמרי בירה", amount: "1 כף" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["ויטמינים", "מינרלים", "אנרגיה"],
        image: "💊"
    },
    {
        id: 27,
        name: "שייק הידרציה +",
        category: "health",
        description: "שייק לחידוש נוזלים ואלקטרוליטים",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 85,
        weight: "300ml",
        overallValue: 8.3,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "אבטיח", amount: "150g" },
            { name: "מלח ים", amount: "1 כפית" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "מנטה", amount: "5 עלים" }
        ],
        benefits: ["הידרציה", "אלקטרוליטים", "רענון"],
        image: "💧"
    },
    
    // שייקי ניקוז וניקוי נוספים
    {
        id: 28,
        name: "שייק ניקוי כבד",
        category: "detox",
        description: "שייק מיוחד לניקוי וחיזוק הכבד",
        base: "מים",
        baseIcon: "💧",
        calories: 70,
        weight: "250ml",
        overallValue: 8.8,
        ingredients: [
            { name: "ביט", amount: "1 יחידה" },
            { name: "גזר", amount: "1 יחידה" },
            { name: "לימון", amount: "1 יחידה" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "כורכום", amount: "1 כפית" }
        ],
        benefits: ["ניקוי כבד", "ניקוי רעלים", "בריאות הכבד"],
        image: "🫀"
    },
    {
        id: 29,
        name: "שייק ניקוי כליות",
        category: "detox",
        description: "שייק לתמיכה בבריאות הכליות",
        base: "מים",
        baseIcon: "💧",
        calories: 60,
        weight: "280ml",
        overallValue: 8.6,
        ingredients: [
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "אבטיח", amount: "150g" },
            { name: "פטרוזיליה", amount: "1 כוס" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "מנטה", amount: "8 עלים" }
        ],
        benefits: ["בריאות כליות", "ניקוי", "הידרציה"],
        image: "🫘"
    },
    {
        id: 30,
        name: "שייק ניקוי מעיים",
        category: "detox",
        description: "שייק לניקוי ובריאות המעי הגס",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 90,
        weight: "300ml",
        overallValue: 8.7,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "שיבולת שועל", amount: "2 כפות" },
            { name: "זרעי פשתן", amount: "1 כף" },
            { name: "תפוח", amount: "1 יחידה" },
            { name: "קינמון", amount: "1 כפית" }
        ],
        benefits: ["ניקוי מעיים", "סיבים", "עיכול בריא"],
        image: "🌾"
    },
    {
        id: 31,
        name: "שייק דטוקס אקספרס",
        category: "detox",
        description: "שייק מהיר לניקוי גוף במצבי לחץ",
        base: "מי לימון",
        baseIcon: "🍋",
        calories: 45,
        weight: "250ml",
        overallValue: 8.4,
        ingredients: [
            { name: "מי לימון", amount: "200ml" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "כורכום", amount: "1 כפית" },
            { name: "דבש", amount: "1 כף" },
            { name: "פלפל קיין", amount: "קמצוץ" }
        ],
        benefits: ["דטוקס מהיר", "חילוף חומרים", "אנרגיה"],
        image: "⚡"
    },
    {
        id: 32,
        name: "שייק ניקוי לימפטי",
        category: "detox",
        description: "שייק לתמיכה במערכת הלימפטית",
        base: "מים",
        baseIcon: "💧",
        calories: 85,
        weight: "300ml",
        overallValue: 8.5,
        ingredients: [
            { name: "אשכולית", amount: "1 יחידה" },
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "רוזמרין", amount: "1 כף" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "מנטה", amount: "6 עלים" }
        ],
        benefits: ["מערכת לימפטית", "ניקוי רעלים", "צירקולציה"],
        image: "🩸"
    },
    {
        id: 33,
        name: "שייק הטבעי משתן",
        category: "detox",
        description: "שייק טבעי לעידוד הפרשת נוזלים",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 75,
        weight: "280ml",
        overallValue: 8.3,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "אספרגוס", amount: "100g" },
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "פטרוזיליה", amount: "1/2 כוס" }
        ],
        benefits: ["משתן טבעי", "ניקוי נוזלים", "בריאות כליות"],
        image: "💧"
    },
    {
        id: 34,
        name: "שייק אנטי-דלקתי",
        category: "detox",
        description: "שייק לצמצום דלקות בגוף",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 95,
        weight: "320ml",
        overallValue: 8.6,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "כורכום", amount: "1 כף" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "אננס", amount: "100g" },
            { name: "פלפל שחור", amount: "קמצוץ" }
        ],
        benefits: ["נוגד דלקת", "ניקוי", "חיסון"],
        image: "🔥"
    },
    {
        id: 35,
        name: "שייק מתכות כבדות",
        category: "detox",
        description: "שייק לניקוי מתכות כבדות מהגוף",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 105,
        weight: "300ml",
        overallValue: 8.7,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "כוסברה", amount: "1 כוס" },
            { name: "כלורלה", amount: "1 כף" },
            { name: "לימון", amount: "1 יחידה" },
            { name: "שום", amount: "1 שן" }
        ],
        benefits: ["ניקוי מתכות", "חילוף חומרים", "ניקוי רעלים"],
        image: "🧪"
    },
    {
        id: 36,
        name: "שייק pH איזון",
        category: "detox",
        description: "שייק לאיזון רמת ה-pH בגוף",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 65,
        weight: "250ml",
        overallValue: 8.2,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "סלרי", amount: "2 גבעולים" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "אלוורה", amount: "1 כף" }
        ],
        benefits: ["איזון pH", "אלקליין", "ניקוי"],
        image: "⚖️"
    },
    {
        id: 37,
        name: "שייק ניקוי דם",
        category: "detox",
        description: "שייק לניקוי וטיהור הדם",
        base: "מיץ ביט",
        baseIcon: "🧃",
        calories: 80,
        weight: "280ml",
        overallValue: 8.5,
        ingredients: [
            { name: "מיץ ביט", amount: "150ml" },
            { name: "גזר", amount: "1 יחידה" },
            { name: "תפוח", amount: "1 יחידה" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "ג'ינג'ר", amount: "1 כף" }
        ],
        benefits: ["ניקוי דם", "ברזל", "אנרגיה"],
        image: "🩸"
    },
    {
        id: 38,
        name: "שייק ניקוי לילה",
        category: "detox",
        description: "שייק לניקוי גוף בזמן השינה",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 120,
        weight: "300ml",
        overallValue: 8.4,
        ingredients: [
            { name: "חלב שקדים", amount: "200ml" },
            { name: "לבנדר", amount: "1 כפית" },
            { name: "מגנזיום", amount: "1 כף" },
            { name: "דבש", amount: "1 כף" },
            { name: "קמומיל", amount: "1 כפית" }
        ],
        benefits: ["ניקוי לילה", "שינה", "הרגעה"],
        image: "🌙"
    },
    {
        id: 39,
        name: "שייק ניקוי מהיר",
        category: "detox",
        description: "שייק לניקוי מהיר של הגוף",
        base: "מי לימון",
        baseIcon: "🍋",
        calories: 55,
        weight: "250ml",
        overallValue: 8.1,
        ingredients: [
            { name: "מי לימון", amount: "200ml" },
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "מנטה", amount: "10 עלים" },
            { name: "דבש", amount: "1 כף" },
            { name: "מלח ים", amount: "קמצוץ" }
        ],
        benefits: ["ניקוי מהיר", "הידרציה", "רענון"],
        image: "💨"
    },
    {
        id: 40,
        name: "שייק חידוש תאים",
        category: "detox",
        description: "שייק לחידוש והתחדשות תאים",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 110,
        weight: "320ml",
        overallValue: 8.6,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "אספירולינה", amount: "1 כף" },
            { name: "גוג'י ברי", amount: "2 כפות" },
            { name: "אבוקדו", amount: "1/2 יחידה" },
            { name: "לימון", amount: "1/2 יחידה" }
        ],
        benefits: ["חידוש תאים", "אנטי-אוקסידנטים", "אנרגיה"],
        image: "🔄"
    },
    
    // שייקי הורדה במשקל נוספים
    {
        id: 41,
        name: "שייק מטבוליזם בוסטר",
        category: "weight-loss",
        description: "שייק להאצת חילוף החומרים",
        base: "תה ירוק",
        baseIcon: "🍵",
        calories: 65,
        weight: "250ml",
        overallValue: 8.7,
        ingredients: [
            { name: "תה ירוק", amount: "200ml" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "קינמון", amount: "1 כפית" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["חילוף חומרים", "שריפת שומן", "אנרגיה"],
        image: "🔥"
    },
    {
        id: 42,
        name: "שייק שובע ממושך",
        category: "weight-loss",
        description: "שייק לשובע ממושך ובקרת תיאבון",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 140,
        weight: "350ml",
        overallValue: 8.5,
        ingredients: [
            { name: "חלב שקדים", amount: "250ml" },
            { name: "זרעי צ'יא", amount: "2 כפות" },
            { name: "אוכמניות", amount: "50g" },
            { name: "שיבולת שועל", amount: "2 כפות" },
            { name: "קינמון", amount: "1 כפית" }
        ],
        benefits: ["שובע ממושך", "סיבים", "בקרת תיאבון"],
        image: "🥣"
    },
    {
        id: 43,
        name: "שייק L-קרניטין",
        category: "weight-loss",
        description: "שייק לשריפת שומן עם L-קרניטין",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 75,
        weight: "300ml",
        overallValue: 8.6,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "L-קרניטין", amount: "1 כף" },
            { name: "לימון", amount: "1 יחידה" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "מנטה", amount: "8 עלים" }
        ],
        benefits: ["שריפת שומן", "אנרגיה", "חילוף חומרים"],
        image: "🏃"
    },
    {
        id: 44,
        name: "שייק ביטא-גלוקן",
        category: "weight-loss",
        description: "שייק לבקרת כולסטרול והרדת משקל",
        base: "חלב שיבולת שועל",
        baseIcon: "🥛",
        calories: 120,
        weight: "320ml",
        overallValue: 8.4,
        ingredients: [
            { name: "חלב שיבולת שועל", amount: "250ml" },
            { name: "שיבולת שועל", amount: "2 כפות" },
            { name: "תפוח", amount: "1 יחידה" },
            { name: "קינמון", amount: "1 כפית" },
            { name: "אגוזי מלך", amount: "4 יחידות" }
        ],
        benefits: ["בקרת כולסטרול", "שובע", "לב בריא"],
        image: "❤️"
    },
    {
        id: 45,
        name: "שייק CLA טבעי",
        category: "weight-loss",
        description: "שייק לשריפת שומן בטן עם CLA",
        base: "חלב עיזים",
        baseIcon: "🐐",
        calories: 110,
        weight: "300ml",
        overallValue: 8.3,
        ingredients: [
            { name: "חלב עיזים", amount: "200ml" },
            { name: "זרעי חמניות", amount: "2 כפות" },
            { name: "אבוקדו", amount: "1/2 יחידה" },
            { name: "לימון", amount: "1/2 יחידה" },
            { name: "מנטה", amount: "6 עלים" }
        ],
        benefits: ["שריפת שומן בטן", "CLA טבעי", "שובע"],
        image: "🏋️"
    },
    {
        id: 46,
        name: "שייק חלבון דל שומן",
        category: "weight-loss",
        description: "שייק חלבון לשמירת שריר בדיאטה",
        base: "מים",
        baseIcon: "💧",
        calories: 95,
        weight: "280ml",
        overallValue: 8.5,
        ingredients: [
            { name: "מים", amount: "200ml" },
            { name: "אבקת חלבון", amount: "25g" },
            { name: "תות", amount: "80g" },
            { name: "זרעי צ'יא", amount: "1 כף" },
            { name: "קינמון", amount: "1 כפית" }
        ],
        benefits: ["שמירת שריר", "חלבון", "דל קלוריות"],
        image: "💪"
    },
    {
        id: 47,
        name: "שייק קטון",
        category: "weight-loss",
        description: "שייק לדיאטה קטוגנית",
        base: "חלב קוקוס",
        baseIcon: "🥥",
        calories: 180,
        weight: "300ml",
        overallValue: 8.4,
        ingredients: [
            { name: "חלב קוקוס", amount: "200ml" },
            { name: "שמן קוקוס", amount: "1 כף" },
            { name: "אבוקדו", amount: "1/2 יחידה" },
            { name: "קקאו", amount: "1 כף" },
            { name: "סטיביה", amount: "1 כפית" }
        ],
        benefits: ["קטוזיס", "שומנים בריאים", "שובע"],
        image: "🥥"
    },
    {
        id: 48,
        name: "שייק פייבר פלוס",
        category: "weight-loss",
        description: "שייק עתיר סיבים לשובע וניקוי",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 85,
        weight: "300ml",
        overallValue: 8.2,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "זרעי פשתן", amount: "2 כפות" },
            { name: "תפוח", amount: "1 יחידה" },
            { name: "אגס", amount: "1 יחידה" },
            { name: "קינמון", amount: "1 כפית" }
        ],
        benefits: ["סיבים", "שובע", "עיכול"],
        image: "🌾"
    },
    {
        id: 49,
        name: "שייק ירוק שומן",
        category: "weight-loss",
        description: "שייק ירוק לשריפת שומן",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 70,
        weight: "280ml",
        overallValue: 8.6,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "תרד", amount: "100g" },
            { name: "מלפפון", amount: "1 יחידה" },
            { name: "אבוקדו", amount: "1/4 יחידה" },
            { name: "לימון", amount: "1/2 יחידה" }
        ],
        benefits: ["שריפת שומן", "ויטמינים", "דל קלוריות"],
        image: "🥬"
    },
    {
        id: 50,
        name: "שייק תיאבון סטופר",
        category: "weight-loss",
        description: "שייק לבקרת תיאבון וחשק למתוק",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 100,
        weight: "300ml",
        overallValue: 8.3,
        ingredients: [
            { name: "חלב שקדים", amount: "250ml" },
            { name: "קינמון", amount: "1 כף" },
            { name: "כרום", amount: "1 כף" },
            { name: "וניל", amount: "1 כפית" },
            { name: "סטיביה", amount: "1 כפית" }
        ],
        benefits: ["בקרת תיאבון", "מניעת חשק", "איזון סוכר"],
        image: "🛑"
    },
    {
        id: 51,
        name: "שייק מים וסיבים",
        category: "weight-loss",
        description: "שייק לחיזוק התחושה של שובע",
        base: "מים",
        baseIcon: "💧",
        calories: 45,
        weight: "350ml",
        overallValue: 8.1,
        ingredients: [
            { name: "מים", amount: "300ml" },
            { name: "זרעי צ'יא", amount: "2 כפות" },
            { name: "לימון", amount: "1 יחידה" },
            { name: "מנטה", amount: "10 עלים" },
            { name: "דבש", amount: "1 כפית" }
        ],
        benefits: ["שובע", "הידרציה", "דל קלוריות"],
        image: "💧"
    },
    {
        id: 52,
        name: "שייק חומצה לינולית",
        category: "weight-loss",
        description: "שייק לשריפת שומן עם חומצות שומן",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 125,
        weight: "320ml",
        overallValue: 8.4,
        ingredients: [
            { name: "מי קוקוס", amount: "200ml" },
            { name: "זרעי חמניות", amount: "2 כפות" },
            { name: "זרעי דלעת", amount: "1 כף" },
            { name: "אבוקדו", amount: "1/4 יחידה" },
            { name: "לימון", amount: "1/2 יחידה" }
        ],
        benefits: ["שומנים בריאים", "שריפת שומן", "שובע"],
        image: "🌻"
    },
    {
        id: 53,
        name: "שייק מטבוליק סינדרום",
        category: "weight-loss",
        description: "שייק לתסמונת מטבולית והרדה במשקל",
        base: "תה ירוק",
        baseIcon: "🍵",
        calories: 90,
        weight: "300ml",
        overallValue: 8.5,
        ingredients: [
            { name: "תה ירוק", amount: "200ml" },
            { name: "כורכום", amount: "1 כף" },
            { name: "ג'ינג'ר", amount: "1 כף" },
            { name: "קינמון", amount: "1 כפית" },
            { name: "דבש", amount: "1 כף" }
        ],
        benefits: ["מטבוליזם", "נוגד דלקת", "איזון סוכר"],
        image: "🌿"
    },
    {
        id: 54,
        name: "שייק אינסולין בקרה",
        category: "weight-loss",
        description: "שייק לבקרת רמות אינסולין",
        base: "חלב שקדים",
        baseIcon: "🥛",
        calories: 115,
        weight: "320ml",
        overallValue: 8.3,
        ingredients: [
            { name: "חלב שקדים", amount: "250ml" },
            { name: "קינמון", amount: "1 כף" },
            { name: "כרום", amount: "1 כף" },
            { name: "אוכמניות", amount: "50g" },
            { name: "אגוזי מלך", amount: "4 יחידות" }
        ],
        benefits: ["בקרת אינסולין", "איזון סוכר", "שובע"],
        image: "📊"
    },
    {
        id: 55,
        name: "שייק פרה/פוסט אימון",
        category: "weight-loss",
        description: "שייק לפני או אחרי אימון לירידה במשקל",
        base: "מי קוקוס",
        baseIcon: "🥥",
        calories: 135,
        weight: "350ml",
        overallValue: 8.6,
        ingredients: [
            { name: "מי קוקוס", amount: "250ml" },
            { name: "בננה", amount: "1 יחידה" },
            { name: "אבקת חלבון", amount: "20g" },
            { name: "קפאין", amount: "1 כף" },
            { name: "קינמון", amount: "1 כפית" }
        ],
                 benefits: ["אימון", "שריפת שומן", "התאוששות"],
         image: "🏃‍♀️"
     },
     
     // שייקי חלבון נוספים
     {
         id: 56,
         name: "שייק חלבון טבעוני",
         category: "protein",
         description: "שייק חלבון מקורות צמחיים",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 220,
         weight: "350ml",
         overallValue: 8.8,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "אבקת חלבון צמחי", amount: "30g" },
             { name: "שקדים", amount: "10 יחידות" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["חלבון צמחי", "שמירת שריר", "צמחוני"],
         image: "🌱"
     },
     {
         id: 57,
         name: "שייק BCAA טבעי",
         category: "protein",
         description: "שייק עם חומצות אמינו מסועפות",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 180,
         weight: "300ml",
         overallValue: 8.6,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "חמאת בוטנים", amount: "2 כפות" },
             { name: "זרעי דלעת", amount: "2 כפות" },
             { name: "שמרי בירה", amount: "1 כף" },
             { name: "בננה", amount: "1 יחידה" }
         ],
         benefits: ["BCAA", "התאוששות", "בניית שריר"],
         image: "💪"
     },
     {
         id: 58,
         name: "שייק קזין לילה",
         category: "protein",
         description: "שייק חלבון לילה לבניית שריר",
         base: "חלב עיזים",
         baseIcon: "🐐",
         calories: 240,
         weight: "350ml",
         overallValue: 8.7,
         ingredients: [
             { name: "חלב עיזים", amount: "250ml" },
             { name: "גבינה קוטג'", amount: "100g" },
             { name: "שקדים", amount: "8 יחידות" },
             { name: "דבש", amount: "1 כף" },
             { name: "קינמון", amount: "1 כפית" }
         ],
         benefits: ["שחרור מושהה", "בניית שריר", "שינה"],
         image: "🌙"
     },
     {
         id: 59,
         name: "שייק אגוזי מלך חלבון",
         category: "protein",
         description: "שייק חלבון עם אגוזי מלך לבריאות המוח",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 290,
         weight: "380ml",
         overallValue: 8.9,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "חמאת אגוז מלך", amount: "2 כפות" },
             { name: "אבקת חלבון", amount: "25g" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["אומגה 3", "מוח בריא", "חלבון איכותי"],
         image: "🧠"
     },
     {
         id: 60,
         name: "שייק חלבון קוקוס",
         category: "protein",
         description: "שייק חלבון טרופי עם קוקוס",
         base: "חלב קוקוס",
         baseIcon: "🥥",
         calories: 260,
         weight: "350ml",
         overallValue: 8.5,
         ingredients: [
             { name: "חלב קוקוס", amount: "250ml" },
             { name: "אבקת חלבון קוקוס", amount: "30g" },
             { name: "קוקוס מגורד", amount: "2 כפות" },
             { name: "אננס", amount: "100g" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["MCT", "חלבון", "טעם טרופי"],
         image: "🏖️"
     },
     {
         id: 61,
         name: "שייק חלבון ביצים",
         category: "protein",
         description: "שייק חלבון עם חלבון ביצים",
         base: "חלב פרות",
         baseIcon: "🥛",
         calories: 270,
         weight: "350ml",
         overallValue: 8.8,
         ingredients: [
             { name: "חלב פרות", amount: "250ml" },
             { name: "אבקת חלבון ביצים", amount: "30g" },
             { name: "תותים", amount: "100g" },
             { name: "שיבולת שועל", amount: "2 כפות" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["חלבון מלא", "התאוששות", "אנרגיה"],
         image: "🥚"
     },
     {
         id: 62,
         name: "שייק חלבון שקדים",
         category: "protein",
         description: "שייק חלבון עם שקדים וחמאת שקדים",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 300,
         weight: "380ml",
         overallValue: 8.7,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "חמאת שקדים", amount: "2 כפות" },
             { name: "שקדים", amount: "12 יחידות" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "וניל", amount: "1 כפית" }
         ],
         benefits: ["ויטמין E", "שומנים בריאים", "חלבון"],
         image: "🌰"
     },
     {
         id: 63,
         name: "שייק חלבון גורמה",
         category: "protein",
         description: "שייק חלבון מיוחד עם טעמים מגוונים",
         base: "חלב עיזים",
         baseIcon: "🐐",
         calories: 285,
         weight: "370ml",
         overallValue: 8.9,
         ingredients: [
             { name: "חלב עיזים", amount: "250ml" },
             { name: "אבקת חלבון", amount: "30g" },
             { name: "קקאו", amount: "1 כף" },
             { name: "חמאת קשיו", amount: "1 כף" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["חלבון איכותי", "טעם מושלם", "אנרגיה"],
         image: "👨‍🍳"
     },
     {
         id: 64,
         name: "שייק חלבון רב-מקורות",
         category: "protein",
         description: "שייק חלבון ממקורות שונים",
         base: "חלב שיבולת שועל",
         baseIcon: "🥛",
         calories: 250,
         weight: "350ml",
         overallValue: 8.6,
         ingredients: [
             { name: "חלב שיבולת שועל", amount: "250ml" },
             { name: "אבקת חלבון", amount: "25g" },
             { name: "חמאת בוטנים", amount: "1 כף" },
             { name: "זרעי צ'יא", amount: "1 כף" },
             { name: "בננה", amount: "1 יחידה" }
         ],
         benefits: ["מגוון חלבונים", "סיבים", "שובע"],
         image: "🌾"
     },
     {
         id: 65,
         name: "שייק חלבון קינואה",
         category: "protein",
         description: "שייק חלבון עם קינואה מבושלת",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 210,
         weight: "350ml",
         overallValue: 8.4,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "קינואה מבושלת", amount: "1/2 כוס" },
             { name: "אבקת חלבון", amount: "20g" },
             { name: "תותים", amount: "100g" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["חלבון מלא", "קינואה", "אנרגיה"],
         image: "🌾"
     },
     {
         id: 66,
         name: "שייק חלבון הזן",
         category: "protein",
         description: "שייק חלבון עם חלבון הזן",
         base: "חלב פרות",
         baseIcon: "🥛",
         calories: 265,
         weight: "350ml",
         overallValue: 8.7,
         ingredients: [
             { name: "חלב פרות", amount: "250ml" },
             { name: "אבקת חלבון הזן", amount: "30g" },
             { name: "אוכמניות", amount: "100g" },
             { name: "דבש", amount: "1 כף" },
             { name: "קינמון", amount: "1 כפית" }
         ],
         benefits: ["חלבון מהיר", "התאוששות", "אנטי-אוקסידנטים"],
         image: "⚡"
     },
     {
         id: 67,
         name: "שייק חלבון סויה",
         category: "protein",
         description: "שייק חלבון עם חלבון סויה",
         base: "חלב סויה",
         baseIcon: "🥛",
         calories: 230,
         weight: "350ml",
         overallValue: 8.5,
         ingredients: [
             { name: "חלב סויה", amount: "250ml" },
             { name: "אבקת חלבון סויה", amount: "30g" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "חמאת בוטנים", amount: "1 כף" },
             { name: "וניל", amount: "1 כפית" }
         ],
         benefits: ["חלבון צמחי", "איזופלבונים", "לב בריא"],
         image: "🌱"
     },
     {
         id: 68,
         name: "שייק חלבון זרעים",
         category: "protein",
         description: "שייק חלבון עם תערובת זרעים",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 195,
         weight: "320ml",
         overallValue: 8.3,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "זרעי דלעת", amount: "2 כפות" },
             { name: "זרעי חמניות", amount: "2 כפות" },
             { name: "זרעי צ'יא", amount: "1 כף" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["חלבון טבעי", "מינרלים", "שומנים בריאים"],
         image: "🌱"
     },
     {
         id: 69,
         name: "שייק חלבון פוסט-וורקאוט",
         category: "protein",
         description: "שייק חלבון אחרי אימון",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 225,
         weight: "350ml",
         overallValue: 8.8,
         ingredients: [
             { name: "מי קוקוס", amount: "250ml" },
             { name: "אבקת חלבון", amount: "30g" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "דבש", amount: "1 כף" },
             { name: "אלקטרוליטים", amount: "1 כף" }
         ],
         benefits: ["התאוששות", "חלבון", "אלקטרוליטים"],
         image: "🏋️"
     },
     {
         id: 70,
         name: "שייק חלבון עתיר סיבים",
         category: "protein",
         description: "שייק חלבון עם סיבים לשובע",
         base: "חלב שיבולת שועל",
         baseIcon: "🥛",
         calories: 240,
         weight: "370ml",
         overallValue: 8.6,
         ingredients: [
             { name: "חלב שיבולת שועל", amount: "250ml" },
             { name: "אבקת חלבון", amount: "25g" },
             { name: "זרעי פשתן", amount: "2 כפות" },
             { name: "תפוח", amount: "1 יחידה" },
             { name: "קינמון", amount: "1 כפית" }
         ],
         benefits: ["חלבון", "סיבים", "שובע ממושך"],
         image: "🌾"
     },
     
     // שייקי אנרגיה נוספים
     {
         id: 71,
         name: "שייק קפאין טבעי",
         category: "energy",
         description: "שייק אנרגיה עם קפאין מקורות טבעיים",
         base: "קפה קר",
         baseIcon: "☕",
         calories: 150,
         weight: "300ml",
         overallValue: 8.7,
         ingredients: [
             { name: "קפה קר", amount: "200ml" },
             { name: "חלב שקדים", amount: "100ml" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "דבש", amount: "1 כף" },
             { name: "קינמון", amount: "1 כפית" }
         ],
         benefits: ["קפאין טבעי", "אנרגיה מהירה", "ריכוז"],
         image: "☕"
     },
     {
         id: 72,
         name: "שייק גואנה אנרגיה",
         category: "energy",
         description: "שייק אנרגיה עם גואנה טבעי",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 145,
         weight: "300ml",
         overallValue: 8.6,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "גואנה", amount: "1 כף" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "תמרים", amount: "2 יחידות" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["אנרגיה טבעית", "סיבולת", "התמקדות"],
         image: "🌿"
     },
     {
         id: 73,
         name: "שייק ויטמין B12",
         category: "energy",
         description: "שייק אנרגיה עם ויטמין B12",
         base: "חלב שיבולת שועל",
         baseIcon: "🥛",
         calories: 170,
         weight: "320ml",
         overallValue: 8.5,
         ingredients: [
             { name: "חלב שיבולת שועל", amount: "250ml" },
             { name: "שמרי בירה", amount: "2 כפות" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "אגוזי מלך", amount: "6 יחידות" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["ויטמין B12", "אנרגיה", "מערכת עצבים"],
         image: "⚡"
     },
     {
         id: 74,
         name: "שייק ג'ינסנג כוח",
         category: "energy",
         description: "שייק אנרגיה עם ג'ינסנג",
         base: "תה ירוק",
         baseIcon: "🍵",
         calories: 120,
         weight: "280ml",
         overallValue: 8.4,
         ingredients: [
             { name: "תה ירוק", amount: "200ml" },
             { name: "ג'ינסנג", amount: "1 כף" },
             { name: "דבש", amount: "1 כף" },
             { name: "לימון", amount: "1/2 יחידה" },
             { name: "ג'ינג'ר", amount: "1 כף" }
         ],
         benefits: ["ג'ינסנג", "אנרגיה", "התמקדות"],
         image: "🌿"
     },
     {
         id: 75,
         name: "שייק ספירולינה אנרגיה",
         category: "energy",
         description: "שייק אנרגיה עם ספירולינה",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 135,
         weight: "300ml",
         overallValue: 8.6,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "ספירולינה", amount: "1 כף" },
             { name: "אננס", amount: "100g" },
             { name: "מנגו", amount: "50g" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["סופרפוד", "אנרגיה נקייה", "ויטמינים"],
         image: "🌀"
     },
     {
         id: 76,
         name: "שייק מקה אנרגיה",
         category: "energy",
         description: "שייק אנרגיה עם מקה פרואנית",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 165,
         weight: "320ml",
         overallValue: 8.5,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "מקה", amount: "1 כף" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "קקאו", amount: "1 כף" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["מקה", "אנרגיה", "סיבולת"],
         image: "🏔️"
     },
     {
         id: 77,
         name: "שייק רודיולה אדפטוגן",
         category: "energy",
         description: "שייק אנרגיה עם רודיולה",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 125,
         weight: "280ml",
         overallValue: 8.3,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "רודיולה", amount: "1 כף" },
             { name: "תותים", amount: "100g" },
             { name: "דבש", amount: "1 כף" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["אדפטוגן", "התמודדות מתח", "אנרגיה"],
         image: "🌸"
     },
     {
         id: 78,
         name: "שייק קורדיצפס כוח",
         category: "energy",
         description: "שייק אנרגיה עם קורדיצפס",
         base: "חלב שיבולת שועל",
         baseIcon: "🥛",
         calories: 180,
         weight: "350ml",
         overallValue: 8.7,
         ingredients: [
             { name: "חלב שיבולת שועל", amount: "250ml" },
             { name: "קורדיצפס", amount: "1 כף" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "אגוזי מלך", amount: "6 יחידות" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["קורדיצפס", "סיבולת", "אנרגיה"],
         image: "🍄"
     },
     {
         id: 79,
         name: "שייק שוקולד אנרגיה",
         category: "energy",
         description: "שייק אנרגיה עם קקאו טבעי",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 190,
         weight: "340ml",
         overallValue: 8.6,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "קקאו", amount: "2 כפות" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "חמאת בוטנים", amount: "1 כף" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["קקאו", "אנרגיה", "מצב רוח"],
         image: "🍫"
     },
     {
         id: 80,
         name: "שייק אשוגנדה הרגעה",
         category: "energy",
         description: "שייק אנרגיה מאוזנת עם אשוגנדה",
         base: "חלב עיזים",
         baseIcon: "🐐",
         calories: 155,
         weight: "320ml",
         overallValue: 8.4,
         ingredients: [
             { name: "חלב עיזים", amount: "250ml" },
             { name: "אשוגנדה", amount: "1 כף" },
             { name: "תמרים", amount: "3 יחידות" },
             { name: "קינמון", amount: "1 כפית" },
             { name: "וניל", amount: "1 כפית" }
         ],
         benefits: ["אדפטוגן", "אנרגיה מאוזנת", "מתח"],
         image: "🧘"
     },
     {
         id: 81,
         name: "שייק תאורין פוקוס",
         category: "energy",
         description: "שייק אנרגיה עם תאורין לריכוז",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 140,
         weight: "300ml",
         overallValue: 8.5,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "תאורין", amount: "1 כף" },
             { name: "אוכמניות", amount: "100g" },
             { name: "גוג'י ברי", amount: "2 כפות" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["תאורין", "ריכוז", "אנרגיה"],
         image: "🎯"
     },
     {
         id: 82,
         name: "שייק L-קרניטין אנרגיה",
         category: "energy",
         description: "שייק אנרגיה עם L-קרניטין",
         base: "תה ירוק",
         baseIcon: "🍵",
         calories: 130,
         weight: "280ml",
         overallValue: 8.4,
         ingredients: [
             { name: "תה ירוק", amount: "200ml" },
             { name: "L-קרניטין", amount: "1 כף" },
             { name: "לימון", amount: "1 יחידה" },
             { name: "ג'ינג'ר", amount: "1 כף" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["L-קרניטין", "שריפת שומן", "אנרגיה"],
         image: "🔋"
     },
     {
         id: 83,
         name: "שייק כלורלה ירוק",
         category: "energy",
         description: "שייק אנרגיה ירוק עם כלורלה",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 110,
         weight: "280ml",
         overallValue: 8.3,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "כלורלה", amount: "1 כף" },
             { name: "תפוח ירוק", amount: "1 יחידה" },
             { name: "מלפפון", amount: "1 יחידה" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["כלורלה", "ניקוי", "אנרגיה"],
         image: "🌿"
     },
     {
         id: 84,
         name: "שייק קואנזים Q10",
         category: "energy",
         description: "שייק אנרגיה עם קואנזים Q10",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 175,
         weight: "330ml",
         overallValue: 8.6,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "קואנזים Q10", amount: "1 כף" },
             { name: "אוכמניות", amount: "100g" },
             { name: "שקדים", amount: "8 יחידות" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["קואנזים Q10", "אנרגיה תאית", "לב"],
         image: "⚡"
     },
     {
         id: 85,
         name: "שייק אנרגיה אקזוטי",
         category: "energy",
         description: "שייק אנרגיה עם פירות אקזוטיים",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 160,
         weight: "350ml",
         overallValue: 8.5,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "פסיפלורה", amount: "100g" },
             { name: "מנגו", amount: "100g" },
             { name: "דרגון פרוט", amount: "50g" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["פירות אקזוטיים", "אנרגיה", "ויטמינים"],
         image: "🌺"
     },
     
     // שייקי יופי ועור נוספים
     {
         id: 86,
         name: "שייק היאלורון טבעי",
         category: "beauty",
         description: "שייק לחות עור עם היאלורון טבעי",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 170,
         weight: "320ml",
         overallValue: 8.9,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "קולגן", amount: "1 כף" },
             { name: "אבוקדו", amount: "1/2 יחידה" },
             { name: "אוכמניות", amount: "100g" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["לחות עור", "אנטי-אייג'ינג", "עור חלק"],
         image: "💧"
     },
     {
         id: 87,
         name: "שייק ביוטין שיער",
         category: "beauty",
         description: "שייק לחיזוק השיער והציפורניים",
         base: "חלב עיזים",
         baseIcon: "🐐",
         calories: 185,
         weight: "340ml",
         overallValue: 8.7,
         ingredients: [
             { name: "חלב עיזים", amount: "250ml" },
             { name: "ביוטין", amount: "1 כף" },
             { name: "שמרי בירה", amount: "2 כפות" },
             { name: "בננה", amount: "1 יחידה" },
             { name: "אגוזי מלך", amount: "6 יחידות" }
         ],
         benefits: ["ביוטין", "שיער חזק", "ציפורניים"],
         image: "💇‍♀️"
     },
     {
         id: 88,
         name: "שייק זינק עור",
         category: "beauty",
         description: "שייק לטיפול בעור בעיות עם זינק",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 140,
         weight: "300ml",
         overallValue: 8.6,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "זרעי דלעת", amount: "3 כפות" },
             { name: "זינק", amount: "1 כף" },
             { name: "אוכמניות", amount: "100g" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["זינק", "עור בריא", "אנטי דלקתי"],
         image: "✨"
     },
     {
         id: 89,
         name: "שייק סילניום זוהר",
         category: "beauty",
         description: "שייק לעור זוהר עם סילניום",
         base: "מיץ תפוזים",
         baseIcon: "🧃",
         calories: 155,
         weight: "320ml",
         overallValue: 8.5,
         ingredients: [
             { name: "מיץ תפוזים", amount: "200ml" },
             { name: "אגוז ברזיל", amount: "3 יחידות" },
             { name: "סילניום", amount: "1 כף" },
             { name: "מנגו", amount: "100g" },
             { name: "ג'ינג'ר", amount: "1 כף" }
         ],
         benefits: ["סילניום", "נוגד חמצון", "עור זוהר"],
         image: "🌟"
     },
     {
         id: 90,
         name: "שייק אסטקסנטין",
         category: "beauty",
         description: "שייק נוגד הזדקנות עם אסטקסנטין",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 180,
         weight: "330ml",
         overallValue: 8.8,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "אסטקסנטין", amount: "1 כף" },
             { name: "תותים", amount: "100g" },
             { name: "דובדבנים", amount: "50g" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["אסטקסנטין", "נוגד הזדקנות", "עור צעיר"],
         image: "🔆"
     },
     {
         id: 91,
         name: "שייק רזברטרול",
         category: "beauty",
         description: "שייק אנטי-אייג'ינג עם רזברטרול",
         base: "מיץ רימון",
         baseIcon: "🧃",
         calories: 165,
         weight: "320ml",
         overallValue: 8.9,
         ingredients: [
             { name: "מיץ רימון", amount: "200ml" },
             { name: "רזברטרול", amount: "1 כף" },
             { name: "אוכמניות", amount: "100g" },
             { name: "דובדבנים", amount: "50g" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["רזברטרול", "אנטי-אייג'ינג", "לב בריא"],
         image: "🍷"
     },
     {
         id: 92,
         name: "שייק אלפא-ליפואיק",
         category: "beauty",
         description: "שייק לעור צעיר עם חומצה אלפא-ליפואיק",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 135,
         weight: "300ml",
         overallValue: 8.4,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "אלפא-ליפואיק", amount: "1 כף" },
             { name: "תות", amount: "100g" },
             { name: "אבוקדו", amount: "1/4 יחידה" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["אלפא-ליפואיק", "נוגד חמצון", "עור בריא"],
         image: "🧪"
     },
     {
         id: 93,
         name: "שייק גלוטתיון",
         category: "beauty",
         description: "שייק לעור בהיר עם גלוטתיון",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 160,
         weight: "320ml",
         overallValue: 8.7,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "גלוטתיון", amount: "1 כף" },
             { name: "קיווי", amount: "2 יחידות" },
             { name: "דבש", amount: "1 כף" },
             { name: "וניל", amount: "1 כפית" }
         ],
         benefits: ["גלוטתיון", "ניקוי רעלים", "עור בהיר"],
         image: "🌙"
     },
     {
         id: 94,
         name: "שייק אלסטין",
         category: "beauty",
         description: "שייק לאלסטיות עור עם אלסטין",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 145,
         weight: "310ml",
         overallValue: 8.6,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "אלסטין", amount: "1 כף" },
             { name: "אשכולית", amount: "1 יחידה" },
             { name: "דבש", amount: "1 כף" },
             { name: "מנטה", amount: "6 עלים" }
         ],
         benefits: ["אלסטין", "עור גמיש", "חיוניות"],
         image: "🤸‍♀️"
     },
     {
         id: 95,
         name: "שייק פראביוטיק עור",
         category: "beauty",
         description: "שייק לבריאות עור עם פראביוטיק",
         base: "קפיר",
         baseIcon: "🥛",
         calories: 175,
         weight: "340ml",
         overallValue: 8.5,
         ingredients: [
             { name: "קפיר", amount: "250ml" },
             { name: "פראביוטיק", amount: "1 כף" },
             { name: "תותים", amount: "100g" },
             { name: "דבש", amount: "1 כף" },
             { name: "קינמון", amount: "1 כפית" }
         ],
         benefits: ["פראביוטיק", "עור בריא", "מערכת חיסון"],
         image: "🦠"
     },
     {
         id: 96,
         name: "שייק MSM גופרית",
         category: "beauty",
         description: "שייק לעור חלק עם MSM",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 120,
         weight: "280ml",
         overallValue: 8.3,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "MSM", amount: "1 כף" },
             { name: "מלפפון", amount: "1 יחידה" },
             { name: "מנטה", amount: "10 עלים" },
             { name: "לימון", amount: "1/2 יחידה" }
         ],
         benefits: ["MSM", "עור חלק", "נוגד דלקת"],
         image: "💎"
     },
     {
         id: 97,
         name: "שייק שמן זית יופי",
         category: "beauty",
         description: "שייק לעור רך עם שמן זית",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 190,
         weight: "330ml",
         overallValue: 8.6,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "שמן זית", amount: "1 כף" },
             { name: "אבוקדו", amount: "1/2 יחידה" },
             { name: "דבש", amount: "1 כף" },
             { name: "וניל", amount: "1 כפית" }
         ],
         benefits: ["שמן זית", "עור רך", "לחות"],
         image: "🫒"
     },
     {
         id: 98,
         name: "שייק אצות ספירולינה",
         category: "beauty",
         description: "שייק לעור בריא עם אצות",
         base: "מי קוקוס",
         baseIcon: "🥥",
         calories: 110,
         weight: "280ml",
         overallValue: 8.4,
         ingredients: [
             { name: "מי קוקוס", amount: "200ml" },
             { name: "ספירולינה", amount: "1 כף" },
             { name: "אננס", amount: "100g" },
             { name: "לימון", amount: "1/2 יחידה" },
             { name: "מנטה", amount: "6 עלים" }
         ],
         benefits: ["ספירולינה", "מינרלים", "עור חי"],
         image: "🌊"
     },
     {
         id: 99,
         name: "שייק שמן קוקוס יופי",
         category: "beauty",
         description: "שייק לעור זוהר עם שמן קוקוס",
         base: "חלב קוקוס",
         baseIcon: "🥥",
         calories: 200,
         weight: "340ml",
         overallValue: 8.7,
         ingredients: [
             { name: "חלב קוקוס", amount: "250ml" },
             { name: "שמן קוקוס", amount: "1 כף" },
             { name: "מנגו", amount: "100g" },
             { name: "דבש", amount: "1 כף" },
             { name: "וניל", amount: "1 כפית" }
         ],
         benefits: ["שמן קוקוס", "עור זוהר", "אנטי-אייג'ינג"],
         image: "🥥"
     },
     {
         id: 100,
         name: "שייק אמינו יופי",
         category: "beauty",
         description: "שייק לעור צעיר עם אמינו חומצות",
         base: "חלב שקדים",
         baseIcon: "🥛",
         calories: 170,
         weight: "320ml",
         overallValue: 8.8,
         ingredients: [
             { name: "חלב שקדים", amount: "250ml" },
             { name: "אמינו חומצות", amount: "1 כף" },
             { name: "תותים", amount: "100g" },
             { name: "שקדים", amount: "8 יחידות" },
             { name: "דבש", amount: "1 כף" }
         ],
         benefits: ["אמינו חומצות", "עור צעיר", "חיוניות"],
         image: "🧬"
     }
 ];

// משתני מצב האפליקציה
let currentFilter = 'all';
let currentShakes = shakesData;

// פונקציה לחישוב ערכים תזונתיים מרכיבים
function calculateNutrition(ingredients) {
    let totalNutrition = {
        protein: 0,
        carbs: 0,
        fat: 0,
        sugar: 0,
        fiber: 0,
        saturatedFat: 0,
        unsaturatedFat: 0,
        sodium: 0,
        potassium: 0,
        vitaminC: 0,
        calcium: 0,
        iron: 0,
        vitaminA: 0,
        vitaminK: 0,
        folate: 0,
        magnesium: 0
    };

    // מאגר ערכים תזונתיים בסיסי לרכיבים נפוצים
    const nutritionData = {
        "בננה": { protein: 1.1, carbs: 22.8, fat: 0.3, sugar: 12.2, fiber: 2.6, sodium: 1, potassium: 358, vitaminC: 8.7, calcium: 5, iron: 0.3, vitaminA: 3, magnesium: 27, folate: 20 },
        "תפוח": { protein: 0.3, carbs: 13.8, fat: 0.2, sugar: 10.4, fiber: 2.4, sodium: 1, potassium: 107, vitaminC: 4.6, calcium: 6, iron: 0.1, vitaminA: 3, magnesium: 5, folate: 3 },
        "תפוח ירוק": { protein: 0.3, carbs: 13.8, fat: 0.2, sugar: 10.4, fiber: 2.4, sodium: 1, potassium: 107, vitaminC: 4.6, calcium: 6, iron: 0.1, vitaminA: 3, magnesium: 5, folate: 3 },
        "תרד": { protein: 2.9, carbs: 3.6, fat: 0.4, sugar: 0.4, fiber: 2.2, sodium: 79, potassium: 558, vitaminC: 28.1, calcium: 99, iron: 2.7, vitaminA: 469, vitaminK: 483, magnesium: 79, folate: 194 },
        "תרד טרי": { protein: 2.9, carbs: 3.6, fat: 0.4, sugar: 0.4, fiber: 2.2, sodium: 79, potassium: 558, vitaminC: 28.1, calcium: 99, iron: 2.7, vitaminA: 469, vitaminK: 483, magnesium: 79, folate: 194 },
        "קייל": { protein: 4.3, carbs: 8.8, fat: 0.9, sugar: 2.3, fiber: 3.6, sodium: 38, potassium: 491, vitaminC: 120, calcium: 150, iron: 1.5, vitaminA: 500, vitaminK: 817, magnesium: 47, folate: 29 },
        "מלפפון": { protein: 0.7, carbs: 4.0, fat: 0.1, sugar: 1.7, fiber: 0.5, sodium: 2, potassium: 147, vitaminC: 2.8, calcium: 16, iron: 0.3, vitaminA: 5, magnesium: 13, folate: 7 },
        "תותים": { protein: 0.7, carbs: 7.7, fat: 0.3, sugar: 4.9, fiber: 2.0, sodium: 1, potassium: 153, vitaminC: 58.8, calcium: 16, iron: 0.4, vitaminA: 1, magnesium: 13, folate: 24 },
        "אוכמניות": { protein: 0.7, carbs: 14.5, fat: 0.3, sugar: 10.0, fiber: 2.4, sodium: 1, potassium: 77, vitaminC: 9.7, calcium: 6, iron: 0.3, vitaminA: 3, magnesium: 6, folate: 6 },
        "דבש": { protein: 0.3, carbs: 17.1, fat: 0.0, sugar: 16.3, fiber: 0.0, sodium: 1, potassium: 11, vitaminC: 0.5, calcium: 1, iron: 0.1, vitaminA: 0, magnesium: 1, folate: 0 },
        "מי קוקוס": { protein: 0.7, carbs: 3.7, fat: 0.2, sugar: 2.6, fiber: 1.1, sodium: 105, potassium: 250, vitaminC: 2.4, calcium: 24, iron: 0.3, vitaminA: 0, magnesium: 25, folate: 3 },
        "לימון": { protein: 1.1, carbs: 9.3, fat: 0.3, sugar: 1.5, fiber: 2.8, sodium: 2, potassium: 80, vitaminC: 53, calcium: 26, iron: 0.6, vitaminA: 1, magnesium: 8, folate: 6 },
        "חלב פרות": { protein: 3.4, carbs: 5.0, fat: 1.0, sugar: 5.0, fiber: 0.0, sodium: 40, potassium: 150, vitaminC: 0.0, calcium: 113, iron: 0.0, vitaminA: 28, magnesium: 10, folate: 5 },
        "חלב עיזים": { protein: 3.6, carbs: 4.5, fat: 4.1, sugar: 4.5, fiber: 0.0, sodium: 50, potassium: 204, vitaminC: 1.3, calcium: 134, iron: 0.1, vitaminA: 57, magnesium: 14, folate: 1 },
        "חלב שקדים": { protein: 0.6, carbs: 1.5, fat: 1.2, sugar: 0.6, fiber: 0.4, sodium: 150, potassium: 180, vitaminC: 0.0, calcium: 188, iron: 0.4, vitaminA: 0, magnesium: 5, folate: 0 },
        "ג'ינג'ר": { protein: 1.8, carbs: 18.0, fat: 0.8, sugar: 1.7, fiber: 2.0, sodium: 13, potassium: 415, vitaminC: 5.0, calcium: 16, iron: 0.6, vitaminA: 0, magnesium: 43, folate: 11 },
        "קינמון": { protein: 4.0, carbs: 81.0, fat: 1.2, sugar: 2.2, fiber: 53.0, sodium: 10, potassium: 431, vitaminC: 3.8, calcium: 1002, iron: 8.3, vitaminA: 15, magnesium: 60, folate: 6 },
        "מיץ תפוזים": { protein: 0.7, carbs: 10.4, fat: 0.2, sugar: 8.4, fiber: 0.2, sodium: 1, potassium: 200, vitaminC: 50, calcium: 11, iron: 0.2, vitaminA: 8, magnesium: 11, folate: 25 },
        "מיץ רימון": { protein: 0.2, carbs: 32.7, fat: 0.3, sugar: 31.0, fiber: 0.1, sodium: 7, potassium: 214, vitaminC: 0.1, calcium: 11, iron: 0.1, vitaminA: 0, magnesium: 12, folate: 4 },
        "מיץ אוכמניות": { protein: 0.1, carbs: 11.4, fat: 0.1, sugar: 9.7, fiber: 0.2, sodium: 1, potassium: 77, vitaminC: 9.7, calcium: 6, iron: 0.3, vitaminA: 3, magnesium: 6, folate: 6 },
        "מיץ דובדבנים": { protein: 0.7, carbs: 12.0, fat: 0.3, sugar: 10.0, fiber: 0.5, sodium: 4, potassium: 180, vitaminC: 7, calcium: 15, iron: 0.4, vitaminA: 64, magnesium: 9, folate: 4 },
        "מיץ אננס": { protein: 0.5, carbs: 13.1, fat: 0.1, sugar: 9.9, fiber: 1.4, sodium: 1, potassium: 109, vitaminC: 47.8, calcium: 13, iron: 0.3, vitaminA: 3, magnesium: 12, folate: 18 },
        "מיץ ביט": { protein: 1.6, carbs: 9.6, fat: 0.2, sugar: 6.8, fiber: 2.8, sodium: 78, potassium: 325, vitaminC: 4.9, calcium: 16, iron: 0.8, vitaminA: 2, magnesium: 23, folate: 109 },
        "מנגו": { protein: 0.8, carbs: 15.0, fat: 0.4, sugar: 13.7, fiber: 1.6, sodium: 1, potassium: 168, vitaminC: 36.4, calcium: 11, iron: 0.2, vitaminA: 54, magnesium: 10, folate: 43 },
        "אננס": { protein: 0.5, carbs: 13.1, fat: 0.1, sugar: 9.9, fiber: 1.4, sodium: 1, potassium: 109, vitaminC: 47.8, calcium: 13, iron: 0.3, vitaminA: 3, magnesium: 12, folate: 18 },
        "קיווי": { protein: 1.1, carbs: 14.7, fat: 0.5, sugar: 9.0, fiber: 3.0, sodium: 3, potassium: 312, vitaminC: 92.7, calcium: 34, iron: 0.3, vitaminA: 4, magnesium: 17, folate: 25 },
        "אבוקדו": { protein: 2.0, carbs: 8.5, fat: 14.7, sugar: 0.7, fiber: 6.7, sodium: 7, potassium: 485, vitaminC: 10, calcium: 12, iron: 0.6, vitaminA: 7, magnesium: 29, folate: 81 },
        "אוכמניות": { protein: 0.7, carbs: 14.5, fat: 0.3, sugar: 10.0, fiber: 2.4, sodium: 1, potassium: 77, vitaminC: 9.7, calcium: 6, iron: 0.3, vitaminA: 3, magnesium: 6, folate: 6 },
        "דובדבנים": { protein: 1.1, carbs: 16.0, fat: 0.2, sugar: 12.8, fiber: 2.1, sodium: 0, potassium: 222, vitaminC: 7, calcium: 13, iron: 0.4, vitaminA: 64, magnesium: 11, folate: 4 },
        "אגוזי מלך": { protein: 15.0, carbs: 14.0, fat: 65.0, sugar: 2.6, fiber: 6.7, sodium: 2, potassium: 441, vitaminC: 1.3, calcium: 98, iron: 2.9, vitaminA: 1, magnesium: 158, folate: 98 },
        "שקדים": { protein: 21.0, carbs: 22.0, fat: 50.0, sugar: 4.4, fiber: 12.0, sodium: 1, potassium: 733, vitaminC: 0, calcium: 269, iron: 3.7, vitaminA: 0, magnesium: 270, folate: 44 },
        "זרעי צ'יא": { protein: 17.0, carbs: 42.0, fat: 31.0, sugar: 0.0, fiber: 34.0, sodium: 16, potassium: 407, vitaminC: 1.6, calcium: 631, iron: 7.7, vitaminA: 15, magnesium: 335, folate: 49 },
        "זרעי פשתן": { protein: 18.0, carbs: 29.0, fat: 42.0, sugar: 1.5, fiber: 27.0, sodium: 30, potassium: 813, vitaminC: 0.6, calcium: 255, iron: 5.7, vitaminA: 0, magnesium: 392, folate: 87 },
        "זרעי חמניות": { protein: 21.0, carbs: 20.0, fat: 51.0, sugar: 2.6, fiber: 8.6, sodium: 9, potassium: 645, vitaminC: 1.4, calcium: 78, iron: 5.2, vitaminA: 5, magnesium: 325, folate: 227 },
        "זרעי דלעת": { protein: 19.0, carbs: 54.0, fat: 49.0, sugar: 1.4, fiber: 18.0, sodium: 18, potassium: 919, vitaminC: 1.9, calcium: 55, iron: 3.3, vitaminA: 16, magnesium: 262, folate: 58 },
        "חמאת בוטנים": { protein: 25.8, carbs: 20.0, fat: 50.0, sugar: 9.2, fiber: 8.0, sodium: 17, potassium: 649, vitaminC: 0, calcium: 92, iron: 4.6, vitaminA: 0, magnesium: 154, folate: 240 },
        "חמאת שקדים": { protein: 21.0, carbs: 19.0, fat: 55.0, sugar: 4.4, fiber: 10.0, sodium: 7, potassium: 458, vitaminC: 0, calcium: 347, iron: 3.9, vitaminA: 0, magnesium: 279, folate: 63 },
        "חמאת קשיו": { protein: 18.0, carbs: 30.0, fat: 46.0, sugar: 6.0, fiber: 3.0, sodium: 18, potassium: 546, vitaminC: 0.5, calcium: 37, iron: 6.7, vitaminA: 0, magnesium: 292, folate: 25 },
        "שיבולת שועל": { protein: 16.9, carbs: 66.3, fat: 6.9, sugar: 0.0, fiber: 10.6, sodium: 2, potassium: 429, vitaminC: 0, calcium: 54, iron: 4.7, vitaminA: 0, magnesium: 177, folate: 56 },
        "ספירולינה": { protein: 57.5, carbs: 23.9, fat: 7.7, sugar: 3.1, fiber: 3.6, sodium: 1048, potassium: 1363, vitaminC: 10.1, calcium: 120, iron: 28.5, vitaminA: 570, magnesium: 195, folate: 94 },
        "כלורלה": { protein: 45.0, carbs: 25.0, fat: 20.0, sugar: 0.0, fiber: 18.0, sodium: 48, potassium: 1047, vitaminC: 10.4, calcium: 221, iron: 130, vitaminA: 51300, magnesium: 315, folate: 94 },
        "אבקת חלבון": { protein: 80.0, carbs: 5.0, fat: 2.0, sugar: 2.0, fiber: 0.0, sodium: 50, potassium: 150, vitaminC: 0, calcium: 100, iron: 0.5, vitaminA: 0, magnesium: 25, folate: 0 },
        "אבקת חלבון וניל": { protein: 80.0, carbs: 5.0, fat: 2.0, sugar: 2.0, fiber: 0.0, sodium: 50, potassium: 150, vitaminC: 0, calcium: 100, iron: 0.5, vitaminA: 0, magnesium: 25, folate: 0 },
        "אבקת חלבון שוקולד": { protein: 76.0, carbs: 8.0, fat: 3.0, sugar: 4.0, fiber: 2.0, sodium: 60, potassium: 200, vitaminC: 0, calcium: 120, iron: 1.0, vitaminA: 0, magnesium: 50, folate: 0 },
        "אבקת חלבון צמחי": { protein: 70.0, carbs: 12.0, fat: 4.0, sugar: 2.0, fiber: 5.0, sodium: 400, potassium: 350, vitaminC: 0, calcium: 150, iron: 5.0, vitaminA: 0, magnesium: 100, folate: 50 },
        "טחינה": { protein: 18.0, carbs: 21.0, fat: 54.0, sugar: 0.3, fiber: 9.0, sodium: 115, potassium: 414, vitaminC: 0, calcium: 426, iron: 4.2, vitaminA: 0, magnesium: 95, folate: 98 },
        "חלווה": { protein: 12.9, carbs: 54.0, fat: 25.0, sugar: 50.0, fiber: 9.9, sodium: 54, potassium: 347, vitaminC: 0, calcium: 85, iron: 3.0, vitaminA: 0, magnesium: 70, folate: 57 },
        "סילאן": { protein: 0.7, carbs: 76.0, fat: 0.4, sugar: 73.0, fiber: 0.6, sodium: 11, potassium: 1162, vitaminC: 0.7, calcium: 81, iron: 0.9, vitaminA: 0, magnesium: 17, folate: 3 },
        "תמרים": { protein: 1.8, carbs: 75.0, fat: 0.2, sugar: 66.5, fiber: 6.7, sodium: 1, potassium: 696, vitaminC: 0.7, calcium: 64, iron: 0.9, vitaminA: 7, magnesium: 54, folate: 15 },
        "מנטה": { protein: 3.8, carbs: 14.9, fat: 0.9, sugar: 0.0, fiber: 8.0, sodium: 31, potassium: 569, vitaminC: 31.8, calcium: 243, iron: 5.1, vitaminA: 212, magnesium: 80, folate: 114 },
        "מנטה טרי": { protein: 3.8, carbs: 14.9, fat: 0.9, sugar: 0.0, fiber: 8.0, sodium: 31, potassium: 569, vitaminC: 31.8, calcium: 243, iron: 5.1, vitaminA: 212, magnesium: 80, folate: 114 },
        "וניל": { protein: 0.1, carbs: 12.7, fat: 0.1, sugar: 12.7, fiber: 0.0, sodium: 9, potassium: 148, vitaminC: 0, calcium: 11, iron: 0.1, vitaminA: 0, magnesium: 12, folate: 0 },
        "קקאו": { protein: 19.6, carbs: 57.9, fat: 13.7, sugar: 1.8, fiber: 37.0, sodium: 21, potassium: 1524, vitaminC: 0, calcium: 128, iron: 13.9, vitaminA: 0, magnesium: 499, folate: 32 },
        "כורכום": { protein: 7.8, carbs: 65.0, fat: 10.0, sugar: 3.2, fiber: 21.0, sodium: 38, potassium: 2525, vitaminC: 25.9, calcium: 183, iron: 41.4, vitaminA: 0, magnesium: 193, folate: 7 },
        "תה ירוק": { protein: 0.0, carbs: 0.0, fat: 0.0, sugar: 0.0, fiber: 0.0, sodium: 1, potassium: 8, vitaminC: 0, calcium: 0, iron: 0.0, vitaminA: 0, magnesium: 1, folate: 0 },
        "קפה קר": { protein: 0.1, carbs: 0.0, fat: 0.0, sugar: 0.0, fiber: 0.0, sodium: 5, potassium: 49, vitaminC: 0, calcium: 2, iron: 0.0, vitaminA: 0, magnesium: 3, folate: 0 },
        "עלים": { protein: 0, carbs: 0, fat: 0, sugar: 0, fiber: 0, sodium: 0, potassium: 0, vitaminC: 0, calcium: 0, iron: 0, vitaminA: 0, magnesium: 0, folate: 0 }
    };

    ingredients.forEach(ingredient => {
        const data = nutritionData[ingredient.name];
        if (data) {
            // חישוב כמות לפי גודל המנה
            let multiplier = 1;
            if (ingredient.amount.includes('g')) {
                multiplier = parseInt(ingredient.amount) / 100;
            } else if (ingredient.amount.includes('יחידה')) {
                multiplier = parseInt(ingredient.amount) || 1;
            } else if (ingredient.amount.includes('כף')) {
                multiplier = (parseInt(ingredient.amount) || 1) * 0.15;
            } else if (ingredient.amount.includes('כפית')) {
                multiplier = (parseInt(ingredient.amount) || 1) * 0.05;
            } else if (ingredient.amount.includes('כוס')) {
                multiplier = (parseInt(ingredient.amount) || 1) * 2.4;
            } else if (ingredient.amount.includes('ml')) {
                multiplier = parseInt(ingredient.amount) / 100;
            }

            // הוספת הערכים
            Object.keys(data).forEach(key => {
                if (totalNutrition[key] !== undefined) {
                    totalNutrition[key] += data[key] * multiplier;
                }
            });
        }
    });

    // חישוב שומנים רוויים ובלתי רוויים
    totalNutrition.saturatedFat = totalNutrition.fat * 0.3;
    totalNutrition.unsaturatedFat = totalNutrition.fat * 0.7;

    // עיגול הערכים
    Object.keys(totalNutrition).forEach(key => {
        totalNutrition[key] = Math.round(totalNutrition[key] * 10) / 10;
    });

    return totalNutrition;
}

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
    
    // חישוב מידע תזונתי דינאמי
    const nutrition = calculateNutrition(shake.ingredients);
    
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

        <div class="nutrition-panel">
            <h3>📊 מידע תזונתי מפורט</h3>
            <div class="nutrition-grid">
                <div class="nutrition-section">
                    <h4>💪 מקרו-נוטריינטים</h4>
                    <div class="nutrition-item">
                        <span class="nutrition-label">חלבון:</span>
                        <span class="nutrition-value">${nutrition.protein}g</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">פחמימות:</span>
                        <span class="nutrition-value">${nutrition.carbs}g</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">סוכרים:</span>
                        <span class="nutrition-value">${nutrition.sugar}g</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">שומן כללי:</span>
                        <span class="nutrition-value">${nutrition.fat}g</span>
                    </div>
                    <div class="nutrition-item indent">
                        <span class="nutrition-label">שומן רווי:</span>
                        <span class="nutrition-value">${nutrition.saturatedFat}g</span>
                    </div>
                    <div class="nutrition-item indent">
                        <span class="nutrition-label">שומן בלתי רווי:</span>
                        <span class="nutrition-value">${nutrition.unsaturatedFat}g</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">סיבים תזונתיים:</span>
                        <span class="nutrition-value">${nutrition.fiber}g</span>
                    </div>
                </div>

                <div class="nutrition-section">
                    <h4>🧪 מינרלים (מג')</h4>
                    <div class="nutrition-item">
                        <span class="nutrition-label">נתרן:</span>
                        <span class="nutrition-value">${nutrition.sodium}mg</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">אשלגן:</span>
                        <span class="nutrition-value">${nutrition.potassium}mg</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">סידן:</span>
                        <span class="nutrition-value">${nutrition.calcium}mg</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">ברזל:</span>
                        <span class="nutrition-value">${nutrition.iron}mg</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">מגנזיום:</span>
                        <span class="nutrition-value">${nutrition.magnesium}mg</span>
                    </div>
                </div>

                <div class="nutrition-section">
                    <h4>🌟 ויטמינים</h4>
                    <div class="nutrition-item">
                        <span class="nutrition-label">ויטמין C:</span>
                        <span class="nutrition-value">${nutrition.vitaminC}mg</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">ויטמין A:</span>
                        <span class="nutrition-value">${nutrition.vitaminA}μg</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">ויטמין K:</span>
                        <span class="nutrition-value">${nutrition.vitaminK}μg</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-label">חומצה פולית:</span>
                        <span class="nutrition-value">${nutrition.folate}μg</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="ingredients-section">
            <h4>🥗 רכיבים:</h4>
            <ul class="ingredients-list">
                ${shake.ingredients.map(ingredient => 
                    `<li><span>${ingredient.name}</span><span>${ingredient.amount}</span></li>`
                ).join('')}
            </ul>
        </div>
        
        <div class="benefits-section">
            <h4>✨ יתרונות:</h4>
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
    // בדיקת הסכמה משפטית
    checkLegalAgreement();
    
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

// בדיקת הסכמה משפטית
function checkLegalAgreement() {
    const hasAgreed = localStorage.getItem('legalAgreement');
    if (!hasAgreed) {
        document.getElementById('legalWarningModal').style.display = 'block';
        
        // הוספת אירוע לצ'קבוקס
        const checkbox = document.getElementById('legalAgreement');
        const acceptBtn = document.querySelector('.warning-btn.accept');
        
        checkbox.addEventListener('change', function() {
            acceptBtn.disabled = !this.checked;
        });
    }
}

function acceptLegalTerms() {
    const checkbox = document.getElementById('legalAgreement');
    if (checkbox.checked) {
        localStorage.setItem('legalAgreement', 'true');
        document.getElementById('legalWarningModal').style.display = 'none';
    }
}

function declineLegalTerms() {
    if (confirm('האם אתה בטוח שאינך מסכים לתנאים? האפליקציה תיסגר.')) {
        window.close();
        // אם לא ניתן לסגור, הפנה לדף ריק
        document.body.innerHTML = `
            <div style="text-align: center; padding: 2rem; font-family: Arial, sans-serif;">
                <h2>שימוש באפליקציה הופסק</h2>
                <p>בחרת שלא להסכים לתנאים המשפטיים.</p>
                <p>לשימוש באפליקציה נדרשת הסכמה מלאה לתנאים.</p>
                <button onclick="location.reload()" style="padding: 0.5rem 1rem; margin-top: 1rem;">חזור לדף הבית</button>
            </div>
        `;
    }
}

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
    
    /* Legal Warning Modal */
    .legal-warning-modal {
        max-width: 600px;
        background: #fff;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .legal-warning-content {
        padding: 2rem;
        text-align: center;
    }
    
    .warning-icon {
        font-size: 4rem;
        color: #ff6b6b;
        margin-bottom: 1rem;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .legal-warning-content h2 {
        color: #333;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
    }
    
    .warning-text {
        text-align: right;
        margin-bottom: 2rem;
    }
    
    .warning-list {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }
    
    .warning-list li {
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        background: #fff3cd;
        border-radius: 8px;
        border-right: 4px solid #ff6b6b;
        font-size: 0.95rem;
        line-height: 1.4;
    }
    
    .agreement-section {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 10px;
        margin: 1.5rem 0;
    }
    
    .agreement-checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        font-weight: 600;
        color: #333;
    }
    
    .agreement-checkbox input {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
    
    .warning-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }
    
    .warning-btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
    }
    
    .warning-btn.decline {
        background: #dc3545;
        color: white;
    }
    
    .warning-btn.decline:hover {
        background: #c82333;
    }
    
    .warning-btn.accept {
        background: #28a745;
        color: white;
    }
    
    .warning-btn.accept:hover:not(:disabled) {
        background: #218838;
    }
    
    .warning-btn:disabled {
        background: #6c757d;
        cursor: not-allowed;
        opacity: 0.6;
    }
    
    .warning-footer {
        font-size: 0.9rem;
        color: #666;
        margin-top: 1.5rem;
        font-style: italic;
    }
`;
document.head.appendChild(style); 