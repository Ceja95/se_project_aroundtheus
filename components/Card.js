export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._cardData = cardData;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._cardData);

      this._cardElement.querySelector("#add-form").addEventListener("submit", (e) => {
        e.preventDefault();
        this._name = this._cardElement(".#profile-title-input");
        this._link = this._cardElement(".#profile-image-input");
        this._addForm = this._cardElement("#add-form");

        const name = this._name.value;
        const link = this._link.value;
        this._cardElement = this._cardSelector({
          name,
          link,
        });
        this._addForm.reset();
        cardListEle.prepend(this._cardElement);
        closePopup(addModal);
      });
    })

    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
     

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
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
