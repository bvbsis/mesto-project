import { popupFullView } from "./elements.js";
import { openPopup } from "./popups.js";
import * as el from "./elements.js";
import { deleteCard, setLike, unsetLike } from "./api.js";
import { ownerId } from "../pages/index.js";

export const isLiked = (likes) => {
  return likes.some((like) => like._id == ownerId);
};

function createCard(source, title, userId, cardId, likesArray) {
  const cardElement = el.templateCard.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const popupImage = popupFullView.querySelector(".popup__img");
  const likesAmountElement = cardElement.querySelector(".card__like-digit");
  const likeButton = cardElement.querySelector(".card__like-button");
  cardImage.src = source;
  cardElement.querySelector(".card__title").textContent = title;
  cardImage.alt = title;
  likesAmountElement.textContent = likesArray.length;

  if (isLiked(likesArray)) {
    likeButton.classList.add("card__like-button_active");
  }

  let likes = likesArray;

  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", () => {
      if (isLiked(likes)) {
        unsetLike(cardId)
          .then((data) => {
            likesAmountElement.textContent = data.likes.length;
            likeButton.classList.remove("card__like-button_active");
            likes = data.likes;
          })
          .catch((err) => console.log(err));
      } else {
        setLike(cardId)
          .then((data) => {
            likesAmountElement.textContent = data.likes.length;
            likeButton.classList.add("card__like-button_active");
            likes = data.likes;
          })
          .catch((err) => console.log(err));
      }
    });

  const buttonDelete = cardElement.querySelector(".card__delete-button");

  if (userId === ownerId) {
    buttonDelete.classList.add("card__delete-button_active");
    buttonDelete.addEventListener("click", (evt) => {
      deleteCard(cardId)
        .then(() => evt.target.parentNode.remove())
        .catch((err) => console.log(err));
    });
  }

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

export { createCard };
