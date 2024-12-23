import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

function LeftNavbar() {
  return ( 
    <div className="flex justify-start ml-28">
      <Link to="/">
        <img 
          src={Logo} alt="logo" className="logo max-w-16 max-h-16 w-auto h-auto"
        />
      </Link>
    </div>
  );
}

export default LeftNavbar;
