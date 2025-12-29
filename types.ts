
export interface Competition {
  id: string;
  title: string;
  date: string;
  location: string;
  result: string;
  description: string; // Short summary
  story: string; // Full detailed story
  judgeComment?: string; // Specific feedback from the judge
  imageUrl: string;
  gallery?: string[]; // Additional images
  featured?: boolean;
}

export interface ServiceItem {
  name: string;
  price: string;
  details: string[];
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string; // e.g., "Éleveur Berger Australien"
  text: string;
  rating: number;
}
