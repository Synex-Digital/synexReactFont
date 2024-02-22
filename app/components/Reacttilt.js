"use client";

import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1,
    speed: 1500,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Reacttilt = ({ children }) => {
    return (
        <div>
            <Tilt options={defaultOptions} id="card">{children}</Tilt>
        </div>
    );
};

export default Reacttilt;
