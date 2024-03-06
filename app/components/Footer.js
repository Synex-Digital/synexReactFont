import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.svg";

const Footer = () => {
    return (
        <footer id="footerbg" className="py-20 h-[500px]">
            <div className="container mx-auto px-2 flex justify-between">
                <div className="w-[30%]">
                    <Image
                        priority={true}
                        alt="synex logo"
                        width={140}
                        className="cursor-pointer"
                        src={logo}
                    />
                    <p className="text-white text-sm font-light mt-5">
                        Embark on a transformative journey with Synex Digital.
                        Experience the power of Business IT Solutions that
                        redefine service businesses. Activate now and let's
                        build a future where technology meets innovation in the
                        most SEO-optimized way possible. Contact us today to
                        unlock success for your business.
                    </p>
                    <p className="text-white text-sm font-medium mt-5">
                        Follow Synex Digital
                    </p>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="w-[20%]">dfds</div>
                <div className="w-[20%]">dsfds</div>
                <div className="w-[20%]">dsfds</div>
            </div>
        </footer>
    );
};

export default Footer;
