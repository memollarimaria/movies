import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineBars } from 'react-icons/ai';
import { GiPopcorn } from 'react-icons/gi';
import { MdClear } from 'react-icons/md';
import Genres from '../dropdown/genres/Genres';
import Year from '../dropdown/year/Year';

function Header() {
    const [mobile, setMobile] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
     
    const handleSearch = (e) => {
        e.preventDefault(); 
        const searchResultsUrl = `/search-results/:${searchQuery}`;
        window.location.href = searchResultsUrl;
        setSearchQuery('');
        setMobile(false);
    };
    

    return (
        <header>
            <div className='container flexSB'>
                <nav className='flexSB'>
                <Link to='/'>
                    <div className='logo'>
                    <GiPopcorn size={30}/> WatchNow
                    </div>
                    </Link>
                    <ul className={mobile ? 'navMenu-list' : 'flexSB'} onClick={() => setMobile(false)}>
                        <Link to='/'>Home</Link>
                        <Link to='/series'>Series</Link>
                        <Link to='/movies'>Movies</Link>
                        <Genres/>
                        <Year/>
                        {/* <Link to='/contact'>Contact</Link> */}
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!mobile)}>
                        {mobile ? <MdClear/> : <AiOutlineBars/>}
                    </button>
                </nav>
                <div className='account flexSB'>
                <form onSubmit={handleSearch}>
                    <div className='searchbar'>
                        <input
                            type='text'
                            placeholder='Search...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className='searchicon'>
                            <AiOutlineSearch size={25} />
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;
