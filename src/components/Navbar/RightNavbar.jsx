import React, { useEffect } from 'react'
import search from '../../assets/search.svg'
import { useState } from 'react'
import { FaRegLightbulb } from "react-icons/fa";
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
          <FaRegLightbulb className='text-white i-bulb' />
        </li>
        <div id="lang" className='rightnav-lang select-none' onClick={handleClick}>
          <li><span className='rightnav-lang-text'>{lang}</span></li> 
        </div>
      </ul>
    </div>
  )
}

export default RightNavbar
