import React, { useState } from 'react';

const Navbar = ({ onNavigate, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Movie App</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => onNavigate('popular')}>Popular</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => onNavigate('top-rated')}>Top Rated</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => onNavigate('upcoming')}>Upcoming</button>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
