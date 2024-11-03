import { fetchImages, ITEMS_PER_PAGE } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  renderGallery,
  toggleLoading,
  toggleLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.search-form');
const error = document.querySelector('.error');
const loaderElements = document.querySelectorAll('.loader');
const loadMoreButton = document.querySelector('.load-more-button');

let searchKey = '';
let page = 1;
let galleryMarkup = '';
let scrollHeight = 0;

const onInput = (event) => {
  error.innerHTML = '';
  searchKey = event.target.value.trim();
};

form.addEventListener('input', onInput);

const onSubmit = async (event) => {
  event.preventDefault();
  page = 1;
  toggleLoadMoreButton(loadMoreButton, false);

  if (!searchKey) {
    error.innerHTML = 'Please add search keyword';
    return;
  }
  toggleLoading(loaderElements, page);
  const { images, totalHits } = await fetchImages(searchKey, page);
  console.log(totalHits);

  toggleLoading(loaderElements, page);
  renderGallery(images, true);
  form.reset();
  if (!images.length) {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please try again!`,
    });
    return;
  }
  const galleryItem = document.querySelector('.gallery-item');
  const galleryImage = document.querySelector('.gallery-image');
  galleryImage.addEventListener('load', () => {
    scrollHeight = galleryItem.getBoundingClientRect().height;
  });
  if (page * ITEMS_PER_PAGE < totalHits) {
    toggleLoadMoreButton(loadMoreButton);
  }
};

form.addEventListener('submit', onSubmit);

const onClick = async (event) => {
  event.preventDefault();
  page += 1;

  toggleLoading(loaderElements, page);
  const { images, totalHits } = await fetchImages(searchKey, page);
  console.log(totalHits);

  toggleLoading(loaderElements, page);
  renderGallery(images);
  window.scrollBy({
    top: scrollHeight * 2,
    behavior: 'smooth',
  });
  if (page * ITEMS_PER_PAGE > totalHits) {
    toggleLoadMoreButton(loadMoreButton, false);
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results`,
    });
  }
};

loadMoreButton.addEventListener('click', onClick);
