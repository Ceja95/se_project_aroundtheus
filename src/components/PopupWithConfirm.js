import PopupWithForm from "./PopupWithForms.js";

export default class PopupWithConfirm extends PopupWithForm {
    constructor({popupSelector}, handleConfirmAction) {
        super(popupSelector, handleConfirmAction);
        this._handleConfirmAction = handleConfirmAction;
    }

    open(itemToDelete) {
        this._itemToDelete = itemToDelete;
        super.open();
    }

    _setEventListeners() {
        this._confirmButton = this._popupElement.getElementById("confirm-button");
        this._rejectButton = this._popupElement.getElementById("confirm-reject");
        this._closeButton = this._popupElement.getElementById("confirm-close"); 

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

        super._setEventListeners();
    }
}