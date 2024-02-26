import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Merch = () => {
useEffect(()=>{
  Aos.init()
},[])


  return (
    <div>
      <section className='sm:p-16 xs:p-8 px-6 py-12'>
        <div className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-6' data-aos="fade-right" data-aos-duration='600'>
        <div className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative'>
            <div >
            <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white'>
                
Official Merchandise
            </h4>
            <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white'>
                Eshway
            </p>
            </div>

            <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'>
            Embrace the Digital Vibe! 🚀 Elevate your style with our exclusive Eshway official T-shirt. Showcasing a sleek design and unbeatable comfort, this limited edition tee stands out. Get yours now!
            </p>
            <button className='  text-white w-[100%] px-2 rounded-lg
            py-2 bg-[#323f5d] css-1hw9j7s'>Buy Now !</button>
        </div>
        <div className='relative flex-1 flex justify-center items-center' data-aos="fade-right" data-aos-duration='600'>

                <img src="https://eshway.com/Front.webp" alt="" className='w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]'/>
        </div>





        </div>
      </section>
    </div>
  )
}

export default Merch
