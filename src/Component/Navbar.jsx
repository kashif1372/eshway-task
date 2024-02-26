import React, { useEffect } from 'react'
// import {fadeInLeft} from 'react-animations'
import Aos from 'aos'
import { GrMenu } from "react-icons/gr";
import 'aos/dist/aos.css';
const Navbar = () => {

useEffect(()=>{
Aos.init()

},[])


  return (
    <div className=' flex justify-center ' data-aos="fade-down" data-aos-duration="600" data-aos-delay="700">
     
        <img src="https://eshway.com/logo.png" alt="" className='h-20' />
           <h2 className='fixed top-2 right-[1.6rem] text-[28px] text-white'>  <GrMenu className='text-white'/>  </h2>
         
          
     
    </div>
  )
}

export default Navbar
