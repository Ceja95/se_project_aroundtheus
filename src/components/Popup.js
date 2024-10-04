export class Popup {
  constructor({popupSelector}) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscapeClose);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscapeClose);
    
  }
  _handleEscapeClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._popupElement.querySelector(".modal__close").addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener("mousedown", (e) => {
      if (e.target.contains("modal") || e.target.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
