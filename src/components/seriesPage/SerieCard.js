import React from 'react'
import "./Series.css"

function SerieCard({item:{id,poster,title,season,time}}) {

  const handleClick = () => {
    console.log(id)
    const searchResultsUrl = `/singlePage/${id}`;
    window.location.href = searchResultsUrl;
};
  return (
    <>
       <div className='seriebox' onClick={handleClick}>
        <div className='poster'>
            <img src={poster} alt=''/>
        </div>
        <div className='title'>
           <h4>{title}</h4>
           {season?<span>{season}- </span> :''}
           <span>{time}</span><br/>
        </div>
      </div>
    </>
  )
}

export default SerieCard
