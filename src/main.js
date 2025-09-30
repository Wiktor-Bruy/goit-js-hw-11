'use strict';

// Імпорти бібліотек

import axios from 'axios';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорти модулів

import getImagesByQuery from './js/pixabay-api';

// Обробка сабміту форми

const form = document.querySelector('.form');
const answer = form.addEventListener('submit', startSearch);

function startSearch(event) {
  event.preventDefault();
  const searchWords = event.target.elements.word.value.trim();
  if (searchWords != '') {
    getImagesByQuery(searchWords);
    form.reset();
  } else {
    iziToast.warning({
      message: 'Enter word for search...',
      messageColor: '#fff',
      backgroundColor: 'red',
      theme: 'dark',
      position: 'topRight',
    });
  }
}

// Робота з отриманими даними
console.log(answer);
