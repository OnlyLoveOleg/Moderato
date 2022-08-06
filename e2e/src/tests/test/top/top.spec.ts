import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { TopPage } from '@/tests/pages/top';

test.describe('/top Page Test.', () => {
  let topPage: TopPage;

  test.beforeEach(async ({ page }) => {
    topPage = new TopPage(page);
    await topPage.navigate();
  });

  test('/ へ遷移ができるか', async () => {
    expect(topPage.isCurrentPage).toBe(true);
  });
});
