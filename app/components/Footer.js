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
                    <p className="text-white font-light mt-5">
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
                    <div className="text-2xl flex gap-x-3 mt-3">
                        <FaLinkedinIn className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                        <BsTwitterX className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                        <FaFacebookF className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                        <FaInstagram className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                    </div>
                </div>
                <div className="w-[20%] ">
                    <strong className="text-white text-xl">Services</strong>
                    <Link
                        href={"#"}
                        className="text-white block mt-7 font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        Website Development
                    </Link>
                    <Link
                        href={"#"}
                        className="text-white block my-3 font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        Digital Marketing
                    </Link>
                    <Link
                        href={"#"}
                        className="text-white block font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        Mobile App Development
                    </Link>
                    <Link
                        href={"#"}
                        className="text-white block my-3 font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        UI/UX Design
                    </Link>
                    <Link
                        href={"#"}
                        className="text-white block font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        Graphics Design
                    </Link>
                </div>
                <div className="w-[20%]">
                    <strong className="text-white text-xl">
                        Important Link
                    </strong>
                    <Link
                        href={"#"}
                        className="text-white block mt-7 font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        href={"#"}
                        className="text-white block mt-3 font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href={"#"}
                        className="text-white block my-3 font-light hover:underline hover:decoration-primary cursor-pointer"
                    >
                        Contact us
                    </Link>
                </div>
                <div className="w-[20%]">
                    <strong className="text-white text-xl">Join Us</strong>
                    <p className="text-white font-light mb-5 mt-1">
                        Catch the Latest Updates, Insights, and Exclusive
                        Offers.
                    </p>
                    <div className="flex items-center">
                        <input
                            placeholder="Your email address"
                            className="border border-primary bg-transparent p-2 text-white"
                        />
                        <span>
                            <FaTelegramPlane className="text-white text-xl p-2 w-[42px] h-[42px] bg-primary rounded-r cursor-pointer" />
                        </span>
                    </div>
                    <a className="text-white flex items-center gap-x-3 mt-8 hover:underline hover:decoration-primary cursor-pointer">
                        <FaWhatsapp className="text-white text-xl" />
                        <span className="font-light">+8801613408101</span>
                    </a>
                    <a className="text-white flex items-center gap-x-3 mt-1 hover:underline hover:decoration-primary cursor-pointer">
                        <FiMail className="text-white text-xl" />
                        <span className="font-light">
                            office@synexdigital.com
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
