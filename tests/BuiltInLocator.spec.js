import { test, expect } from "@playwright/test";

// test("BuiltIn Locator", async ({ page }) => {

//   await page.goto("https://www.saucedemo.com/");

//   await page.getByPlaceholder('Username').fill('standard_user');
//   await page.getByPlaceholder('Password').fill('secret_sauce');

//   await page.getByRole('button', { name: 'Login' }).click();

//   await expect(page).toHaveURL(/inventory.html/);

//   await expect(page.getByText('Products')).toBeVisible();

//   await page.getByAltText('Sauce Labs Backpack').click();

//   await page.getByRole('button', { name: 'Add to cart' }).first().click();

// });


test("BuiltIn Locator", async ({ page }) => {

  await page.goto("https://practice.expandtesting.com/login");

  await page.getByLabel('username').fill('practice');
  await page.getByLabel('password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();

  await page.getByRole('link', { name: 'Home' }).click();


});