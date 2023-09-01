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
            <img src={asset_18} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_20} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_14} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px] h-[155px]'/>
            <img src={asset_15} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_16} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_17} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
          </marquee>
          
          <marquee direction="right" className="w-full mb-[500px]">
            <img src={asset_18} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_20} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_14} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px] h-[155px]'/>
            <img src={asset_15} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_16} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={asset_17} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
          </marquee>
        </div>
      </div>

      <div className='h-[300px] w-[auto] bg-right'  style={{backgroundImage: `url(${aset_89})`, backgroundSize:"cover"}}>
                <div className="mt-14">
                    <div className="containerrr"><br/>
                        <div className="h-[200px] w-[auto]  bg-white">
                            <div className="flex justify-around mt-8">
                                <div className="mt-14">
                                    <h1 className="text-4xl text-black">Subscribe for <br /> Latest Trends &amp; Offers</h1>
                                </div>
                                <div className="mt-[70px]">
                                    <div className="w-[500px] h-[60px] border border-black flex items-center justify-around">
                                        <div className>
                                            <input type="text" placeholder="Enter Your Email" className="input1 w-[290px]" />
                                        </div>
                                        <div className>
                                            <a href="#_" className="inline-flex items-center justify-center pt-2 ps-10 pe-10 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border-black hover:bg-red-500 duration-500">Subscribe</a>
                                        </div>
                                    </div>
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
