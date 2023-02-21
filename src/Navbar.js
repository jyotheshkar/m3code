import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
        <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <img src="https://www.m3sensation.com/images/logo1.png" className='w-10 h-10' />
      <span class="ml-3 text-xl">M3 SENSATION</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white">
        <LinkRoll to="home "> HOME </LinkRoll>
</a>
      <a class="mr-5 hover:text-white">
      <LinkRoll to="services">  OUR SERVICES</LinkRoll>
       </a>
      <a class="mr-5 hover:text-white">
        <Link to="career" > CAREERS </Link>
        </a>
      <a class="mr-5 hover:text-white">

      <Link to="affiliate" > AFFILIATE </Link>
      </a>
      <a class="mr-5 hover:text-white">
      <LinkRoll to="team">  TEAM </LinkRoll>
      </a>
      <a class="mr-5 hover:text-white">

      <LinkRoll to="about"> ABOUT US </LinkRoll>
      </a>
      <a class="mr-5 hover:text-white">
      <LinkRoll to="contact"> CONTACT US </LinkRoll>
      </a>
    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Navbar