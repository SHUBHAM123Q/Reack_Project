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
        <div className='containerrr'>
            <div className='h-[450px] w-full  mt-[300px] iphone' style={{backgroundImage: `url(${asset_88})`, backgroundSize:"cover"}}><br/>
                <div className='mt-24 ms-[80px] max-w-[390px] absolute'>
                    <p className='text-[#525258] text-[15px] leading-[26px]'>Apple iPhone 12 Pro</p>
                    <a className='hover:text-red-500 text-[#03041c] text-[44px] leading-[47.96px] font-[sans-serif] font-bold' href="#">The wait is on: iphone 12 max pro</a>
                    <p className='text-[#525258] text-[16px] font-sans leading-[16px] mt-2 '>Last call for up to <span className='text-black text-[24px] leading-[17px] font-sans font-bold'>32%</span> off!</p>
                    <button className='bg-white text-[14px] leading-[26px] tracking-[-0.28px] px-5 py-1 mt-8 flex hover:bg-pink-500 border-2 hover:text-white'>Buy Now<img src={aset_94}  alt='Not Show' className="mt-[7px] ms-1" /></button>
                </div>
            </div>

            <div className='w-full mt-14 h-[100px] flex justify-between'>
                <div className='flex items-center justify-between'>
                  <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                    <img src={aset_102} alt='not show' className='ms-3 mt-3  animate__animated animate__bounce'/>
                  </div>
                  <div className='mt-[5px] ms-5'>
                    <p className='font-sans text-[18px] text-[#000000] font-medium'>Free Shipping</p>
                    <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>Free Shipping for orders over $120</p>
                  </div>  
                </div>

                <div className='flex items-center justify-between'>
                  <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                    <img src={aset_103} alt='not show' className='ms-3 mt-3'/>
                  </div>
                  <div className='mt-[5px] ms-5'>
                    <p className='font-sans text-[18px] text-[#000000] font-medium'>Refund</p>
                    <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>Within 30 days for an exchange.</p>
                  </div>  
                </div>

                
                <div className='flex items-center justify-between'>
                  <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                    <img src={aset_104} alt='not show' className='ms-3 mt-3'/>
                  </div>
                  <div className='mt-[5px] ms-5'>
                    <p className='font-sans text-[18px] text-[#000000] font-medium'>Support</p>
                    <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>24 hours a day, 7 days a week</p>
                  </div>  
                </div>

                <div className='flex items-center justify-between'>
                  <div className='border-[1px] h-[50px] w-[50px] rounded-full'>
                    <img src={aset_105} alt='not show' className=' ms-3 mt-3 '/>
                  </div>
                  <div className='mt-[5px] ms-5'>
                    <p className='font-sans text-[18px] text-[#000000] font-medium'>Payment</p>
                    <p className='text-[15px]  text-[#525258] max-w-[170px] leading-[19px]'>Pay with Multiple Credit Cards</p>
                  </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Sec5
