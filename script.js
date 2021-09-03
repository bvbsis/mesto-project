function openPopup(button, popup){                              //Функция открытия попапа
  button.addEventListener('click', function(){
    popup.classList.add('popup_opened')
  })
};
const nameButton = document.querySelector('.profile__name-button');   //открыть попап с именем
const namePopup = document.querySelector('.popup_type_name');
openPopup(nameButton, namePopup);

const addButton = document.querySelector('.profile__add-button');   // открыть попап с добавлением карточки
const addImagePopup = document.querySelector('.popup_type_image');
openPopup(addButton, addImagePopup);

const nameInput = namePopup.querySelector('.popup__field-to-fill_name');    //привязка значения инпутов в попапе к значению имени и описания профиля
const descriptionInput = namePopup.querySelector('.popup__field-to-fill_description');
const profileNameText = document.querySelector('.profile__name-text');
const profileDescription = document.querySelector('.profile__description');
nameInput.value = profileNameText.textContent;
descriptionInput.value = profileDescription.textContent;


function formSubmitHandler (evt) {              // функция изменения имени и описания
  evt.preventDefault();
  profileNameText.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  namePopup.classList.remove('popup_opened');
};
const nameForm = namePopup.querySelector('.popup__form');
nameForm.addEventListener('submit', formSubmitHandler);

function closePopup(closeButton, popup){              // закрывает попап
  closeButton.addEventListener('click', function(){
    popup.classList.remove('popup_opened')
  })
};



  const nameCloseButton = namePopup.querySelector('.popup__close-button');
  const addCloseButton = addImagePopup.querySelector('.popup__close-button');

  closePopup(nameCloseButton, namePopup);
  closePopup(addCloseButton, addImagePopup);

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

const cardTemplate = document.querySelector('#card-template').content;
const cards = document.querySelector('.cards');
const popupFullView = document.querySelector('.popup_type_full-view');

initialCards.forEach(function(elem){           //добавляет карточки изз массива
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src = elem.link;
  cardElement.querySelector('.card__title').textContent = elem.name;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active')
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt){
    evt.target.parentNode.remove()
  });



  cardElement.querySelector('.card__image').addEventListener('click', function () {
    popupFullView.querySelector('.popup__img').src = elem.link;
    popupFullView.querySelector('.popup__img-text').textContent = elem.name;
    popupFullView.classList.add('popup_opened');
  });



  cards.prepend(cardElement);
});

const placeFormElement = addImagePopup.querySelector('.popup__form');


function cardSubmitHandler (evt) {          //добавляет карточки из попапа
  evt.preventDefault();

  const cardElement = cardTemplate.cloneNode(true);
  const placeFieldToFill = addImagePopup.querySelector('.popup__field-to-fill_name').value;
  const srcFieldToFill = addImagePopup.querySelector('.popup__field-to-fill_src').value;

  cardElement.querySelector('.card__image').src = srcFieldToFill;
  cardElement.querySelector('.card__title').textContent = placeFieldToFill;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt){
    evt.target.parentNode.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', function () {
    popupFullView.querySelector('.popup__img').src = srcFieldToFill;
    popupFullView.querySelector('.popup__img-text').textContent = placeFieldToFill;
    popupFullView.classList.add('popup_opened');
  });

  cards.prepend(cardElement);

  addImagePopup.classList.remove('popup_opened');

  addImagePopup.querySelector('.popup__field-to-fill_name').value = '';
  addImagePopup.querySelector('.popup__field-to-fill_src').value = '';


};

placeFormElement.addEventListener('submit', cardSubmitHandler);

const FullViewCloseButton = popupFullView.querySelector('.popup__close-button');

closePopup(FullViewCloseButton, popupFullView);
