import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { AboutPage } from '@/tests/pages/about';

test.describe('/top Page Test.', () => {
  let aboutPage: AboutPage;

  test.beforeEach(async ({ page }) => {
    aboutPage = new AboutPage(page);
    await aboutPage.navigate();
  });

  test('/about  へ遷移ができるか', async () => {
    expect(aboutPage.isCurrentPage).toBe(true);
  });
});
