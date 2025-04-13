export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  unit?: number;
  featured?: boolean;
  image: string;
  images?: string[];
  description?: string;
  sizes?: string[];
  features?: string[];
  badge?: {
    text: string;
    color: string;
  };
}
