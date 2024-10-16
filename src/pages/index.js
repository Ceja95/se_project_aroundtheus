import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Sections.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  object1,
  object2,
  object3,
  object4,
  object5,
  object6,
  initialCards,
} from "../utils/Constants.js";
import { config } from "../utils/Constants.js";

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

const usersInfo = new UserInfo({nameElement: ".profile__title", jobElement: ".profile__paragraph"});

const addPopupForm = new PopupWithForm(
  { popupSelector: "#add-modal" },
  handleAddFormSubmit
);
addPopupForm.setEventListeners();

const editPopupForm = new PopupWithForm(
  { popupSelector: "#edit-modal" },
  handleEditFormSubmit
);
editPopupForm.setEventListeners();

const imagePopup = new PopupWithImage({ popupSelector: "#image-modal" });
imagePopup.setEventListeners();

function generateCard(cardData) {
  const card = new Card(cardData, ".card-template", handleImageClick);
  return card.getView();
}

function renderCard(cardData) {
  cardListSection.addItem(generateCard(cardData));
}

profileEditButton.addEventListener("click", () => {
  const currentUserInfo = usersInfo.getUserInfo();
  
  profileTitleInput.value = currentUserInfo.name;
  profileDescriptionInput.value = currentUserInfo.description;

  editPopupForm.open();
});

function handleEditFormSubmit(data) {
  usersInfo.setUserInfo(data);
  editPopupForm.close();
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
  addPopupForm.open();
});

function handleAddFormSubmit(data) {
  const name = data.name;
  const link = data.link;
  const card = generateCard({ name, link });

  cardListSection.addItem(card);
  addForm.reset();
  addPopupForm.close();
}

function handleImageClick(cardData) {
  imagePopup.open(cardData);
}

const cardListSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
cardListSection.renderItems();

const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
