import { test, expect } from '@playwright/test';

test('FormularioComprar', async ({ page }) => {
  test.setTimeout(30000); 
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Nokia lumia' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.locator('#name').fill('angelo dayan');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.locator('#country').fill('Argentina');
  await page.getByRole('textbox', { name: 'City:' }).click();
  await page.locator('#city').fill('Buenos Aires');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.locator('#card').fill('5428368892459076');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.locator('#month').fill('Febrero');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.locator('#year').fill('2026');
  await page.getByRole('button' , { name: 'Purchase' }).click();
  await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
});