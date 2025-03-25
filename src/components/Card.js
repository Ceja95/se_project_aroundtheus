export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._cardData = cardData;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
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
    const modal = document.querySelector("#confirm-modal");
    modal.style.display = "block";

    document.querySelector("#confirm-button").addEventListener("click", () => {
      this._handleDeleteCard();
      modal.style.display = "none";
    });

    document.querySelector("#confirm-close").addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  _handleLikeIcon() {
    this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
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
