import PopupWithForm from "./PopupWithForms";

export default class ProfilePicture extends PopupWithForm{
    constructor({ popupSelector}, handleAvatarOpen){
        super({ popupSelector });
        this._handleAvatarOpen = handleAvatarOpen;
    }

    open(avatarChange) {
        this._avatarChange = avatarChange;
        super.open();
    }

    setEventListeners() {
        this._changePicture = this._popupElement.querySelector("#picture-button");
        this._closePicture = this._popupElement.querySelector("#picture-close");
        this._changeAvatar = document.querySelector("#picture-change");

        this._changeAvatar.addEventListener("click", () => {
        this._showAvatarModal(this);
        })
       
        this._closePicture.addEventListener("click", (e) => {
            e.preventDefault();
            this.close();
        })

        this._changePicture.addEventListener("click", (e) => {
            e.preventDefault();
            this.close();
        })
    }
     
    _showAvatarModal() {
        this._handleAvatarOpen.open(this);
    }

    getProfileInfo(){
        this._profilePicture = document.querySelector(".profile__image");

        return {
            src: this._profilePicture.src,
            alt: this._profilePicture.alt
        }
    }

    setProfileInfo(data){
        this._profilePicture.src = data.src,
        this._profilePicture.alt = data.alt
}
}