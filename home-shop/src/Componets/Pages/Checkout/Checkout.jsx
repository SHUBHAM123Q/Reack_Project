import React from 'react'
import './Checkout.css';
import a3 from '../../../assets/a3.svg.svg'
import a2 from '../../../assets/a2.svg.svg'
import a1 from '../../../assets/a1.svg.svg'
const Checkout = () => {
  return (
   <>
   <div className='mt-40'>
   <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[1120px]'>
       <div className='h-[500px] sm:w-[550px] xl:w-[500px] m-auto shadow-2xl'>
           <div className='grid xl:grid-cols-1'>
               <div className=''>
                   <p className='text-center mt-10 text-[35px] font-bold'>Hello Again</p>
                   <p className='text-[#525258] text-[17px] text-center mt-1'>Enter your credentials to acces your account.</p>
                   <div className='border-2 mt-7 w-[400px] m-auto flex hello'>
                       <img src={a3} className='ms-5'/>
                       <input  type='email' placeholder='Enter your email' className='py-4 ms-2 w-full email1 text-[18px]'/>
                   </div>
                   <div className='border-2 mt-7 w-[400px] m-auto flex hello'>
                       <img src={a2} className='ms-5'/>
                       <input  type='password' placeholder='Password' className='py-4 ms-2 w-full email1 text-[18px]'/>
                       <img src={a1} className='me-5'/>
                   </div>
                   <div className='flex justify-between m-auto w-[400px] mt-5'>
                       <div className='flex'>
                           <input type='checkbox' className='h-[20px] w-[20px] mt-[3px] check'></input>
                           <p className='ms-2 text-[#525258] text-[17px]'>Remember me</p>
                       </div>
                       <div>
                           <a href='#'><p className='text-[#525258] text-[16px] hover:text-[#ff1492] hover:duration-500'>Forgot Password?</p></a>
                       </div>
                   </div>
                   <button className='bg-[#f50963] text-white text-[20px] m-auto flex mt-5 px-[170px] py-3' >Sign In</button>
                   <p className='text-center mt-3  text-[#525258] text-[16px]'>Don’t have an account? <span className='text-[#ff1492]'><a href='#'>Register Now</a></span></p>
               </div>
           </div>
       </div>
   </div>
</div>
   </>
  )
}

export default Checkout
