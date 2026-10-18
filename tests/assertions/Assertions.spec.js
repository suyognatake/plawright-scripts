import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {


  //open url
  await page.goto("https://www.saucedemo.com/");

  //1.page level assertions
  //verify page title
  await expect(page).toHaveTitle('Swag Labs');

  //verify page url
  await expect(page).toHaveURL("https://www.saucedemo.com/");


  //2. Element State Assertions
  // tobeVisible() Assertions
  const userNameInput = page.locator('#user-name');
  await expect(userNameInput).toBeVisible();


  const passwordInput = page.locator('#password');
  await expect(passwordInput).toBeVisible();


  const loginBtn = page.locator('#login-button');
  await expect(loginBtn).toBeVisible();

  //toBeEnabled
  const userNameInput1 = page.locator('#user-name');
  await expect(userNameInput1).toBeVisible();

  const passwordInputFiled = page.locator('#password');
  await expect(passwordInputFiled).toBeEnabled();

  const loginButtonEnabled = page.locator('#login-button');
  await expect(loginButtonEnabled).toBeEnabled();


  //toBeEditable

  const userNameInputEditable = page.locator('#user-name');
  await expect(userNameInputEditable).toBeEditable();

  const passwordInputEditable = page.locator('#password');
  await expect(passwordInputEditable).toBeEditable();


  //3 text and values

  await userNameInput.fill('standard_user');
  await expect(userNameInput).toHaveValue('standard_user');

  await passwordInput.fill('secret_sauce');
  await expect(passwordInput).toHaveValue('secret_sauce');

  await loginBtn.click();



});