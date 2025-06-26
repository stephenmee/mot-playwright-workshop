// Use the Page Object in a test

// Create a Page Object Model for the login page
import type { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly userNameInput: Locator;


    constructor(public readonly page: Page) {
        this.userNameInput = this.page.getByRole('textbox', {name: 'Username'});

    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        this.goto();
    }
}
