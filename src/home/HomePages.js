import React from 'react'
import Homes from '../components/header/homes/Homes'
import Upcoming from '../components/Upcoming/Upcoming'
import { useState } from 'react'
import { latest, recommended, upcome } from '../dummyData'
import Trending from '../components/trending/Trending'

function HomePages() {

  const [upcomeItems,setUpcomeItems]=useState(upcome)
  const [latestItems,setLatestItems]=useState(latest)
  const [rec,setrec]=useState(recommended)

  return (
    <>
        <Homes/>
        <Upcoming items={upcomeItems} title='Upcoming Movies'/>
        <Upcoming items={latestItems} title='Latest Movies'/>
        <Trending/>
        <Upcoming items={rec} title='Recommended Movies'/>
    </>
  )
}

export default HomePages
