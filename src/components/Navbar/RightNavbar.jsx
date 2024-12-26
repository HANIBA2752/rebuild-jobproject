import React from 'react'
import togglelight from '../../assets/black_moon.png'
import { useState } from 'react'

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
        <div id="lang" className='rightnav-lang'>
          <li><span className='smallText-tp' onClick={handleClick}>{lang}</span></li> 
        </div>
      </ul>
    </div>
  )
}

export default RightNavbar
