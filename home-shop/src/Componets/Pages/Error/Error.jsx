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
                    <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] flex justify-center'>
                        <img src={aset106} className='xs:mt-[-255px] sm:mt-[-520px]' alt='' />
                    </div>
                    <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
                    <p className='text-center xs:text-[30px] sm:text-[50px] leading-[60px] tracking-[-2px] font-bold font-[sans-serif] mt-[40px]'>Oops! Page not found</p>
                    <p className='text-center xs:text-[16px] sm:text-[16px] leading-[25.6px] font-[sans-serif] text-[#525258] mt-[10px]'>Whoops, this is embarassing. Looks like the page you<br />were looking for was not found.</p>
                    <div className='flex justify-center mt-[25px]'>
                        <Link to='/' className='mb-[120px]'><button className=' bg-[#f50963] px-7 hover:bg-black hover:duration-500 py-2 text-[16px] text-[white] leading-[26px]   text-center tracking-[-0.32px]' style={{ fontFamily: "sans-serif", fontWeight: "400" }}>Back To Home<i class="fa-solid fa-arrow-right ms-[7px]"></i> </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

            <div className='mt-[100px] xs:h-[340px] sm:h-[330px] md:h-[400px] lg:h-[300px] w-[100%] bg-right py-12' style={{ backgroundImage: `url(${aset_89})`, backgroundSize: "cover" }}>
                <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] bg-white xs:h-[250px]  md:h-[300px] lg:h-[200px] '>
                    <div className='grid md:grid-cols-1 lg:grid-cols-2 xs:max-w-[250px] sm:max-w-[450px] md:max-w-[600px] 2xl:grid-cols-2 lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1300px] m-auto'>
                        <div className='xs:mt-10 sm:mt-10 md:mt-16'>
                            <h1 className="xs:text-[20px] sm:text-4xl text-black">Subscribe for <br /> Latest Trends &amp; Offers</h1>
                        </div>
                        <div className='sm:mb-9 sm:mt-5 md:mb-0 md:mt-[20px] lg:mt-[80px] xl:mt-[70px] 2xl:mt-[80px] lg:flex lg:justify-end'>
                            <div className="xs:mt-4 sm:mt-0 xs:w-[250px] sm:w-[450px] md:w-[600px] lg:w-[400px] xl:w-[500px] h-[60px] border border-black sm:flex sm:items-center sm:justify-around">
                                <div className="xs:mt-[20px] sm:mt-0">
                                    <input type="text" placeholder="Enter Your Email" className="input1 xs:px-4 sm:px-0 md:w-[300px] lg:w-[200px] xl:w-[290px]" />
                                </div>
                                <div className="xs:mt-[40px] sm:mt-0">
                                    <a href="#_" className="inline-flex items-center justify-center pt-2 ps-10 pe-10 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border-black hover:bg-red-500 duration-500">Subscribe</a>
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
