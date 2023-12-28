import React, { useState } from 'react';
import { homeData, upcome, trending,latest,recommended, series } from '../../dummyData';
import Pagination from '../pagination/Pagination';
import SerieCard from '../seriesPage/SerieCard';

const ITEMS_PER_PAGE = 15;
const items=[...homeData,...upcome,...trending,...latest,...recommended,...series]

function Movies() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentMovies = items.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='container'>
        <div className='heading flexSB'>
          <h1>Newest Movies</h1>
        </div>
        <div className='seriesContainer'>
          {currentMovies.map((item) => (
            <SerieCard key={item.id} item={item}/>
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
}

export default Movies;
