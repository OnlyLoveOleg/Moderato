import { BaseModel } from '@/types/base';

interface ParentCategory extends BaseModel {
  name: string;
}

export interface Category extends BaseModel {
  name: string;
  parent?: ParentCategory;
}
