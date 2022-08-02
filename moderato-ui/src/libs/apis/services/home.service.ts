import { MicroCMSQueries } from 'microcms-js-sdk';
import { BaseService } from './_base.service';
import { Blog, Category } from '@/types/model';
import { IHomeService } from '@/libs/apis/interface';

export class HomeService extends BaseService implements IHomeService {
  private blogEndPoint = 'blogs';

  private categoryEndPoint = 'categories';

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
  ): Promise<Blog[]> => {
    const data = await this.mCMSClient.getList({
      endpoint: this.blogEndPoint,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };

  public fetchRecommendBlogList = async (): Promise<Blog[]> => {
    const data = await this.mCMSClient.getList({
      endpoint: this.blogEndPoint,
      queries: { filters: 'recommend[equals]true', orders: '-createdAt' },
    });
    return data.contents;
  };

  public fetchLatestBlogList = async (): Promise<Blog[]> => {
    // もちろん降順
    // 最新は4件で十分
    const limit = 4;
    const data = await this.mCMSClient.getList({
      endpoint: this.blogEndPoint,
      queries: { orders: '-createdAt', limit },
    });
    return data.contents;
  };

  public fetchSameCategoryBlogList = async (categoryId: string): Promise<Blog[]> => {
    // もちろん降順
    // 最新は4件で十分
    const limit = 4;
    const data = await this.mCMSClient.getList({
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

  public fetchCategoryList = async (
    queries: MicroCMSQueries = {},
    limit: number = 10, // 制限（defaultで5M超えたらerror）
    offset: number = 0, // 何件目から取得するか
  ): Promise<Category[]> => {
    const data = await this.mCMSClient.getList({
      endpoint: this.categoryEndPoint,
      queries: { ...queries, limit, offset },
    });
    return data.contents;
  };
}
