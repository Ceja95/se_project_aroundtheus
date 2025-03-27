import PopupWithForm from "./PopupWithForms";

export default class ProfilePicture extends PopupWithForm{
    constructor({ popupSelector}, { profilePicture, profileAlt }){
        super({ popupSelector});
        this._profilePicture = profilePicture;
        this._profileAlt = profileAlt;
    }

    open(avatarModal) {
        this._avatarPicture = avatarPicture;
        super.open()
    }

    setEventListeners() {
        this._changePicture = this._popupElement.querySelector("#picture-button");
        this._closePicture = this._popupElement.querySelector("#picture-close");
        this._changeAvatar = document.querySelector("#picture-change");

        this._changeAvatar.addEventListener("click", () => {
        this._showAvatarModal();
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
        this._profilePicture.open(this);
    }

    getProfileInfo(){
        return {
            link: this._profilePicture.src,
            alt:  this._profileAlt.textContent
        }
    }

    setProfileInfo(data){
        this._profilePicture.src = data.link;
        this.profileAlt.textContent = data.alt;
    }
}