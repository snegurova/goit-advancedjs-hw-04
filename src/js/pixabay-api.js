import axios from 'axios';

const URI = 'https://pixabay.com/api/';
const API_KEY = '46847728-6b7b012d3b9a78a4f273a5faa';
export const ITEMS_PER_PAGE = 15;

export const fetchImages = async (key, page) => {
  const {
    data: { hits: images, totalHits },
  } = await axios.get(URI, {
    params: {
      key: API_KEY,
      q: key,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: ITEMS_PER_PAGE,
    },
  });
  return { images, totalHits };
};
