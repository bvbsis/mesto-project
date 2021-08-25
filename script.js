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
















// // Находим форму в DOM
// const formElement = document.querySelector('.popup__form');
// // Находим поля формы в DOM
// const nameInput = formElement.querySelector('.popup__field-to-fill_name');
// const jobInput = formElement.querySelector('.popup__field-to-fill_description');

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     nameInput.value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);
