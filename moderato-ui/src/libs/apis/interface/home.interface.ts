import { MicroCMSQueries } from 'microcms-js-sdk';
import { Blog, Category } from '@/types/model';

export interface IHomeService {
  /**
   * @desc ブログ詳細
   * @param contentId
   */
  fetchBlogDetail(contentId: string): Promise<Blog>;
  /**
   * @desc ブログをリスト取得する
   * TODO:（これpagerとかに変えた方がいいかも）
   */
  fetchBlogList(queries?: MicroCMSQueries, limit?: number, offset?: number): Promise<Blog[]>;
  /**
   * @desc オススメのblogを取得する（作成順）
   */
  fetchRecommendBlogList(): Promise<Blog[]>;
  /**
   * @desc 最新のblogを取得する（cratedAt基準）
   */
  fetchLatestBlogList(): Promise<Blog[]>;
  /**
   * @desc 同じカテゴリーのブログを取得する（createdAt基準）
   */
  fetchSameCategoryBlogList(categoryId: string): Promise<Blog[]>;
  /**
   * @desc カテゴリー詳細を取得する
   * @param contentId
   * TODO: 一つのカテゴリを取得したらそのブログ一覧を取得しないといけないのでは？
   */
  fetchCategoryDetail(contentId: string): Promise<Category>;
  /**
   * @desc カテゴリー一覧を取得する
   */
  fetchCategoryList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<Category[]>;
}
