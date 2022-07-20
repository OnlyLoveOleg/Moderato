import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc top page
 */
export class TopPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/');
  }
}
