import React from 'react'
import togglelight from '../../assets/black_moon.png'
import { useState } from 'react'
import './Navbar.css'

function RightNavbar() {
  const [lang, setLang] = useState('EN')

  const handleClick = () =>{
    setLang((prevLang) => (prevLang === 'EN' ? 'TH' : 'EN'));
  };

  return (
    
    <div className='rightnav'>
      <ul className='rightnav-ul'>
        <li className='rightnav-li'>
          <span className='rightnav-text'>LIGHT OFF</span>
          <img src={togglelight} alt="light" id="togglelight" className='rightnav-img'/>
        </li>
        <div id="lang" className='rightnav-lang select-none' onClick={handleClick}>
          <li><span className='rightnav-lang-text'>{lang}</span></li> 
        </div>
      </ul>
    </div>
  )
}

export default RightNavbar
