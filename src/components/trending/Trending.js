import React from 'react'
import './Trending.css'
import Home from '../header/homes/Home'
import { useState } from 'react'
import { trending } from '../../dummyData'

function Trending() {

    const [items,setItems]=useState(trending)
  return (
    <>
      <section className='trending'>
        <Home items={items}/>
      </section>
    </>
  )
}

export default Trending
