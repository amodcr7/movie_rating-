import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, onMovieClick }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {movies.map(movie => (
        <div key={movie.id} className="col">
          <MovieCard movie={movie} onClick={() => onMovieClick(movie.id)} />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;