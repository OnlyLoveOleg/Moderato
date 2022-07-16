import { MicroCMSObjectContent, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { BaseService } from './_base.service';
import { Blog, Category } from '@/types/model';
import { IHomeService } from '@/libs/apis/interface';

export class HomeService extends BaseService implements IHomeService {
  private blogEndPoint = 'blogs';
  private categoryEndPoint = 'categories';

  public fetchBlogDetail = async (
    contentId: string,
  ): Promise<(MicroCMSObjectContent & Blog) | null> => {
    console.log(`contentsid${contentId}`);
    return await this.mCMSClient.getListDetail({ endpoint: this.blogEndPoint, contentId });
  };

  // TODO: これ自動でsortされているのか？例えば最新とか。されないっぽいな
  public fetchBlogList = async (): Promise<Blog[]> => {
    const limit = 10;
    const data = await this.mCMSClient.getList({ endpoint: this.blogEndPoint, queries: {} });
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
    // 最新は4件で十分
    const limit = 4;
    const data = await this.mCMSClient.getList({
      endpoint: this.blogEndPoint,
      queries: { orders: '-createdAt', limit },
    });
    return data.contents;
  };

  public fetchCategoryDetail = async (contentId: string): Promise<Category> => {
    return await this.mCMSClient.getListDetail({ endpoint: this.categoryEndPoint, contentId });
  };

  public fetchCategoryList = async (): Promise<Category[]> => {
    const data = await this.mCMSClient.getList({ endpoint: this.categoryEndPoint });
    return data.contents;
  };
}
