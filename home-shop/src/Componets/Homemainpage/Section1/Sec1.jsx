import React from 'react'
import './Sec1.css';
import aset_3 from "../../../assets/asset3.png"
import aset_94 from "../../../assets/asset94.svg"


const Sec1 = () => {
    return (
        <>
            <div className='bg-[#f0f2ee]'>
                <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1440px] '>
                    <div className='grid xl:grid-cols-1'>
                        <div className='xs:mt-[150px] sm:mt-[200px] col-span-1'>
                            <div className='border-4 border-red-400 border-r-0 border-t-0 border-b-0'>
                                <p className="ms-4 text-[18px] text-[#525258]">Best Ear</p>
                                <p className="ms-4 text-[18px] mt-[-5px] text-[#525258]">Headphones</p>
                            </div>
                            <p className="xs:text-[40px] lg:text-[60px] text-[80px]" style={{ fontFamily: "roboto,sans-serif", fontWeight: 600, letterSpacing: "-.01em" }}>Music To</p>
                            <p className="xs:text-[40px] xs:mt-[-10px] lg:text-[60px] text-[80px] mt-[-35px]" style={{ fontFamily: "Roboto,sans-serif", fontWeight: 600, letterSpacing: "-.01em" }}>Fill Your   Heart</p>
                            <button className="text-[15px] mt-8 text-[#525258] px-6 font-medium border-[1.5px] flex py-2 border-solid border-black hover:bg-black hover:text-white" style={{ fontFamily: "sans-serif", padding: "7px , 33px" }}>Shop Now <img src={aset_94} alt='Not Show' className="mt-[2.5px] " />
                            </button>
                            <div className="loader xs:hidden sm:flex w-full sm:after:left-[30%] sm:before:left-[30%] md:after:left-[38%] md:before:left-[38%] sm:after:top-[110%] sm:before:top-[110%] md:after:top-[120%] md:before:top-[120%]  lg:after:left-[40%] lg:before:left-[40%] lg:after:top-[35%] lg:before:top-[35%] xl:after:left-[53%] xl:before:left-[53%] xl:after:top-[45%] xl:before:top-[45%] 2xl:after:top-[-10%] 2xl:before:top-[-10%] 2xl:after:left-[65%] 2xl:before:left-[65%]"></div>
                            <img src={aset_3} alt='not show' className='md:ms-[150px] lg:ms-[370px] lg:mt-[-270px] xl:ms-[600px] xl:mt-[-295px] xl:h-[500px]   relative 2xl:ms-[850px]' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sec1
