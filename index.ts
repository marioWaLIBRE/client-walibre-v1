import 'whatwg-fetch'

export default class ClientWaV1 {
    baseUrl;
    clientToolUrl;
    fetch;

    constructor(url, mock = false) {
        this.baseUrl = url;
        if (mock) this.fetch = require('./mock').default;
    }

    async auth (email: string, password: string) {
        return this.fetch(`${this.baseUrl}/users/login?${Date().toLocaleString()}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                email,
                password
            }),
        });
    }

    async validate2FA (email: string, token: string) {
        return this.fetch(`${this.baseUrl}/users/2FA/validate`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                email,
                token
            }),
        });
    }
}
