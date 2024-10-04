export class Popup {
  constructor({popupSelector}) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
  }
  close(modal) {
    modal.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }
  _handleEscapeClose(e) {
    if (e.key === "Escape") {
      this._popupElement = document.querySelector(".modal_opened");
      close(this._popupElement);
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