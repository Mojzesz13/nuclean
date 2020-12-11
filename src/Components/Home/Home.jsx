import React from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <Logo />
    </div>
  );
};

export default Home;
