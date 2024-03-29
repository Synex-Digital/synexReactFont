import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.svg";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaTelegramPlane,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
    return (
        <footer id="footerbg" className="pt-20">
            <div className="container mx-auto px-2 pb-16 lg:flex justify-between max-lg:text-center">
                <div className="lg:w-[30%] max-lg:mt-5 ">
                    <div className="flex max-lg:justify-center max-lg:mb-7">
                        <Image
                            priority={true}
                            alt="synex logo"
                            width={140}
                            className="cursor-pointer"
                            src={logo}
                        />
                    </div>
                    <p className="text-white font-light lg:mt-5 mt-3">
                        Embark on a transformative journey with Synex Digital.
                        Experience the power of Business IT Solutions that
                        redefine service businesses. Activate now and let's
                        build a future where technology meets innovation in the
                        most SEO-optimized way possible. Contact us today to
                        unlock success for your business.
                    </p>
                    <p className="text-white text-sm font-medium mt-7">
                        Follow Synex Digital
                    </p>
                    <div className="text-2xl flex gap-x-3 max-lg:justify-center mt-3">
                        <FaLinkedinIn className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                        <BsTwitterX className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                        <FaFacebookF className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                        <FaInstagram className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                    </div>
                </div>
                <div className="lg:w-[20%] max-lg:mt-5">
                    <strong className="text-white text-xl">Services</strong>
                    <ul>
                        <li className=" lg:mt-7 mt-3">
                            <Link
                                href={"/services/websitedevelopment"}
                                className="text-white font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                Website Development
                            </Link>
                        </li>
                        <li className="my-3">
                            <Link
                                href={"/services/digitalmarketing"}
                                className="text-white font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                Digital Marketing
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link
                                href={"/services/mobileappdevelopment"}
                                className="text-white  font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                Mobile App Development
                            </Link>
                        </li>
                        <li className="my-3">
                            <Link
                                href={"/services/uxuidesign"}
                                className="text-white   font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                UI/UX Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/services/graphicsdesign"}
                                className="text-white font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                Graphics Design
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="lg:w-[15%] max-lg:mt-5">
                    <strong className="text-white text-xl">
                        Important Link
                    </strong>
                    <ul>
                        <li className="lg:mt-7 mt-3 mb-3">
                            <Link
                                href={"#"}
                                className="text-white  font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"#"}
                                className="text-white font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="my-3">
                            <Link
                                href={"#"}
                                className="text-white   font-light hover:underline hover:decoration-primary cursor-pointer"
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="lg:w-[25%] max-lg:mt-5">
                    <strong className="text-white text-xl">Join Us</strong>
                    <p className="text-white font-light mb-5 lg:mt-7 mt-3">
                        Catch the Latest Updates, Insights, and Exclusive
                        Offers.
                    </p>
                    <div className="flex items-center max-lg:justify-center">
                        <input
                            placeholder="Your email address"
                            className="border border-primary bg-transparent p-2 text-white"
                        />
                        <span>
                            <FaTelegramPlane className="text-white text-xl p-2 max-lg:w-[42px] max-lg:h-[42px] xl:w-[42px] xl:h-[42px] lg:w-6 lg:h-[42px] bg-primary rounded-r cursor-pointer" />
                        </span>
                    </div>
                    <ul>
                        <li>
                            <a href="tel:+8801613408101" className="text-white flex items-center max-lg:justify-center gap-x-3 mt-8 hover:underline hover:decoration-primary cursor-pointer ">
                                <FaWhatsapp className="text-white text-xl" />
                                <span className="font-light">
                                    +8801613408101
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:office@synexdigital.com" className="text-white flex items-center max-lg:justify-center gap-x-3 mt-1 hover:underline hover:decoration-primary cursor-pointer">
                                <FiMail className="text-white text-xl" />
                                <span className="font-light">
                                    office@synexdigital.com
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="border-t border-t-primary w-80 mx-auto"></div>
                <div className="text-center py-5">
                    <h6 className="text-white">
                        Copyright © 2024{" "}
                        <a
                            target="_black"
                            href="https://synexdigital.com/"
                            className="text-primary hover:underline"
                        >
                            Synex Digital
                        </a>
                    </h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
