import { Category } from './category';

export interface Blog {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  content: string;
  category: Category;
}
