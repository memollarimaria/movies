import React from 'react';
import { homeData, latest, recommended, series, trending, upcome } from '../../dummyData';
import Series from '../seriesPage/Series';
import { PiSmileySadLight } from 'react-icons/pi';

const items = [...homeData, ...latest, ...upcome, ...recommended, ...trending, ...series];

function YearDropdown({ year }) {
  const filteredMovies = items.filter(movie => {
    const yearWithoutColon = year.split(':')[1].toLowerCase();
    if (yearWithoutColon.includes('-')) {
      // Handle range years like "1991-2000"
      const [startYear, endYear] = yearWithoutColon.split('-').map(year => parseInt(year));
      const movieYear = parseInt(movie.year);
      return !isNaN(movieYear) && movieYear >= startYear && movieYear <= endYear;
    } else {
      // Handle single years
      return movie.year.toLowerCase().includes(yearWithoutColon);
    }
  });

  return (
    <>
      {filteredMovies.length ? (
        <>
          <h2 className='search'>Search Results for {year}</h2>
          <Series searchResult={filteredMovies} />
        </>
      ) : (
        <h2 className='search'>
          <PiSmileySadLight size={40} /> No Results for year {year}
        </h2>
      )}
    </>
  );
}

export default YearDropdown;
