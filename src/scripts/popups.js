import {inputProfileName, textProfileName, inputProfileDescription, textProfileDescription, templateCard, popupCardAdd, containerCards, popupProfileEdit} from "./elements.js"
import {createCard} from "./initial-cards.js"

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopupProfile(popup) {
  inputProfileName.value = textProfileName.textContent;
  inputProfileDescription.value = textProfileDescription.textContent;
  openPopup(popup);
}

function SubmitFormProfileEdit(evt) {
  evt.preventDefault();
  textProfileName.textContent = inputProfileName.value;
  textProfileDescription.textContent = inputProfileDescription.value;
  closePopup(popupProfileEdit);
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

function closeByEsc(evt, popup) {
  if (evt.key === "Escape" && popup.classList.contains("popup_opened")) {
    popup.classList.remove("popup_opened");
  }
}

function closeByOverlayClick(evt, popup) {
  if (evt.target.classList.contains("popup")) {
    popup.classList.remove("popup_opened");
  }
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__field-to-fill_invalid");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error-message_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__field-to-fill_invalid");
  errorElement.classList.remove("popup__error-message_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".popup__field-to-fill")
  );
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};


export {enableValidation, closeByOverlayClick, closeByEsc, submitFormCardAdd, SubmitFormProfileEdit, openPopupProfile, openPopup}

