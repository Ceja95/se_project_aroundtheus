class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
    }
    open() {

    }
    close() {

    }
    _handleEscapeClose() {

    }
    setEventListeners() {

    }
}

class PopupWIthImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(data) {


        super.open(data);
    }
 }

 class PopupWithForm extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }
    _getInputValues(){
        
    }
 }