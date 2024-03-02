"use client"
import React, { useRef } from "react";

const TiltAnimation = ({ color, children }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const x = e.pageX - cardRef.current.offsetLeft;
        const y = e.pageY - cardRef.current.offsetTop;

        cardRef.current.style.setProperty("--x", `${x}px`);
        cardRef.current.style.setProperty("--y", `${y}px`);
    };
    return (
        <div
            className="card"
            ref={cardRef}
            style={{ "--clr": color }}
            onMouseMove={handleMouseMove}
        >
            {children}
        </div>
    );
};

export default TiltAnimation;
