// Create a Page Object Model for the login page
import type { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly userNameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(public readonly page: Page) {
        this.userNameInput = this.page.getByRole('textbox', {name: 'Username'});
        this.passwordInput = this.page.getByRole('textbox', {name: 'Password'});
        this.loginButton = this.page.locator('mat-card-actions')
            .getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        this.goto();
        await this.userNameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}
