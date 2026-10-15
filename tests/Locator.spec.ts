import { test, expect } from "@playwright/test";

test("Locator testing", async ({ page }) => {
  // code exceute here

  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");

  await page.locator("#login-button").click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator(".title")).toHaveText("Products");

  const productElement = page.locator(".title");
  await expect(productElement).toBeVisible(); // verify web element is visible
});
