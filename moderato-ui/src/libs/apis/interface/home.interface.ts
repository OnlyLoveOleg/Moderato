import { MicroCMSQueries, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { Blog, Category, Tag } from '@/types/model';

/**
 * @desc Moderato APIs.
 * this is docs.
 */

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
  fetchBlogList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc オススメのblogを取得する（作成順）
   */
  fetchRecommendBlogList(): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc 最新のblogを取得する（cratedAt基準）
   */
  fetchLatestBlogList(): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc 同じカテゴリーのブログ一覧を取得する（createdAt基準）
   */
  fetchSameCategoryBlogList(
    categoryId: string,
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc 同じタグが設定されているブログ一覧を取得する（createdAt基準）
   */
  fetchTagContainBlogList(tagId: string): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc カテゴリー詳細を取得する
   * @param contentId
   * TODO: 一つのカテゴリを取得したらそのブログ一覧を取得しないといけないのでは？
   */
  fetchCategoryDetail(contentId: string): Promise<Category>;
  /**
   * @desc 主要なカテゴリーを取得する（All, Design, Front, Server, Infra）
   */
  fetchPrimaryCategoryList(): Promise<(Category & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc カテゴリー一覧を取得する
   */
  fetchCategoryList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<(Category & MicroCMSContentId & MicroCMSDate)[]>;
  /**
   * @desc タグ一覧を取得する
   */
  fetchTagList(
    queries?: MicroCMSQueries,
    limit?: number,
    offset?: number,
  ): Promise<(Tag & MicroCMSContentId & MicroCMSDate)[]>;
}
