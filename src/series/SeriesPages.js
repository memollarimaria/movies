import React from 'react'
import Upcoming from '../components/Upcoming/Upcoming'
import { upcome } from '../dummyData'
import Series from '../components/seriesPage/Series'

function SeriesPages() {
  return (
    <>
    <Upcoming items={upcome} title='Upcoming Movies'/>
    <Series/>
    </>
  )
}

export default SeriesPages
