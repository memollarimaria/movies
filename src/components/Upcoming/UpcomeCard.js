import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'

function UpcomeCard({item:{ id,poster,title,time}}) {
  return (
    <>
      <div className='moviebox'>
        <div className='img'>
            <img src={poster} alt=''/>
        </div>
        <div className='text'>
           <h3>{title}</h3>
           <span>{time}</span><br/>
           <Link to={`/singlepage/${id}`}>
        <button className='primary-btn'>
          <BsFillPlayFill/>PLAY NOW
        </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default UpcomeCard
