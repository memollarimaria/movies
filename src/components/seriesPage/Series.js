import React, { useEffect, useState } from 'react';
import { series } from '../../dummyData';
import SerieCard from './SerieCard';
import Pagination from '../pagination/Pagination';

const ITEMS_PER_PAGE = 15;

function Series({searchResult}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [items,setItems]=useState(series)
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentSeries = items.slice(startIndex, endIndex);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
    useEffect(()=>{
      if(!searchResult) return
      setItems(searchResult)
    },[searchResult])


  return (
    <>
      <div className='container'>
        {!searchResult && <div className='heading flexSB'>
          <h1>Newest Series</h1>
        </div>}
        <div className='seriesContainer'>
          {currentSeries.map((item) => (
            <SerieCard key={item.id} item={item}/>
          ))}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
}

export default Series;
