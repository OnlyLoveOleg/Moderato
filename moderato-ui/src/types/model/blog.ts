import { BaseCMS } from '@/types/base';
import { Category, Thumbnail, Author, Tag } from '@/types/model';

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
   * サムネイル（必須にしたいが無しにしたいかも）
   */
  thumbnail?: Thumbnail;
  /**
   * おすすめ記事にするか
   */
  recommend: boolean;
  /**
   * 目次を表示させるか
   */
  tocVisible: boolean;
  /**
   * 作者
   */
  author: Author;
  /**
   * ブログのカテゴリー
   */
  category: Category;
  /**
   * ブログのタグ
   */
  tags: Tag[];
}
