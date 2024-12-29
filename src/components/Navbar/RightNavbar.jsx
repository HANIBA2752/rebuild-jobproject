import React, { useEffect } from 'react'
import togglelightoff from '../../assets/black_moon.png'
import togglelighton from '../../assets/white_moon.png'
import search from '../../assets/search.svg'
import { useState } from 'react'
import './Navbar.css'

function RightNavbar() {
  const [lang, setLang] = useState('EN');

  const handleClick = () =>{
    setLang((prevLang) => (prevLang === 'EN' ? 'TH' : 'EN'));
  };

  const handleClickSearch = () => {
    const searchImg = document.getElementById('search-img');
    if(searchImg){
      searchImg.classList.add('animate-clickSearch');
      setTimeout(() => searchImg.classList.remove('animate-clickSearch'), 300);
    }
  };

  return (
    
    <div className='rightnav'>
      <ul className='rightnav-ul'>
        <li className='rightnav-li'>
          {/* <form className='rightnav-form'>
            <div className='rightnav-search'>
              <input type="text" name="search" id="search" />
              <button type="submit"><img alt="svgImg" id="search-img" onClick={handleClickSearch} src={search}/></button>
            </div>
          </form> */}
          <span className='rightnav-text'>LIGHT OFF</span>
          <img src={togglelightoff} alt="light" className='rightnav-img'/>
        </li>
        <div id="lang" className='rightnav-lang select-none' onClick={handleClick}>
          <li><span className='rightnav-lang-text'>{lang}</span></li> 
        </div>
      </ul>
    </div>
  )
}

export default RightNavbar
