import {Popup} from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues() {}
  }