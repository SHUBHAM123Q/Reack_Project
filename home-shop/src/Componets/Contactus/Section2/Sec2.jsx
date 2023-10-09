import React from 'react'
import './Sec2.css';
const Sec2 = () => {
  return (
    <>
      <div className='border-[3px] border-slate-100  xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] xs:mt-[100px] sm:mt-[130px] md:mt-[130px] lg:mt-[130px] xl:mt-[130px] 2xl:mt-[130px]'>
        <p className='xs:text-[18px] xs:mt-[20px] xs:ms-3 sm:ms-[50px] sm:text-[30px] sm:mt-[30px] lg:ms-[95px] xl:ms-[97px] xl:text-[30px] xl:mt-[80px]'>Send a message</p>
        <div className='xs:m-auto xs:max-w-[250px] sm:max-w-[450px] sm:m-auto md:max-w-[600px] md:m-auto lg:max-w-[700px] lg:m-auto xl:max-w-[920px] xl:m-auto 2xl:max-w-[1200px] 2xl:m-auto'>
          <div className='grid sm:grid-cols-1 sm:gap-3 md:grid-cols-2 xl:grid-cols-2 xl:gap-5 sm:mt-[30px] xl:mt-[35px]'>
            <div className='sm:h-[55px] xl:h-[55px]'>
              <input type='text' placeholder='Enter your name' className='xs:h-[50px] mt-5 sm:h-[55px] xl:h-[55px] xs:w-full xl:w-full bg-slate-100 xs:ps-[25px] xl:ps-[25px]' />

            </div>
            <div className='sm:h-[55px] xl:h-[55px]'>
              <input type='text' placeholder='Enter your email' className='xs:h-[50px] mt-5 sm:h-[55px] xl:h-[55px] xs:w-full xl:w-full bg-slate-100 xs:ps-[25px] xl:ps-[25px]' />

            </div>

            <div className='sm:h-[55px] xl:h-[55px]'>
              <input type='text' placeholder='Mobile no' className='xs:h-[50px] mt-5 sm:h-[55px] xl:h-[55px] xs:w-full xl:w-full bg-slate-100 xs:ps-[25px] xl:ps-[25px]' />

            </div>
            <div className='sm:h-[55px] xl:h-[55px]'>
              <input type='text' placeholder='Company' className='xs:h-[50px] mt-5 sm:h-[55px] xl:h-[55px] xs:w-full xl:w-full bg-slate-100 xs:ps-[25px] xl:ps-[25px]' />

            </div>
            <div className='sm:h-[160px] md:h-[160px]  xl:h-[160px] md:col-span-2 xl:col-span-2 '>
              <textarea type='text' placeholder='Your message' className='xs:h-[150px] mt-5 sm:h-[160px] md:h-[160px] xl:h-[160px] xs:w-full md:w-full xl:w-full bg-slate-100 sm:ps-[25px] xl:ps-[25px] xs:p-5 md:p-5 lg:p-5 xl:p-5 2xl:p-5' />
            </div>
          </div>
          <input type="checkbox" className='xs:h-[15px] xs:w-[30px] xs:mt-[20px] xl:h-[20px] xl:w-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]' />
          <label className=''>I am bound by the terms of the Service I accept Privacy Policy.</label><br></br>
          <a href='#' className=''><button className='xs:mt-5 sm:mt-[20px] sm:mb-[60px] xl:mt-[20px] lg:mb-[110px] xl:mb-[120px] bg-[#f50963] px-7 hover:bg-black hover:duration-500 py-2 text-[16px] text-[white] leading-[26px] text-center tracking-[-0.32px] mb-5' style={{ fontFamily: "sans-serif", fontWeight: "400" }}>Send Message</button></a>
        </div>
      </div>
    </>
  )
}

export default Sec2
