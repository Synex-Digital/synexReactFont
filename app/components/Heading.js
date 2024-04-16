import React from "react";
import AosAnimation from "./AosAnimation";
import Image from "next/image";
import anisvg from "@/public/assets/animation.svg";

const Heading = ({ title, subtitle }) => {
    return (
        <div className="mx-auto flex flex-col justify-center items-center mb-10">
            <h2 className="text-primary md:text-3xl text-2xl font-semibold text-center z-50 ">
                {title}
            </h2>
            <AosAnimation aosvalue={"fade-up"} className="relative">
                <div className="bg-transparent"></div>
                <div className="blob -translate-x-[50%]">
                    <Image
                        src={anisvg}
                        alt="Reacording Image"
                        priority
                        quality={80}
                    />
                </div>
            </AosAnimation>
            <h3 className="md:font-medium md:text-2xl text-xl text-center text-white z-50 mt-5">
                {subtitle}
            </h3>
        </div>
    );
};

export default Heading;
