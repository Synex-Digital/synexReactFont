"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const SimpleHook = ({ endtime }) => {
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const element = countRef.current;
            const top = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            setIsVisible(top < windowHeight);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // useCountUp({ ref: "counter", end: endtime });

    return (
        <div ref={countRef}>
            {isVisible && <CountUp start={0} end={endtime} duration={1} />}
        </div>
    );
};

export default SimpleHook;
