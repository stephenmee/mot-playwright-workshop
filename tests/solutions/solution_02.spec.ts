// Use the login Page Object in a test
import {Page, Locator, test, expect} from '@playwright/test';
import {LoginPage} from './solution_01'

test('login using the UI', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('smeehan@poppulo.com', 'T0ps3cr3t!');
    await expect(page.getByText('account_circlearrow_drop_down')).toBeVisible()
});
