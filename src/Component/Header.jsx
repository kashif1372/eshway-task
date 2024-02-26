import React from 'react'
import {useEffect} from 'react'
// import {slideInLeft} from 'react-animations'
import Aos  from 'aos'
import 'aos/dist/aos.css'
const Header = () => {
  
  
  useEffect(()=>{
    Aos.init({
      offset:100
    });
  },[])



  return (
   <section className='sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6 flex flex-col lg:flex-row'>
     <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col flex-1'   data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100"
        data-aos-delay="200" >

      <div className ='flex justify-center flex-col relative z-10 '>
        <h1 className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>Eshway</h1>
        <div className='flex flex-row justify-center items-center my-4'>
          <h1 className='text-transparent bg-clip-text font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono bg-gradient-to-tl from-[#1a232e] to-blue-300'>TRANSFORMING YOUR DIGITAL LANDSCAPE FOR A BETTER TOMORROW.</h1>
        </div>
      </div>
     </div>


     <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col flex-1'data-aos="fade-left" data-aos-duration='600'>
      <div className='relative w-full md:-mt-[20px] -mt-[12px]'>

        <img src="https://eshway.com/ill.png" alt=""  className='w-full xl:h-[550px] lg:h-[500px] sm:h-[550px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'/>
      </div>
 
     </div>
     <a href="/">
      <button className='absolute z-[0] right-[150px] bottom-[100px] hidden md:block xl:right-[700px] lg:block sm:right-[330px] sm:bottom-[100px] lg:bottom-[50px] lg:right-[600px] button rounded-full bg-[#d96dfd] sm:w-[100px] sm:h-[50px] w-[80px] h-[50px] lg:w-[120px] lg:h-[50px] hover:bg-blue-200 hover:text-white hover:scale-110 hover:ease-linear hover:duration-300 ease-out duration-300 font-mono'>Lets Connect </button>
     </a>
   </section> 
  )
}

export default Header
