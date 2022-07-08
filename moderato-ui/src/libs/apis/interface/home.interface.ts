import { MicroCMSObjectContent, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { Blog, Category } from '@/types/model';

export interface IHomeService {
  // blog詳細
  fetchBlogDetail(contentId: string): Promise<(MicroCMSObjectContent & Blog) | null>;
  // blog一覧
  fetchBlogList(): Promise<Blog[]>;
  // TODO: 一つのカテゴリを取得したらそのブログ一覧を取得しないといけないのでは？
  // category取得
  fetchCategoryDetail(contentId: string): Promise<Category>;
  // カテゴリーリスト取得
  fetchCategoryList(): Promise<Category[]>;
}
