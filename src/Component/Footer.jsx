import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='sm:px-16 px-6 py-8 relative'>
        <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
            <div className='flex items-center justify-between flex-wrap gap-5'>
                <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
                Make your digital presence count
                </h4>
                <button className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]'>
                    <img src="https://eshway.com/headset.svg" alt="" />
                    Contact Us 
                </button>
            </div>





        <div className='flex flex-col'>
            <div className='mb-[50px] h-[2px] bg-white opacity-10'></div>
            <div className='flex items-center justify-between flex-wrap gap-4'>
                <h4 className='font-extrabold text-[24px] text-white'>ESHWAY</h4>
                <p className='font-normal text-[14px] text-white opacity-50'>Copyright © 2022 - 2023 Eshway. All rights reserved.</p>
                <div className='flex gap-4'>

                    <img src="https://eshway.com/linkedin.svg" alt="" className='w-[24px] h-[24px] object-contain cursor-pointer' />
                    <img src="https://eshway.com/instagram.svg" alt="" className='w-[24px] h-[24px] object-contain cursor-pointer' />
                </div>
            </div>
        </div>



   </div>
   </footer>
    </div>
  )
}

export default Footer
