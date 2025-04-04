import PopupWithForm from "./PopupWithForms.js";

export default class PopupWithConfirm extends PopupWithForm {
    constructor({ popupSelector }, handleConfirmAction) {
        super({ popupSelector }, handleConfirmAction);
        this._handleConfirmAction = handleConfirmAction;
        this._submitBtn = this._popupElement.querySelector(".modal__button");
        this._submitBtnContent = this._submitBtn.textContent; 
    }

    open(itemToDelete) {
        this._itemToDelete = itemToDelete;
        super.open();
    }

    setEventListeners() {
        this._confirmButton = this._popupElement.querySelector("#confirm-button");
        this._rejectButton = this._popupElement.querySelector("#confirm-reject");
        this._closeButton = this._popupElement.querySelector("#confirm-close"); 

        this._confirmButton.addEventListener("click", (e) => {
            e.preventDefault();
            this._handleConfirmAction(this._itemToDelete);
            this.close();
        });

        this._rejectButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.close();
        });

        this._closeButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.close();
        });
    }

    setLoading(isLoading, loadingText) {
        if(isLoading) {
            this._submitBtn.textContent = loadingText;
        }else {
            this._submitBtn.textContent = this._submitBtnContent;
        }
    }
}