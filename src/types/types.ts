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

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: number;
  featured: boolean;
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
  rating: number;
}

export interface TimeSlot {
  value: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}
