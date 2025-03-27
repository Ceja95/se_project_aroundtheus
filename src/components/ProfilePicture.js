import PopupWithForm from "./PopupWithForms";

export default class ProfilePicture extends PopupWithForm{
    constructor({ popupSelector}, profilePicture, profileAlt){
        super({ popupSelector});
        this._profilePicture = document.querySelector(profilePicture);
        this._profileAlt = document.querySelector(profileAlt);
    }

    setEventListeners() {
        this._changePicture = this._popupElement.querySelector("#picture-button");
        this._closePicture - this._popupElement.querySelector("#picture-close");

        this._closePicture.addEventListener("click", (e) => {
            e.preventDefault();
            this.close();
        })

        this._changePicture.addEventListener("click", (e) => {
            e.preventDefault();
            this._profilePicture
        })
    }

    getProfileInfo(){
        return {
            link: 
            alt:
        }
    }

    setProfileInfo(){
        return {
            link:
            alt:
        }
    }
}