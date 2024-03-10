"use client";

import React, { useRef } from "react";

const TiltAnimation = ({ color, children, bgcolor }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const x = e.pageX - cardRef.current.offsetLeft;
        const y = e.pageY - cardRef.current.offsetTop;

        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
    };

    return (
        <div
            id="card"
            className="lg:w-[24%] sm:w-[48%] w-full xl:h-[540px] 2xl:h-[580px] lg:h-[500px] md:h-[550px] h-[580px] relative rounded-xl overflow-hidden"
            ref={cardRef}
            style={{
                "--clr": color,
                background: bgcolor,
            }}
            onMouseMove={handleMouseMove}
        >
            {children}
        </div>
    );
};

export default TiltAnimation;
