export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open(modal) {
    modal.classList.add("modal_opened");
    document.removeEventListener("keydown", this._handleEscapeClose);
    modal.removeEventListener("mousedown", this.setEventListeners);
  }
  close(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscapeClose);
    modal.removeEventListener("mousedown", this.setEventListeners);
  }
  _handleEscapeClose(e) {
    if (e.key === "Escape") {
      this._popupSelector = document.querySelector(".modal_opened");
      close(modal.this._popupSelector);
    }
  }
  setEventListeners(e) {
    if (
      e.currentTarget === e.target ||
      e.target.classList.contains("modal__close")
    ) {
      close(e.currentTarget);
    }
  }
}

class PopupWIthImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(data) {
    super.open(data);
  }
}

class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  _getInputValues() {}
}
