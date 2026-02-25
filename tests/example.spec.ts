import { test, expect } from '@playwright/test';

test.describe('DemoBlaze - Pruebas generales', () => {
  test('visitar página principal y verificar título', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/STORE/);
  });

  test('verificar que la página carga correctamente', async ({ page }) => {
    await page.goto('/');
    
    // Verificar que existen elementos clave en la página
    const navbar = page.locator('.navbar');
    await expect(navbar).toBeVisible();
    
    // Verificar que hay productos visibles
    const products = page.locator('.col-lg-4');
    await expect(products.first()).toBeVisible();
  });

  test('navegar a la sección "Contact"', async ({ page }) => {
    await page.goto('/');
    
    // Hacer clic en el botón de contacto
    await page.locator('a:has-text("Contact")').click();
    
    // Esperar a que el modal de contacto se abra
    const contactModal = page.locator('#exampleModalLarge');
    await expect(contactModal).toBeVisible();
  });

  test('cargar categorías de productos', async ({ page }) => {
    await page.goto('/');
    
    // Verificar que las categorías existen
    const categories = page.locator('.list-group-item');
    const categoryCount = await categories.count();
    
    expect(categoryCount).toBeGreaterThan(0);
  });
});
