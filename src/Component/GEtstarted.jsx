import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const GEtstarted = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8  my-[66px] '>
     <div className='flex-1 flex justify-center items-center'>
      <img src="https://eshway.com/website.png" alt="" id='rotating-element' className='w-[90%] h-[90%] object-contain ' data-aos="fade-left"  data-aos-delay="700"/>

     </div>
     
      <div className='flex-[0.75] flex justify-center flex-col px-[22px]'>
        <p className='font-normal text-[14px] text-secondary-white undefined text-[#B0B0B0]'>| How Eshway Works</p>
        <h2 className='mt-[8px] font-bold md:text-[64px] text-[40px] text-white undefined'>Get started with just a few clicks</h2>
        <div className='mt-[31px] flex flex-row max-w-[370px] gap-[24px]'>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'>
        <p className='font-bold text-[20px] text-white'>01</p>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>Contact the team by filling the form</p>

       
        </div>
        <div className='mt-[31px] flex flex-row max-w-[370px] gap-[24px]'>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'>
        <p className='font-bold text-[20px] text-white'>02</p>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>Contact the team by filling the form</p>

       
        </div>
        <div className='mt-[31px] flex flex-row max-w-[370px] gap-[24px]'>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'>
        <p className='font-bold text-[20px] text-white'>03</p>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>Contact the team by filling the form</p>

       
        </div>
      </div>
    </div>
  )
}

export default GEtstarted
