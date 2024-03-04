"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

const Swiperslider = ({ children }) => {
    const handleSwiperScrollEnd = () => {
        const nextSlide = document.querySelector(".swiper-slide-next");
        if (nextSlide) {
            nextSlide.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleSwiperScrollEndtwo = () => {
        const prevSlide = document.querySelector(".swiper-slide-prev");
        if (prevSlide) {
            prevSlide.scrollIntoView({ behavior: "smooth", block: "start" });
        }
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
