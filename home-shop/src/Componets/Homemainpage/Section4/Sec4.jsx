import React from 'react'
import '../Section4/Sec4.css';
// import aset_4 from "../../assets/asset4.jpeg"/


const Sec4 = () => {
  return (
    <>
        <div className='containerrr'>
            <div className='mt-10'>
                <div className='flex justify-between'>
                    <div className="flex">
                        <p className="relative after:absolute bg-red-500 h-[35px] w-[4px] mt-[2px]" />
                        <p className='mt-[3px] text-[30px] leading-[30px] font-bold ms-3'>Deal of The Day</p>
                    </div>
                    <div>
                        <button className='bg-[#f50963] px-7 hover:bg-blue-400 hover:duration-500 py-2 text-[16px] text-[white] leading-[26px]   text-center tracking-[-0.32px]' style={{fontFamily:"sans-serif", fontWeight:"400"}}>View All Products</button>
                    </div>
                </div>
            </div>

            {/* <div className='containerrr'>
                <div className='flex ms-[-20px]'>
                    <div className="container">
                      <div className="item flex">
                        <div className="item-right h-auto flex items-center border border-r-0">
                              <img src={aset_4} className="w-32 h-32 m-6" alt='not show'/>
                              <div>
                                  <h1 className="font-bold text-xl">August Gift Voucher</h1>
                                  <h1 className="text-custom-pink text-xl font-bold">10% <span className="text-gray-700">Off</  span></h1>
                                  <div className="flex text-custom-font mt-3">
                                      <p className="px-2 text-xs border-0 border-r">26 <br/> DAY</p>
                                      <p className="px-2 text-xs border-0 border-r">13 <br/> HRS</p>
                                      <p className="px-2 text-xs border-0 border-r">38 <br/> MIN</p>
                                      <p className="px-2 text-xs border-0 border-">21 <br/> SEC</p>
                                  </div>
                              </div>
                          <span className="up-border" />
                          <span className="down-border" />
                        </div>
                        <div className="item-left p-5 border  border-l-0">
                          <div className="fix" />
                              <div className="loc flex items-center mt-5">
                                  <p className="text-custom-font">Coupon <span className="text-[#008080]">Active</span></p>
                                  <i className="fa-solid fa-circle-exclamation ml-2"></i>
                              </div>
                              <button className="text-[#008080] bg-[rgba(0,128,128,0.1)] border-dashed border-2 border-[rgba(0, 128, 128,0.4)] px-7 py-2 mt-5 mb-7">AUGUST23</button>
                          </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="item flex">
                        <div className="item-right h-auto flex items-center border border-r-0">
                              <img src={aset_4} className="w-32 h-32 m-6" alt='not show'/>
                              <div>
                                  <h1 className="font-bold text-xl">August Gift Voucher</h1>
                                  <h1 className="text-custom-pink text-xl font-bold">10% <span className="text-gray-700">Off</  span></   h1>
                                  <div className="flex text-custom-font mt-3">
                                      <p className="px-2 text-xs border-0 border-r">26 <br/> DAY</p>
                                      <p className="px-2 text-xs border-0 border-r">13 <br/> HRS</p>
                                      <p className="px-2 text-xs border-0 border-r">38 <br/> MIN</p>
                                      <p className="px-2 text-xs border-0 border-">21 <br/> SEC</p>
                                  </div>
                              </div>
                          <span className="up-border" />
                          <span className="down-border" />
                        </div>
                        <div className="item-left p-5 border  border-l-0">
                          <div className="fix" />
                              <div className="loc flex items-center mt-5">
                                  <p className="text-custom-font">Coupon <span className="text-[#008080]">Active</span></p>
                                  <i className="fa-solid fa-circle-exclamation ml-2"></i>
                              </div>
                              <button className="text-[#008080] bg-[rgba(0,128,128,0.1)] border-dashed border-2 border-[rgba(0, 128, 128,0.4)] px-7 py-2 mt-5 mb-7">AUGUST23</button>
                          </div>
                      </div>
                    </div>
                </div>
            </div>  */}
        </div>
    </>
  )
}

export default Sec4
