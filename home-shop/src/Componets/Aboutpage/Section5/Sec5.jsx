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
        <div className='mt-[100px] max-w-[1120px] m-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={asset3}  className='h-[100px] '/></SwiperSlide>
                <SwiperSlide><img src={asset4}  className='h-[100px] '/></SwiperSlide>
                <SwiperSlide><img src={asset5}  className='h-[100px] '/></SwiperSlide>
                <SwiperSlide><img src={asset22} className='h-[100px] '/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Sec5
