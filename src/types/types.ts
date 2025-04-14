export interface Service {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: number;
  featured: boolean;
  image: string;
}

export type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  service: string;
  text: string;
  rating: number;
};
