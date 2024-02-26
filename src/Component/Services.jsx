import React from 'react'

const Services = () => {
  return (
    <div className='flex-wrap  flex justify-center gap-4 pt-[4.5rem]'>
      <div className='  flex flex-col justify-between items-center w-[370px]  px-[52px] py-[65px]  gap-[1.7rem]  rounded-xl  mx-[22px]    ' id='custom-gradient'>
        <img src="https://eshway.com/web.png" alt="" />
       <h2 className='text-xl text-slate-200'>Web development</h2>
      </div>
      <div className='w-[370px]  flex flex-col justify-between items-center px-[52px] py-[65px] gap-[1.7rem] rounded-xl mx-[22px] 'id='custom-gradient' >
        <img src="https://eshway.com/phone.png" alt="" />
       <h2 className='text-xl text-slate-200'>Application development</h2>
      </div>
      <div className='w-[370px]  flex flex-col justify-between items-center px-[52px] py-[65px] gap-[1.7rem] rounded-xl  mx-[22px] 'id='custom-gradient' >
        <img src="https://eshway.com/seo.png" alt="" />
       <h2  className='text-xl text-slate-200'>Search Engine  <br/> Optimisation</h2>
      </div>
    </div>
  )
}

export default Services
