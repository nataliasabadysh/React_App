
import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

/* eslint-disable-next-line */
export const fetchArticles = (query = 'react') => axios.get(BASE_URL + query);


axios.defaults.baseURL = 'http://localhost:4040';

export const fetchArticle = (category = null) => {
  const url = category ? `/articles?category=${category}` : '/articles';

  return axios.get(url).then(response => response.data);
};

export const fetchArticleWithId = id => {
  return axios.get(`/articles/${id}`).then(response => response.data);
};