"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlick = ({ children, className }) => {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        focusOnSelect: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 0.3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0.1,
                },
            },
        ],
    };
    return (
        <Slider
            arrows={false}
            pause-on-hover="false"
            className={className}
            {...settings}
        >
            {children}
        </Slider>
    );
};

export default ReactSlick;
