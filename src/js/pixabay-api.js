import axios from 'axios';

export default function getImagesByQuery(query) {
  // Перетворення пошукового запиту з декількох слів
  // у відповідний формат

  let searchWords = query.split(' ').join('+');

  // Створення параметрів запиту
  const searchParams = new URLSearchParams({
    key: '52540887-918f2903ad65f90a6d5993705',
    q: searchWords,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  //Відправка запиту
  axios
    .get(`https://pixabay.com/api?${searchParams}`)
    .then(response => response.data.hits)
    .catch(error => console.log(error));
}
