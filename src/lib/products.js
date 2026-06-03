 











const img = (seed, w = 800, h = 1000) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const products = [
  { id: "linen-shirt", name: "Linen Sand Shirt", price: 89, category: "men", collection: "summer",
    colors: ["#e8dcc4", "#1a1a1a", "#6b8e7f"], sizes: ["S","M","L","XL"],
    image: img("photo-1602810318383-e386cc2a3ccf"),
    description: "Breathable European linen with a relaxed silhouette. Cut and sewn in small batches." },
  { id: "silk-slip-dress", name: "Silk Slip Dress", price: 220, category: "women", collection: "formal",
    colors: ["#1a1a1a", "#8b1538", "#c9a84c"], sizes: ["XS","S","M","L"],
    image: img("photo-1539109136881-3be0616acf4b"),
    description: "Bias-cut mulberry silk that moves like water. A modern heirloom." },
  { id: "wool-overcoat", name: "Wool Overcoat", price: 540, category: "women", collection: "formal",
    colors: ["#2d2522", "#1a1a1a"], sizes: ["XS","S","M","L"],
    image: img("photo-1551488831-00ddcb6c6bd3"),
    description: "Double-faced Italian wool, single-breasted, hand-finished lapel." },
  { id: "festive-kurta", name: "Embroidered Kurta", price: 165, category: "men", collection: "festive",
    colors: ["#f5f0e0", "#0c2340", "#8b1538"], sizes: ["S","M","L","XL","XXL"],
    image: img("photo-1622445275576-721325763afe"),
    description: "Hand-embroidered cotton kurta for celebrations big and small." },
  { id: "saree-noir", name: "Noir Drape Saree", price: 310, category: "women", collection: "festive",
    colors: ["#0d0d0d", "#c9a84c"], sizes: ["Free"],
    image: img("photo-1610030469983-98e550d6193c"),
    description: "Six yards of pure chiffon with hand-finished gold border." },
  { id: "cotton-tee", name: "Essential Cotton Tee", price: 38, category: "men", collection: "casual",
    colors: ["#ffffff", "#1a1a1a", "#6b8e7f", "#e85d3a"], sizes: ["S","M","L","XL"],
    image: img("photo-1521572163474-6864f9cf17ab"),
    description: "Heavyweight 240gsm organic cotton. Built to outlast trends." },
  { id: "denim-wide", name: "Wide Leg Denim", price: 145, category: "women", collection: "casual",
    colors: ["#3a4a5e", "#0d0d0d"], sizes: ["24","26","28","30","32"],
    image: img("photo-1541099649105-f69ad21f3246"),
    description: "Rigid Japanese selvedge denim, high-rise wide leg." },
  { id: "kids-romper", name: "Garden Play Romper", price: 52, category: "kids", collection: "summer",
    colors: ["#f5e6d3", "#a8c0a0"], sizes: ["2Y","4Y","6Y","8Y"],
    image: img("photo-1519278409-1f56fdda7fe5"),
    description: "Soft cotton romper with hand-painted print. Made for play." },
  { id: "linen-trousers", name: "Pleated Linen Trouser", price: 128, category: "men", collection: "summer",
    colors: ["#e8dcc4", "#2d2d2d"], sizes: ["28","30","32","34","36"],
    image: img("photo-1473966968600-fa801b869a1a"),
    description: "Front-pleated linen trousers with a tapered ankle." },
  { id: "cashmere-knit", name: "Cashmere Crew Knit", price: 285, category: "women", collection: "casual",
    colors: ["#f0ebe3", "#1a1a1a", "#8b1538"], sizes: ["XS","S","M","L"],
    image: img("photo-1434389677669-e08b4cac3105"),
    description: "Mongolian cashmere, fully-fashioned crew with ribbed cuffs." },
  { id: "tux-jacket", name: "Black Tuxedo Jacket", price: 620, category: "men", collection: "formal",
    colors: ["#0d0d0d"], sizes: ["38","40","42","44","46"],
    image: img("photo-1594938298603-c8148c4dae35"),
    description: "Satin peak lapel tuxedo jacket, half-canvas construction." },
  { id: "kids-festive", name: "Mini Festive Set", price: 78, category: "kids", collection: "festive",
    colors: ["#c9a84c", "#8b1538"], sizes: ["2Y","4Y","6Y","8Y"],
    image: img("photo-1518831959646-742c3a14ebf7"),
    description: "Coordinated festive set for the smallest celebrants." },
];

export const collections = [
  { id: "summer", name: "Summer", tagline: "Light. Linen. Sun-bleached ease.",
    image: img("photo-1469334031218-e382a71b716b", 1200, 800) },
  { id: "festive", name: "Festive", tagline: "Heirloom craft for moments that matter.",
    image: img("photo-1610030469983-98e550d6193c", 1200, 800) },
  { id: "casual", name: "Casual", tagline: "Quiet essentials, built to last.",
    image: img("photo-1483985988355-763728e1935b", 1200, 800) },
  { id: "formal", name: "Formal", tagline: "Tailoring with intent.",
    image: img("photo-1594938298603-c8148c4dae35", 1200, 800) },
];

export const getProduct = (id) => products.find((p) => p.id === id);
