import {
  inputProfileName,
  textProfileName,
  inputProfileDescription,
  textProfileDescription,
  popupCardAdd,
  cardsContainer,
  popupProfileEdit,
  inputTitle,
  inputImage,
} from "./elements.js";
import { createCard } from "./initial-cards.js";

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("mousedown", closeByOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("mousedown", closeByOverlayClick);
}

function openPopupProfile(popup) {
  inputProfileName.value = textProfileName.textContent;
  inputProfileDescription.value = textProfileDescription.textContent;
  openPopup(popup);
}

function submitFormProfileEdit(evt) {
  evt.preventDefault();

  const buttonElement = popupProfileEdit.querySelector(".popup__button");

  textProfileName.textContent = inputProfileName.value;
  textProfileDescription.textContent = inputProfileDescription.value;

  closePopup(popupProfileEdit);

  buttonElement.disabled = true;
}

function submitFormCardAdd(evt) {
  evt.preventDefault();

  const cardElement = createCard(inputImage.value, inputTitle.value);
  const buttonElement = popupCardAdd.querySelector(".popup__button");

  cardsContainer.prepend(cardElement);

  closePopup(popupCardAdd);

  inputTitle.value = "";
  inputImage.value = "";
  buttonElement.disabled = true;
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closeByOverlayClick(evt) {
  if (evt.target.classList.contains("popup")) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

export {
  closeByOverlayClick,
  closeByEscape,
  submitFormCardAdd,
  submitFormProfileEdit,
  openPopupProfile,
  openPopup,
  closePopup,
};
