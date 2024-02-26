import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Watsnew = () => {


    useEffect(()=>{
        Aos.init()
    },[])
  return (  

 <div>
 <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>

<div className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'>
        <div className='flex-[0.95] flex justify-center flex-col'data-aos='slide-up'data-aos-duration="1000">

            <p className='font-normal text-[14px] text-secondary-white undefined' >| Whats new?  </p>
            <h2 className='mt-[8px] font-bold md:text-[64px] text-[40px] text-white undefined'>What's new about Eshway?</h2>
      

            <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]' >

                <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]' >
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]' >

                        <img src="https://eshway.com/dollar.png" alt=""  className='w-1/2 h-1/2 object-contain'/>
                    </div>
                    <h1 className='mt-[26px] font-bold text-[24px] leading-[30.24px] text-white'>Not satisfied with the service?</h1>
                    <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>You can come back to us for infinite revisions at free of cost*</p>
                </div>
                <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]' >
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]' >

                        <img src="https://eshway.com/dollar.png" alt=""  className='w-1/2 h-1/2 object-contain'/>
                    </div>
                    <h1 className='mt-[26px] font-bold text-[24px] leading-[30.24px] text-white'>Not satisfied with the service?</h1>
                    <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>You can come back to us for infinite revisions at free of cost*</p>
                </div>
            </div>
            </div>
            <div className='flex-1 flex justify-center items-center'data-aos="flip-right" data-aos-duration="1000" data-aos-delay="20">
                <img src="https://eshway.com/man.png" alt=""className='w-[90%] h-[90%] object-contain' />
            </div>

</div>
</section>
</div>
  )
}

export default Watsnew
    