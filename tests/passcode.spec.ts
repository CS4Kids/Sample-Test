import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://cs4kids.club/passcode');
});

test('analyze page', async ({ page }) => {
  const title = await page.locator('h1');
  await expect(title).toContainText('Passcode Test');
});

test('enter passcode', async ({ page }) => {
  await page.fill('input[type="password"]', 'abcdefg');
  await page.click('button:has-text("Submit")');
});