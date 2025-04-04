import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Sections.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupwithConfirm.js";
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
import Api from "../components/API.js";

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

const avatarButton = document.querySelector(".profile__avatar-button");
const avatarPictureModal = document.querySelector("#picture-modal");
const avatarChangeForm = avatarPictureModal.querySelector(".modal__form");

const usersInfo = new UserInfo({nameElement: ".profile__title", jobElement: ".profile__paragraph", avatarElement: ".profile__image"});

const handleAvatarUpdate = new PopupWithForm(
  { popupSelector: "#picture-modal" },
  handlePictureSubmit
);
handleAvatarUpdate.setEventListeners();

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

const confirmDelete = new PopupWithConfirm(
  {popupSelector: "#confirm-modal"},
  (itemToDelete) => {
    console.log("deleting", itemToDelete);
    itemToDelete.handleDeleteCard();
  });
confirmDelete.setEventListeners();

const imagePopup = new PopupWithImage({ popupSelector: "#image-modal" });
imagePopup.setEventListeners();

function generateCard(cardData) {
  const card = new Card(cardData, ".card-template", handleImageClick, confirmDelete);
  return card.getView();
}

function renderCard(cardData) {
  cardListSection.addItem(generateCard(cardData));
}

avatarButton.addEventListener("click", () => {
  handleAvatarUpdate.open();
});

function handlePictureSubmit(updatedData){
  handleAvatarUpdate.setLoading(true, "Saving...");
  console.log("updated Data", updatedData)
  api.updateAvatar(updatedData)
    .then((updatedData) => {
      usersInfo.setAvatar(updatedData.avatar);
      handleAvatarUpdate.close();
    })
    .catch(console.error)
    .finally(() => {
      handleAvatarUpdate.setLoading(false, "Saving...");
    })
}

profileEditButton.addEventListener("click", () => {
  const currentUserInfo = usersInfo.getUserInfo();
  
  profileTitleInput.value = currentUserInfo.name;
  profileDescriptionInput.value = currentUserInfo.about;

  editPopupForm.open();
});

function handleEditFormSubmit(data) {
  editPopupForm.setLoading(true, "Saving...");
  const name = data.name;
  const about = data.about;

  api.profileEdit({ name, about })
  .then((newInfo => {
    usersInfo.setUserInfo(newInfo);
    editPopupForm.close();
  }))
  .catch(console.error)
  .finally(() => {
    editPopupForm.setLoading(false, "Saving...");
  })
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
  addPopupForm.setLoading(true, "Saving...");
  const name = data.name;
  const link = data.link;

  api.addCard({ name, link })
  .then((newCard) => {
    const card = generateCard(newCard);
    cardListSection.addItem(card);
    addForm.reset();
    addPopupForm.close();
  })
  .catch(console.error)
  .finally(() => {
    addPopupForm.setLoading(false, "Saving...");
  });
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
const avatarFormValidator = new FormValidator(config, avatarChangeForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
      authorization: "d43d74f4-d8b7-495e-a8b5-9bce636b1f9e",
      "Content-Type": "application/json"
  }
});