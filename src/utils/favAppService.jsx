import tokenService from './tokenService';
const BASE_URL = '/api/favApps';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(formData) {
    console.log(formData, 'formData');
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(formData)
    }).then(res => res.json());
}

export default { create }