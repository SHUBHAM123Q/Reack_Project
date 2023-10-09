import React from 'react'
import asset_18 from "../assets/asset18.png"
import asset_19 from "../assets/asset19.png"
import asset_20 from "../assets/asset20.png"
import asset_14 from "../assets/asset14.png"
import asset_15 from "../assets/asset15.png"
import asset_16 from "../assets/asset16.png"
import asset_17 from "../assets/asset17.png"
import aset_89 from "../assets/asset89.jpeg"
const Sec8 = () => {
  return (
    <>
      <div>
        <div className='h-[200px] w-full mt-[100px] mb-[250px]'>
          <marquee direction="left" className="w-full">
            <img src={asset_18} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_20} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_14} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px] h-[155px]' />
            <img src={asset_15} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_16} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_17} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
          </marquee>

          <marquee direction="right" className="w-full mb-[500px]">
            <img src={asset_18} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_20} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_14} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px] h-[155px]' />
            <img src={asset_15} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_16} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
            <img src={asset_17} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]' />
          </marquee>
        </div>
      </div>

      <div className='mt-[100px] xs:h-[340px] sm:h-[330px] md:h-[400px] lg:h-[300px] w-[100%] bg-right py-12' style={{ backgroundImage: `url(${aset_89})`, backgroundSize: "cover" }}>
        <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] bg-white xs:h-[250px]  md:h-[300px] lg:h-[200px] '>
          <div className='grid md:grid-cols-1 lg:grid-cols-2 xs:max-w-[250px] sm:max-w-[450px] md:max-w-[600px] 2xl:grid-cols-2 lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1300px] m-auto'>
            <div className='xs:mt-10 sm:mt-10 md:mt-16'>
              <h1 className="xs:text-[20px] sm:text-4xl text-black">Subscribe for <br /> Latest Trends &amp; Offers</h1>
            </div>
            <div className='sm:mb-9 sm:mt-5 md:mb-0 md:mt-[20px] lg:mt-[80px] xl:mt-[70px] 2xl:mt-[80px] lg:flex lg:justify-end'>
              <div className="xs:mt-4 sm:mt-0 xs:w-[250px] sm:w-[450px] md:w-[600px] lg:w-[400px] xl:w-[500px] h-[60px] border border-black sm:flex sm:items-center sm:justify-around">
                <div className="xs:mt-[20px] sm:mt-0">
                  <input type="text" placeholder="Enter Your Email" className="input1 xs:px-4 sm:px-0 md:w-[300px] lg:w-[200px] xl:w-[290px]" />
                </div>
                <div className="xs:mt-[40px] sm:mt-0">
                  <a href="#_" className="inline-flex items-center justify-center pt-2 ps-10 pe-10 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border-black hover:bg-red-500 duration-500">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sec8
