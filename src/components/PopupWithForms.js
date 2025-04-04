import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({popupSelector});
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
    this._inputElements = this._popupElement.querySelectorAll(".modal__input");
    this._submitBtn = this._popupElement.querySelector(".modal__button");
    this._submitBtnContent = this._submitBtn.textContent; 
  }

  _getInputValues() {
    const inputValues = {}
    this._inputElements.forEach((inputElement) => {
      inputValues[inputElement.name] = inputElement.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
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
