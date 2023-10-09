import React from 'react'
import asset6 from '../assets/asset6.png'
import asset7 from '../assets/asset7.png'
import asset8 from '../assets/asset8.png'
const Sec3 = () => {
    return (
    <>
        <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'>
            <p className='text-[18px] text-[#03041c] font-sans font-semibold mt-20'>LOCATIONS</p>
            <p className='xs:text-[25px] sm:text-0 xl:text-[30px] ms-1 text-[#03041c] font-sans font-bold  sm:text-[40px]'>Come and visit our</p>
            <p className='xs:text-[25px] sm:text-0 xl:text-[30px] ms-1 text-[#03041c] font-sans font-bold leading-4 sm:text-[40px] xs:leading-[28px] sm:leading-0'>offices around the world</p>
        </div>

        <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[920px] xl:m-auto xl:mt-20 sm:mt-20 md:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1120px]'>
            <div className='grid  xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                <div className='xl:w-[200px] xs:mt-20 sm:mt-0'>
                    <p className='text-[#31323f] text-[20px] font-sans font-semibold xs:ms-7 sm:ms-0'>Australia Office</p>
                </div>
                <div className='lg:ms-[-200px] xl:ms-[-150px]'>
                    <div className=' sm:flex'>
                        <img src={asset6}  className='h-[70px] xs:ms-7 sm:ms-0'/>
                        <div>
                            <a href='#'><p className='hover:duration-500 hover:text-pink-500 xs:ms-7 sm:ms-12 mt-3 text-[#525258]'>contact.location@website.com</p></a>
                            <a href='#'><p className='hover:duration-500 hover:text-pink-500 xs:ms-7 sm:ms-12 text-[#525258]'>686-324-6838</p></a>
                        </div>
                        <div className='xl:w-[200px] xl:ms-[94px]'>
                        <button className='flex m-auto bg-white mt-4 px-7 xs:ms-7 sm:ms-[65px] md:ms-[214px] lg:ms-[154px] xl:ms-5  2xl:px-[98px] py-2 border-[1px] border-[#31323f] hover:bg-pink-500 hover:text-white hover:duration-500'>View Location</button>
                    </div>
                    </div>
                </div>
            </div>
            <hr className='xs:mt-8 mt-8 xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'></hr>
        </div>

        <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[920px] xl:m-auto xl:mt-20 sm:mt-20 md:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1120px]'>
            <div className='grid  lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                <div className='xl:w-[200px] xs:mt-10 sm:mt-0'>
                    <p className='text-[#31323f] text-[20px] font-sans font-semibold xs:ms-7 sm:ms-0'>San Francisco Office</p>
                </div>
                <div className='lg:ms-[-200px] xl:ms-[-150px]'>
                    <div className='sm:flex'>
                        <img src={asset7}  className='h-[60px] xs:ms-7 sm:ms-0'/>
                        <div>
                            <a href='#'><p className='hover:duration-500 hover:text-pink-500 xs:ms-7 sm:ms-12 mt-3 text-[#525258]'>contact.location@website.com</p></a>
                            <a href='#'><p className='hover:duration-500 hover:text-pink-500 xs:ms-7 sm:ms-12 text-[#525258]'>686-324-6810</p></a>
                        </div>
                        <div className='xl:w-[200px] xl:ms-[94px]'>
                        <button className='flex m-auto bg-white mt-4 px-7 xs:ms-7 sm:ms-[65px] md:ms-[214px] lg:ms-[154px] xl:ms-5  2xl:px-[98px] py-2 border-[1px] border-[#31323f] hover:bg-pink-500 hover:text-white hover:duration-500'>View Location</button>
                    </div>
                    </div>
                </div>
            </div>
            <hr className='xs:mt-8 mt-8 xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'></hr>
        </div>

        <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[920px] xl:m-auto xl:mt-20 sm:mt-20 md:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1120px]'>
            <div className='grid  lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                <div className='xl:w-[200px]  xs:mt-10 sm:mt-0'>
                    <p className='text-[#31323f] text-[20px] xs:ms-7 sm:ms-0 font-sans font-semibold'>Egpyt Office</p>
                </div>
                <div className='lg:ms-[-200px] xl:ms-[-150px]'>
                    <div className='sm:flex '>
                        <img src={asset8}  className='h-[60px] xs:ms-7 sm:ms-0'/>
                        <div>
                            <a href='#'><p className='hover:duration-500 hover:text-pink-500 xs:ms-7 sm:ms-12 mt-3 text-[#525258]'>contact.location@website.com</p></a>
                            <a href='#'><p className='hover:duration-500 hover:text-pink-500 xs:ms-7 sm:ms-12 text-[#525258]'>786-324-6810</p></a>
                        </div>
                        <div className='xl:w-[200px] xl:ms-[94px]'>
                        <button className='flex m-auto bg-white mt-4 px-7 xs:ms-7 sm:ms-[65px] md:ms-[214px] lg:ms-[154px] xl:ms-5  2xl:px-[98px] py-2 border-[1px] border-[#31323f] hover:bg-pink-500 hover:text-white hover:duration-500'>View Location</button>
                    </div>
                    </div>
                </div>
            </div>
            <hr className='xs:mt-8 mt-8 xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px]'></hr>
        </div>

        
    </>
    )
}

export default Sec3