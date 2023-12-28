import React, { useState } from 'react';
import './Genres.css';

const genres = ['Action', 'Adventure','Biography','Crime','Comedy', 'Drama','Family','Fantasy', 'Horror','Romance', 'Sci-Fi', 'Thriller']; // List of genres

function Genres() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (genre) => {
    const GenresResultUrl = `/genres-results/:${genre}`;
    window.location.href = GenresResultUrl;
    setIsOpen(!isOpen);
};

  return (
    <div className='genre-dropdown'>
      <button className='genre-button' onClick={toggleDropdown}>
        Genres
      </button>
      {isOpen && (
        <ul className='genre-list'>
          {genres.map((genre, index) => (
            <li onClick={()=>handleClick(genre)}  key={index}>{genre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Genres;
