export default class FormValidator {
    constructor (config) {
        this._config = config;
    }

    _checkInputValidity(formEl, inputEl) {
        if (!inputEl.validity.valid) {
            this._showInputError(formEl, inputEl, this._config);
        } else {
            this._hideInputError(formEl, inputEl, this._config);
        }
    }

    _showInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
        const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(inputErrorClass);
        errorMessageEl.textContent = inputEl.validationMessage;
        errorMessageEl.classList.add(errorClass);
    }

    _hideInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
        const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(inputErrorClass);
        errorMessageEl.textContent = "";
        errorMessageEl.classList.remove(errorClass);
    }

    _setEventListeners(formEl) {
        const { inputSelector, submitButtonSelector } = this._config;

        const inputEls = [...formEl.querySelectorAll(inputSelector)];
        const submitButton = formEl.querySelector(submitButtonSelector);

        inputEls.forEach((inputEl) => {
            inputEl.addEventListener("input", () => {
                this._checkInputValidity(formEl, inputEl);
                this.toggleButtonState(inputEls, submitButton, this._config);
            });
        });
    }
    
    enableValidation() {
        const formEls = [...document.querySelectorAll(this._config.formSelector)];

        formEls.forEach((formEl) => {
            formEl.addEventListener("submit", (e) => {
                e.preventDefault();
            });
            this._setEventListeners(formEl);
        });
    }

    toggleButtonState(inputEls, submitButton, {inactiveButtonClass}) {
        let foundInvalid = false;
        inputEls.forEach(inputEl => {
          if(!inputEl.validity.valid) {
            foundInvalid = true;
          }
        });
      
        if(foundInvalid) {
          submitButton.classList.add(inactiveButtonClass);
          submitButton.disabled = true;
        }else {
          submitButton.classList.remove(inactiveButtonClass);
          submitButton.disabled = false;
        }
    }

    const config = {
        formSelector: ".modal__form",
        inputSelector: ".modal__input",
        submitButtonSelector: ".modal__button",
        inactiveButtonClass: "modal__button_disabled",
        inputErrorClass: "modal__popup_input_type_error",
        errorClass: "modal__popup_error_visible",
      };

      enableValidation(config)
}