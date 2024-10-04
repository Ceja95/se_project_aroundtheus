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
      this.close(this._popupElement);
    }
  }
  setEventListeners() {
    this._popupElement.querySelector(".modal__close").addEventListener("click", () => {
      this.close(this._popupElement);
    });

   this._popupElement.addEventListener("keydown", this._handleEscapeClose);
  }
}
