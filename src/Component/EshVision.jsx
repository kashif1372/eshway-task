import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const EshVision = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div>
      <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col' data-aos="slide-up">
        <h2 className='mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center'>EshVision</h2>
        <p className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white'>
        Empowering developers with comprehensive free training, hands-on projects, and paid freelancing opportunities for a successful career in development. Join us to gain valuable skills, build your portfolio, and earn while learning. Take the leap into a thriving development career with EshVision. Register now : Registration Link.

        </p>
        </div>

      </section>
    </div>
  )
}

export default EshVision
