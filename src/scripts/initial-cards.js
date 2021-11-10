import { popupFullView } from "./elements.js";
import { openPopup } from "./popups.js";
import * as el from "./elements.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function createCard(source, title) {
  const cardElement = el.templateCard.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const popupImage = popupFullView.querySelector(".popup__img");
  cardImage.src = source;
  cardElement.querySelector(".card__title").textContent = title;
  cardImage.alt = title;

  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like-button_active");
    });

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function (evt) {
      evt.target.parentNode.remove();
    });

  cardElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      popupImage.alt = title;
      popupImage.src = source;
      popupFullView.querySelector(".popup__img-text").textContent = title;
      openPopup(popupFullView);
    });

  return cardElement;
}

export { initialCards, createCard };
