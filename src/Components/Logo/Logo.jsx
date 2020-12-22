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
          top: '25%',
          left: '25%',
          zIndex: 2,
        }}
      >
        <TiltPhaseSix
          options={{}}
          style={{
            background: `url(${watherBg}) no-repeat fixed center`,
            backgroundSize: 'fit',
            height: 500,
            width: 740,
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
