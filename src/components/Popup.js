export class Popup {
  constructor({popupSelector}) {
    this._popupElement = document.querySelector(popupSelector);
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
      this._popupElement = document.querySelector(".modal_opened");
      close(this._popupSelector);
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