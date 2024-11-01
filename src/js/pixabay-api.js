import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderGallery, toggleLoading } from './render-functions';

const URI = 'https://pixabay.com/api/';
const API_KEY = '46847728-6b7b012d3b9a78a4f273a5faa';

export const fetchImages = (key, element) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: key,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${URI}?${searchParams}`;
  toggleLoading(element);
  fetch(url)
    .then((response) => response.json())
    .then(({ hits: images }) => {
      toggleLoading(element);
      if (!images.length) {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
        return;
      }
      renderGallery(images);
    });
};
