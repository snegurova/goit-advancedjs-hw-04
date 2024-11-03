import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.gallery');

const gallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionType: 'attr',
  captionsData: 'alt',
});

let galleryMarkup = '';

export const renderGallery = (images, isClear = false) => {
  if (isClear) {
    galleryMarkup = '';
  }
  galleryMarkup = images.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      return (
        acc +
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
          <div class="description">
            <span class="description-item"><span>Likes</span> ${likes}</span>
            <span class="description-item"><span>Views</span> ${views}</span>
            <span class="description-item"><span>Comments</span> ${comments}</span>
            <span class="description-item"><span>Downloads</span> ${downloads}</span>
          </div>
        </a>
      </li>`
      );
    },
    galleryMarkup
  );

  galleryElement.innerHTML = galleryMarkup;
  gallery.refresh();
};

export const toggleLoading = (elements, page) => {
  if (page === 1) {
    elements[0].classList.toggle('loading');
    return;
  }
  elements[1].classList.toggle('loading');
};

export const toggleLoadMoreButton = (element, isClassAdd = true) => {
  if (isClassAdd) {
    element.classList.add('is-visible');
    return;
  }
  element.classList.remove('is-visible');
};
