import React from 'react'
import togglelight from '../../assets/black_moon.png'

function RightNavbar() {
  return (
    <div className='rightnav'>
      <ul className='flex justify-end items-center ring-offset-1 ring-1 ring-blue-100 rounded-xl'>
        <li className='flex justify-center items-center p-3'>
          <span className='smallText-tp cursor-default'>LIGHT OFF</span>
          <img src={togglelight} alt="light" id="togglelight" className='h-7 w-auto cursor-pointer opacity-40 pl-2'/>
        </li>
        <div id="lang" className='mb-0.5 mr-5 border-gray-700 border-2 px-2 pb-1 rounded-lg hover:border-indigo-600 duration-200 cursor-pointer'>
          <li><span className='smallText-tp'>TH</span></li> 
        </div>
      </ul>
    </div>
  )
}

export default RightNavbar
