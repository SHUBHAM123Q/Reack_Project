import React from 'react'
import a4 from '../../../assets/a4.svg.svg'

const ForgotPassword = () => {
  return (
    <div className='mt-40'>
    <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[1120px]'>
        <div className='h-[400px] sm:w-[550px] xl:w-[550px] m-auto shadow-2xl'>
            <div className='grid xl:grid-cols-1'>
                <div className=''>
                    <p className='text-center mt-10 text-[35px] font-bold'>Forgot Password?</p>
                    <p className='text-[#525258] text-[17px] text-center mt-1'>Enter your email address to request password reset.</p>
                    <div className='border-2 mt-7 w-[400px] m-auto flex hello'>
                        <img src={a4} className='ms-5'/>
                        <input  type='email' placeholder='Enter your email' className='py-4 ms-2 w-full email1 text-[18px]'/>
                    </div>
                    <button className='bg-[#f50963] text-white text-[20px] m-auto flex mt-5 px-[140px] py-3' >Send Request</button>
                    <p className='text-center mt-3  text-[#525258] text-[16px]'>Remember your password?<span className='text-[#ff1492]'><a href='#'>Login</a></span></p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ForgotPassword
