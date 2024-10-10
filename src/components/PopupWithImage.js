import {Popup} from "./Popup.js";

export default class PopupWIthImage extends Popup {
    constructor(popupSelector, {imageSrc, imageAlt}, imageCap) {
      super({popupSelector});
      this._imageSrc = this._popupElement.querySelector(".modal__picture");
      this._imageAlt = this._popupElement.querySelector(".modal__picture").alt;
      this._imageCap = imageCap = `Picture of ${cardData.name}`;
    }
    open(data) {
      super.open();
      this._imageSrc = data.link
      this._imageAlt = data.alt
      this._imageCap = data.imageCap
    }
  }