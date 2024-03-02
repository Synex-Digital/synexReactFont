"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

const Swiperslider = ({ children }) => {
    const handleSwiperScrollEnd = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };
    const handleSwiperScrollEndtwo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            <Swiper
                onReachEnd={handleSwiperScrollEnd}
                onReachBeginning={handleSwiperScrollEndtwo}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                keyboard={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>{children}</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Swiperslider;
