import React from 'react';
import { IMG_BASE_URL } from '../api/axios';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="card h-100" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img
        src={movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : '/api/placeholder/300/450'}
        className="card-img-top"
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <span className="badge bg-primary">Rating: {movie.vote_average.toFixed(1)}/10</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;