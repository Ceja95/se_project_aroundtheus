import {Popup} from "./Popup.js";

export default class PopupWIthImage extends Popup {
    constructor(popupSelector, {imageSrc, imageAlt}, imageCap) {
      super({popupSelector});
      this._imageSrc = document.querySelector(imageSrc);
      this._imageAlt = document.querySelector(imageAlt);
      this._imageCap = imageCap;
    }
    open(data) {
      data.imageSrc;
      data.imageAlt;
      data.imageCap
      super.open();
    }
  }