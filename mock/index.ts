import authMock from './auth'

export default function fetch (url, parms) {
    if (url.match('/users/login?')) return fakeResolve(authMock);
    return fakeReject();
}

async function fakeReject () {
    return new Promise((resolve, reject) => {
        reject({
            ok: false,
            status: 404,
        })
    })
}

async function fakeResolve (response) {
    return new Promise((resolve, reject) => {
        resolve({
            ok: true,
            status: 200,
            json: () => {
                return Promise.resolve({
                    ...response,
                })
            }
        })
    })
}
