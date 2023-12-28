import React, { useState } from 'react';
import './Year.css'; // Create a CSS file for styling if needed

const years = ['2023','2022','2021','2020','2019','2018','2017','2016','2011-2015','2006-2010','2001-2005','1991-2000']

function Year() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (year) => {
    const YearResultUrl = `/year-results/:${year}`;
    window.location.href = YearResultUrl;
    setIsOpen(!isOpen);
};

  return (
    <div className='year-dropdown'>
      <button className='year-button' onClick={toggleDropdown} ou>
        Year
      </button>
      {isOpen && (
        <ul className='year-list'>
          {years.map((year, index) => (
            <li onClick={()=>handleClick(year)}  key={index}>{year}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Year;
