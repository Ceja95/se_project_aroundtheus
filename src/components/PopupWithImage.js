import {Popup} from "./Popup.js";

export default class PopupWIthImage extends Popup {
    constructor(popupSelector, {imageSrc, imageAlt}, imageCap) {
      super({popupSelector});
      this._imageSrc = document.querySelector(".modal__picture");
      this._imageAlt = document.querySelector(imageAlt);
      this._imageCap = `Picture of ${cardData.name}`;
    }
    open(data) {
      super.open();
      this._imageSrc = data.link
      this._imageAlt = data.alt
      this._imageCap = data.imageCap
    }
  }