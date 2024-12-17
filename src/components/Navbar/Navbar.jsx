import React from 'react'
import { Link } from 'react-router-dom'
import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'

function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 p-3 mb-3 fixed w-full z-50 shadow-lg'>
      <ul className='flex justify-around items-center'>
          <LeftNavbar/>
          <li><Link to ="/position/comeng"><span className='nav-text'>POSITION</span></Link></li>
          <li><Link to ="/learn"><span className='nav-text'>LEARN</span></Link></li>
          <li><Link to ="/about"><span className='nav-text'>ABOUT</span></Link></li>
          <RightNavbar/>
      </ul>
    </nav>
  )
}

export default Navbar
