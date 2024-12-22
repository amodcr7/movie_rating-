import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US'
  }
});

export default axiosInstance;
