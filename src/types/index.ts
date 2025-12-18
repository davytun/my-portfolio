
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url: string;
  featured?: boolean;
  createdAt?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author?: {
    name: string;
    avatar: string;
  };
  tags?: string[];
}

export interface ContactFormData {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
  status?: 'new' | 'read' | 'replied' | 'archived';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}
