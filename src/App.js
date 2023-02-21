import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './Menu'
import { Routes } from 'react-router-dom'
import Career from './Career'
import Affiliate from './Affiliate';
import Navbar from './Navbar';
import Footer from './Footer'

const App = () => {
  return (
    <div>

     <Navbar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='career' element={<Career />} />
        <Route path='affiliate' element={<Affiliate />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App