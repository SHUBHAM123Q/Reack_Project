import React from 'react'
import './Sec3.css';
import asset29 from '../assets/asset29.svg' 
import asset30 from '../assets/asset30.svg' 
import asset31 from '../assets/asset31.svg' 
import asset32 from '../assets/asset32.svg' 
const Sec3 = () => {
    return (
        <>
            <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] sm:m-auto md:max-w-[700px] md:m-auto lg:max-w-[900px] lg:m-auto xl:max-w-[1120px] 2xl:max-w-[1400px]'>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-16'>
                    <div className='lg:w-[250px] xl:w-[350px]'>
                        <p className='text-[30px] leading-[30px] tracking-[-0.6px] font-[sans-serif] font-bold'>It started with a
                        </p>
                        <p className='text-[30px] leading-[30px] font-[sans-serif] font-bold
                        '>bang now we are here.
                        </p>
                    </div>  
                    <div className='xs:mt-[40px] sm:mt-[-1px] lg:ms-[-180px] xl:ms-[-200px] 2xl:ms-[-320px]'>
                        <p className='text-[17px] leading-[25.92px] font-[sans-serif] text-[#525258] sm:mt-[20px] md:mt-[20px] lg:mt-[1px]'>Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula</p>
                        <p className='text-[17px] leading-[25.92px] font-[sans-serif] text-[#525258] mt-4'>Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.!</p>
                    </div>
                </div>
            </div>

            <div className='xs:mt-20 xs:m-auto xs:max-w-[290px] sm:max-w-[550px] sm:m-auto md:max-w-[700px] md:m-auto lg:max-w-[900px] xl:max-w-[1120px] xl:m-auto 2xl:max-w-[1400px]'>
                <div className='grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='xs:h-[200px] sm:w-[550px] sm:h-[210px] md:w-[340px] lg:w-[287px] border-[1px] border-[#525258]k xl:w-[360px] xl:h-[210px] xl:mt-16 sm:mt-16 2xl:w-[450px]'>
                        <div className='flex justify-between xs:w-[200px] sm:w-[470px] xs:m-auto md:w-[250px] lg:w-[200px] xl:w-[280px] xl:m-auto 2xl:w-[360px]'>
                            <a href='#'><img src={asset29} alt='not show' className='mt-10'/></a>
                            <a href='#'><img src={asset32} alt='not show' className='mt-10'/></a>
                        </div>
                        <p className='ms-10 mt-10 text-[16px] leading-[26px] text-[#525258]'>10k</p>
                        <p className='ms-10 font-bold font-sans text-[26px] leading-[26px] text-[#03041c]'>Listed Products</p>
                    </div>
                    <div className='xs:h-[200px] sm:w-[550px] sm:h-[210px] md:w-[340px] lg:w-[287px] border-[1px] border-[#525258]k xl:w-[360px] xl:h-[210px] xl:mt-16 md:mt-16 2xl:w-[450px]'>
                        <div className='flex justify-between xs:w-[200px] sm:w-[470px] xs:m-auto md:w-[250px] lg:w-[200px] xl:w-[280px] xl:m-auto 2xl:w-[360px]'>
                            <a href='#'><img src={asset30} alt='not show' className='mt-10'/></a>
                            <a href='#'><img src={asset32} alt='not show' className='mt-10'/></a>
                        </div>
                        <p className='ms-10 mt-10 text-[16px] leading-[26px] text-[#525258]'>10k</p>
                        <p className='ms-10 font-bold font-sans text-[26px] leading-[26px] text-[#03041c]'>Listed Products</p>
                    </div>
                    <div className='xs:h-[200px] sm:w-[550px] sm:h-[210px] md:w-[340px] lg:w-[287px] border-[1px] border-[#525258]k xl:w-[360px] xl:h-[210px] xl:mt-16 lg:mt-16 2xl:w-[450px]'>
                        <div className='flex justify-between sm:w-[470px] xs:w-[200px] xs:m-auto md:w-[250px] lg:w-[200px] xl:w-[280px] xl:m-auto 2xl:w-[360px]'>
                            <a href='#'><img src={asset31} alt='not show' className='mt-10'/></a>
                            <a href='#'><img src={asset32} alt='not show' className='mt-10'/></a>
                        </div>
                        <p className='ms-10 mt-10 text-[16px] leading-[26px] text-[#525258]'>10k</p>
                        <p className='ms-10 font-bold font-sans text-[26px] leading-[26px] text-[#03041c]'>Listed Products</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sec3
