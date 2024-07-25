function setEventListeners(formEl, config) {
    const {inputSelector} = config;
const inputEls = [...formEl.querySelectorAll(inputSelector)];
console.log(inputEls);
}

function enableValidation(config) {
    const formEls = [...document.querySelectorAll(config.formSelector)];
    formEls.forEach((formEl) => {
        formEl.addEventListener("submit", (e) => {
            e.preventDefault();
        })
    })
}

setEventListeners(formEl, config);

const config = {
    formSelector: ".modal__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  }

enableValidation(config);