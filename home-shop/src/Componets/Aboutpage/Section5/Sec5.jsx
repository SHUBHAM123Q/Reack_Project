import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import './Sec5.css';
import asset3 from '../assets/asset3.jpeg'
import asset4 from '../assets/asset4.jpeg'
import asset5 from '../assets/asset5.jpeg'
import asset22 from '../assets/asset22.jpeg'
import { Navigation } from 'swiper/modules';
const Sec5 = () => {
    return (
        <div className='xs:m-auto xs:max-w-[290px] sm:max-w-[550px] sm:m-auto md:max-w-[700px] md:m-auto lg:max-w-[900px] lg:m-auto xl:max-w-[1120px] 2xl:max-w-[1400px]'>
            <Swiper navigation={true}  modules={[Navigation]} className="mySwiper mt-[100px]">
                <SwiperSlide><img src={asset3}  className='xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px] xs:w-[300px] sm:w-[400px] md:w-[530px] lg:w-[700px] xl:w-[900px] 2xl:w-[1200px]'/></SwiperSlide>
                <SwiperSlide><img src={asset4}  className='xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px] xs:w-[300px] sm:w-[400px] md:w-[530px] lg:w-[700px] xl:w-[900px] 2xl:w-[1200px]'/></SwiperSlide>
                <SwiperSlide><img src={asset5}  className='xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px] xs:w-[300px] sm:w-[400px] md:w-[530px] lg:w-[700px] xl:w-[900px] 2xl:w-[1200px]'/></SwiperSlide>
                <SwiperSlide><img src={asset22} className='xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px] xs:w-[300px] sm:w-[400px] md:w-[530px] lg:w-[700px] xl:w-[900px] 2xl:w-[1200px]'/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Sec5
