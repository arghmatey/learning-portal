import tokenService from './tokenService';
const BASE_URL = '/api/tasks';

function getAll(userId) {
    return fetch(`${BASE_URL}/${userId}`).then(res => res.json())
}

function create(task, userId) {
    return fetch(`${BASE_URL}/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(task)
    }).then(res => res.json());
}

function update(task, userId) {
    return fetch(`${BASE_URL}/${userId}/task/${task._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(task)
    }).then(res => res.json());
}

export default {
    getAll,
    create,
    update
}   