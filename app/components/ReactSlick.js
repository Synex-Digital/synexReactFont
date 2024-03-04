"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlick = ({ children }) => {
    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        speed: 100,
        
    };
    return (
        <Slider arrows={false} className="w-full h-full " {...settings}>
            {children}
        </Slider>
    );
};

export default ReactSlick;
