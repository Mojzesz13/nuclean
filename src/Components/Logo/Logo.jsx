import React, { Component } from 'react';
import TiltPhaseSix from './logo2';
import watherBg from '../../assets/wather.jpg';
import logo from '../../assets/logo.svg';
import './Logo.scss';

const options = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
};

class Logo extends Component {
  render() {
    return (
      <div
        className='logo-container '
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
          overflow: 'hidden',
          height: '95vh',
          width: '95vw',
          zIndex: 1,
        }}
      >
        <TiltPhaseSix
          options={{}}
          style={{
            background: `transparent`,
            backgroundSize: 'fit',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TiltPhaseSix options={options}>
            <img src={logo} alt='' />
          </TiltPhaseSix>
        </TiltPhaseSix>
      </div>
    );
  }
}
export default Logo;
