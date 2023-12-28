import React from 'react'
import Movies from '../components/moviesPage/Movies'
import Upcoming from '../components/Upcoming/Upcoming'
import { recommended } from '../dummyData'

function MoviesPages() {
  return (
    <>
      <Movies/>
      <Upcoming title='Recommended movies' items={recommended}/>
    </>
  )
}

export default MoviesPages
