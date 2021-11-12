import "./index.css";
import * as el from "../scripts/elements.js";
import { createCard } from "../scripts/initial-cards.js";
import {
  submitFormCardAdd,
  submitFormProfileEdit,
  submitFormAvatar,
  openPopupProfile,
  openPopup,
  closePopup,
} from "../scripts/popups.js";
import { enableValidation } from "../scripts/validate.js";
import {
  getCardsList,
  getUserData,
  sendUserData,
  addNewCard,
} from "../scripts/api.js";

getUserData(el.textProfileName, el.textProfileDescription, el.avatarElement);

getCardsList()
  .then((data) => {
    data = data.reverse();
    data.forEach(function (elem) {
      const cardElement = createCard(
        elem.link,
        elem.name,
        elem.owner._id,
        elem._id,
        elem.likes
      );
      el.cardsContainer.prepend(cardElement);
    });
  })
  .catch(err => console.log(err));

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field-to-fill",
  buttonSelector: ".popup__button",
  inputInvalidClass: "popup__field-to-fill_invalid",
  errorActiveClass: "popup__error-message_active",
});

el.buttonCardAdd.addEventListener("click", () => {
  openPopup(el.popupCardAdd);
});

el.buttonProfileEdit.addEventListener("click", () => {
  openPopupProfile(el.popupProfileEdit);
});

el.buttonAvatarEdit.addEventListener("click", () => {
  openPopup(el.popupAvatarEdit);
});

el.formProfileEdit.addEventListener("submit", submitFormProfileEdit);

el.formCardAdd.addEventListener("submit", submitFormCardAdd);

el.formAvatarEdit.addEventListener("submit", submitFormAvatar);

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
