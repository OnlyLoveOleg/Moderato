import { BaseCMS } from '@/types/base';
import { Category, Thumbnail } from '@/types/model';

export interface Blog extends BaseCMS {
  /**
   * タイトル
   */
  title: string;
  /**
   * サブタイトル
   */
  subTitle: string;
  /**
   * 本文
   */
  content: string;
  /**
   * ブログのカテゴリー
   */
  category: Category;
  /**
   * サムネイル
   */
  thumbnail: Thumbnail;
  /**
   * おすすめ
   */
  recommend: boolean;
}
