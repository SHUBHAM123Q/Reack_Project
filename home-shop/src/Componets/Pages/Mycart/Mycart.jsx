import React from 'react'
import './Mycart.css'; 
import emptycart from '../../../assets/emptycart.png'
const Mycart = () => {
  return (
   <>
        <div className='mt-20'>
            <div className='h-[300px] bg-[#f1f1f1] flex justify-center items-center'>
                <div className=''>
                    <p className='text-[70px] text-[#03041c] font-bold mycart'>My Cart</p>
                    <a href='#'><p className='text-center text-black'>Home<span className='ms-3'>Cart</span></p></a>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={emptycart} alt='not show' className='mt-40'/>
            </div>
            <p className='text-[18px] text-center mt-10 text-[#03041c]'>Your Cart is empty</p>
            <button className='shop flex m-auto hover:bg-black hover:text-white mt-2 px-6 py-2 bg-[#f1f1f1]'>Go To Shop</button>
        </div>
   </>
  )
}

export default Mycart
