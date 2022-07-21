import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc talents detail page
 */
export class TalentsDetailPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/talents/slug');
  }
}
