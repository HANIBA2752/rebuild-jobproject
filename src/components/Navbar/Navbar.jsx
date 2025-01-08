import React from 'react'
import { Link } from 'react-router-dom'
import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'
import '/src/components/Navbar/Navbar.css'

function Navbar() {
  return (
    <nav className='main-nav fixed w-screen bg-black/50 border-white border-opacity-20 backdrop-blur-sm'>
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
