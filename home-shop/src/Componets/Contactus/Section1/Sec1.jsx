import React from 'react'
import '../Section1/Sec1.css';
import asset3 from '../assets/asset3.png'
import asset4 from '../assets/asset4.png'
import asset5 from '../assets/asset5.png'
const Sec1 = () => {
  return (
    <>
      <div className='shubham xs:h-[500px] md:h-[480px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]'>
        <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] md:m-auto py-20'>
          <p className='text-center text-[#03041c] text-[18px] font-sans xs:mt-20 sm:mt-20'>GET TO KNOW US</p>
          <div className='md:flex xl:block md:justify-center lg:flex '>
            <p className='text-center xs:text-[25px] xl:text-[60px] text-[#03041c] font-sans font-bold sm:text-[40px] md:text-[45px] lg:text-[57px]'>Have a project in mind?</p>
            <p className='text-center xl:text-[60px] text-[#03041c] font-sans font-bold xl:mt-[-15px] sm:text-[40px] md:text-[45px] lg:text-[57px]'>Let’s talk.</p>
          </div>
        </div>
      </div>

      <div className='xs:mt-[-150px] sm:mt-[-150px]'>
        <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
          <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5'>
            <div className='bg-white shadow-xl  sm:mt-[100px] md:mt-[1px] xl:h-[300px] xl:w-[360px] 2xl:w-[453px]'>
              <img src={asset3} className='flex m-auto mt-12'></img>
              <p className='text-center mt-5 text-[#96969c] text-[18px] leading-[26px]'><u>Contact</u></p>
              <a href='#'><p className='text-center mt-5 text-[22px] leading-[29.92px] font-sans hover:text-[#f50963] duration-500'>location@website.com</p></a>
              <a href='#'><p className='text-center text-[22px] leading-[29.92px] font-sans hover:text-[#f50963] duration-500 mb-5'>+(602) 762 472 96</p></a>
            </div>
            <div className='bg-white shadow-xl sm:h-[300px] xl:h-[300px] xl:w-[360px] 2xl:w-[453px]'>
              <img src={asset4} className='flex m-auto mt-12'></img>
              <p className='text-center mt-5 text-[#96969c] text-[18px] leading-[26px]'><u>Location</u></p>
              <a href='#'><p className='text-center mt-5 text-[22px] leading-[29.92px] font-sans hover:text-[#f50963] duration-500 mb-5'>88 New South Head Rd,<br></br>Triple, New York</p></a>
            </div>
            <div className='bg-white shadow-xl sm:h-[300px] xl:h-[300px] xl:w-[360px] 2xl:w-[453px]'>
              <img src={asset5} className='flex m-auto mt-12'></img>
              <p className='text-center mt-5 text-[#96969c] text-[18px] leading-[26px]'><u>Social Media</u></p>
              <p className='text-center mt-5 text-[22px] leading-[29.92px] font-sans'>Follow on social media</p>
              <div className='xs:flex xs:justify-center'>
              <a href='#'><i className="fa-brands fa-facebook mt-4 text-[20px] hover:text-red-400 duration-500 text-[#525258] " /></a>
              <a href='#'><i className="fa-brands fa-twitter ms-2 mt-4 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
              <a href='#'><i className="fa-brands fa-linkedin-in ms-2 mt-4 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
              <a href='#'><i className="fa-brands fa-youtube xs:mb-5 ms-2 mt-4 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sec1