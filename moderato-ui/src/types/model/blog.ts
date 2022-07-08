import { BaseModel } from '@/types/base';
import { Category } from './category';

export interface Blog extends BaseModel {
  title: string;
  content: string;
  category: Category;
}
