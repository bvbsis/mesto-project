const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-3",
  headers: {
    authorization: "772b4c0c-f5f0-4e66-b190-76ebea65e716",
  },
};

const checkResponse = (res) => {
  if (res.ok) return res.json();

  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getCardsList = () => {
  return fetch(apiConfig.baseUrl + "/cards", {
    headers: apiConfig.headers,
  }).then(checkResponse);
};

export const addNewCard = (cardName, url) => {
  return fetch(apiConfig.baseUrl + "/cards", {
    method: "POST",
    headers: {
      authorization: apiConfig.headers.authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: cardName,
      link: url,
    }),
  }).then(checkResponse);
};

export const getUserData = () => {
  return fetch(apiConfig.baseUrl + "/users/me", {
    headers: apiConfig.headers,
  }).then(checkResponse);
};

export const sendAvatarUrl = (avatarUrl) => {
  return fetch(apiConfig.baseUrl + "/users/me/avatar ", {
    method: "PATCH",
    headers: {
      authorization: apiConfig.headers.authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: avatarUrl,
    }),
  }).then(checkResponse);
};

export const sendUserData = (userName, description) => {
  return fetch(apiConfig.baseUrl + "/users/me", {
    method: "PATCH",
    headers: {
      authorization: apiConfig.headers.authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      about: description,
    }),
  }).then(checkResponse);
};

export const setLike = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then(checkResponse);
};

export const unsetLike = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};

export const deleteCard = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};
