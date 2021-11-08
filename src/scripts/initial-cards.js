import {popupFullView} from "./elements.js"
import {openPopup} from "./popups.js"

const initialCards = [          //массив с сохраненными карточками
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createCard(source, title, cardTemplate) {
  cardTemplate.querySelector(".card__image").src = source;
  cardTemplate.querySelector(".card__title").textContent = title;

  cardTemplate
    .querySelector(".card__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like-button_active");
    });

  cardTemplate
    .querySelector(".card__delete-button")
    .addEventListener("click", function (evt) {
      evt.target.parentNode.remove();
    });

  cardTemplate
    .querySelector(".card__image")
    .addEventListener("click", function () {
      popupFullView.querySelector(".popup__img").src = source;
      popupFullView.querySelector(".popup__img-text").textContent = title;
      openPopup(popupFullView);
    });
}

export {initialCards, createCard}
