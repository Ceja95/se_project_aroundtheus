export default class Card {
  constructor(cardData, cardSelector, handleImageClick, confirmDeletePopup, confirmCardLike) {
    this._cardData = cardData;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._confirmDeletePopup = confirmDeletePopup;
    this._confirmCardLike = confirmCardLike;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._cardData);
    });
  

    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
     

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._showConfirmModal();
      });
  }

  _showConfirmModal() {
    this._confirmDeletePopup.open(this);
  }

  _handleLikeIcon() {
    this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active");
  }

  handleLikeIcon() {
    this._handleLikeIcon();
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  handleDeleteCard() {
    this._handleDeleteCard();
  }
  

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

      this._cardImage = this._cardElement.querySelector(".card__image");
      this._cardTitle = this._cardElement.querySelector(".card__header");

      this._cardImage.src = this._cardData.link;
      this._cardImage.alt = this._cardData.alt;
      this._cardTitle.textContent = this._cardData.name;
    
    this._setEventListeners();

    return this._cardElement;
  }
}
