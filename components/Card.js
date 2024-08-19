export default class Card {
    constructor (data, cardSelector, handleImageClick) {
        this._data = data;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    _setEventListeners() {
        const likeButton = this._cardElement.querySelector(".card__like-button").addEventListener("click", () => {
            this._handleLikeIcon();
        })

        const deleteButton = this._cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
            this._handleDeleteCard();
        })
    }

    _handleLikeIcon() {
        this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active");
    }

    _handleDeleteCard() {
        this._cardElement.remove();
    }

    getView() {
        this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);

        this._setEventListeners();
    }
}