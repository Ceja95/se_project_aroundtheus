const object1 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  alt: "picture of yosemite valley",
};

const object2 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  alt: "picture of lake louise",
};

const object3 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  alt: "picture of bald mountians",
};

const object4 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  alt: "picture of latemar",
};

const object5 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  alt: "picture of vanoise national park",
};

const object6 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  alt: "picture of lago di braies",
};

const initialCards = [object1, object2, object3, object4, object5, object6];

console.log(initialCards);

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector(".modal");
const profileCloseButton = document.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__paragraph");
const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector(".card-template").content.firstElementChild;
const cardListEle = document.querySelector(".cards__list");

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
  profileAddModal.classList.remove("add-modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEle = cardElement.querySelector(".card__image");
  const cardDescriptionEle = cardElement.querySelector(".card__header");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImageEle.addEventListener("click", () => {
    
  })

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardDescriptionEle.textContent = cardData.name;
  cardImageEle.src = cardData.link;
  cardImageEle.alt = cardData.alt;

  return cardElement;
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileCloseButton.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEle.append(cardElement);
});

const profileAddButton = document.querySelector(".profile__add-button");
const profileAddModal = document.querySelector(".add-modal");
const profileAddClose = document.querySelector(".add-modal__close");
const profileAddHeader = document.querySelector(".add-modal__header");
const profileAddTitle = document.querySelector("#profile-title-input");
const profileAddImage = document.querySelector("#profile-image-input");
const profileAddForm = document.querySelector(".add-modal__form");

profileAddButton.addEventListener("click", () => {
  profileAddModal.classList.add("add-modal_opened");
});

profileAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = profileAddTitle.value;
  const link = profileAddImage.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardListEle.append(cardElement);
  closePopup();
});

profileAddClose.addEventListener("click", () => {
  closePopup();
});
