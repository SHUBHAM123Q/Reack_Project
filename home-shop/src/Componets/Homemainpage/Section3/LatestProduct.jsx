import React from 'react'
import '../Section3/Sec3.css';
import product_21 from "../../../assets/product-21.jpg"
import product_20 from "../../../assets/product-20.jpg"
import product_25 from "../../../assets/product-25.jpg"
import product_23 from "../../../assets/product-23.jpg"
import product_26 from "../../../assets/product-26.jpg"
import product_24 from "../../../assets/product-24.jpg"
import product_22 from "../../../assets/product-22.jpg"


const LatestProduct = () => {
  return (
    <>
      
<div className="containerrr">
    
<div className="flex justify-between mt-[30px]">
  <div className>
    <div className="over h-[300px] bg-[#f6f8fa] w-[270px]" >
        <a href="#"><img src={product_21} alt="" className="ss m-auto" /></a>
    </div>
    <p className="text-[15px] mt-2">Buy Guild Planer - 900w</p>
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
        <img src={product_25} alt="" className="ss m-auto" />
    </div>
    <p className="text-[15px] mt-2">TECLAST Tablet Protective Cover Case</p>
    <p className="text-gray-700 mt-1"><del className="me-1">$899.00</del>$791.12</p>
  </div>
  <div className>
    <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
        <a href="#" />
        <img src={product_23} alt="" className="ss m-auto" />
    </div>
    <p className="text-[15px] mt-2">Bluefin Fitness Unisex Adult Tour</p>
    <p className="text-gray-700 mt-1">$996.00</p>
</div>
</div>

<div className="flex mt-[30px]">
  <div className>
    <div className="over h-[300px] bg-[#f6f8fa] w-[270px]" >
        <a href="#"><img src={product_26} alt="" className="ss m-auto" /></a>
    </div>
    <p className="text-[15px] mt-2">Buy Guild Planer - 900w</p>
    <p className="text-gray-700 mt-1">$239.00</p>
  </div>
  <div className="ms-[15px]">
    <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
        <a href="#">
            <img src={product_24} alt="" className="ss m-auto" />
        </a>
    </div>
    <p className="text-[15px] mt-2">Apple Watch Series 8</p>
    <p className="text-gray-700 mt-1">$188.00</p>
  </div>
  <div className="ms-[15px]">
    <div className="over h-[300px] bg-[#f6f8fa] w-[270px]">
        <a href="#" />
        <img src={product_22} alt="" className="ss m-auto" />
    </div>
    <p className="text-[15px] mt-2">TECLAST Tablet Protective Cover Case</p>
    <p className="text-gray-700 mt-1"><del className="me-1">$899.00</del>$791.12</p>
  </div>
</div>
</div>  
    </>
  )
}

export default LatestProduct