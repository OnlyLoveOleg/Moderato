import { BaseCMS } from '@/types/base';
import { Theme } from '@/types/model';

export type ParentCategory = Category;

export interface Category extends BaseCMS {
  /**
   * カテゴリー名
   */
  name: string;
  /**
   * 主要カテゴリー（All, Design, Front, Server, Infra）
   */
  isPrimary: boolean;
  /**
   * テーマカラー
   */
  theme: Theme;
  /**
   * 親カテゴリー
   */
  parent?: ParentCategory;
}
