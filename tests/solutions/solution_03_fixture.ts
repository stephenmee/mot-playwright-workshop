import {test as base} from '@playwright/test';
import { LoginPage } from './solution_01';

// Extend basic test by providing a "loggedInPage" fixture.
export const test = base.extend<{ loggedInPage: LoginPage }>({
    loggedInPage: async ({ page }, use) => {
        const loggedInPage = new LoginPage(page);
        await loggedInPage.login('smeehan@poppulo.com', 'T0ps3cr3t!');
        await use(loggedInPage);
    },
});
export { expect } from '@playwright/test';


