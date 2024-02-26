import React from 'react'
import Aos from 'aos'
import'aos/dist/aos.css'

import { useEffect } from 'react'
const AboutUS = () => {
  useEffect(()=>{

    Aos.init()
    },[])

  return (
    <div className='flex flex-col items-center mx-auto px-7 text-center pt-3  text-white font-normal gap-2 '>
        <h4 className="text-reveal"  data-aos="fade-right" data-aos-duration= "700" >About Eshway </h4>
        <p className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white ' data-aos= "slide-up" data-aos-duration= "1300">

     <span className='text-white font-bold'>
     Eshway
        </span> is a digital agency specializing in website development, mobile application development, SEO, and other digital marketing services. With a team of skilled developers, designers, and marketers, the company offers end-to-end services, from ideation and strategy development to implementation and ongoing maintenance. The startup strives to stay up-to-date with the latest trends and technologies in the digital space, enabling its clients to stay ahead of the competition.
        </p>
        <img src="https://eshway.com/arrow-down.svg" alt="" data-aos= "slide-up" data-aos-duration= "1300" className='w-[18px] h-[28px] object-contain mt-[28px]'/>
    </div>
  )
}

export default AboutUS
