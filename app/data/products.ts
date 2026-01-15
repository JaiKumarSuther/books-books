export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    rating: number;
    oldPrice?: number;
    discount?: number;
}

export const booksData: Product[] = [
    // Pre-School
    { id: "b1", name: "Oxford Modern English - Primer A", price: 850, category: "Pre-School", image: "/products/oxford-english.png", description: "Standard English curriculum book for beginners.", rating: 5, oldPrice: 950, discount: 10 },
    { id: "b2", name: "New Countdown Mathematics - Level 1", price: 950, category: "Primary", image: "/products/math-countdown.png", description: "Oxford simplified math for grade 1.", rating: 4.5 },
    { id: "b3", name: "Urdu Khushkhati - Class 2", price: 350, category: "Primary", image: "/products/oxford-english.png", description: "Improve handwriting with traced exercises.", rating: 4 },
    { id: "b4", name: "Science Factor - Level 3", price: 1050, category: "Primary", image: "/products/math-countdown.png", description: "Engaging science concepts for young minds.", rating: 5, oldPrice: 1200, discount: 12 },
    { id: "b5", name: "Oxford Social Studies - Class 5", price: 980, category: "Primary", image: "/products/oxford-english.png", description: "History and geography basics.", rating: 4.5 },
    { id: "b101", name: "Broad Peak English - Class 1", price: 600, category: "Pre-School", image: "/products/oxford-english.png", description: "Foundation English for early learners.", rating: 4 },
    { id: "b102", name: "My First Urdu Book", price: 450, category: "Pre-School", image: "/products/oxford-english.png", description: "Learn Urdu alphabets with pictures.", rating: 4.5 },
    { id: "b103", name: "Number Fun - Nursery", price: 550, category: "Pre-School", image: "/products/math-countdown.png", description: "Interactive math workbook.", rating: 5 },

    // Middle
    { id: "b6", name: "Geography of Pakistan - Class 7", price: 750, category: "Middle", image: "/products/oxford-english.png", description: "In-depth study of Pakistan's landscapes.", rating: 4 },
    { id: "b7", name: "Computer Whiz - Class 8", price: 1200, category: "Middle", image: "/products/math-countdown.png", description: "Introduction to programming and ICT.", rating: 5, oldPrice: 1500, discount: 20 },
    { id: "b8", name: "History: The Islamic World", price: 650, category: "Middle", image: "/products/oxford-english.png", description: "Historical overview for grades 6-8.", rating: 4 },
    { id: "b104", name: "Science for Middle School - 6", price: 890, category: "Middle", image: "/products/math-countdown.png", description: "General Science concepts explained.", rating: 4 },
    { id: "b105", name: "Oxford History - Class 7", price: 780, category: "Middle", image: "/products/oxford-english.png", description: "World history curriculum.", rating: 4.5 },

    // Matric / O-Level
    { id: "b9", name: "Physics Class 9 - PTB", price: 450, category: "Matric", image: "/products/oxford-english.png", description: "Punjab Textbook Board standard physics.", rating: 4.5 },
    { id: "b10", name: "Chemistry Class 10 - PTB", price: 480, category: "Matric", image: "/products/oxford-english.png", description: "Punjab Textbook Board standard chemistry.", rating: 4.5 },
    { id: "b11", name: "Redspot Physics - O Level", price: 2500, category: "O-Level", image: "/products/oxford-english.png", description: "Solved past papers with detailed explanations.", rating: 5, oldPrice: 2800, discount: 10 },
    { id: "b12", name: "Redspot Chemistry - O Level", price: 2500, category: "O-Level", image: "/products/oxford-english.png", description: "Topical past papers for chemistry.", rating: 5, oldPrice: 2800, discount: 10 },
    { id: "b13", name: "Biology Matters - GCE O Level", price: 3200, category: "O-Level", image: "/products/oxford-english.png", description: "Marshall Cavendish biology textbook.", rating: 5 },
    { id: "b106", name: "Redspot Biology - O Level", price: 2500, category: "O-Level", image: "/products/oxford-english.png", description: "1000+ solved MCQs.", rating: 5, oldPrice: 2700, discount: 7 },
    { id: "b107", name: "Mathematics D1 - 7th Edition", price: 4100, category: "O-Level", image: "/products/math-countdown.png", description: "Official syllabus math book.", rating: 5 },
    { id: "b108", name: "Mathematics D2 - 7th Edition", price: 4100, category: "O-Level", image: "/products/math-countdown.png", description: "Intermediate level math.", rating: 5 },
    { id: "b109", name: "Islamiyat for O Levels", price: 1800, category: "O-Level", image: "/products/oxford-english.png", description: "Farkhanda Noor Muhammad.", rating: 5 },
    { id: "b110", name: "Pakistan Studies - History", price: 1600, category: "O-Level", image: "/products/oxford-english.png", description: "Nigel Kelly History.", rating: 4.5 },
    { id: "b111", name: "Pakistan Studies - Geography", price: 1600, category: "O-Level", image: "/products/oxford-english.png", description: "Huma Naz Sethi Geography.", rating: 4.5 },

    // General & Novels
    { id: "b14", name: "Feroz-ul-Lughat (Urdu)", price: 1500, category: "General", image: "/products/oxford-english.png", description: "Comprehensive Urdu to Urdu dictionary.", rating: 5 },
    { id: "b15", name: "Oxford Advanced Learner's Dictionary", price: 4500, category: "General", image: "/products/oxford-english.png", description: "Hardbound latest edition.", rating: 5, oldPrice: 5000, discount: 10 },
    { id: "b16", name: "Harry Potter & The Sorcerer's Stone", price: 1200, category: "Novels", image: "/products/oxford-english.png", description: "Original Bloomsbury edition.", rating: 5 },
    { id: "b17", name: "Peer-e-Kamil (Pbuh)", price: 1400, category: "Novels", image: "/products/oxford-english.png", description: "Umera Ahmed's best selling spiritual novel.", rating: 5 },
    { id: "b18", name: "Jannat Kay Pattay", price: 1350, category: "Novels", image: "/products/oxford-english.png", description: "Adventure and mystery novel.", rating: 4.5 },
    { id: "b112", name: "Namal by Nemrah Ahmed", price: 1800, category: "Novels", image: "/products/oxford-english.png", description: "Suspense, thriller and crime.", rating: 5 },
    { id: "b113", name: "Atomic Habits", price: 950, category: "General", image: "/products/oxford-english.png", description: "Self-help bestseller.", rating: 5, oldPrice: 1200, discount: 20 },
    { id: "b114", name: "Rich Dad Poor Dad", price: 800, category: "General", image: "/products/oxford-english.png", description: "Financial education classic.", rating: 4.5 },
];

export const uniformsData: Product[] = [
    // Boys
    { id: "u1", name: "White School Shirt - Boys (Size 12)", price: 850, category: "Boys", image: "/products/uniform-boys.png", description: "Cotton mix, crisp white shirt.", rating: 4.5 },
    { id: "u2", name: "Grey Trousers - Boys (Waist 28)", price: 1200, category: "Boys", image: "/products/uniform-boys.png", description: "Durable tropical fabric.", rating: 4 },
    { id: "u101", name: "Khaki Pants - Boys (Waist 30)", price: 1300, category: "Boys", image: "/products/uniform-boys.png", description: "Cotton rich khaki trousers.", rating: 4 },
    { id: "u102", name: "Blue Oxford Shirt - Boys", price: 900, category: "Boys", image: "/products/uniform-boys.png", description: "Premium oxford cotton.", rating: 5 },

    // Girls
    { id: "u5", name: "White Kameez - Girls (Size M)", price: 1100, category: "Girls", image: "/products/uniform-boys.png", description: "Full sleeves, comfortable fit.", rating: 4.5 },
    { id: "u6", name: "White Shalwar - Girls", price: 850, category: "Girls", image: "/products/uniform-boys.png", description: "Soft cotton shalwar.", rating: 4 },
    { id: "u7", name: "Sash / House Dupatta (Red)", price: 300, category: "Girls", image: "/products/uniform-boys.png", description: "For Red House.", rating: 4 },
    { id: "u8", name: "Sash / House Dupatta (Blue)", price: 300, category: "Girls", image: "/products/uniform-boys.png", description: "For Blue House.", rating: 4 },
    { id: "u103", name: "Sash / House Dupatta (Green)", price: 300, category: "Girls", image: "/products/uniform-boys.png", description: "For Green House.", rating: 4 },
    { id: "u104", name: "Sash / House Dupatta (Yellow)", price: 300, category: "Girls", image: "/products/uniform-boys.png", description: "For Yellow House.", rating: 4 },

    // Accessories & Shoes
    { id: "u3", name: "School Tie - Navy Blue", price: 250, category: "Accessories", image: "/products/uniform-boys.png", description: "Standard striped school tie.", rating: 4 },
    { id: "u4", name: "Black School Belt", price: 350, category: "Accessories", image: "/products/uniform-boys.png", description: "Leather finish belt with steel buckle.", rating: 4 },
    { id: "u9", name: "Bata Black Shoes - Size 4", price: 2500, category: "Shoes", image: "/cat-shoes.png", description: "Durable black school shoes.", rating: 5 },
    { id: "u10", name: "Service White Joggers - Size 5", price: 3000, category: "Shoes", image: "/cat-shoes.png", description: "For PT and sports day.", rating: 4.5 },
    { id: "u11", name: "V-Neck Sweater - Navy Blue (32)", price: 1800, category: "Winter", image: "/products/uniform-boys.png", description: "Warm wool blend sweater.", rating: 4.5 },
    { id: "u12", name: "School Blazer - Navy (36)", price: 4500, category: "Winter", image: "/products/uniform-boys.png", description: "Complete with school monogram pocket.", rating: 5 },
    { id: "u105", name: "White Socks (Pack of 3)", price: 400, category: "Accessories", image: "/products/uniform-boys.png", description: "Cotton sports socks.", rating: 4 },
    { id: "u106", name: "Black Socks (Pack of 3)", price: 400, category: "Accessories", image: "/products/uniform-boys.png", description: "Formal cotton socks.", rating: 4 },
];

export const stationeryData: Product[] = [
    // Writing
    { id: "s1", name: "Piano Point 0.5mm (Blue) - Box", price: 150, category: "Writing", image: "/products/pens-set.png", description: "Pack of 10 smooth ballpoints.", rating: 5, oldPrice: 180, discount: 15 },
    { id: "s2", name: "Dollar Ink Pen 717", price: 80, category: "Writing", image: "/products/pens-set.png", description: "Classic fountain pen for students.", rating: 4.5 },
    { id: "s3", name: "Goldfish Pencils (Pack of 12)", price: 200, category: "Writing", image: "/products/pens-set.png", description: "High quality HB pencils.", rating: 5 },
    { id: "s4", name: "Whitemate Board Markers (4 Colors)", price: 350, category: "Writing", image: "/products/pens-set.png", description: "Erasable ink markers.", rating: 4 },
    { id: "s101", name: "Piano Gel Pen (Black)", price: 30, category: "Writing", image: "/products/pens-set.png", description: "Smooth flow gel pen.", rating: 4.5 },
    { id: "s102", name: "Picasso Fountain Pen", price: 1200, category: "Writing", image: "/products/pens-set.png", description: "Premium metal body pen.", rating: 5 },
    { id: "s103", name: "Dollar Pointer Needles (Pack of 10)", price: 400, category: "Writing", image: "/products/pens-set.png", description: "Fine liners for headings.", rating: 4 },

    // Paper
    { id: "s5", name: "Broad Line Notebook - 200 Pages", price: 120, category: "Paper", image: "/products/geometry-box.png", description: "English handwriting notebook.", rating: 4 },
    { id: "s6", name: "Narrow Line Notebook - 200 Pages", price: 120, category: "Paper", image: "/products/geometry-box.png", description: "Urdu handwriting notebook.", rating: 4 },
    { id: "s7", name: "Math Register - 300 Pages", price: 350, category: "Paper", image: "/products/geometry-box.png", description: "Hard binding register.", rating: 5 },
    { id: "s8", name: "A4 Paper Ream (500 Sheets)", price: 1800, category: "Paper", image: "/products/geometry-box.png", description: "Double A premium quality paper.", rating: 5, oldPrice: 2000, discount: 10 },
    { id: "s104", name: "Spiral Notebook A4", price: 450, category: "Paper", image: "/products/geometry-box.png", description: "University standard spiral.", rating: 4.5 },
    { id: "s105", name: "Assignment Sheets (Pack of 50)", price: 200, category: "Paper", image: "/products/geometry-box.png", description: "One side ruled sheets.", rating: 4 },

    // Art
    { id: "s9", name: "Deer Water Colors - 12 Shades", price: 250, category: "Art", image: "/products/geometry-box.png", description: "Vibrant water colors for kids.", rating: 4.5 },
    { id: "s10", name: "Picasso Oil Pastels - 24 Colors", price: 450, category: "Art", image: "/products/geometry-box.png", description: "Smooth blending pastels.", rating: 5 },
    { id: "s11", name: "Sketch Book (A3)", price: 300, category: "Art", image: "/products/geometry-box.png", description: "Thick cartridge paper.", rating: 4.5 },
    { id: "s12", name: "UHU Glue Stick (Large)", price: 150, category: "Art", image: "/products/geometry-box.png", description: "Strong adhesive.", rating: 5 },
    { id: "s106", name: "Canvas Board 12x12", price: 300, category: "Art", image: "/products/geometry-box.png", description: "Cotton canvas for painting.", rating: 5 },
    { id: "s107", name: "Acrylic Paints Set (12 Tubes)", price: 850, category: "Art", image: "/products/geometry-box.png", description: "Marie's Acrylics.", rating: 4.5 },
    { id: "s108", name: "Paint Brush Set (Round)", price: 400, category: "Art", image: "/products/geometry-box.png", description: "Sizes 0 to 12.", rating: 4 },

    // Geometry
    { id: "s13", name: "Dux Geometry Box", price: 450, category: "Geometry", image: "/products/geometry-box.png", description: "Standard metal box with instruments.", rating: 4 },
    { id: "s14", name: "Casio fx-991ES Plus", price: 4500, category: "Geometry", image: "/products/geometry-box.png", description: "Scientific calculator for engineering.", rating: 5, oldPrice: 4800, discount: 6 },
    { id: "s109", name: "Steel Ruler 12 inch", price: 100, category: "Geometry", image: "/products/geometry-box.png", description: "Non-rust stainless steel.", rating: 4.5 },
    { id: "s110", name: "Helix Mathematical Set", price: 950, category: "Geometry", image: "/products/geometry-box.png", description: "Imported geometry set.", rating: 5 },
];

export const bagsData: Product[] = [
    // Backpacks
    { id: "bg1", name: "Spiderman 3D Bag", price: 2500, category: "Backpack", image: "/products/bag-spiderman.png", description: "Hard shell 3D character bag for kids.", rating: 5 },
    { id: "bg2", name: "Frozen Theme Bag", price: 2500, category: "Backpack", image: "/products/bag-frozen.png", description: "Pink/Purple Frozen theme school bag.", rating: 5 },
    { id: "bg3", name: "Senior Hiking Bag (Black)", price: 3500, category: "Backpack", image: "/cat-bags.png", description: "Large capacity multi-pocket bag.", rating: 4.5 },
    { id: "bg4", name: "Laptop Bag - Waterproof", price: 2800, category: "Backpack", image: "/cat-bags.png", description: "Padded sleeve for 15 inch laptops.", rating: 4.5 },
    { id: "bg101", name: "Adidas Classic Backpack", price: 4500, category: "Backpack", image: "/cat-bags.png", description: "Original branded sports bag.", rating: 5, oldPrice: 5500, discount: 18 },
    { id: "bg102", name: "Nike School Backpack", price: 4200, category: "Backpack", image: "/cat-bags.png", description: "Durable polyester with side pockets.", rating: 5 },
    { id: "bg103", name: "Unicorn Plush Bag", price: 1800, category: "Backpack", image: "/cat-bags.png", description: "Soft plush fabric for toddlers.", rating: 5 },

    // Trolley
    { id: "bg5", name: "Barbie Trolley Bag", price: 5500, category: "Trolley", image: "/cat-bags.png", description: "3-wheel trolley for easy stair climbing.", rating: 5 },
    { id: "bg6", name: "Ben10 Trolley Bag", price: 5500, category: "Trolley", image: "/cat-bags.png", description: "Heavy duty trolley system.", rating: 5 },
    { id: "bg104", name: "Swiss Gear 4-Wheel Trolley", price: 8500, category: "Trolley", image: "/cat-bags.png", description: "Premium travel/school hybrid.", rating: 5 },

    // Lunch & Water
    { id: "bg7", name: "Steel Water Bottle 750ml", price: 1200, category: "Essentials", image: "/products/bottle-steel.png", description: "Vacuum insulated hot/cold bottle.", rating: 4.5 },
    { id: "bg8", name: "Insulated Lunch Box", price: 850, category: "Essentials", image: "/cat-lunch.png", description: "Keep food warm for 4-6 hours.", rating: 4 },
    { id: "bg9", name: "Plastic Water Bottle", price: 450, category: "Essentials", image: "/products/bottle-steel.png", description: "BPA free durable plastic.", rating: 4 },
    { id: "bg105", name: "Thermos Food Jar", price: 2200, category: "Essentials", image: "/products/bottle-steel.png", description: "Premium soup/food container.", rating: 5 },
    { id: "bg106", name: "Milton Water Cooler 1L", price: 650, category: "Essentials", image: "/products/bottle-steel.png", description: "Classic school cooler.", rating: 4 },
];

export const dealsData = [
    {
        id: "deal1",
        name: "Spiderman 3D Hard Shell School Backpack",
        title: "Spiderman 3D Hard Shell School Backpack",
        image: "/products/bag-spiderman.png",
        price: 64,
        category: "Backpack",
        description: "Premium hard shell backpack with 3D character design.",
        oldPrice: 86,
        discount: 26,
        rating: 4,
        available: 327,
        totalStock: 500
    },
    {
        id: "deal2",
        name: "Dux Geometry Box - Complete Math Set",
        title: "Dux Geometry Box - Complete Math Set",
        image: "/products/geometry-box.png",
        price: 40,
        category: "Geometry",
        description: "Complete mathematical drawing set.",
        oldPrice: 49,
        discount: 18,
        rating: 3,
        available: 450,
        totalStock: 600
    },
    {
        id: "deal3",
        name: "Steel Water Bottle - Vacuum Insulated",
        title: "Steel Water Bottle - Vacuum Insulated",
        image: "/products/bottle-steel.png",
        price: 36,
        category: "Essentials",
        description: "Keep your drinks hot or cold for hours.",
        oldPrice: 49,
        discount: 27,
        rating: 5,
        available: 280,
        totalStock: 400
    },
    {
        id: "deal4",
        name: "Oxford Modern English - Primer A",
        title: "Oxford Modern English - Primer A",
        image: "/products/oxford-english.png",
        price: 67,
        category: "Pre-School",
        description: "Standard foundation English book.",
        oldPrice: 71,
        discount: 6,
        rating: 5,
        available: 445,
        totalStock: 1000
    },
    {
        id: "deal5",
        name: "Frozen Theme School Bag",
        title: "Frozen Theme School Bag",
        image: "/products/bag-frozen.png",
        price: 70,
        category: "Backpack",
        description: "Stylish and spacious school bag.",
        oldPrice: 82,
        discount: 15,
        rating: 4,
        available: 247,
        totalStock: 300
    },
    {
        id: "deal6",
        name: "Piano Point 0.5mm (Blue) - Box of 10",
        title: "Piano Point 0.5mm (Blue) - Box of 10",
        image: "/products/pens-set.png",
        price: 45,
        category: "Writing",
        description: "Smooth writing ballpoints.",
        oldPrice: 76,
        discount: 41,
        rating: 5,
        available: 291,
        totalStock: 500
    },
    {
        id: "deal7",
        name: "Special School Uniform Set",
        title: "Special School Uniform Set",
        image: "/cat-uniforms.png",
        price: 55,
        category: "Uniforms",
        description: "Complete uniform set value pack.",
        oldPrice: 70,
        discount: 21,
        rating: 4,
        available: 150,
        totalStock: 300
    },
    {
        id: "deal8",
        name: "Classic Leather School Shoes",
        title: "Classic Leather School Shoes",
        image: "/cat-shoes.png",
        price: 42,
        category: "Shoes",
        description: "Durable and comfortable leather shoes.",
        oldPrice: 60,
        discount: 30,
        rating: 5,
        available: 200,
        totalStock: 500
    }
];
