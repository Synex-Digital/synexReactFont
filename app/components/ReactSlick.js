"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlick = ({ children,className }) => {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 0.5,
        speed: 500,
        autoplaySpeed: 0,
        cssEase: "linear",
        centerMode: true,
        focusOnSelect: true,
        pauseOnHover: false,
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
