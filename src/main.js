import { fetchImages } from './js/pixabay-api';

const form = document.querySelector('.search-form');
const error = document.querySelector('.error');
const loaderElement = document.querySelector('.loader');

let searchKey = '';

const onInput = (event) => {
  error.innerHTML = '';
  searchKey = event.target.value.trim();
};

form.addEventListener('input', onInput);

const onSubmit = (event) => {
  event.preventDefault();

  if (!searchKey) {
    error.innerHTML = 'Please add search keyword';
    return;
  }
  fetchImages(searchKey, loaderElement);
  form.reset();
};

form.addEventListener('submit', onSubmit);
