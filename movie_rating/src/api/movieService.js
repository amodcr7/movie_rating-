import axios from './axios';

export const getPopularMovies = (page = 1) => {
  return axios.get(`/movie/popular`, { params: { page } });
};

export const getTopRatedMovies = (page = 1) => {
  return axios.get(`/movie/top_rated`, { params: { page } });
};

export const getUpcomingMovies = (page = 1) => {
  return axios.get(`/movie/upcoming`, { params: { page } });
};

export const getMovieDetails = (movieId) => {
  return axios.get(`/movie/${movieId}`);
};

export const getMovieCredits = (movieId) => {
  return axios.get(`/movie/${movieId}/credits`);
};

export const searchMovies = (query, page = 1) => {
  return axios.get(`/search/movie`, { params: { query, page } });
};