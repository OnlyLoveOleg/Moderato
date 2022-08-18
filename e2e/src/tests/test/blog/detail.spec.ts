import test from '@/tests/fixture';
import { expect } from '@playwright/test';
import { BlogDetailPage } from '@/tests/pages/blog/detail';

test.describe('/top Page Test.', () => {
  let blogDetailPage: BlogDetailPage;

  test.beforeEach(async ({ page }) => {
    blogDetailPage = new BlogDetailPage(page);
    await blogDetailPage.navigate();
  });

  test('/blogs/slug  へ遷移ができるか', async () => {
    expect(blogDetailPage.isCurrentPage).toBe(true);
  });
});
