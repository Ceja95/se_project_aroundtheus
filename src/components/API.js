export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
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
        return fetch(`${this._baseUrl}/users/me`, {headers: this._headers}, {
        "about": "Placeholder description",
        "avatar": "https://practicum-content.s3.amazonaws.com/resources/default-avatar_1704458546.png",
        "name": "Placeholder name",
        "_id": "d43d74f4-d8b7-495e-a8b5-9bce636b1f9e"
        });
    }

    cardLoader() {
        return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
        .then((res) => res.json())
        .catch((err => {
            console.error(err);
        }))
    }

    profileEdit(name, about) {
        return fetch(`${this._baseUrl}/user/me`, {
        headers: this._headers,
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name: name,
            about: about
        })         
    });
    }

    addNewCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: "POST",
            body: {
                name: name,
                link: link
            } 
        });
    }

    deleteCard() {
       return fetch(`${this._baseUrl}/cards/cardId`, {
        headers: this._headers,
        method: "DELETE"
       })
    }
    
    addLikes() {
        return fetch(`${this._baseUrl}/cards/cardId/likes`, {
            headers: this._headers,
            method: "PUT"
        })
    }

    removeLikes() {
        return fetch(`${this._baseUrl}/cards/cardId/likes`, {
            headers: this._headers,
            method: "DELETE"
        })
    }

    profilePicture() {
        return fetch(`${this._baseUrl}/users/me/avatar`, { 
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({avatar})
        })
        .then((res => res.json()))
        .catch((err => {
            console.error(err);
        }))
    }
}