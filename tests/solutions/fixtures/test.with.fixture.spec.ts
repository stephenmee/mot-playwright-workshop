import {test, expect} from "../../using.login.fixture";

test('logged in book cart home page', async ({loggedInBookCartHomePage}) => {
    await expect(loggedInBookCartHomePage.getByText('smeehan@poppulo.com', { exact: true })).toBeVisible();
    // await expect(loggedInBookCartHomePage.getByText('Welcome to BookCart!')).toBeVisible();
});
