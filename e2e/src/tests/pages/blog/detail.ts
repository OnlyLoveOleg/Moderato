import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc talents detail page
 */
export class BlogDetailPage extends BasePageModel {
  constructor(page: Page) {
    /** /blog pageが現状で存在しない  */
    super(page, '/');
  }
}
