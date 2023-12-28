import React, { useState } from 'react'
import {AiFillStar, AiOutlinePlayCircle} from 'react-icons/ai'
import {BiSolidStarHalf} from 'react-icons/bi'
import {BsFillPlayFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import MovieModal from '../../movieModal/MovieModal'

function HomeCard({item:{id,poster,title,rating,released,time,genres,plot,actors,}}) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={poster} alt=''/>
        </div>
        <div className='content flex'>
          <div className='details row '>
          <h1>{title}</h1>
          <div className='rating flex'>
          <div className='card-icon'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BiSolidStarHalf/></div>
          </div>
          <label>{rating}</label>
          <span>GP </span>
          <label>{time}</label>
        <p>{plot}</p>
        <div className='cast'>
          <h4>
            <span>Starring: </span>{actors}
          </h4>
          <h4>
            <span>Genres: </span>{genres}
          </h4>
          <h4>
            <span>Released: </span>{released}
          </h4>
        </div>
        <Link to={`/singlepage/${id}`}>
        <button className='primary-btn'>
          <BsFillPlayFill/>PLAY NOW
        </button>
          </Link>
        </div>
        <div className='playButton row'>
            <button onClick={openModal}>
              <div className='img'>
                <AiOutlinePlayCircle size={70}/>
               </div>
              WATCH TRAILER
            </button>
        </div>
        </div>
      </div>
      {modalIsOpen && <MovieModal closeModal={closeModal} id={id}/>}
    </>
  )
}

export default HomeCard
