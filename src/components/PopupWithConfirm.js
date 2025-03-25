import PopupWithForm from "./PopupWithForms";

export default class ConfirmDeletePopup extends PopupWithForm {
    constructor(popupSelector, handleConfirmAction) {
        super({popupSelector, handleConfirmAction});
        this._handleConfirmAction = handleConfirmAction;
        console.log(popupSelector);
    }

    open(itemToDelete) {
        this._itemToDelete = itemToDelete;
        super.open();
    }

    _setEventListeners() {
        this._confirmButton = document.getElementById("confirm-button");
        
    }
}