import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      {/* <ul className='header-links'>
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
      </ul> */}
      <div className='three rows' id='first-page'>
        <div className='three cols'>
          <div className='schmancy tile pic0'>
            <div className='content'>
              <Link to='/contact' className='nav-links'>
                Kontakt
              </Link>
            </div>
          </div>
          <div className='schmancy tile pic3'>
            <div className='content'> Stuff. </div>
          </div>
          <div className='schmancy tile pic1'>
            <div className='content'> Fancy. </div>
          </div>
        </div>

        <div className='four cols'>
          <div className='schmancy tile pic2'>
            <div className='content'> This. </div>
          </div>
          <div className='schmancy tile pic1'>
            <div className='content'> Is. </div>
          </div>
          <div className='schmancy tile pic2'>
            <div className='content'> This. </div>
          </div>
          <div className='schmancy tile pic1'>
            <div className='content'> Is. </div>
          </div>
        </div>

        <div className='three cols'>
          <div className='schmancy tile pic0'>
            <div className='content'> Fancy. </div>
          </div>
          <div className='schmancy tile pic3'>
            <div className='content'> Stuff. </div>
          </div>
          <div className='schmancy tile pic1'>
            <div className='content'> Fancy. </div>
          </div>
        </div>
      </div>

      {/* <div className="two rows" id="second-page">
  <div className="three cols ">
    <div className="schmancy tile  pic0">
      <div className="content"> Fancy. </div>
    </div>
    <div className="schmancy tile  pic3">
      <div className="content"> Stuff. </div>
    </div>
    <div className="schmancy tile  pic1">
      <div className="content"> Fancy. </div>
    </div>
  </div> */}

      {/* <div className="three cols">
    <div className="schmancy tile  pic0">
      <div className="content"> Fancy. </div>
    </div>
    <div className="schmancy tile  pic3">
      <div className="content"> Stuff. </div>
    </div>
    <div className="schmancy tile  pic1">
      <div className="content"> Fancy. </div>
    </div>
  </div> */}

      {/* </div> */}
    </div>
  );
};

export default Navbar;
