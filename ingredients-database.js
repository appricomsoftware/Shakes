// מאגר רכיבים עשיר לבניית שייקים
const ingredientsDatabase = {
    // פירות טריים 
    fruits: [
        { id: 1, name: "בננה", category: "fruits", calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, fiber: 2.6, sugar: 12.2, sodium: 1, potassium: 358, vitaminC: 8.7, calcium: 5, iron: 0.3, vitaminA: 3, magnesium: 27, folate: 20, icon: "🍌", benefits: ["אנרגיה", "אשלגן", "ויטמין B6"] },
        { id: 2, name: "תפוח", category: "fruits", calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2, fiber: 2.4, sugar: 10.4, sodium: 1, potassium: 107, vitaminC: 4.6, calcium: 6, iron: 0.1, vitaminA: 3, magnesium: 5, folate: 3, icon: "🍎", benefits: ["נוגד חמצון", "עיכול", "ויטמין C"] },
        { id: 3, name: "אוכמניות", category: "fruits", calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3, fiber: 2.4, sugar: 10.0, sodium: 1, potassium: 77, vitaminC: 9.7, calcium: 6, iron: 0.3, vitaminA: 3, magnesium: 6, folate: 6, icon: "🫐", benefits: ["אנטי-אוקסידנטים", "זיכרון", "בריאות העיניים"] },
        { id: 4, name: "תותים", category: "fruits", calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2.0, sugar: 4.9, sodium: 1, potassium: 153, vitaminC: 58.8, calcium: 16, iron: 0.4, vitaminA: 1, magnesium: 13, folate: 24, icon: "🍓", benefits: ["ויטמין C", "חיסון", "עור בריא"] },
        { id: 5, name: "מנגו", category: "fruits", calories: 60, protein: 0.8, carbs: 15.0, fat: 0.4, fiber: 1.6, sugar: 13.7, sodium: 1, potassium: 168, vitaminC: 36.4, calcium: 11, iron: 0.2, vitaminA: 54, magnesium: 10, folate: 43, icon: "🥭", benefits: ["ויטמין A", "עיכול", "נוגד דלקת"] },
        { id: 6, name: "אננס", category: "fruits", calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1, fiber: 1.4, sugar: 9.9, sodium: 1, potassium: 109, vitaminC: 47.8, calcium: 13, iron: 0.3, vitaminA: 3, magnesium: 12, folate: 18, icon: "🍍", benefits: ["ברומלין", "עיכול", "חיסון"] },
        { id: 7, name: "קיווי", category: "fruits", calories: 61, protein: 1.1, carbs: 14.7, fat: 0.5, fiber: 3.0, sugar: 9.0, icon: "🥝", benefits: ["ויטמין C", "עיכול", "חיסון"] },
        { id: 8, name: "אבוקדו", category: "fruits", calories: 160, protein: 2.0, carbs: 8.5, fat: 14.7, fiber: 6.7, sugar: 0.7, icon: "🥑", benefits: ["שומנים בריאים", "שובע", "לב בריא"] },
        { id: 9, name: "תפוז", category: "fruits", calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, fiber: 2.4, sugar: 9.4, icon: "🍊", benefits: ["ויטמין C", "חיסון", "עור בריא"] },
        { id: 10, name: "רימון", category: "fruits", calories: 83, protein: 1.7, carbs: 18.7, fat: 1.2, fiber: 4.0, sugar: 13.7, icon: "🍅", benefits: ["אנטי-אוקסידנטים", "לב בריא", "נוגד זיהום"] },
        { id: 11, name: "דובדבנים", category: "fruits", calories: 63, protein: 1.1, carbs: 16.0, fat: 0.2, fiber: 2.1, sugar: 12.8, icon: "🍒", benefits: ["שינה", "נוגד דלקת", "התאוששות"] },
        { id: 12, name: "אפרסק", category: "fruits", calories: 39, protein: 0.9, carbs: 9.5, fat: 0.3, fiber: 1.5, sugar: 8.4, icon: "🍑", benefits: ["ויטמין A", "עור בריא", "עיכול"] },
        { id: 13, name: "שזיף", category: "fruits", calories: 46, protein: 0.7, carbs: 11.4, fat: 0.3, fiber: 1.4, sugar: 9.9, icon: "🍇", benefits: ["עיכול", "נוגד חמצון", "בריאות העצם"] },
        { id: 14, name: "פסיפלורה", category: "fruits", calories: 97, protein: 2.2, carbs: 23.4, fat: 0.7, fiber: 10.4, sugar: 11.2, icon: "🍈", benefits: ["הרגעה", "שינה", "עיכול"] },
        { id: 15, name: "תאנים", category: "fruits", calories: 74, protein: 0.8, carbs: 19.2, fat: 0.3, fiber: 2.9, sugar: 16.3, icon: "🫐", benefits: ["סיבים", "עיכול", "אנרגיה"] },
        { id: 16, name: "תמרים", category: "fruits", calories: 277, protein: 1.8, carbs: 75.0, fat: 0.2, fiber: 6.7, sugar: 66.5, icon: "🌰", benefits: ["אנרגיה", "אשלגן", "מגנזיום"] },
        { id: 17, name: "צימוקים", category: "fruits", calories: 299, protein: 3.1, carbs: 79.2, fat: 0.5, fiber: 3.7, sugar: 59.2, icon: "🍇", benefits: ["אנרגיה", "ברזל", "נוגד חמצון"] },
        { id: 18, name: "קנטלופ", category: "fruits", calories: 34, protein: 0.8, carbs: 8.2, fat: 0.2, fiber: 0.9, sugar: 7.9, icon: "🍈", benefits: ["הידרציה", "ויטמין A", "אלקטרוליטים"] },
        { id: 19, name: "אבטיח", category: "fruits", calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4, sugar: 6.2, icon: "🍉", benefits: ["הידרציה", "ליקופן", "חיסון"] },
        { id: 20, name: "פפאיה", category: "fruits", calories: 43, protein: 0.5, carbs: 10.8, fat: 0.3, fiber: 1.7, sugar: 7.8, icon: "🍈", benefits: ["עיכול", "ויטמין C", "נוגד דלקת"] }
    ],

    // ירקות ירוקים
    vegetables: [
        { id: 21, name: "תרד", category: "vegetables", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, sugar: 0.4, sodium: 79, potassium: 558, vitaminC: 28.1, calcium: 99, iron: 2.7, vitaminA: 469, magnesium: 79, folate: 194, icon: "🥬", benefits: ["ברזל", "עיניים", "חיסון"] },
        { id: 22, name: "קייל", category: "vegetables", calories: 49, protein: 4.3, carbs: 8.8, fat: 0.9, fiber: 3.6, sugar: 2.3, sodium: 38, potassium: 491, vitaminC: 120, calcium: 150, iron: 1.5, vitaminA: 500, magnesium: 47, folate: 29, icon: "🥬", benefits: ["ויטמין K", "נוגד חמצון", "עצמות"] },
        { id: 23, name: "מלפפון", category: "vegetables", calories: 16, protein: 0.7, carbs: 4.0, fat: 0.1, fiber: 0.5, sugar: 1.7, icon: "🥒", benefits: ["הידרציה", "עור בריא", "ניקוי"] },
        { id: 24, name: "סלרי", category: "vegetables", calories: 14, protein: 0.7, carbs: 3.0, fat: 0.2, fiber: 1.6, sugar: 1.3, icon: "🥬", benefits: ["נוגד דלקת", "עיכול", "אלקטרוליטים"] },
        { id: 25, name: "חסה", category: "vegetables", calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, fiber: 1.3, sugar: 0.8, icon: "🥬", benefits: ["הידרציה", "עיכול", "שינה"] },
        { id: 26, name: "ברוקלי", category: "vegetables", calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, fiber: 2.6, sugar: 1.5, icon: "🥦", benefits: ["ויטמין C", "נוגד סרטן", "עיכול"] },
        { id: 27, name: "כרוב", category: "vegetables", calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1, fiber: 2.5, sugar: 3.2, icon: "🥬", benefits: ["ויטמין C", "עיכול", "נוגד דלקת"] },
        { id: 28, name: "פטרוזיליה", category: "vegetables", calories: 36, protein: 3.0, carbs: 6.3, fat: 0.8, fiber: 3.3, sugar: 0.9, icon: "🌿", benefits: ["ויטמין K", "ניקוי", "נוגד חמצון"] },
        { id: 29, name: "כוסברה", category: "vegetables", calories: 23, protein: 2.1, carbs: 3.7, fat: 0.5, fiber: 2.8, sugar: 0.9, icon: "🌿", benefits: ["ניקוי", "עיכול", "נוגד חמצון"] },
        { id: 30, name: "זעתר", category: "vegetables", calories: 276, protein: 9.1, carbs: 63.9, fat: 7.4, fiber: 37.0, sugar: 1.7, icon: "🌿", benefits: ["נוגד חמצון", "נוגד דלקת", "חיסון"] },
        { id: 31, name: "מנטה", category: "vegetables", calories: 70, protein: 3.8, carbs: 14.9, fat: 0.9, fiber: 8.0, sugar: 0.0, icon: "🌿", benefits: ["עיכול", "נשימה", "הרגעה"] },
        { id: 32, name: "בזיליקום", category: "vegetables", calories: 22, protein: 3.2, carbs: 2.6, fat: 0.6, fiber: 1.6, sugar: 0.3, icon: "🌿", benefits: ["נוגד דלקת", "הרגעה", "עיכול"] },
        { id: 33, name: "שמיר", category: "vegetables", calories: 295, protein: 11.0, carbs: 68.0, fat: 2.7, fiber: 18.0, sugar: 0.0, icon: "🌿", benefits: ["עיכול", "נוגד דלקת", "ניקוי"] },
        { id: 34, name: "רוקט", category: "vegetables", calories: 25, protein: 2.6, carbs: 3.7, fat: 0.7, fiber: 1.6, sugar: 2.1, icon: "🥬", benefits: ["ויטמין K", "עיכול", "נוגד חמצון"] },
        { id: 35, name: "תולעת", category: "vegetables", calories: 47, protein: 4.6, carbs: 4.5, fat: 0.7, fiber: 3.2, sugar: 0.8, icon: "🥬", benefits: ["ויטמין A", "עיניים", "חיסון"] }
    ],

    // חלבונים וחיזוקים
    proteins: [
        { id: 36, name: "אבקת חלבון וניל", category: "proteins", calories: 103, protein: 20.0, carbs: 3.5, fat: 1.5, fiber: 1.0, sugar: 2.0, icon: "🥛", benefits: ["שריר", "התאוששות", "חלבון"] },
        { id: 37, name: "אבקת חלבון שוקולד", category: "proteins", calories: 109, protein: 19.0, carbs: 5.0, fat: 2.0, fiber: 2.0, sugar: 3.0, icon: "🍫", benefits: ["שריר", "התאוששות", "אנרגיה"] },
        { id: 38, name: "אבקת חלבון תות", category: "proteins", calories: 105, protein: 20.0, carbs: 4.0, fat: 1.0, fiber: 1.0, sugar: 2.5, icon: "🍓", benefits: ["שריר", "התאוששות", "טעם"] },
        { id: 39, name: "אבקת חלבון צמחי", category: "proteins", calories: 120, protein: 21.0, carbs: 7.0, fat: 2.5, fiber: 3.0, sugar: 1.0, icon: "🌱", benefits: ["שריר", "צמחוני", "עיכול"] },
        { id: 40, name: "טחינה", category: "proteins", calories: 595, protein: 18.0, carbs: 21.0, fat: 54.0, fiber: 9.0, sugar: 0.3, icon: "🥜", benefits: ["חלבון", "שומנים בריאים", "סידן"] },
        { id: 41, name: "חלווה", category: "proteins", calories: 469, protein: 12.9, carbs: 54.0, fat: 25.0, fiber: 9.9, sugar: 50.0, icon: "🍯", benefits: ["אנרגיה", "חלבון", "סידן"] },
        { id: 42, name: "סילאן", category: "proteins", calories: 310, protein: 0.7, carbs: 76.0, fat: 0.4, fiber: 0.6, sugar: 73.0, icon: "🍯", benefits: ["אנרגיה", "אשלגן", "מגנזיום"] },
        { id: 43, name: "חמאת בוטנים", category: "proteins", calories: 588, protein: 25.8, carbs: 20.0, fat: 50.0, fiber: 8.0, sugar: 9.2, icon: "🥜", benefits: ["חלבון", "שומנים בריאים", "אנרגיה"] },
        { id: 44, name: "חמאת שקדים", category: "proteins", calories: 614, protein: 21.0, carbs: 19.0, fat: 55.0, fiber: 10.0, sugar: 4.4, icon: "🥜", benefits: ["חלבון", "ויטמין E", "שומנים בריאים"] },
        { id: 45, name: "חמאת קשיו", category: "proteins", calories: 587, protein: 18.0, carbs: 30.0, fat: 46.0, fiber: 3.0, sugar: 6.0, icon: "🥜", benefits: ["חלבון", "מגנזיום", "זינק"] },
        { id: 46, name: "חמאת אגוז מלך", category: "proteins", calories: 618, protein: 15.0, carbs: 14.0, fat: 62.0, fiber: 7.0, sugar: 2.6, icon: "🥜", benefits: ["אומגה 3", "מוח", "לב"] },
        { id: 47, name: "חמאת פקאן", category: "proteins", calories: 691, protein: 9.0, carbs: 14.0, fat: 72.0, fiber: 10.0, sugar: 4.0, icon: "🥜", benefits: ["שומנים בריאים", "אנרגיה", "נוגד חמצון"] },
        { id: 48, name: "חמאת פיסטוק", category: "proteins", calories: 571, protein: 21.0, carbs: 28.0, fat: 45.0, fiber: 10.0, sugar: 8.0, icon: "🥜", benefits: ["חלבון", "אשלגן", "עיניים"] },
        { id: 49, name: "חמאת חמניות", category: "proteins", calories: 617, protein: 20.0, carbs: 20.0, fat: 51.0, fiber: 9.0, sugar: 3.0, icon: "🌻", benefits: ["ויטמין E", "שומנים בריאים", "מגנזיום"] },
        { id: 50, name: "חמאת קוקוס", category: "proteins", calories: 660, protein: 7.0, carbs: 24.0, fat: 64.0, fiber: 18.0, sugar: 8.0, icon: "🥥", benefits: ["MCT", "אנרגיה", "נוגד חמצון"] }
    ],

    // זרעים ואגוזים
    seeds_nuts: [
        { id: 51, name: "זרעי צ'יה", category: "seeds_nuts", calories: 486, protein: 17.0, carbs: 42.0, fat: 31.0, fiber: 34.0, sugar: 0.0, icon: "🌱", benefits: ["אומגה 3", "סיבים", "אנרגיה"] },
        { id: 52, name: "זרעי פשתן", category: "seeds_nuts", calories: 534, protein: 18.0, carbs: 29.0, fat: 42.0, fiber: 27.0, sugar: 1.5, icon: "🌱", benefits: ["אומגה 3", "הורמונים", "עיכול"] },
        { id: 53, name: "זרעי חמניות", category: "seeds_nuts", calories: 584, protein: 21.0, carbs: 20.0, fat: 51.0, fiber: 8.6, sugar: 2.6, icon: "🌻", benefits: ["ויטמין E", "מגנזיום", "נוגד חמצון"] },
        { id: 54, name: "זרעי דלעת", category: "seeds_nuts", calories: 559, protein: 19.0, carbs: 54.0, fat: 49.0, fiber: 18.0, sugar: 1.4, icon: "🎃", benefits: ["זינק", "מגנזיום", "פרוסטטה"] },
        { id: 55, name: "זרעי שומשום", category: "seeds_nuts", calories: 573, protein: 18.0, carbs: 23.0, fat: 50.0, fiber: 12.0, sugar: 0.3, icon: "🌱", benefits: ["סידן", "שומנים בריאים", "נוגד חמצון"] },
        { id: 56, name: "שקדים", category: "seeds_nuts", calories: 579, protein: 21.0, carbs: 22.0, fat: 50.0, fiber: 12.0, sugar: 4.4, icon: "🌰", benefits: ["ויטמין E", "מגנזיום", "לב בריא"] },
        { id: 57, name: "אגוזי מלך", category: "seeds_nuts", calories: 654, protein: 15.0, carbs: 14.0, fat: 65.0, fiber: 6.7, sugar: 2.6, icon: "🥜", benefits: ["אומגה 3", "מוח", "לב"] },
        { id: 58, name: "לוז", category: "seeds_nuts", calories: 628, protein: 15.0, carbs: 17.0, fat: 61.0, fiber: 9.7, sugar: 4.3, icon: "🌰", benefits: ["ויטמין E", "שומנים בריאים", "עור"] },
        { id: 59, name: "קשיו", category: "seeds_nuts", calories: 553, protein: 18.0, carbs: 30.0, fat: 44.0, fiber: 3.3, sugar: 6.0, icon: "🥜", benefits: ["מגנזיום", "זינק", "לב"] },
        { id: 60, name: "פיסטוק", category: "seeds_nuts", calories: 560, protein: 20.0, carbs: 28.0, fat: 45.0, fiber: 10.0, sugar: 8.0, icon: "🥜", benefits: ["אשלגן", "עיניים", "לב"] },
        { id: 61, name: "אגוז ברזיל", category: "seeds_nuts", calories: 656, protein: 14.0, carbs: 12.0, fat: 66.0, fiber: 7.5, sugar: 2.3, icon: "🥜", benefits: ["סלניום", "בלוטת התריס", "נוגד חמצון"] },
        { id: 62, name: "אגוז פקאן", category: "seeds_nuts", calories: 691, protein: 9.0, carbs: 14.0, fat: 72.0, fiber: 9.6, sugar: 4.0, icon: "🥜", benefits: ["שומנים בריאים", "אנרגיה", "נוגד חמצון"] },
        { id: 63, name: "אגוז מקדמיה", category: "seeds_nuts", calories: 718, protein: 8.0, carbs: 14.0, fat: 76.0, fiber: 8.6, sugar: 4.6, icon: "🥜", benefits: ["שומנים בריאים", "אנרגיה", "לב"] },
        { id: 64, name: "זרעי קינואה", category: "seeds_nuts", calories: 368, protein: 14.0, carbs: 64.0, fat: 6.0, fiber: 7.0, sugar: 0.0, icon: "🌾", benefits: ["חלבון שלם", "אנרגיה", "עיכול"] },
        { id: 65, name: "זרעי קנאביס", category: "seeds_nuts", calories: 553, protein: 31.0, carbs: 8.7, fat: 49.0, fiber: 4.0, sugar: 1.5, icon: "🌱", benefits: ["אומגה 3", "חלבון", "עיכול"] }
    ],

    // נוזלים ובסיסים
    liquids: [
        { id: 66, name: "מים", category: "liquids", calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, icon: "💧", benefits: ["הידרציה", "ניקוי", "חיוני"] },
        { id: 67, name: "חלב פרות", category: "liquids", calories: 42, protein: 3.4, carbs: 5.0, fat: 1.0, fiber: 0, sugar: 5.0, icon: "🥛", benefits: ["חלבון", "סידן", "ויטמין D"] },
        { id: 68, name: "חלב עיזים", category: "liquids", calories: 69, protein: 3.6, carbs: 4.5, fat: 4.1, fiber: 0, sugar: 4.5, icon: "🐐", benefits: ["עיכול קל", "סידן", "חלבון"] },
        { id: 69, name: "חלב שקדים", category: "liquids", calories: 17, protein: 0.6, carbs: 1.5, fat: 1.2, fiber: 0.4, sugar: 0.6, icon: "🥛", benefits: ["ויטמין E", "דל קלוריות", "צמחוני"] },
        { id: 70, name: "חלב קוקוס", category: "liquids", calories: 19, protein: 0.2, carbs: 1.9, fat: 1.8, fiber: 0.2, sugar: 1.3, icon: "🥥", benefits: ["MCT", "אנרגיה", "צמחוני"] },
        { id: 71, name: "חלב שיבולת שועל", category: "liquids", calories: 47, protein: 3.0, carbs: 8.0, fat: 1.5, fiber: 0.7, sugar: 7.0, icon: "🌾", benefits: ["סיבים", "לב בריא", "עיכול"] },
        { id: 72, name: "חלב אורז", category: "liquids", calories: 47, protein: 0.3, carbs: 9.2, fat: 1.0, fiber: 0.3, sugar: 5.3, icon: "🍚", benefits: ["היפואלרגני", "עיכול קל", "צמחוני"] },
        { id: 73, name: "חלב סויה", category: "liquids", calories: 54, protein: 3.3, carbs: 6.0, fat: 1.8, fiber: 0.6, sugar: 4.7, icon: "🌱", benefits: ["חלבון", "איזופלבונים", "לב"] },
        { id: 74, name: "חלב קשיו", category: "liquids", calories: 25, protein: 1.0, carbs: 2.0, fat: 2.0, fiber: 0, sugar: 1.0, icon: "🥛", benefits: ["מגנזיום", "זינק", "צמחוני"] },
        { id: 75, name: "מי קוקוס", category: "liquids", calories: 19, protein: 0.7, carbs: 3.7, fat: 0.2, fiber: 1.1, sugar: 2.6, icon: "🥥", benefits: ["אלקטרוליטים", "הידרציה", "אשלגן"] },
        { id: 76, name: "מיץ תפוזים", category: "liquids", calories: 45, protein: 0.7, carbs: 10.4, fat: 0.2, fiber: 0.2, sugar: 8.4, icon: "🍊", benefits: ["ויטמין C", "חיסון", "אנרגיה"] },
        { id: 77, name: "מיץ רימון", category: "liquids", calories: 134, protein: 0.2, carbs: 32.7, fat: 0.3, fiber: 0.1, sugar: 31.0, icon: "🍷", benefits: ["אנטי-אוקסידנטים", "לב בריא", "זיכרון"] },
        { id: 78, name: "מיץ אוכמניות", category: "liquids", calories: 46, protein: 0.1, carbs: 11.4, fat: 0.1, fiber: 0.2, sugar: 9.7, icon: "🫐", benefits: ["אנטי-אוקסידנטים", "עיניים", "זיכרון"] },
        { id: 79, name: "מיץ דובדבנים", category: "liquids", calories: 50, protein: 0.7, carbs: 12.0, fat: 0.3, fiber: 0.5, sugar: 10.0, icon: "🍒", benefits: ["שינה", "נוגד דלקת", "התאוששות"] },
        { id: 80, name: "מיץ אלוורה", category: "liquids", calories: 15, protein: 0.1, carbs: 3.8, fat: 0.2, fiber: 0.5, sugar: 3.2, icon: "🌿", benefits: ["עיכול", "נוגד דלקת", "עור"] }
    ],

    // תבלינים וחומרי טעם
    spices: [
        { id: 81, name: "קינמון", category: "spices", calories: 247, protein: 4.0, carbs: 81.0, fat: 1.2, fiber: 53.0, sugar: 2.2, icon: "🌿", benefits: ["סוכר בדם", "נוגד דלקת", "נוגד חמצון"] },
        { id: 82, name: "ג'ינג'ר", category: "spices", calories: 80, protein: 1.8, carbs: 18.0, fat: 0.8, fiber: 2.0, sugar: 1.7, icon: "🫚", benefits: ["עיכול", "בחילות", "נוגד דלקת"] },
        { id: 83, name: "כורכום", category: "spices", calories: 354, protein: 7.8, carbs: 65.0, fat: 10.0, fiber: 21.0, sugar: 3.2, icon: "🌿", benefits: ["נוגד דלקת", "נוגד חמצון", "מוח"] },
        { id: 84, name: "קקאו", category: "spices", calories: 228, protein: 19.6, carbs: 57.9, fat: 13.7, fiber: 37.0, sugar: 1.8, icon: "🍫", benefits: ["נוגד חמצון", "מוח", "מצב רוח"] },
        { id: 85, name: "וניל", category: "spices", calories: 288, protein: 0.1, carbs: 12.7, fat: 0.1, fiber: 0.0, sugar: 12.7, icon: "🌿", benefits: ["טעם", "הרגעה", "נוגד חמצון"] },
        { id: 86, name: "קרדמון", category: "spices", calories: 311, protein: 11.0, carbs: 68.0, fat: 6.8, fiber: 28.0, sugar: 0.0, icon: "🌿", benefits: ["עיכול", "נשימה", "נוגד דלקת"] },
        { id: 87, name: "מסטיק", category: "spices", calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, icon: "🌿", benefits: ["עיכול", "נשימה", "שיניים"] },
        { id: 88, name: "עלי נענע", category: "spices", calories: 70, protein: 3.8, carbs: 14.9, fat: 0.9, fiber: 8.0, sugar: 0.0, icon: "🌿", benefits: ["עיכול", "נשימה", "הרגעה"] },
        { id: 89, name: "לימון", category: "spices", calories: 29, protein: 1.1, carbs: 9.3, fat: 0.3, fiber: 2.8, sugar: 1.5, icon: "🍋", benefits: ["ויטמין C", "ניקוי", "עיכול"] },
        { id: 90, name: "לייפים", category: "spices", calories: 26, protein: 1.6, carbs: 7.7, fat: 0.2, fiber: 4.8, sugar: 1.7, icon: "🍋", benefits: ["ויטמין C", "חיסון", "עיכול"] }
    ],

    // סופרפודים
    superfoods: [
        { id: 91, name: "ספירולינה", category: "superfoods", calories: 290, protein: 57.0, carbs: 23.0, fat: 8.0, fiber: 4.0, sugar: 3.1, icon: "🌿", benefits: ["חלבון", "ברזל", "נוגד חמצון"] },
        { id: 92, name: "כלורלה", category: "superfoods", calories: 336, protein: 58.0, carbs: 23.0, fat: 9.0, fiber: 10.0, sugar: 0.0, icon: "🌿", benefits: ["ניקוי", "חלבון", "ויטמין B12"] },
        { id: 93, name: "אבקת חיטה", category: "superfoods", calories: 198, protein: 7.5, carbs: 42.0, fat: 1.3, fiber: 1.0, sugar: 0.0, icon: "🌱", benefits: ["כלורופיל", "ויטמינים", "אנרגיה"] },
        { id: 94, name: "אבקת שעורה", category: "superfoods", calories: 180, protein: 6.0, carbs: 41.0, fat: 1.0, fiber: 3.0, sugar: 0.0, icon: "🌱", benefits: ["כלורופיל", "ויטמינים", "אנרגיה"] },
        { id: 95, name: "מאקה", category: "superfoods", calories: 325, protein: 14.0, carbs: 71.0, fat: 4.0, fiber: 7.0, sugar: 32.0, icon: "🌿", benefits: ["אנרגיה", "הורמונים", "סיבולת"] },
        { id: 96, name: "אסאי", category: "superfoods", calories: 70, protein: 1.0, carbs: 4.0, fat: 5.0, fiber: 2.0, sugar: 2.0, icon: "🫐", benefits: ["אנטי-אוקסידנטים", "לב בריא", "עור"] },
        { id: 97, name: "גוג'י ברי", category: "superfoods", calories: 349, protein: 14.0, carbs: 77.0, fat: 0.4, fiber: 13.0, sugar: 46.0, icon: "🍓", benefits: ["אנטי-אוקסידנטים", "עיניים", "חיסון"] },
        { id: 98, name: "קמוט", category: "superfoods", calories: 338, protein: 15.0, carbs: 70.0, fat: 2.4, fiber: 11.0, sugar: 2.0, icon: "🌾", benefits: ["חלבון", "סיבים", "עיכול"] },
        { id: 99, name: "בוקתורן", category: "superfoods", calories: 82, protein: 1.4, carbs: 15.0, fat: 7.1, fiber: 4.7, sugar: 10.0, icon: "🍊", benefits: ["ויטמין C", "עור", "חיסון"] },
        { id: 100, name: "אלגת הים", category: "superfoods", calories: 45, protein: 6.0, carbs: 9.0, fat: 0.6, fiber: 1.3, sugar: 0.6, icon: "🌊", benefits: ["יוד", "בלוטת התריס", "מינרלים"] }
    ],

    // ממתקים בריאים
    healthy_sweets: [
        { id: 101, name: "דבש", category: "healthy_sweets", calories: 304, protein: 0.3, carbs: 82.0, fat: 0.0, fiber: 0.2, sugar: 82.0, icon: "🍯", benefits: ["אנרגיה", "נוגד חמצון", "נוגד חיידקים"] },
        { id: 102, name: "סירופ אגבה", category: "healthy_sweets", calories: 310, protein: 0.0, carbs: 76.0, fat: 0.0, fiber: 0.0, sugar: 68.0, icon: "🌿", benefits: ["אנרגיה", "אינדקס גליקמי נמוך", "צמחוני"] },
        { id: 103, name: "סירופ אורן", category: "healthy_sweets", calories: 260, protein: 0.0, carbs: 67.0, fat: 0.0, fiber: 0.0, sugar: 60.0, icon: "🌲", benefits: ["אנרגיה", "אנטי-אוקסידנטים", "מגנזיום"] },
        { id: 104, name: "סוכר דקלים", category: "healthy_sweets", calories: 375, protein: 0.0, carbs: 100.0, fat: 0.0, fiber: 0.0, sugar: 93.0, icon: "🌴", benefits: ["אנרגיה", "מינרלים", "טעם"] },
        { id: 105, name: "סוכר קוקוס", category: "healthy_sweets", calories: 375, protein: 0.0, carbs: 100.0, fat: 0.0, fiber: 0.0, sugar: 93.0, icon: "🥥", benefits: ["אנרגיה", "מינרלים", "אינדקס גליקמי נמוך"] },
        { id: 106, name: "סטביה", category: "healthy_sweets", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "🌿", benefits: ["ללא קלוריות", "טבעי", "דיאבטיים"] },
        { id: 107, name: "קרוב", category: "healthy_sweets", calories: 222, protein: 4.6, carbs: 89.0, fat: 0.7, fiber: 40.0, sugar: 49.0, icon: "🫘", benefits: ["סיבים", "אנטי-אוקסידנטים", "עיכול"] },
        { id: 108, name: "מולסה", category: "healthy_sweets", calories: 290, protein: 0.0, carbs: 75.0, fat: 0.1, fiber: 0.0, sugar: 55.0, icon: "🍯", benefits: ["ברזל", "מגנזיום", "אנרגיה"] },
        { id: 109, name: "לוקום", category: "healthy_sweets", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "🌿", benefits: ["ללא קלוריות", "טבעי", "עיכול"] },
        { id: 110, name: "תמרים מג'הול", category: "healthy_sweets", calories: 277, protein: 1.8, carbs: 75.0, fat: 0.2, fiber: 6.7, sugar: 66.5, icon: "🌰", benefits: ["אנרגיה", "אשלגן", "מגנזיום"] }
    ],

    // קרח ומוצרים קפואים
    frozen: [
        { id: 111, name: "קרח", category: "frozen", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "🧊", benefits: ["קרירות", "נפח", "מרקם"] },
        { id: 112, name: "פירות יער קפואים", category: "frozen", calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3, fiber: 2.4, sugar: 10.0, icon: "🫐", benefits: ["אנטי-אוקסידנטים", "ויטמין C", "נוחות"] },
        { id: 113, name: "תותים קפואים", category: "frozen", calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2.0, sugar: 4.9, icon: "🍓", benefits: ["ויטמין C", "נוחות", "מרקם"] },
        { id: 114, name: "מנגו קפוא", category: "frozen", calories: 60, protein: 0.8, carbs: 15.0, fat: 0.4, fiber: 1.6, sugar: 13.7, icon: "🥭", benefits: ["ויטמין A", "קרירות", "מרקם"] },
        { id: 115, name: "אננס קפוא", category: "frozen", calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1, fiber: 1.4, sugar: 9.9, icon: "🍍", benefits: ["ברומלין", "קרירות", "עיכול"] },
        { id: 116, name: "בננה קפואה", category: "frozen", calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, fiber: 2.6, sugar: 12.2, icon: "🍌", benefits: ["מרקם קרמי", "אנרגיה", "אשלגן"] },
        { id: 117, name: "אוכמניות קפואות", category: "frozen", calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3, fiber: 2.4, sugar: 10.0, icon: "🫐", benefits: ["אנטי-אוקסידנטים", "זיכרון", "נוחות"] },
        { id: 118, name: "דובדבנים קפואים", category: "frozen", calories: 63, protein: 1.1, carbs: 16.0, fat: 0.2, fiber: 2.1, sugar: 12.8, icon: "🍒", benefits: ["שינה", "נוגד דלקת", "קרירות"] },
        { id: 119, name: "פטל קפוא", category: "frozen", calories: 52, protein: 1.2, carbs: 12.0, fat: 0.7, fiber: 6.5, sugar: 4.4, icon: "🫐", benefits: ["סיבים", "אנטי-אוקסידנטים", "ויטמין C"] },
        { id: 120, name: "אבוקדו קפוא", category: "frozen", calories: 160, protein: 2.0, carbs: 8.5, fat: 14.7, fiber: 6.7, sugar: 0.7, icon: "🥑", benefits: ["מרקם קרמי", "שומנים בריאים", "שובע"] }
    ],

    // תוספי תזונה
    supplements: [
        { id: 121, name: "קולגן", category: "supplements", calories: 50, protein: 12.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["עור", "מפרקים", "שיער"] },
        { id: 122, name: "ויטמין C", category: "supplements", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["חיסון", "נוגד חמצון", "עור"] },
        { id: 123, name: "ויטמין D", category: "supplements", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["עצמות", "חיסון", "מצב רוח"] },
        { id: 124, name: "מגנזיום", category: "supplements", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["שרירים", "שינה", "לב"] },
        { id: 125, name: "אבץ", category: "supplements", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["חיסון", "הריפוי", "טעם"] },
        { id: 126, name: "ברזל", category: "supplements", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["דם", "אנרגיה", "ריכוז"] },
        { id: 127, name: "אומגה 3", category: "supplements", calories: 25, protein: 0.0, carbs: 0.0, fat: 2.5, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["לב", "מוח", "נוגד דלקת"] },
        { id: 128, name: "פרוביוטיקה", category: "supplements", calories: 5, protein: 0.0, carbs: 1.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["עיכול", "חיסון", "בריאות המעי"] },
        { id: 129, name: "אנזימי עיכול", category: "supplements", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["עיכול", "ספיגה", "בריאות המעי"] },
        { id: 130, name: "קריאטין", category: "supplements", calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0.0, sugar: 0.0, icon: "💊", benefits: ["שריר", "כוח", "התאוששות"] }
    ],

    // עדשים וקטניות
    legumes: [
        { id: 131, name: "חומוס מבושל", category: "legumes", calories: 164, protein: 8.9, carbs: 27.0, fat: 2.6, fiber: 8.0, sugar: 4.8, icon: "🫘", benefits: ["חלבון", "סיבים", "ברזל"] },
        { id: 132, name: "עדשים אדומות", category: "legumes", calories: 116, protein: 9.0, carbs: 20.0, fat: 0.4, fiber: 8.0, sugar: 1.8, icon: "🫘", benefits: ["חלבון", "ברזל", "חומצת פולית"] },
        { id: 133, name: "עדשים שחורות", category: "legumes", calories: 116, protein: 9.0, carbs: 20.0, fat: 0.4, fiber: 8.0, sugar: 1.8, icon: "🫘", benefits: ["חלבון", "ברזל", "אנטי-אוקסידנטים"] },
        { id: 134, name: "פשתה", category: "legumes", calories: 164, protein: 8.9, carbs: 27.0, fat: 2.6, fiber: 8.0, sugar: 4.8, icon: "🫘", benefits: ["חלבון", "סיבים", "ברזל"] },
        { id: 135, name: "שעועית לבנה", category: "legumes", calories: 139, protein: 9.7, carbs: 25.0, fat: 0.5, fiber: 6.4, sugar: 0.6, icon: "🫘", benefits: ["חלבון", "סיבים", "פולט"] },
        { id: 136, name: "שעועית שחורה", category: "legumes", calories: 132, protein: 8.9, carbs: 23.0, fat: 0.5, fiber: 8.7, sugar: 0.3, icon: "🫘", benefits: ["חלבון", "סיבים", "אנטי-אוקסידנטים"] },
        { id: 137, name: "שעועית אדומה", category: "legumes", calories: 127, protein: 8.7, carbs: 23.0, fat: 0.5, fiber: 6.4, sugar: 0.3, icon: "🫘", benefits: ["חלבון", "סיבים", "אשלגן"] },
        { id: 138, name: "אפונה ירוקה", category: "legumes", calories: 81, protein: 5.4, carbs: 14.0, fat: 0.4, fiber: 5.7, sugar: 5.7, icon: "🟢", benefits: ["חלבון", "ויטמין K", "סיבים"] },
        { id: 139, name: "פול", category: "legumes", calories: 341, protein: 26.0, carbs: 58.0, fat: 1.5, fiber: 25.0, sugar: 5.7, icon: "🫘", benefits: ["חלבון", "סיבים", "חומצה פולית"] },
        { id: 140, name: "לופין", category: "legumes", calories: 371, protein: 36.0, carbs: 40.0, fat: 9.7, fiber: 19.0, sugar: 2.9, icon: "🫘", benefits: ["חלבון גבוה", "סיבים", "אשלגן"] }
    ],

    // דגנים וקמחים
    grains: [
        { id: 141, name: "שיבולת שועל", category: "grains", calories: 68, protein: 2.4, carbs: 12.0, fat: 1.4, fiber: 1.7, sugar: 0.3, icon: "🌾", benefits: ["סיבים", "לב בריא", "עיכול"] },
        { id: 142, name: "גרנולה", category: "grains", calories: 471, protein: 13.0, carbs: 61.0, fat: 20.0, fiber: 7.0, sugar: 22.0, icon: "🥣", benefits: ["אנרגיה", "סיבים", "חלבון"] },
        { id: 143, name: "מוזלי", category: "grains", calories: 350, protein: 8.0, carbs: 66.0, fat: 6.0, fiber: 8.0, sugar: 16.0, icon: "🥣", benefits: ["אנרגיה", "סיבים", "ויטמינים"] },
        { id: 144, name: "שעורה", category: "grains", calories: 123, protein: 2.3, carbs: 28.0, fat: 0.4, fiber: 3.8, sugar: 0.8, icon: "🌾", benefits: ["סיבים", "לב בריא", "עיכול"] },
        { id: 145, name: "חיטה נבטה", category: "grains", calories: 214, protein: 7.5, carbs: 45.0, fat: 1.3, fiber: 1.1, sugar: 0.0, icon: "🌱", benefits: ["ויטמינים", "מינרלים", "אנרגיה"] },
        { id: 146, name: "קמח שקדים", category: "grains", calories: 579, protein: 21.0, carbs: 22.0, fat: 50.0, fiber: 12.0, sugar: 4.4, icon: "🥜", benefits: ["חלבון", "ללא גלוטן", "ויטמין E"] },
        { id: 147, name: "קמח קוקוס", category: "grains", calories: 660, protein: 20.0, carbs: 60.0, fat: 65.0, fiber: 38.0, sugar: 8.0, icon: "🥥", benefits: ["סיבים", "ללא גלוטן", "MCT"] },
        { id: 148, name: "קמח כוסמין", category: "grains", calories: 338, protein: 15.0, carbs: 70.0, fat: 2.4, fiber: 11.0, sugar: 2.0, icon: "🌾", benefits: ["חלבון", "סיבים", "מגנזיום"] },
        { id: 149, name: "קמח טף", category: "grains", calories: 367, protein: 13.0, carbs: 73.0, fat: 2.4, fiber: 8.0, sugar: 1.8, icon: "🌾", benefits: ["חלבון", "ללא גלוטן", "ברזל"] },
        { id: 150, name: "פתיתי שעורה", category: "grains", calories: 354, protein: 12.0, carbs: 73.0, fat: 2.3, fiber: 17.0, sugar: 0.8, icon: "🌾", benefits: ["סיבים", "לב בריא", "עיכול"] }
    ],

    // שמנים ושומנים בריאים
    oils: [
        { id: 151, name: "שמן קוקוס", category: "oils", calories: 862, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, sugar: 0.0, icon: "🥥", benefits: ["MCT", "אנרגיה", "נוגד חמצון"] },
        { id: 152, name: "שמן זית", category: "oils", calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, sugar: 0.0, icon: "🫒", benefits: ["שומנים בריאים", "נוגד דלקת", "לב"] },
        { id: 153, name: "שמן שקדים", category: "oils", calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, sugar: 0.0, icon: "🌰", benefits: ["ויטמין E", "עור", "שומנים בריאים"] },
        { id: 154, name: "שמן אגוז מלך", category: "oils", calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, sugar: 0.0, icon: "🥜", benefits: ["אומגה 3", "מוח", "נוגד דלקת"] },
        { id: 155, name: "שמן שומשום", category: "oils", calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, fiber: 0.0, sugar: 0.0, icon: "🌱", benefits: ["שומנים בריאים", "נוגד חמצון", "טעם"] }
    ]
};

// פונקציות עזר לעבודה עם מאגר הרכיבים
const ingredientUtils = {
    // קבלת כל הרכיבים
    getAllIngredients() {
        const allIngredients = [];
        Object.values(ingredientsDatabase).forEach(category => {
            allIngredients.push(...category);
        });
        return allIngredients;
    },

    // קבלת רכיבים לפי קטגוריה
    getIngredientsByCategory(category) {
        return ingredientsDatabase[category] || [];
    },

    // חיפוש רכיבים
    searchIngredients(query) {
        const allIngredients = this.getAllIngredients();
        const searchTerm = query.toLowerCase();
        
        return allIngredients.filter(ingredient =>
            ingredient.name.toLowerCase().includes(searchTerm) ||
            ingredient.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
        );
    },

    // קבלת רכיב לפי ID
    getIngredientById(id) {
        const allIngredients = this.getAllIngredients();
        return allIngredients.find(ingredient => ingredient.id === id);
    },

    // קבלת רכיבים מומלצים למטרה
    getRecommendedIngredients(goal) {
        const allIngredients = this.getAllIngredients();
        const goalKeywords = {
            'weight-loss': ['ירידה במשקל', 'שריפת שומן', 'מטבוליזם', 'שובע'],
            'muscle': ['שריר', 'חלבון', 'התאוששות', 'כוח'],
            'energy': ['אנרגיה', 'סיבולת', 'אנרגיה מיידית', 'אנרגיה טבעית'],
            'detox': ['ניקוי', 'ניקוי רעלים', 'נוגד חמצון', 'עיכול'],
            'beauty': ['עור', 'יופי', 'עור בריא', 'עור זוהר'],
            'health': ['בריאות', 'חיסון', 'ויטמין', 'מינרלים']
        };

        const keywords = goalKeywords[goal] || [];
        return allIngredients.filter(ingredient =>
            ingredient.benefits.some(benefit =>
                keywords.some(keyword => benefit.includes(keyword))
            )
        );
    },

    // חישוב ערכים תזונתיים של מספר רכיבים
    calculateNutrition(ingredients) {
        return ingredients.reduce((total, ingredient) => {
            const amount = ingredient.amount || 1; // כמות יחסית
            return {
                calories: total.calories + (ingredient.calories * amount / 100),
                protein: total.protein + (ingredient.protein * amount / 100),
                carbs: total.carbs + (ingredient.carbs * amount / 100),
                fat: total.fat + (ingredient.fat * amount / 100),
                fiber: total.fiber + (ingredient.fiber * amount / 100),
                sugar: total.sugar + (ingredient.sugar * amount / 100),
                sodium: total.sodium + ((ingredient.sodium || 0) * amount / 100),
                potassium: total.potassium + ((ingredient.potassium || 0) * amount / 100),
                vitaminC: total.vitaminC + ((ingredient.vitaminC || 0) * amount / 100),
                calcium: total.calcium + ((ingredient.calcium || 0) * amount / 100),
                iron: total.iron + ((ingredient.iron || 0) * amount / 100),
                vitaminA: total.vitaminA + ((ingredient.vitaminA || 0) * amount / 100),
                magnesium: total.magnesium + ((ingredient.magnesium || 0) * amount / 100),
                folate: total.folate + ((ingredient.folate || 0) * amount / 100)
            };
        }, { 
            calories: 0, 
            protein: 0, 
            carbs: 0, 
            fat: 0, 
            fiber: 0, 
            sugar: 0, 
            sodium: 0, 
            potassium: 0, 
            vitaminC: 0, 
            calcium: 0, 
            iron: 0, 
            vitaminA: 0, 
            magnesium: 0, 
            folate: 0 
        });
    }
};

// מערך קטגוריות לתצוגה
const categoryNames = {
    fruits: "פירות טריים",
    vegetables: "ירקות וירוקים",
    proteins: "חלבונים וחיזוקים",
    seeds_nuts: "זרעים ואגוזים",
    liquids: "נוזלים ובסיסים",
    spices: "תבלינים וטעמים",
    superfoods: "סופרפודים",
    healthy_sweets: "ממתקים בריאים",
    frozen: "מוצרים קפואים",
    supplements: "תוספי תזונה",
    legumes: "קטניות ועדשים",
    grains: "דגנים וקמחים",
    oils: "שמנים בריאים"
};

// ייצוא למשתמש גלובלי
if (typeof window !== 'undefined') {
    window.ingredientsDatabase = ingredientsDatabase;
    window.ingredientUtils = ingredientUtils;
    window.categoryNames = categoryNames;
} 