import { test, request } from '@playwright/test';

test.describe('BookCart Authentication API', () => {

    // Test data - you might want to use actual test account credentials
    const validCredentials = {
        username: 'motcork', // This is a demo account on BookCart
        password: 'Cork123$$'
    };

    const invalidCredentials = {
        username: 'invalid@test.com',
        password: 'wrongpassword'
    };

    test('should login successfully with valid credentials', async ({request}) => {

    });

    test('should reject login with invalid credentials', async ({request}) => {
    });
});
