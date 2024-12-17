import React from 'react'
import thflag from '../../assets/thai.png'
import usflag from '../../assets/us.png'
import togglelight from '../../assets/black_moon.png'

function RightNavbar() {
  return (
    <div className='rightnav'>
      <ul className='flex justify-end items-center ring-offset-1 ring-1 ring-blue-100 rounded-xl'>
        <li className='flex justify-center items-center p-3'>
          <span className='text-xs font-semibold text-white cursor-default lighttext'>LIGHT OFF</span>
          <img src={togglelight} alt="light" id="togglelight" className='h-7 w-auto cursor-pointer opacity-40 pl-2'/>
        </li>
        <li><img src={thflag} alt="th" id="thflag" className='h-10 w-auto opacity-70 cursor-pointer pr-2'/></li>
        <li><img src={usflag} alt="us" id="usflag" className='h-7 w-auto opacity-70 cursor-pointer pr-4' /></li>
      </ul>
    </div>
  )
}

export default RightNavbar
