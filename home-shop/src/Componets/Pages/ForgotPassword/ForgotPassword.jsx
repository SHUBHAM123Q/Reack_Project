import React from 'react'
import './ForgotPassword.css';
import a4 from '../../../assets/a4.svg.svg'

const ForgotPassword = () => {
  return (
    <div className='mt-40'>
    <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]
'>
        <div className='h-[400px] sm:w-[550px] xl:w-[550px] m-auto shadow-2xl'>
            <div className='grid xs:grid-cols-1'>
                <div className=''>
                    <p className='Forgot text-center mt-10 xs:text-[30px]  m-auto xs:w-[200px] sm:w-full sm:text-[35px] font-bold'>Forgot Password?</p>
                    <p className='text-[#525258] text-[17px] text-center mt-1 sm:w-full xs:w-[210px] m-auto'>Enter your email address to request password reset.</p>
                    <div className='border-2 mt-7 xs:w-[250px] sm:w-[400px] m-auto flex hello'>
                        <img src={a4} className='ms-5'/>
                        <input  type='email' placeholder='Enter your email' className='py-4 ms-2 w-full email1 text-[18px]'/>
                    </div>
                    <button className='bg-[#f50963] text-white text-[20px] m-auto flex mt-5 xs:px-[64px] sm:px-[140px] py-3' >Send Request</button>
                    <p className='text-center mt-3  text-[#525258] text-[16px]'>Remember your password?<span className='text-[#ff1492]'><a href='#'>Login</a></span></p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ForgotPassword
