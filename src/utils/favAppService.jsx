import tokenService from './tokenService';
const BASE_URL = '/api/favApps';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(formData) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(formData)
    }).then(res => res.json());
}

async function getFavList() {
    return fetch(BASE_URL + 'getFavList', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Invalid request to getFavList');
    }).then(data => {
        return data
    })
}

export default { create, getFavList }