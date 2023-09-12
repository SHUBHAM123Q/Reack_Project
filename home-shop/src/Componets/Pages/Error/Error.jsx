import React from 'react';
import { Link } from 'react-router-dom';
import aset106 from '../../../assets/a5.svg.svg';
import aset_89 from '../../../assets/asset89.jpeg';
const Error = () => {
    return (
        <>

            <div className=' bg-[rgb(241,241,246)] '>
                <h1 className='xs:mt-[80px] sm:mt-0 font-semibold text-white xs:text-[170px] sm:text-[400px] text-center tracking-wide'>404</h1>
                <div className='containerrr '>
                    <img src={aset106} className='xs:mt-[-255px] sm:mt-[-520px] sm:ms-[285px]' alt='' />
                    <p className='text-center xs:text-[35px] sm:text-[50px] leading-[60px] tracking-[-2px] font-bold font-[sans-serif] mt-[40px]'>Oops! Page not found</p>
                    <p className='text-center  sm:text-[16px] leading-[25.6px] font-[sans-serif] text-[#525258] mt-[10px]'>Whoops, this is embarassing. Looks like the page you<br />were looking for was not found.</p>
                    <div className='flex justify-center mt-[25px]'>
                        <Link to='/' className='mb-[120px]'><button className=' bg-[#f50963] px-7 hover:bg-black hover:duration-500 py-2 text-[16px] text-[white] leading-[26px]   text-center tracking-[-0.32px]' style={{ fontFamily: "sans-serif", fontWeight: "400" }}>Back To Home<i class="fa-solid fa-arrow-right ms-[7px]"></i> </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='h-[300px] w-[auto] bg-right' style={{ backgroundImage: `url(${aset_89})`, backgroundSize: "cover" }}>
                <div className="">
                    <div className="containerrr"><br />
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
                                        <div>
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

export default Error
