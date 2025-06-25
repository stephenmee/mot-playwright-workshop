import { test, expect } from '@playwright/test';

test.describe('BookCart Authentication API - SOLUTION', () => {

    const validCredentials = {
        username: 'motcork',
        password: 'Cork123$$'
    };

    const invalidCredentials = {
        username: 'invalid@test.com',
        password: 'wrongpassword'
    };

    test('should login successfully with valid credentials', async ({request}) => {

        const response = await request.post('/api/login', {
            data: validCredentials
        });

        console.log("Response: %s\n", await response.body());
        console.log("Response: %s\n", await response.status());

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const loginResult = await response.json();


        expect(loginResult).toHaveProperty('userDetails.userId');
        expect(loginResult).toHaveProperty('userDetails.username');
        expect(loginResult).toHaveProperty('token');

        // Validate token is present and not empty
        expect(loginResult.token).toBeTruthy();
        expect(typeof loginResult.token).toBe('string');
        expect(loginResult.token.length).toBeGreaterThan(0);

        // Validate user data
        expect(loginResult.userDetails.userId).toBeGreaterThan(0);
        expect(loginResult.userDetails.username).toBe(validCredentials.username);

        console.log('Login successful for user:', loginResult.username);
        console.log('User ID:', loginResult.userId);
    });

    test('should reject login with invalid credentials', async ({request}) => {
        const response = await request.post('/api/login', {
            data: invalidCredentials
        });

        if (response.status() === 401) {
            expect(response.status()).toBe(401);
        } else {
            const result = await response.json();
            console.log('Login response with invalid credentials:', result);
            expect(result.token || '').toBeFalsy();
        }
    });
});
