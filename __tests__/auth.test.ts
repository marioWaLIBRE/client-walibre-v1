require('dotenv').config()

import { beforeAll, describe, expect, test } from '@jest/globals';

import ClientWaV1 from '../index';

let client;

beforeAll(() => {
    client = new ClientWaV1(process.env.BASE_URL, true);
});

describe('Testing ClientWa V1', () => {
    const mockUserCredentials = {
        email: process.env.USER_EMAIL as string,
        password: process.env.USER_PASSWORD as string,
    };

    test('Auth', async () => {
        const response = await client.auth(mockUserCredentials.email, mockUserCredentials.password);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);

        const json = await response.json();
        expect(json.message).toBe("Login Successful");
        expect(json.UsersCliWallets).toBeGreaterThanOrEqual(0);
    });    
})
