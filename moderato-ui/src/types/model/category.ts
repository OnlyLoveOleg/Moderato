import { BaseCMS } from '@/types/base';
import { Theme } from '@/types/model';

export interface ParentCategory extends BaseCMS {
  /**
   * カテゴリー名
   */
  name: string;
  /**
   * テーマカラー
   */
  theme: Theme;
  /**
   * 親カテゴリーのさらに親カテゴリー
   */
  parent?: ParentCategory;
}

export interface Category extends BaseCMS {
  /**
   * カテゴリー名
   */
  name: string;
  /**
   * テーマカラー
   */
  theme: Theme;
  /**
   * 親カテゴリー
   */
  parent?: ParentCategory;
}
