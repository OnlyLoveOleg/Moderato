import { Blog } from '@/types/model';

export interface IHomeService {
  // blog詳細
  fetchBlog(contentId: string): Promise<Blog>;
  // blog一覧
  fetchBlogList(): Promise<Blog[]>;
}
