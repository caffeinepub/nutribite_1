export type ProductSize = {
  name: "Small" | "Medium" | "Family";
  label: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: "ragi-chips" | "jowar-puffs" | "millet-cookies" | "combo";
  image: string;
  sizes: ProductSize[];
  rating: number;
  reviews: number;
  badge?: string;
};

export const products: Product[] = [
  // Ragi Chips
  {
    id: "rc-1",
    name: "Ragi Chips – Original Salted",
    description:
      "Classic crispy ragi chips lightly salted for a pure, clean flavor. Zero preservatives, zero guilt.",
    category: "ragi-chips",
    image: "/assets/generated/ragi-chips.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (50g)", price: 49 },
      { name: "Medium", label: "Medium (100g)", price: 99 },
      { name: "Family", label: "Family (200g)", price: 189 },
    ],
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: "rc-2",
    name: "Ragi Chips – Masala Twist",
    description:
      "Bold masala spices meet crispy ragi — a taste explosion that's still low-oil and healthy.",
    category: "ragi-chips",
    image: "/assets/generated/ragi-chips.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (50g)", price: 49 },
      { name: "Medium", label: "Medium (100g)", price: 99 },
      { name: "Family", label: "Family (200g)", price: 189 },
    ],
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "rc-3",
    name: "Ragi Chips – Lemon Pepper",
    description:
      "Zesty lemon and cracked pepper make this ragi chip a refreshing, tangy snack experience.",
    category: "ragi-chips",
    image: "/assets/generated/ragi-chips.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (50g)", price: 55 },
      { name: "Medium", label: "Medium (100g)", price: 109 },
      { name: "Family", label: "Family (200g)", price: 199 },
    ],
    rating: 4.6,
    reviews: 76,
  },
  // Jowar Puffs
  {
    id: "jp-1",
    name: "Jowar Puffs – Classic Butter",
    description:
      "Light, airy puffs with a delicate butter flavor. Low-calorie snacking without compromise.",
    category: "jowar-puffs",
    image: "/assets/generated/jowar-puffs.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (50g)", price: 45 },
      { name: "Medium", label: "Medium (100g)", price: 89 },
      { name: "Family", label: "Family (200g)", price: 169 },
    ],
    rating: 4.5,
    reviews: 88,
    badge: "New",
  },
  {
    id: "jp-2",
    name: "Jowar Puffs – Cheese & Herb",
    description:
      "Creamy cheese blended with aromatic herbs on jowar puffs — indulgent yet incredibly light.",
    category: "jowar-puffs",
    image: "/assets/generated/jowar-puffs.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (50g)", price: 55 },
      { name: "Medium", label: "Medium (100g)", price: 99 },
      { name: "Family", label: "Family (200g)", price: 185 },
    ],
    rating: 4.7,
    reviews: 112,
  },
  {
    id: "jp-3",
    name: "Jowar Puffs – Tangy Tomato",
    description:
      "Sun-ripened tomato goodness on airy jowar puffs. Bright, tangy, and totally addictive.",
    category: "jowar-puffs",
    image: "/assets/generated/jowar-puffs.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (50g)", price: 45 },
      { name: "Medium", label: "Medium (100g)", price: 89 },
      { name: "Family", label: "Family (200g)", price: 169 },
    ],
    rating: 4.4,
    reviews: 65,
  },
  // Millet Cookies
  {
    id: "mc-1",
    name: "Millet Cookies – Choco Chip",
    description:
      "Soft, chewy millet cookies loaded with dark chocolate chips. Healthy treats for all ages!",
    category: "millet-cookies",
    image: "/assets/generated/millet-cookies.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (6 pcs)", price: 65 },
      { name: "Medium", label: "Medium (12 pcs)", price: 125 },
      { name: "Family", label: "Family (24 pcs)", price: 239 },
    ],
    rating: 4.9,
    reviews: 201,
    badge: "Fan Fav",
  },
  {
    id: "mc-2",
    name: "Millet Cookies – Almond Crunch",
    description:
      "Buttery millet cookies with slivered almonds baked to a golden crunch. Protein-rich snacking.",
    category: "millet-cookies",
    image: "/assets/generated/millet-cookies.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (6 pcs)", price: 75 },
      { name: "Medium", label: "Medium (12 pcs)", price: 145 },
      { name: "Family", label: "Family (24 pcs)", price: 275 },
    ],
    rating: 4.8,
    reviews: 145,
  },
  {
    id: "mc-3",
    name: "Millet Cookies – Jaggery Oats",
    description:
      "Traditional jaggery sweetness meets wholesome oats in a heart-healthy millet cookie.",
    category: "millet-cookies",
    image: "/assets/generated/millet-cookies.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "Small (6 pcs)", price: 65 },
      { name: "Medium", label: "Medium (12 pcs)", price: 125 },
      { name: "Family", label: "Family (24 pcs)", price: 239 },
    ],
    rating: 4.6,
    reviews: 89,
  },
  // Combo Packs
  {
    id: "cp-1",
    name: "Starter Pack",
    description:
      "Perfect intro to NutriBite! Includes 1 pack each of Ragi Chips, Jowar Puffs, and Millet Cookies.",
    category: "combo",
    image: "/assets/generated/combo-pack.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "3-Pack Combo", price: 149 },
      { name: "Medium", label: "3-Pack Combo", price: 149 },
      { name: "Family", label: "3-Pack Combo", price: 149 },
    ],
    rating: 4.8,
    reviews: 234,
    badge: "Value Pick",
  },
  {
    id: "cp-2",
    name: "Family Fiesta",
    description:
      "The ultimate family snack box! 6 assorted packs of our bestsellers in medium sizes.",
    category: "combo",
    image: "/assets/generated/combo-pack.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "6-Pack Combo", price: 299 },
      { name: "Medium", label: "6-Pack Combo", price: 299 },
      { name: "Family", label: "6-Pack Combo", price: 299 },
    ],
    rating: 4.9,
    reviews: 178,
  },
  {
    id: "cp-3",
    name: "Mega Millet Box",
    description:
      "Go big with 12 assorted millet snack packs — perfect for offices, parties, or bulk buyers.",
    category: "combo",
    image: "/assets/generated/combo-pack.dim_600x500.jpg",
    sizes: [
      { name: "Small", label: "12-Pack Mega Box", price: 499 },
      { name: "Medium", label: "12-Pack Mega Box", price: 499 },
      { name: "Family", label: "12-Pack Mega Box", price: 499 },
    ],
    rating: 4.9,
    reviews: 312,
    badge: "Best Value",
  },
];

export const bestSellers = products.filter((p) =>
  ["rc-1", "jp-2", "mc-1", "cp-3"].includes(p.id),
);
