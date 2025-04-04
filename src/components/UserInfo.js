export default class UserInfo {
    constructor({nameElement, jobElement, avatarElement}) {
        this._nameElement = document.querySelector(nameElement);
        this._jobElement = document.querySelector(jobElement);
        this._avatarElement = document.querySelector(avatarElement);
    }
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._jobElement.textContent,
            link: this._avatarElement.textContent
        }
    }

    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._jobElement.textContent = data.about;
    }

    setAvatar(newImage) {
        this._avatarElement.src = newImage;
    }
}