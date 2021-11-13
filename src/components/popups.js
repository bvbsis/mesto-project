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
  popupAvatarEdit,
  inputAvatarUrl,
  avatarElement,
} from "./elements.js";
import { createCard } from "./initial-cards.js";
import { sendUserData, addNewCard, sendAvatarUrl } from "./api.js";

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function openPopupProfile(popup) {
  inputProfileName.value = textProfileName.textContent;
  inputProfileDescription.value = textProfileDescription.textContent;
  openPopup(popup);
}

function submitFormProfileEdit(evt) {
  evt.preventDefault();

  const buttonElement = popupProfileEdit.querySelector(".popup__button");

  buttonElement.textContent = "Сохранение...";

  sendUserData(inputProfileName.value, inputProfileDescription.value)
    .then((data) => {
      textProfileName.textContent = data.name;
      textProfileDescription.textContent = data.about;
      buttonElement.disabled = true;
      closePopup(popupProfileEdit);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      buttonElement.textContent = "Сохранить";
    });
}

function submitFormCardAdd(evt) {
  evt.preventDefault();

  const buttonElement = popupCardAdd.querySelector(".popup__button");

  buttonElement.textContent = "Сохранение...";
  buttonElement.disabled = true;

  addNewCard(inputTitle.value, inputImage.value)
    .then((data) => {
      cardsContainer.prepend(
        createCard(data.link, data.name, data.owner._id, data._id, data.likes)
      );
      closePopup(popupCardAdd);
      inputTitle.value = "";
      inputImage.value = "";
    })
    .catch((err) => console.log(err))
    .finally(() => {
      buttonElement.textContent = "Создать";
    });
}

export function submitFormAvatar(evt) {
  evt.preventDefault();

  const buttonElement = popupAvatarEdit.querySelector(".popup__button");
  buttonElement.textContent = "Сохранение...";
  buttonElement.disabled = true;

  sendAvatarUrl(inputAvatarUrl.value)
    .then((data) => {
      avatarElement.src = data.avatar;
      closePopup(popupAvatarEdit);
      inputAvatarUrl.value = "";
    })
    .catch((err) => console.log(err))
    .finally(() => {
      buttonElement.textContent = "Сохранить";
    });
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

export {
  closeByEscape,
  submitFormCardAdd,
  submitFormProfileEdit,
  openPopupProfile,
  openPopup,
  closePopup,
};
