import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <div className='navbar-container '>
      <div className='test'>
        <Logo />
      </div>
      <div className='row-container first'>
        <div className='column-container firstA'>
          <div className='text-container'>
            <Link to='/aboutus' className='nav-links'>
              O nas
            </Link>
          </div>
        </div>
        <div className='column-container'>
          <div className='text-container'>
            <Link to='/gallery' className='nav-links'>
              Galeria
            </Link>
          </div>
        </div>
      </div>
      <div className='row-container second'>
        <div className='column-container'>
          <div className='text-container'>
            <Link to='/offert' className='nav-links'>
              Oferta
            </Link>
          </div>
        </div>
        <div className='column-container'>
          <div className='text-container'>
            <Link to='/contact' className='nav-links'>
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
