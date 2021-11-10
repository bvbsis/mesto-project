import "./index.css";
import * as el from "../scripts/elements.js";
import { initialCards, createCard } from "../scripts/initial-cards.js";
import {
  submitFormCardAdd,
  submitFormProfileEdit,
  openPopupProfile,
  openPopup,
  closePopup,
} from "../scripts/popups.js";
import { enableValidation } from "../scripts/validate.js";

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field-to-fill",
  buttonSelector: ".popup__button",
  inputInvalidClass: "popup__field-to-fill_invalid",
  errorActiveClass: "popup__error-message_active"
});

el.buttonCardAdd.addEventListener("click", () => {
  openPopup(el.popupCardAdd);
});

el.buttonProfileEdit.addEventListener("click", () => {
  openPopupProfile(el.popupProfileEdit);
});

el.formProfileEdit.addEventListener("submit", submitFormProfileEdit);

el.formCardAdd.addEventListener("submit", submitFormCardAdd);

el.popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

initialCards.forEach(function (elem) {
  const cardElement = createCard(elem.link, elem.name);
  el.cardsContainer.prepend(cardElement);
});
