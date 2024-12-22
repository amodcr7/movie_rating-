import React, { useState, useEffect } from 'react';
import { getMovieDetails, getMovieCredits } from '../api/movieService';
import { IMG_BASE_URL } from '../api/axios';

const MovieDetailPage = ({ movieId, onBack }) => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        const [movieResponse, creditsResponse] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCredits(movieId)
        ]);
        
        setMovie(movieResponse.data);
        setCast(creditsResponse.data.cast.slice(0, 10));
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="container my-4">
      <button className="btn btn-primary mb-4" onClick={onBack}>
        Back to List
      </button>
      
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${IMG_BASE_URL}${movie.poster_path}`}
              className="img-fluid rounded-start"
              alt={movie.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{movie.title}</h1>
              <p className="card-text">{movie.overview}</p>
              <div className="mb-3">
                <p className="mb-1"><strong>Release Date:</strong> {movie.release_date}</p>
                <p className="mb-1"><strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10</p>
                <p className="mb-1"><strong>Runtime:</strong> {movie.runtime} minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4 mb-3">Cast</h2>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
        {cast.map(actor => (
          <div key={actor.id} className="col">
            <div className="card h-100">
              <img
                src={actor.profile_path ? `${IMG_BASE_URL}${actor.profile_path}` : '/api/placeholder/200/300'}
                className="card-img-top"
                alt={actor.name}
              />
              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text"><small className="text-muted">{actor.character}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;