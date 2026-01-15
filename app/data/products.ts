export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    rating: number;
}

export const booksData: Product[] = [
    // Pre-School & Primary
    { id: "b1", name: "Oxford Modern English - Primer A", price: 850, category: "Pre-School", image: "/products/oxford-english.png", description: "Standard English curriculum book for beginners.", rating: 5 },
    { id: "b2", name: "New Countdown Mathematics - Level 1", price: 950, category: "Primary", image: "/products/math-countdown.png", description: "Oxford simplified math for grade 1.", rating: 4.5 },
    { id: "b3", name: "Urdu Khushkhati - Class 2", price: 350, category: "Primary", image: "/products/oxford-english.png", description: "Improve handwriting with traced exercises.", rating: 4 },
    { id: "b4", name: "Science Factor - Level 3", price: 1050, category: "Primary", image: "/products/math-countdown.png", description: "Engaging science concepts for young minds.", rating: 5 },
    { id: "b5", name: "Oxford Social Studies - Class 5", price: 980, category: "Primary", image: "/products/oxford-english.png", description: "History and geography basics.", rating: 4.5 },

    // Middle School
    { id: "b6", name: "Geography of Pakistan - Class 7", price: 750, category: "Middle", image: "/placeholder", description: "In-depth study of Pakistan's landscapes.", rating: 4 },
    { id: "b7", name: "Computer Whiz - Class 8", price: 1200, category: "Middle", image: "/placeholder", description: "Introduction to programming and ICT.", rating: 5 },
    { id: "b8", name: "History: The Islamic World", price: 650, category: "Middle", image: "/placeholder", description: "Historical overview for grades 6-8.", rating: 4 },

    // Matric / O-Level
    { id: "b9", name: "Physics Class 9 - PTB", price: 450, category: "Matric", image: "/placeholder", description: "Punjab Textbook Board standard physics.", rating: 4.5 },
    { id: "b10", name: "Chemistry Class 10 - PTB", price: 480, category: "Matric", image: "/placeholder", description: "Punjab Textbook Board standard chemistry.", rating: 4.5 },
    { id: "b11", name: "Redspot Physics - O Level", price: 2500, category: "O-Level", image: "/placeholder", description: "Solved past papers with detailed explanations.", rating: 5 },
    { id: "b12", name: "Redspot Chemistry - O Level", price: 2500, category: "O-Level", image: "/placeholder", description: "Topical past papers for chemistry.", rating: 5 },
    { id: "b13", name: "Biology Matters - GCE O Level", price: 3200, category: "O-Level", image: "/placeholder", description: "Marshall Cavendish biology textbook.", rating: 5 },

    // General
    { id: "b14", name: "Feroz-ul-Lughat (Urdu)", price: 1500, category: "General", image: "/placeholder", description: "Comprehensive Urdu to Urdu dictionary.", rating: 5 },
    { id: "b15", name: "Oxford Advanced Learner's Dictionary", price: 4500, category: "General", image: "/placeholder", description: "Hardbound latest edition.", rating: 5 },
    { id: "b16", name: "Harry Potter & The Sorcerer's Stone", price: 1200, category: "Novels", image: "/placeholder", description: "Original Bloomsbury edition.", rating: 5 },
    { id: "b17", name: "Peer-e-Kamil (Pbuh)", price: 1400, category: "Novels", image: "/placeholder", description: "Umera Ahmed's best selling spiritual novel.", rating: 5 },
    { id: "b18", name: "Jannat Kay Pattay", price: 1350, category: "Novels", image: "/placeholder", description: "Adventure and mystery novel.", rating: 4.5 },
];

export const uniformsData: Product[] = [
    // Boys
    { id: "u1", name: "White School Shirt - Boys (Size 12)", price: 850, category: "Boys", image: "/products/uniform-boys.png", description: "Cotton mix, crisp white shirt.", rating: 4.5 },
    { id: "u2", name: "Grey Trousers - Boys (Waist 28)", price: 1200, category: "Boys", image: "/products/uniform-boys.png", description: "Durable tropical fabric.", rating: 4 },
    { id: "u3", name: "School Tie - Navy Blue", price: 250, category: "Accessories", image: "/products/uniform-boys.png", description: "Standard striped school tie.", rating: 4 },
    { id: "u4", name: "Black School Belt", price: 350, category: "Accessories", image: "/products/uniform-boys.png", description: "Leather finish belt with steel buckle.", rating: 4 },

    // Girls
    { id: "u5", name: "White Kameez - Girls (Size M)", price: 1100, category: "Girls", image: "/placeholder", description: "Full sleeves, comfortable fit.", rating: 4.5 },
    { id: "u6", name: "White Shalwar - Girls", price: 850, category: "Girls", image: "/placeholder", description: "Soft cotton shalwar.", rating: 4 },
    { id: "u7", name: "Sash / House Dupatta (Red)", price: 300, category: "Girls", image: "/placeholder", description: "For Red House.", rating: 4 },
    { id: "u8", name: "Sash / House Dupatta (Blue)", price: 300, category: "Girls", image: "/placeholder", description: "For Blue House.", rating: 4 },

    // Shoes
    { id: "u9", name: "Bata Black Shoes - Size 4", price: 2500, category: "Shoes", image: "/cat-shoes.png", description: "Durable black school shoes.", rating: 5 },
    { id: "u10", name: "Service White Joggers - Size 5", price: 3000, category: "Shoes", image: "/cat-shoes.png", description: "For PT and sports day.", rating: 4.5 },

    // Winter
    { id: "u11", name: "V-Neck Sweater - Navy Blue (32)", price: 1800, category: "Winter", image: "/placeholder", description: "Warm wool blend sweater.", rating: 4.5 },
    { id: "u12", name: "School Blazer - Navy (36)", price: 4500, category: "Winter", image: "/placeholder", description: "Complete with school monogram pocket.", rating: 5 },
];

export const stationeryData: Product[] = [
    // Writing
    { id: "s1", name: "Piano Point 0.5mm (Blue) - Box", price: 150, category: "Writing", image: "/products/pens-set.png", description: "Pack of 10 smooth ballpoints.", rating: 5 },
    { id: "s2", name: "Dollar Ink Pen 717", price: 80, category: "Writing", image: "/products/pens-set.png", description: "Classic fountain pen for students.", rating: 4.5 },
    { id: "s3", name: "Goldfish Pencils (Pack of 12)", price: 200, category: "Writing", image: "/products/pens-set.png", description: "High quality HB pencils.", rating: 5 },
    { id: "s4", name: "Whitemate Board Markers (4 Colors)", price: 350, category: "Writing", image: "/products/pens-set.png", description: "Erasable ink markers.", rating: 4 },

    // Paper
    { id: "s5", name: "Broad Line Notebook - 200 Pages", price: 120, category: "Paper", image: "/placeholder", description: "English handwriting notebook.", rating: 4 },
    { id: "s6", name: "Narrow Line Notebook - 200 Pages", price: 120, category: "Paper", image: "/placeholder", description: "Urdu handwriting notebook.", rating: 4 },
    { id: "s7", name: "Math Register - 300 Pages", price: 350, category: "Paper", image: "/placeholder", description: "Hard binding register.", rating: 5 },
    { id: "s8", name: "A4 Paper Ream (500 Sheets)", price: 1800, category: "Paper", image: "/placeholder", description: "Double A premium quality paper.", rating: 5 },

    // Art
    { id: "s9", name: "Deer Water Colors - 12 Shades", price: 250, category: "Art", image: "/placeholder", description: "Vibrant water colors for kids.", rating: 4.5 },
    { id: "s10", name: "Picasso Oil Pastels - 24 Colors", price: 450, category: "Art", image: "/placeholder", description: "Smooth blending pastels.", rating: 5 },
    { id: "s11", name: "Sketch Book (A3)", price: 300, category: "Art", image: "/placeholder", description: "Thick cartridge paper.", rating: 4.5 },
    { id: "s12", name: "UHU Glue Stick (Large)", price: 150, category: "Art", image: "/placeholder", description: "Strong adhesive.", rating: 5 },

    // Geometry
    { id: "s13", name: "Dux Geometry Box", price: 450, category: "Geometry", image: "/products/geometry-box.png", description: "Standard metal box with instruments.", rating: 4 },
    { id: "s14", name: "Casio fx-991ES Plus", price: 4500, category: "Geometry", image: "/products/geometry-box.png", description: "Scientific calculator for engineering.", rating: 5 },
];

export const bagsData: Product[] = [
    // Backpacks
    { id: "bg1", name: "Spiderman 3D Bag", price: 2500, category: "Backpack", image: "/products/bag-spiderman.png", description: "Hard shell 3D character bag for kids.", rating: 5 },
    { id: "bg2", name: "Frozen Theme Bag", price: 2500, category: "Backpack", image: "/products/bag-frozen.png", description: "Pink/Purple Frozen theme school bag.", rating: 5 },
    { id: "bg3", name: "Senior Hiking Bag (Black)", price: 3500, category: "Backpack", image: "/cat-bags.png", description: "Large capacity multi-pocket bag.", rating: 4.5 },
    { id: "bg4", name: "Laptop Bag - Waterproof", price: 2800, category: "Backpack", image: "/cat-bags.png", description: "Padded sleeve for 15 inch laptops.", rating: 4.5 },

    // Trolley
    { id: "bg5", name: "Barbie Trolley Bag", price: 5500, category: "Trolley", image: "/cat-bags.png", description: "3-wheel trolley for easy stair climbing.", rating: 5 },
    { id: "bg6", name: "Ben10 Trolley Bag", price: 5500, category: "Trolley", image: "/cat-bags.png", description: "Heavy duty trolley system.", rating: 5 },

    // Lunch & Water
    { id: "bg7", name: "Steel Water Bottle 750ml", price: 1200, category: "Essentials", image: "/products/bottle-steel.png", description: "Vacuum insulated hot/cold bottle.", rating: 4.5 },
    { id: "bg8", name: "Insulated Lunch Box", price: 850, category: "Essentials", image: "/cat-lunch.png", description: "Keep food warm for 4-6 hours.", rating: 4 },
    { id: "bg9", name: "Plastic Water Bottle", price: 450, category: "Essentials", image: "/products/bottle-steel.png", description: "BPA free durable plastic.", rating: 4 },
];
