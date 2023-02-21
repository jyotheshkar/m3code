import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Map from './Map';
import Staff from './Staff';
import Contacta from './Contacta';
import Contactb from './Contactb';
import About from './About'
import Transaprent from './Transaprent';
import Scrollalpha from './Scrollalpha';
import { First } from './First';
import Scrollbeta from './Scrollbeta';


const Menu = () => {
  return (
    <div className=''>

    
        <First />
        < Scrollalpha />
        <Scrollbeta />
        <Transaprent />
        <About />
        <Staff />
        <Contacta />
        <Contactb />
        <Map />
      
    </div>
  )
}

export default Menu