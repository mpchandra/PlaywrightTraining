import { test, expect } from '@playwright/test';

test('Handle alert and verify message', async ({ page }) => {
  
  // Load the URL
  await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);

  // Switch to the iframe using frameLocator
  const frame = page.frameLocator('#iframeResult');

  // Listen for the dialog (alert)
  page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    console.log('Alert type:', dialog.type());

    // Accept the alert
    await dialog.accept();
  });

  // Click "Try it" button inside iframe
  await frame.locator('button').click();

  // Verify the result text after accepting alert
  const resultText = await frame.locator('#demo').textContent();
  await expect(resultText).toBe('You pressed OK!');
});