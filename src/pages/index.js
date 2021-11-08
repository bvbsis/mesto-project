import './index.css'
import * as elements from '../scripts/elements.js'
import {initialCards, createCard} from '../scripts/initial-cards.js'
import {enableValidation, closeByOverlayClick, closeByEsc, submitFormCardAdd, SubmitFormProfileEdit, openPopupProfile} from '../scripts/popups.js'

document.addEventListener("keydown", (evt) => {
  closeByEsc(evt, elements.popupProfileEdit);
  closeByEsc(evt, elements.popupCardAdd);
  closeByEsc(evt, elements.popupFullView);
});

document.addEventListener("mousedown", (evt) => {
  closeByOverlayClick(evt, elements.popupProfileEdit);
  closeByOverlayClick(evt, elements.popupCardAdd);
  closeByOverlayClick(evt, elements.popupFullView);
});

enableValidation();


elements.buttonCardAdd.addEventListener("click", function () {
  elements.popupCardAdd.classList.add("popup_opened");
});

elements.buttonClosePopupCardAdd.addEventListener("click", function () {
  elements.popupCardAdd.classList.remove("popup_opened");
});

elements.buttonClosePopupProfile.addEventListener("click", function () {
  elements.popupProfileEdit.classList.remove("popup_opened");
});

elements.buttonClosePopupFullView.addEventListener("click", function () {
  elements.popupFullView.classList.remove("popup_opened");
});

elements.formProfileEdit.addEventListener("submit", SubmitFormProfileEdit);

elements.formCardAdd.addEventListener("submit", submitFormCardAdd);

elements.buttonProfileEdit.addEventListener("click", () => {
  openPopupProfile(elements.popupProfileEdit)
});

initialCards.forEach(function (elem) {
  const cardElement = elements.templateCard.cloneNode(true);
  createCard(elem.link, elem.name, cardElement);
  elements.containerCards.prepend(cardElement);
});


