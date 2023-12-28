import React,{ useState } from 'react'
import Home from './Home';
import { homeData } from '../../../dummyData';
import './Home.css'

function Homes() {
  const [items,setItems]= useState(homeData)

  return (
    <>
    <section className='home'>
      {items && <Home items={items}/>}
    </section>
    <div className='margin'>

    </div>
  </>
  )
}

export default Homes
