import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const name = addTitle.value;
    const link = addImage.value;
    const card = generateCard({ name, link });
    cardListSection.addItem(card);
    addForm.reset();
    addPopupForm.close(addModal);
  }
}
