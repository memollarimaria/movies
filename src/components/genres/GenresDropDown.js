import React from 'react'
import './GenresDropdown.css'
import { homeData, latest, recommended, series, trending, upcome } from '../../dummyData'
import Series from '../seriesPage/Series'
import { PiSmileySadLight } from 'react-icons/pi';

const items=[...homeData,...latest,...upcome,...recommended,...trending,...series]

function GenresDropdown({genre}) {

  const genreWithoutColon = genre.split(':')[1].toLowerCase(); 
  const filteredMovies = items.filter(movie =>
      movie.genres.toLowerCase().includes(genreWithoutColon)
  );
  return (
    <div>
    {filteredMovies.length ?  <>
    <h2 className='search'>Search Results for {genre}</h2>
     <Series searchResult={filteredMovies}/>
      </> : <h2 className='search'><PiSmileySadLight size={40}/> No Results for {genre}</h2>
      }
    </div>
  )
}

export default GenresDropdown
