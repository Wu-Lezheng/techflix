"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Styles from "./HomeGallery.module.css"

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function HomeGallery() {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className={Styles.swiper}
        >
            <SwiperSlide className={Styles.swiperSlide}>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide className={Styles.swiperSlide}>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide className={Styles.swiperSlide}>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide className={Styles.swiperSlide}>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
        </Swiper>
    );
}

export default HomeGallery