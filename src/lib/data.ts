import type { Product, Brand, CategoryInfo } from "./types";

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories: CategoryInfo[] = [
  { id: "luxury", name: "Luxury Watches", description: "Timeless craftsmanship", image: img("photo-1523275335684-37898b6baf30") },
  { id: "smart", name: "Smart Watches", description: "Modern intelligence", image: img("photo-1551816230-ef5deaed4a26") },
  { id: "sports", name: "Sports Watches", description: "Built for performance", image: img("photo-1542496658-e33a6d0d50f6") },
  { id: "mens", name: "Men's Watches", description: "Bold & refined", image: img("photo-1622434641406-a158123450f9") },
  { id: "womens", name: "Women's Watches", description: "Elegant & graceful", image: img("photo-1535632787350-4e68ef0ac584") },
  { id: "vintage", name: "Vintage Watches", description: "Heritage classics", image: img("photo-1547996160-81dfa63595aa") },
  { id: "limited", name: "Limited Edition", description: "Rare & collectible", image: img("photo-1614703418878-13d5a0e8a8bf") },
  { id: "affordable", name: "Affordable Watches", description: "Style for everyone", image: img("photo-1524805444758-089113d48a6d") },
];

export const brands: Brand[] = [
  { id: "rolex", name: "Rolex", tagline: "A crown for every achievement" },
  { id: "omega", name: "Omega", tagline: "Mastering precision since 1848" },
  { id: "tagheuer", name: "TAG Heuer", tagline: "Don't crack under pressure" },
  { id: "tissot", name: "Tissot", tagline: "Innovators by tradition" },
  { id: "seiko", name: "Seiko", tagline: "Always one step ahead" },
  { id: "casio", name: "Casio", tagline: "Born to dare" },
  { id: "citizen", name: "Citizen", tagline: "Better starts now" },
  { id: "fossil", name: "Fossil", tagline: "A long live vintage" },
  { id: "timex", name: "Timex", tagline: "Wear it well" },
];

const watchImages = [
  "photo-1523275335684-37898b6baf30",
  "photo-1622434641406-a158123450f9",
  "photo-1547996160-81dfa63595aa",
  "photo-1524592094714-0f0654e20314",
  "photo-1542496658-e33a6d0d50f6",
  "photo-1533139502658-0198f920d8e8",
  "photo-1495704907664-81f74a7efd9b",
  "photo-1509048191080-d2984bad6ae5",
  "photo-1606293459339-aa5d34a7b0e1",
  "photo-1518049362265-d5b2a6467637",
  "photo-1612817159949-195b6eb9e31a",
  "photo-1620625515032-6ed0c1790c75",
  "photo-1639037687665-37e88c2237a4",
  "photo-1622434641406-a158123450f9",
  "photo-1434056886845-dac89ffe9b56",
  "photo-1565440962783-f87efdea99fd",
  "photo-1537585669093-803a44cce2c8",
  "photo-1611105204021-fd1d9b8d72fb",
  "photo-1548171915-e5e63b35d8c4",
  "photo-1614703418878-13d5a0e8a8bf",
  "photo-1577803645773-f96470509666",
  "photo-1551816230-ef5deaed4a26",
  "photo-1579586337278-3befd40fd17a",
  "photo-1524805444758-089113d48a6d",
];

const productSeeds: Array<Partial<Product> & Pick<Product, "name" | "brand" | "price" | "category" | "gender">> = [
  { name: "Submariner Date", brand: "Rolex", price: 9850, oldPrice: 10500, category: "luxury", gender: "men", badge: "Premium", bestSeller: true, trending: true },
  { name: "Datejust 41", brand: "Rolex", price: 8700, category: "luxury", gender: "men", badge: "Premium" },
  { name: "Speedmaster Pro", brand: "Omega", price: 6200, category: "luxury", gender: "men", badge: "Bestseller", bestSeller: true },
  { name: "Seamaster Aqua Terra", brand: "Omega", price: 5400, oldPrice: 5900, category: "sports", gender: "men", badge: "Sale", trending: true },
  { name: "Carrera Chronograph", brand: "TAG Heuer", price: 4100, category: "sports", gender: "men", badge: "New", newArrival: true },
  { name: "Aquaracer Pro 300", brand: "TAG Heuer", price: 3200, category: "sports", gender: "unisex", trending: true },
  { name: "Le Locle Powermatic", brand: "Tissot", price: 745, category: "affordable", gender: "men", badge: "Bestseller", bestSeller: true },
  { name: "PRX Powermatic 80", brand: "Tissot", price: 695, oldPrice: 795, category: "affordable", gender: "unisex", badge: "Sale", trending: true },
  { name: "Prospex Diver", brand: "Seiko", price: 525, category: "sports", gender: "men", badge: "New", newArrival: true },
  { name: "Presage Cocktail", brand: "Seiko", price: 410, category: "mens", gender: "men", bestSeller: true },
  { name: "G-Shock GA-2100", brand: "Casio", price: 99, category: "affordable", gender: "unisex", badge: "Bestseller", bestSeller: true, trending: true },
  { name: "Edifice EQB-1100", brand: "Casio", price: 320, category: "smart", gender: "men", badge: "New", newArrival: true },
  { name: "Eco-Drive Promaster", brand: "Citizen", price: 480, category: "sports", gender: "men" },
  { name: "Tsuyosa Automatic", brand: "Citizen", price: 395, oldPrice: 450, category: "mens", gender: "men", badge: "Sale" },
  { name: "Neutra Chronograph", brand: "Fossil", price: 189, category: "affordable", gender: "men", newArrival: true },
  { name: "Carlie Mini", brand: "Fossil", price: 129, category: "womens", gender: "women", badge: "New", newArrival: true },
  { name: "Marlin Automatic", brand: "Timex", price: 249, category: "vintage", gender: "men", badge: "Bestseller", bestSeller: true },
  { name: "Q Timex Reissue", brand: "Timex", price: 179, category: "vintage", gender: "unisex", trending: true },
  { name: "Daytona Platinum", brand: "Rolex", price: 78500, category: "limited", gender: "men", badge: "Limited" },
  { name: "Constellation Manhattan", brand: "Omega", price: 6300, category: "womens", gender: "women", badge: "Premium" },
  { name: "Connected Calibre E4", brand: "TAG Heuer", price: 1800, category: "smart", gender: "unisex", badge: "New", newArrival: true, trending: true },
  { name: "Astron GPS Solar", brand: "Seiko", price: 2200, category: "smart", gender: "men" },
  { name: "Lady-Datejust 28", brand: "Rolex", price: 7900, category: "womens", gender: "women", badge: "Premium" },
  { name: "GMT-Master II Pepsi", brand: "Rolex", price: 18500, category: "limited", gender: "men", badge: "Limited", trending: true },
];

const sampleDesc = (p: { name: string; brand: string; category: string }) =>
  `The ${p.brand} ${p.name} is a striking expression of ${p.category} watchmaking — engineered with meticulous attention to detail, premium materials, and timeless design language that performs as beautifully as it looks.`;

const baseSpecs = {
  Movement: "Automatic",
  "Case Material": "Stainless Steel",
  "Case Size": "41mm",
  "Water Resistance": "100m",
  "Crystal": "Sapphire",
  "Strap": "Steel Bracelet",
  Warranty: "2 Years International",
};

export const products: Product[] = productSeeds.map((p, i) => {
  const id = `w-${i + 1}`;
  const image = img(watchImages[i % watchImages.length], 900);
  const images = [0, 1, 2].map((k) => img(watchImages[(i + k) % watchImages.length], 1100));
  return {
    id,
    name: p.name!,
    brand: p.brand!,
    price: p.price!,
    oldPrice: p.oldPrice,
    rating: 4.2 + ((i * 7) % 9) / 10,
    reviews: 40 + ((i * 13) % 300),
    image,
    images,
    category: p.category!,
    gender: p.gender!,
    badge: p.badge,
    trending: p.trending,
    newArrival: p.newArrival,
    bestSeller: p.bestSeller,
    description: sampleDesc({ name: p.name!, brand: p.brand!, category: p.category! }),
    specs: { ...baseSpecs, Brand: p.brand!, Model: p.name! },
  } as Product;
});

export const trending = products.filter((p) => p.trending);
export const newArrivals = products.filter((p) => p.newArrival);
export const bestSellers = products.filter((p) => p.bestSeller);
export const premium = products.filter((p) => p.price >= 5000);
export const affordable = products.filter((p) => p.price < 800);

export const testimonials = [
  { name: "James Whitman", role: "Collector, London", text: "Exceptional authenticity and packaging. My Submariner arrived flawless — the buying experience matched the watch itself.", rating: 5 },
  { name: "Aiko Tanaka", role: "Designer, Tokyo", text: "I bought a vintage Seiko and a smart Citizen here. Both feel premium and the curation is outstanding.", rating: 5 },
  { name: "Marco Rossi", role: "Entrepreneur, Milan", text: "Smooth shipping, real warranty, real watches. ChronoLuxe has become my go-to for serious purchases.", rating: 5 },
];
