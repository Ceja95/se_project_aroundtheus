export default class Api {
    constructor({ baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    
    _handleServerResponse(res) {
       return res.ok ? res.json() : Promise.reject("Error: ${res.status}");
    }

    async getInitialCards() {
        const result = await fetch(`${this._baseUrl}/cards`, { headers: this._headers });
        return this._handleServerResponse(result);
    }

    async userInfo() {
        const userResults = await fetch(`${this._baseUrl}/users/me`, { headers: this._headers });
        return this._handleServerResponse(userResults);
    }
    
    async profileEdit({ name, about }) {
        const editResults = await fetch(`${this._baseUrl}/user/me`, {
            headers: this._headers,
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        });
        return this._handleServerResponse(editResults);
    }

    async addCard({ name, link }) {
        const cardResults = await fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: "POST",
            body: {
                name: name,
                link: link
            }
        });
        return this._handleServerResponse(cardResults);
    }

    async deleteCard() {
       const deleteResults = await fetch(`${this._baseUrl}/cards/cardId`, {
        headers: this._headers,
        method: "DELETE"
       });
       return this._handleServerResponse(deleteResults);
    }
    
    async addLikes() {
        const likeResults = await fetch(`${this._baseUrl}/cards/cardId/likes`, {
            headers: this._headers,
            method: "PUT"
        });
        return this._handleServerResponse(likeResults);
    }

    async removeLikes() {
        const removeLikeResults = await fetch(`${this._baseUrl}/cards/cardId/likes`, {
            headers: this._headers,
            method: "DELETE"
        });
        return this._handleServerResponse(removeLikeResults);
    }

    async updateAvatar({ avatar }) {
        console.log(avatar)
        const avatarResults = await fetch(`${this._baseUrl}/users/me/avatar`, { 
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({ avatar })
        });
        console.log(avatarResults)
        return this._handleServerResponse(avatarResults);
    }
}