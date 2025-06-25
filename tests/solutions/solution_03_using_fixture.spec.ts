import {expect} from "@playwright/test";
import {test} from './solution_03_fixture'


test('should add an item to the cart', async ({ loggedInPage }) => {
    // we can use regular expressions in the locator e.g.  /Chamber of Secrets/
    await loggedInPage.page.locator('mat-card-content').filter({ hasText: /Chamber of Secrets/}).getByRole('button').click();
    await loggedInPage.page.locator('mat-icon.mat-badge[data-mat-icon-type="font"]').filter({ hasText: /shopping_cart\d*/ }).click();
    await expect(loggedInPage.page.getByRole('link', { name: 'Harry Potter and the Chamber' })).toBeVisible();
    await loggedInPage.page.getByRole('button', { name: 'Clear cart' }).click()
});
