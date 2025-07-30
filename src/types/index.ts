export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  imageUrl: string[];
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}