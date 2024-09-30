class Section {
    constructor ({items, renderer}, classSelector) {
        this._items = [intitalCards];
        this._renderer = renderer;
        this._classSelector = document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);;
    }
    renderItems() {
        items.forEach(() => {
            renderer();
        })  
    }
    addItem() {
        
    }
}