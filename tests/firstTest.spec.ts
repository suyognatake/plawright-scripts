import { test, expect } from "@playwright/test";

test("browser open tetscase", async ({ page }) => {
  // test code will go here
  await page.goto("https://www.google.com/");

  const pageTitle = await page.title();

  console.log("pageTitle", pageTitle);

  const pageURL = page.url();

  console.log("pageurl", pageURL);

  await expect(page).toHaveTitle(/Google/);
});
