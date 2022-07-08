import { MicroCMSObjectContent, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { BaseService } from './_base.service';
import { Blog, Category } from '@/types/model';
import { IHomeService } from '@/libs/apis/interface';

export class HomeService extends BaseService implements IHomeService {
  public fetchBlogDetail = async (
    contentId: string,
  ): Promise<(MicroCMSObjectContent & Blog) | null> => {
    console.log(`contentsid${contentId}`);
    return await this.mCMSClient.getListDetail({ endpoint: 'blogs', contentId });
  };

  public fetchBlogList = async (): Promise<Blog[]> => {
    const limit = 10;
    const data = await this.mCMSClient.getList({ endpoint: 'blogs' });
    return data.contents;
  };

  /** @desc categoryに関連するblog listをとる。*/
  public fetchCategoryDetail = async (contentId: string): Promise<Category> => {
    return await this.mCMSClient.getListDetail({ endpoint: 'categories', contentId });
  };

  public fetchCategoryList = async (): Promise<Category[]> => {
    const data = await this.mCMSClient.getList({ endpoint: 'categories' });
    return data.contents;
  };
}
