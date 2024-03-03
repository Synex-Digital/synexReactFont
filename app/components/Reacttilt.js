"use client";

import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Reacttilt = ({ children }) => {
    return <Tilt options={defaultOptions}>{children}</Tilt>;
};

export default Reacttilt;
