import { test, expect } from "@playwright/test";
import { log } from "node:console";


// this is first appraoches to find multiple elements

// test("MultiProductLocator", async ({ page }) => {

//   // code exceute here

//   await page.goto("https://www.saucedemo.com/");

//   await page.locator("#user-name").fill("standard_user");
//   await page.locator("#password").fill("secret_sauce");

//   await page.locator("#login-button").click();

//   //list of all prducts
//   const productNames = await page.$$('.inventory_item_name');

//   //count products
//   console.log('Total Number of Products:', productNames.length);

//   for (const product of productNames) {
//     const name = await product.textContent();
//     console.log(name);
//   }
// });



// second approaches //
// BY Locator //

test('By Locator Apprcohes', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");

  await page.locator("#login-button").click();

  // by Locator

  const productNames = await page.locator('.inventory_item_name');
  const count = await productNames.count();

  console.log('Total No Of count:', count);

  for (let i = 0; i < count; i++) {

    const product = await productNames.nth.textContent();

    console.log(product);

  }


});

