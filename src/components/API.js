class Api {
    constructor(options) {
        this._options = options;
    }

    getInitialCards() {
        return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
            headers: {
            authorization: "d43d74f4-d8b7-495e-a8b5-9bce636b1f9e"
            }
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

    //left off on 1. Loading user information from the server 

    const api = new Api({
        baseUrl: "https://around-api.en.tripleten-services.com/v1",
        headers: {
            authorization: "d43d74f4-d8b7-495e-a8b5-9bce636b1f9e",
            "Content-Type": "application/json"
        }
    });
}