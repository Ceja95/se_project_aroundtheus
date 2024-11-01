class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err => {
            console.error(err);
        }))
    }

    promiseAll() {
        return Promise.all([getUserInfo(), getView()]);
    }

    userInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
        "about": "Placeholder description",
        "avatar": "https://practicum-content.s3.amazonaws.com/resources/default-avatar_1704458546.png",
        "name": "Placeholder name",
        "_id": "d43d74f4-d8b7-495e-a8b5-9bce636b1f9e"
        });
    }

    cardLoader() {
        return fetch(`${this._baseUrl}/cards`, this._headers)
        .then((res) => res.json())
        .catch((err => {
            console.error(err);
        }))
    }
}