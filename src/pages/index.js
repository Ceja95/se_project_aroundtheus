import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Sections.js";
import  PopupWithForm  from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";

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

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-modal");
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

const modalImage = document.querySelector(".modal__picture");
const imageModal = document.querySelector("#image-modal");
const imageCaption = document.querySelector(".modal__caption");
const imageClose = imageModal.querySelector(".modal__close");

const addPopupForm = new PopupWithForm({popupSelector: "#add-modal"}, handleAddFormSubmit);
addPopupForm.setEventListeners();

const editPopupForm = new PopupWithForm({popupSelector: "#edit-modal"}, handleEditFormSubmit);
editPopupForm.setEventListeners();

//const imagePopup = new PopupWithImage(popupSelector,{imageSrc, imageAlt}, imageCap);

//function closePopup(modal) {
 // modal.classList.remove("modal_opened");
  //document.removeEventListener("keydown", handleEsc);
  //modal.removeEventListener("mousedown", handleModalClick);
//}

//function openPopup(modal) {
  //modal.classList.add("modal_opened");
  //document.addEventListener("keydown", handleEsc);
 // modal.addEventListener("mousedown", handleModalClick);
//}

//function handleModalClick(e) {
//if (
//e.currentTarget === e.target ||
//e.target.classList.contains("modal__close")
//) {
//closePopup(e.currentTarget);
//}
//}

//function handleEsc(e) {
//if (e.key === "Escape") {
//const openedModal = document.querySelector(".modal_opened");
//closePopup(openedModal);
//}
//}

function generateCard(cardData) {
  const card = new Card(cardData, ".card-template", handleImageClick);
  return card.getView();
}

function renderCard(cardData) {
  cardListEle.prepend(generateCard(cardData));
}

profileEditButton.addEventListener("click", () => {
  editPopupForm.open(profileEditModal);
});

function handleEditFormSubmit(data) {
  profileTitle.textContent = data.name;
  profileDescription.textContent = data.description;
  editPopupForm.close(profileEditModal);
}

const profileAddButton = document.querySelector(".profile__add-button");
const addButton = document.querySelector("#add-button");
const addModal = document.querySelector("#add-modal");
const addClose = document.querySelector("#add-close");
const addHeader = document.querySelector("#add-header");
const addTitle = document.querySelector("#profile-title-input");
const addImage = document.querySelector("#profile-image-input");
const addForm = document.querySelector("#add-form");

profileAddButton.addEventListener("click", () => {
  addPopupForm.open(addModal);
});


function handleAddFormSubmit(data) {
  const name = data.name;
  const link = data.link;

 const card = generateCard({ name, link });
  cardListSection.addItem(card);
  addForm.reset();
  addPopupForm.close(addModal);
}


function handleImageClick(cardData) {
  openPopup(imageModal);
  modalImage.alt = cardData.alt;
  modalImage.src = cardData.link;
  imageCaption.textContent = `Picture of ${cardData.name}`;
}

const cardListSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
cardListSection.renderItems();

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__popup_input_type_error",
  errorClass: "modal__popup_error_visible",
};

const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
