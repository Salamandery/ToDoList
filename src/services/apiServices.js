const url = 'http://192.168.15.6:3002/api/react-native/';

export const ApiServices = {
    get(endpoint) {
        return fetch(`${url}${endpoint}`).then(response => response.json())
    },
    post(endpoint, data) {
        return fetch(`${url}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())
    },
    delete(endpoint, id) {
        return fetch(`${url}${endpoint}?id=${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
    }
};