import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul className='header-links'>
        <li className='nav-item'>
          <Link to='/aboutus' className='nav-links'>
            O nas
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/gallery' className='nav-links'>
            Galeria
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/offert' className='nav-links'>
            Oferta
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-links'>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
