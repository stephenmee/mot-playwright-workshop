import { test } from '@playwright/test';


// Run this test using the `authSetup` project

test('test one - we only need to login once', async ({ page }) => {
    await page.goto('/');
    await page.pause();
});

test('test two - once logged in, tests can reuse the browser state stored in playwright/.auth/user.json', async ({ page }) => {
    await page.goto('/');
    await page.pause();
});

