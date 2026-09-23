export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'ferment' | 'powder' | 'bio' | 'starter';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  size: string;
  unit: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'orange' | 'tertiary';
  image: string;
  alt: string;
  description: string;
  mixingRatio: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  province: string;
  farmType: string;
  rating: number;
  comment: string;
  badgeBg: string;
  badgeText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  content: string[];
}

export type ActiveTab = 'home' | 'products' | 'cart' | 'articles' | 'contact' | 'faq';
