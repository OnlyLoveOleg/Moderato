import { BaseCMS } from '@/types/base';
import { Category, Thumbnail, Author } from '@/types/model';

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
   * おすすめ
   */
  recommend: boolean;
  /**
   * サムネイル
   */
  thumbnail: Thumbnail;
  /**
   * 作者
   */
  author: Author;
  /**
   * ブログのカテゴリー
   */
  category: Category;
}
