import React from 'react'
import Header from './Component/header.jsx'
import Navbar from './Component/Navbar.jsx'
import AboutUS from './Component/AboutUS.jsx'
import Services from './Component/Services.jsx'
import GEtstarted from './Component/GEtstarted.jsx'
import Watsnew from './Component/Watsnew.jsx'
import EshVision from './Component/EshVision.jsx'
import Merch from './Component/Merch.jsx'
import Footer from './Component/Footer.jsx'
import './App.css'
const App = () => {
  return (
    <div className='custom-gradient '>
      <Navbar/>
     <Header/>
     <AboutUS/>
     <Services/>
     <GEtstarted/>
     <Watsnew/>
     <EshVision/>
     <Merch/>
     <Footer/>
    </div>
  )
}

export default App
