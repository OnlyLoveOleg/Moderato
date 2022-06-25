import { BaseService } from './_base.service';
import { Blog } from '@/types/model';
import { IHomeService } from '@/libs/apis/interface';

export class HomeService extends BaseService implements IHomeService {
  public fetchBlog = async (contentId: string): Promise<Blog> => {
    const data = await this.mCMSClient.get({ endpoint: 'blogs', contentId });
    console.log(`ddd${JSON.stringify(data)}`);
    return data;
  };

  public fetchBlogList = async (): Promise<Blog[]> => {
    const data = await this.mCMSClient.getList({ endpoint: 'blogs' });
    return data.contents;
  };
}
