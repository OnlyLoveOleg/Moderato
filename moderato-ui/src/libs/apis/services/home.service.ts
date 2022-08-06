import { MicroCMSQueries, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { BaseService } from './_base.service';
import { Blog, Category } from '@/types/model';
import { IHomeService } from '@/libs/apis/interface';

export class HomeService extends BaseService implements IHomeService {
  private readonly blogEndPoint = 'blogs';

  private readonly categoryEndPoint = 'categories';

  public fetchBlogDetail = async (contentId: string): Promise<Blog> => {
    const data = await this.mCMSClient.getListDetail<Blog>({
      endpoint: this.blogEndPoint,
      contentId,
    });
    return data;
  };

  // TODO: これ自動でsortされているのか？例えば最新とか。されないっぽいな
  public fetchBlogList = async (
    queries: MicroCMSQueries = {},
    limit: number = 10, // 制限（defaultで5M超えたらerror）
    offset: number = 0, // 何件目から取得するか
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]> => {
    const data = await this.mCMSClient.getList<Blog>({
      endpoint: this.blogEndPoint,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };

  public fetchRecommendBlogList = async (): Promise<
    (Blog & MicroCMSContentId & MicroCMSDate)[]
  > => {
    const data = await this.mCMSClient.getList<Blog>({
      endpoint: this.blogEndPoint,
      queries: { filters: 'recommend[equals]true', orders: '-createdAt' },
    });
    return data.contents;
  };

  public fetchLatestBlogList = async (): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]> => {
    const limit = 4;
    const data = await this.mCMSClient.getList<Blog>({
      endpoint: this.blogEndPoint,
      queries: { orders: '-createdAt', limit },
    });
    return data.contents;
  };

  public fetchSameCategoryBlogList = async (
    categoryId: string,
  ): Promise<(Blog & MicroCMSContentId & MicroCMSDate)[]> => {
    const limit = 4;
    const data = await this.mCMSClient.getList<Blog>({
      endpoint: this.blogEndPoint,
      queries: { filters: `category[equals]${categoryId}`, orders: '-createdAt', limit },
    });
    return data.contents;
  };

  public fetchCategoryDetail = async (contentId: string): Promise<Category> => {
    const data = await this.mCMSClient.getListDetail<Category>({
      endpoint: this.categoryEndPoint,
      contentId,
    });
    return data;
  };

  public fetchPrimaryCategoryList = async (): Promise<
    (Category & MicroCMSContentId & MicroCMSDate)[]
  > => {
    const data = await this.mCMSClient.getList<Category>({
      endpoint: this.categoryEndPoint,
      queries: { filters: `isPrimary[equals]true` },
    });
    return data.contents;
  };

  public fetchCategoryList = async (
    queries: MicroCMSQueries = {},
    limit: number = 10,
    offset: number = 0,
  ): Promise<(Category & MicroCMSContentId & MicroCMSDate)[]> => {
    const data = await this.mCMSClient.getList<Category>({
      endpoint: this.categoryEndPoint,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };
}
