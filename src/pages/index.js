import "./index.css";
import * as el from "../components/elements.js";
import { createCard } from "../components/initial-cards.js";
import {
  submitFormCardAdd,
  submitFormProfileEdit,
  submitFormAvatar,
  openPopupProfile,
  openPopup,
  closePopup,
} from "../components/popups.js";
import { enableValidation } from "../components/validate.js";
import { getCardsList, getUserData } from "../components/api.js";

export let ownerId;

Promise.all([getUserData(), getCardsList()])
  .then((data) => {
    el.textProfileName.textContent = data[0].name;
    el.textProfileDescription.textContent = data[0].about;
    el.avatarElement.src = data[0].avatar;
    ownerId = data[0]._id;

    data = data[1].reverse();
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
  .catch((err) => console.log(err));

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
