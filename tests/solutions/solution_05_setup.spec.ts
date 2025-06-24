import { test as setup, expect } from './solution_03_fixture.spec';
import { LoginPage } from './solution_01.spec';
import path from 'path';

const authFile = path.join(__dirname, '../../playwright/.auth/user.json');

setup('authenticate', async ({ loggedInPage }) => {
    await expect(loggedInPage.page.getByText('account_circlearrow_drop_down')).toBeVisible()
    await loggedInPage.page.context().storageState({ path: authFile });
});
