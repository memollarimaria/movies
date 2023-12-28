import React from 'react';
import "./Pagination.css"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='pagbut'
      >
        <BsChevronLeft/>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : 'pagbut'}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='pagbut' 
      >
       <BsChevronRight/>
      </button>
    </div>
  );
};

export default Pagination;
