import { MicroCMSObjectContent, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { Blog, Category } from '@/types/model';

export interface IHomeService {
  /**
   * @desc ブログ詳細
   * @param contentId
   */
  fetchBlogDetail(contentId: string): Promise<(MicroCMSObjectContent & Blog) | null>;
  /**
   * @desc ブログをリスト取得する
   * TODO:（これpagerとかに変えた方がいいかも）
   */
  fetchBlogList(): Promise<Blog[]>;
  /**
   * @desc オススメのblogを取得する
   */
  fetchRecommendBlogList(): Promise<Blog[]>;
  /**
   * @desc 最新のblogを取得する（cratedAt基準）
   */
  fetchLatestBlogList(): Promise<Blog[]>;
  /**
   * @desc カテゴリー詳細を取得する
   * @param contentId
   * TODO: 一つのカテゴリを取得したらそのブログ一覧を取得しないといけないのでは？
   */
  fetchCategoryDetail(contentId: string): Promise<Category>;
  /**
   * @desc カテゴリー一覧を取得する
   */
  fetchCategoryList(): Promise<Category[]>;
}
