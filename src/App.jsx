import React from 'react'
import Header from './Component/header'
import Navbar from './Component/Navbar'
import AboutUS from './Component/AboutUS'
import Services from './Component/Services'
import GEtstarted from './Component/GEtstarted'
import Watsnew from './Component/Watsnew'
import EshVision from './Component/EshVision'
import Merch from './Component/Merch'
import Footer from './Component/Footer'
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
