'use strict';

// Імпорти бібліотек

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорти модулів

import getImagesByQuery from './js/pixabay-api';

// Обробка сабміту форми

const form = document.querySelector('.form');
form.addEventListener('submit', startSearch);
const loading = document.querySelector('.loadimg-message'); // Індикатор завантаження

function startSearch(event) {
  event.preventDefault();
  const searchWords = event.target.elements.word.value.trim();
  if (searchWords != '') {
    // Запит та обробка його результату

    loading.classList.toggle('visible'); // Показ індикатора завандаження
    getImagesByQuery(searchWords)
      .then(value => {
        // Обробка результату відповіді

        loading.classList.toggle('visible'); // Приховуємо індикатор завантаження
        // Виводимо всовіщення про невдалий пошук

        if (value.length === 0) {
          iziToast.warning({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#fff',
            backgroundColor: 'red',
            theme: 'dark',
            position: 'center',
          });
        } else {
          console.log(value);
        }
      })
      .catch(error => {
        // Обробка помилки

        console.log(error);
        loading.classList.toggle('visible'); // Приховуємо індикатор завантаженняw
      });
    form.reset();
  } else {
    // Попередження при порожньому запиті

    iziToast.warning({
      message: 'Enter word for search...',
      messageColor: '#fff',
      backgroundColor: 'red',
      theme: 'dark',
      position: 'topRight',
    });
  }
}
