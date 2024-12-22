import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieListPage from './pages/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, searchMovies } from './api/movieService';

const App = () => {
  const [currentPage, setCurrentPage] = useState('popular');
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedMovieId(null);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage('search');
    setSelectedMovieId(null);
  };

  if (selectedMovieId) {
    return <MovieDetailPage movieId={selectedMovieId} onBack={() => setSelectedMovieId(null)} />;
  }

  const getPageContent = () => {
    switch (currentPage) {
      case 'popular':
        return (
          <MovieListPage
            fetchFunction={getPopularMovies}
            title="Popular Movies"
            onMovieClick={setSelectedMovieId}
          />
        );
      case 'top-rated':
        return (
          <MovieListPage
            fetchFunction={getTopRatedMovies}
            title="Top Rated Movies"
            onMovieClick={setSelectedMovieId}
          />
        );
      case 'upcoming':
        return (
          <MovieListPage
            fetchFunction={getUpcomingMovies}
            title="Upcoming Movies"
            onMovieClick={setSelectedMovieId}
          />
        );
      case 'search':
        return (
          <MovieListPage
            fetchFunction={(page) => searchMovies(searchQuery, page)}
            title={`Search Results for "${searchQuery}"`}
            onMovieClick={setSelectedMovieId}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} onSearch={handleSearch} />
      {getPageContent()}
    </>
  );
};

export default App;