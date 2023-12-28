import React from 'react';
import { homeData, latest, recommended, series, trending, upcome } from '../dummyData';
import Series from '../components/seriesPage/Series';
import "./Search.css"
import { PiSmileySadLight } from 'react-icons/pi';

const items=[...homeData,...latest,...upcome,...recommended,...trending,...series]

const SearchResults = (props) => {
  const { query } = props.match.params;

  const queryWithoutColon = query.split(':')[1].toLowerCase();
  const filteredMovies = items.filter(movie =>
      movie.title.toLowerCase().includes(queryWithoutColon)
  );
  

  return (
    <div>
          {filteredMovies.length ? (
        <>
          <h2 className='search'>Search Results for {query}</h2>
          <Series searchResult={filteredMovies} />
        </>
      ) : (
        <h2 className='search'>
          <PiSmileySadLight size={40} /> No Results for {query}
        </h2>
      )}
    </div>
  );
};

export default SearchResults;
