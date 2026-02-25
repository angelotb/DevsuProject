import { test, expect } from '@playwright/test';

test('vizualizarCarrito', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  await expect(page.locator('#tbodyid')).not.toBeEmpty();
  await page.locator('#page-wrapper').click();
});