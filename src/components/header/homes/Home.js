import React from 'react'
import HomeCard from './HomeCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const SampleNextArrow = (props) =>{
  const {onClick} = props
  return(
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <BsChevronRight size={30}/>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) =>{
  const {onClick} = props
  return(
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <BsChevronLeft size={30}/>
      </button>
    </div>
  )
}

function Home({items}) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:<SampleNextArrow/>,
      prevArrow:<SamplePrevArrow/>
    };

  return (
    <>
      <div className='homeContainer'>
      <Slider {...settings}>
        {items.map((item)=>(
          <HomeCard key={item.id} item={item}/>
        ))}
        </Slider>
      </div>
    </>
  )
}

export default Home
