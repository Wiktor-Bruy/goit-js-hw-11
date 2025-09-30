'use strict';

// Імпорти бібліотек

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорти модулів

import getImagesByQuery from './js/pixabay-api';

// Обробка сабміту форми

const form = document.querySelector('.form');
form.addEventListener('submit', startSearch);

function startSearch(event) {
  event.preventDefault();
  const searchWords = event.target.elements.word.value.trim();
  if (searchWords != '') {
    // Запит та обробка його результату

    getImagesByQuery(searchWords).then(value => console.log(value));
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
