import React from 'react'
import '../Section3/Sec3.css';

import product_17 from "../../../assets/product-17.jpg"
import product_20 from "../../../assets/product-20.jpg"
import product_14 from "../../../assets/product-14.jpg"
import product_16 from "../../../assets/product-16.jpg"
import product_13 from "../../../assets/product-13.jpg"
import product_19 from "../../../assets/product-19.jpg"
import product_15 from "../../../assets/product-15.jpg"
import product_18 from "../../../assets/product-18.jpg"

const BestSelling = () => {
  return (
    <>

      <div className="containerrr">

        <div className="flex justify-between mt-[30px]">
          <div className=''>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]" >
              <a href="#"><img src={product_17} alt="" className="ss m-auto" /></a>
            </div>
            <p className="text-[15px] mt-2 ">Buy Guild Planer - 900w</p>
            <p className="text-gray-700 mt-1">$239.00</p>
          </div>
          <div className>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
              <a href="#">
                <img src={product_20} alt="" className="ss m-auto" />
              </a>
            </div>
            <p className="text-[15px] mt-2">Apple Watch Series 8</p>
            <p className="text-gray-700 mt-1">$188.00</p>
          </div>
          <div className>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
              <a href="#" />
              <img src={product_14} alt="" className="ss m-auto" />
            </div>
            <p className="text-[15px] mt-2">TECLAST Tablet Protective Cover Case</p>
            <p className="text-gray-700 mt-1"><del className="me-1">$899.00</del>$791.12</p>
          </div>
          <div className>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
              <a href="#" />
              <img src={product_16} alt="" className="ss m-auto" />
            </div>
            <p className="text-[15px] mt-2">Bluefin Fitness Unisex Adult Tour</p>
            <p className="text-gray-700 mt-1">$996.00</p>
          </div>
        </div>

        <div className="flex justify-between mt-[30px]">
          <div className>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]" >
              <a href="#"><img src={product_13} alt="" className="ss m-auto" /></a>
            </div>
            <p className="text-[15px] mt-2">Buy Guild Planer - 900w</p>
            <p className="text-gray-700 mt-1">$239.00</p>
          </div>
          <div className>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
              <a href="#">
                <img src={product_19} alt="" className="ss m-auto" />
              </a>
            </div>
            <p className="text-[15px] mt-2">Apple Watch Series 8</p>
            <p className="text-gray-700 mt-1">$188.00</p>
          </div>
          <div className>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
              <a href="#" />
              <img src={product_15} alt="" className="animate__animated animate__bounce ss m-auto" />
            </div>
            <p className="text-[15px] mt-2">TECLAST Tablet Protective Cover Case</p>
            <p className="text-gray-700 mt-1"><del className="me-1">$899.00</del>$791.12</p>
          </div>
          <div className>
            <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
              <a href="#" />
              <img src={product_18} alt="" className="ss m-auto" />
            </div>
            <p className="text-[15px] mt-2">Bluefin Fitness Unisex Adult Tour</p>
            <p className="text-gray-700 mt-1">$996.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSelling