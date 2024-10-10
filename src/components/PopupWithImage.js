import {Popup} from "./Popup.js";

export default class PopupWIthImage extends Popup {
    constructor(popupSelector, {imageSrc, imageAlt}, imageCap) {
      super({popupSelector});
      this._imageSrc = this._popupElement.querySelector(".modal__picture");
      this._imageAlt = this._popupElement.querySelector(".modal__picture");
      this._imageCap = this._popupElement.querySelector(".modal__caption");
    }
    open(data) {
      this._imageSrc = data.link
      this._imageAlt = data.alt
      this._imageCap = data.textContent;
      super.open();
    }
  }