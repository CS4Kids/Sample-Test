import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://cs4kids.club/passcode');
});

test('analyze page', async ({ page }) => {
  const title = await page.locator('h1');
  await expect(title).toContainText('Passcode Test');
});

test('enter invalid passcode', async ({ page }) => {
  const message = await page.locator('li');
  await page.fill('input[type="password"]', 'abcdefg');
  await page.click('input:has-text("Submit")');
  await expect(message).toContainText('Passcode invalid');
});

test('enter valid passcode', async ({ page }) => {
  const message = await page.locator('li');
  await page.fill('input[type="password"]', 'jhylahrlyz');
  await page.click('input:has-text("Submit")');
  await expect(message).toContainText('Passcode correct!');
});