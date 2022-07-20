import type { Page } from 'playwright';
import { BasePageModel } from '@/tests/pages/basePage';

/**
 * @desc talents page
 */
export class TalentsPage extends BasePageModel {
  constructor(page: Page) {
    super(page, '/talents');
  }
}
