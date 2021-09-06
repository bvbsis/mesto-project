const popupProfileEdit = document.querySelector(".popup_type_name");
const popupFullView = document.querySelector(".popup_type_full-view");
const popupCardAdd = document.querySelector(".popup_type_image");
const formProfileEdit = popupProfileEdit.querySelector(".popup__form");
const formCardAdd = popupCardAdd.querySelector(".popup__form");

const inputProfileName = popupProfileEdit.querySelector(
  ".popup__field-to-fill_name"
);

const inputProfileDescription = popupProfileEdit.querySelector(
  ".popup__field-to-fill_description"
);

const buttonProfileEdit = document.querySelector(".profile__name-button");
const buttonCardAdd = document.querySelector(".profile__add-button");
const textProfileName = document.querySelector(".profile__name-text");
const textProfileDescription = document.querySelector(".profile__description");

const buttonClosePopupProfile = popupProfileEdit.querySelector(
  ".popup__close-button"
);

const buttonClosePopupCardAdd = popupCardAdd.querySelector(
  ".popup__close-button"
);

const buttonClosePopupFullView = popupFullView.querySelector(
  ".popup__close-button"
);

const templateCard = document.querySelector("#card-template").content;
const containerCards = document.querySelector(".cards");

buttonCardAdd.addEventListener("click", function () {
  popupCardAdd.classList.add("popup_opened");
});

buttonClosePopupCardAdd.addEventListener("click", function () {
  popupCardAdd.classList.remove("popup_opened");
});

buttonClosePopupProfile.addEventListener("click", function () {
  popupProfileEdit.classList.remove("popup_opened");
});

buttonClosePopupFullView.addEventListener("click", function () {
  popupFullView.classList.remove("popup_opened");
});

formProfileEdit.addEventListener("submit", SubmitFormProfileEdit);

formCardAdd.addEventListener("submit", submitFormCardAdd);

buttonProfileEdit.addEventListener("click", openPopupProfile);

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopupProfile() {
  inputProfileName.value = textProfileName.textContent;
  inputProfileDescription.value = textProfileDescription.textContent;
  openPopup(popupProfileEdit);
}

function SubmitFormProfileEdit(evt) {
  evt.preventDefault();
  textProfileName.textContent = inputProfileName.value;
  textProfileDescription.textContent = inputProfileDescription.value;
  closePopup(popupProfileEdit);
}

initialCards.forEach(function (elem) {
  const cardElement = templateCard.cloneNode(true);
  createCard(elem.link, elem.name, cardElement);
  containerCards.prepend(cardElement);
});

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

function submitFormCardAdd(evt) {
  evt.preventDefault();

  const cardElement = templateCard.cloneNode(true);
  const inputCardTitleValue = popupCardAdd.querySelector(
    ".popup__field-to-fill_name"
  ).value;
  const inputCardSourceValue = popupCardAdd.querySelector(
    ".popup__field-to-fill_src"
  ).value;

  createCard(inputCardSourceValue, inputCardTitleValue, cardElement);

  containerCards.prepend(cardElement);

  closePopup(popupCardAdd);

  popupCardAdd.querySelector(".popup__field-to-fill_name").value = "";
  popupCardAdd.querySelector(".popup__field-to-fill_src").value = "";
}
