const popupName = document.querySelector('.popup_type_name');
const popupNameCloseButton = popupName.querySelector('.popup__close-button');
popupNameCloseButton.addEventListener('click', function(){
  popupName.classList.remove('popup_opened');
});

const profileNameButton = document.querySelector('.profile__name-button');
profileNameButton.addEventListener('click', function(){
  popupName.classList.add('popup_opened');
})

const popupImage = document.querySelector('.popup_type_image');
const popupImageCloseButton = popupImage.querySelector('.popup__close-button');
popupImageCloseButton.addEventListener('click', function(){
  popupImage.classList.remove('popup_opened');
});

const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', function(){
  popupImage.classList.add('popup_opened');
})

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__field-to-fill_name');
const jobInput = formElement.querySelector('.popup__field-to-fill_description');

const profileNameText = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');
nameInput.value = profileNameText.textContent;
jobInput.value = profileDescription.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault();
    const profileNameText = document.querySelector('.profile__name-text');
    const profileDescription = document.querySelector('.profile__description');
    profileNameText.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupName.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
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

const cardTemplate = document.querySelector('#card-template').content;
const cards = document.querySelector('.cards');

initialCards.forEach(function(elem){
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src = elem.link;
  cardElement.querySelector('.card__title').textContent = elem.name;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt){
    evt.target.parentNode.remove();
  });

  cards.prepend(cardElement);
});


const placeFormElement = popupImage.querySelector('.popup__form');


function cardSubmitHandler (evt) {
  evt.preventDefault();

  const cardElement = cardTemplate.cloneNode(true);
  const placeFieldToFill = popupImage.querySelector('.popup__field-to-fill_name').value;
  const srcFieldToFill = popupImage.querySelector('.popup__field-to-fill_src').value;

  cardElement.querySelector('.card__image').src = srcFieldToFill;
  cardElement.querySelector('.card__title').textContent = placeFieldToFill;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt){
    evt.target.parentNode.remove();
  });

  cards.prepend(cardElement);

  popupImage.classList.remove('popup_opened');

  popupImage.querySelector('.popup__field-to-fill_name').value = '';
  popupImage.querySelector('.popup__field-to-fill_src').value = '';
}

placeFormElement.addEventListener('submit', cardSubmitHandler);
