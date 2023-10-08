import React from 'react'
import '../Section5/Sec5.css';
import asset_88 from "../../../assets/asset88.jpeg"
import aset_94 from "../../../assets/asset94.svg"
import aset_102 from "../../../assets/asset102.svg"
import aset_103 from "../../../assets/asset103.svg"
import aset_104 from "../../../assets/asset104.svg"
import aset_105 from "../../../assets/asset105.svg"

const Sec5 = () => {
  return (
    <>
      <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
        <div className='grid grid-cols-1'>
        <div className='xs:h-[300px]  sm:h-[450px] w-full  mt-[300px] iphone ' style={{ backgroundImage: `url(${asset_88})`, backgroundSize: "cover" }}><br />
          <div className='xs:mt-[20px] sm:mt-24 xs:ms-10 sm:ms-[80px] xs:max-w-[230px] sm:max-w-[390px] absolute'>
            <p className='text-[#525258] text-[15px] leading-[26px]'>Apple iPhone 12 Pro</p><br/>
            <a className='hover:text-red-500 text-[#03041c]  xs:text-[25px] sm:text-[44px] sm:leading-[47.96px] font-[sans-serif] font-bold' href="#">The wait is on: iphone 12 max pro</a>
            <p className='text-[#525258] text-[16px] font-sans leading-[16px] mt-2 '>Last call for up to <span className='text-black text-[24px] leading-[17px] font-sans font-bold'>32%</span> off!</p>
            <button className='bg-white text-[14px] leading-[26px] tracking-[-0.28px] px-5 py-1 mt-8 flex hover:bg-pink-500 border-2 hover:text-white'>Buy Now<img src={aset_94} alt='Not Show' className="mt-[7px] ms-1" /></button>
          </div>
        </div>
        </div>
      </div>

      <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
        <div className='mt-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'>
          <div>
            <div className='flex items-center justify-start'>
              <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                <img src={aset_102} alt='not show' className='ms-3 mt-3  animate__animated animate__bounce' />
              </div>
              <div className='mt-[5px] ms-5'>
                <p className='font-sans text-[18px] text-[#000000] font-medium'>Free Shipping</p>
                <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>Free Shipping for orders over $120</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-start xs:mt-10 sm:mt-0'>
              <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                <img src={aset_103} alt='not show' className='ms-3 mt-3' />
              </div>
              <div className='mt-[5px] ms-5'>
                <p className='font-sans text-[18px] text-[#000000] font-medium'>Refund</p>
                <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>Within 30 days for an exchange.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-start xs:mt-10 sm:mt-[40px] lg:mt-0'>
              <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                <img src={aset_104} alt='not show' className='ms-3 mt-3' />
              </div>
              <div className='mt-[5px] ms-5'>
                <p className='font-sans text-[18px] text-[#000000] font-medium'>Support</p>
                <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-start xs:mt-10 sm:mt-[40px] lg:mt-0'>
              <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                <img src={aset_105} alt='not show' className=' ms-3 mt-3 ' />
              </div>
              <div className='mt-[5px] ms-5'>
                <p className='font-sans text-[18px] text-[#000000] font-medium'>Payment</p>
                <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>Pay with Multiple Credit Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sec5
