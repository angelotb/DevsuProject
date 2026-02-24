import { test, expect } from '@playwright/test';

test('visitar example.com y verificar título', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
