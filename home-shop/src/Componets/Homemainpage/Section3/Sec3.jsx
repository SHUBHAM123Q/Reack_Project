import React from 'react'
import '../Section3/Sec3.css';

import { Link, Outlet } from 'react-router-dom';

const Sec3 = () => {
    return (
        <>
            <div className='sm:m-auto xl:max-w-[1120px]'>
                <div className='grid xl:grid-cols-2 mt-32 '>
                    <div className='mt-2'>
                        <div className='flex'>
                            <p className='border-l-4 border-[#ef4444]  h-[40px] bg-red-500'></p>
                            <p className="ms-4 text-start text-3xl font-bold ">Popular Products</p>                        
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Link to="/" className='me-6 font-sans text-[14px] leading-[26px] text-center font-medium ms-[279px] hover:text-pink-400'>Top Rated</Link>
                        <Link to="Selling" className='me-6 font-sans text-[14px] leading-[26px] text-center font-medium hover:text-pink-400'>Best Selling </Link>
                        <Link to="Latest" className='font-sans text-[14px] leading-[26px] text-center font-medium hover:text-pink-400 '>Latest Product</Link>
                    </div>
                </div>
            </div>
            <Outlet/>

        </>
    )
}

export default Sec3
