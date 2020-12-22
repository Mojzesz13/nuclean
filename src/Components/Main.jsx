import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from '../Components/AboutUs/AboutUs';
import Gallery from '../Components/Gallery/Gallery';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Offert from './Offert/Offert';

const Main = () => {
  const [isTablet, setIsTablet] = useState(false);

  const resize = () => {
    let currentView = window.innerWidth <= 1199;
    if (currentView !== isTablet) {
      setIsTablet(currentView);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize.bind(this));
    resize();
    return window.removeEventListener('resize', resize.bind(this));
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/contact' component={Contact} /> 
       <Route path='/gallery' component={Gallery} />
        <Route path='/offert' component={Offert} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Main;
