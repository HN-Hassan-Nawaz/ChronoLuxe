export type Category =
  | "luxury"
  | "smart"
  | "sports"
  | "mens"
  | "womens"
  | "vintage"
  | "limited"
  | "affordable";

export type Badge = "New" | "Premium" | "Sale" | "Limited" | "Bestseller";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: Category;
  gender: "men" | "women" | "unisex";
  badge?: Badge;
  trending?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
  description: string;
  specs: Record<string, string>;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  image: string;
}
