"use client";
import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function Contact() {
    let [state, setState] = useState("");

    let hendleChange = (e) => {
        setState(e);
    };
    return (
        <section className="">
            <div className="relative">
                <Image
                    alt="contact picture"
                    src={bgcontact}
                    className="w-full h-[300px] object-cover bg-[#1d2934] shadow-2xl"
                />
                <div className="absolute top-1/2 right-1/2">
                    <h2 className="text-white text-5xl translate-x-1/2 font-semibold">
                        Get in touch
                    </h2>
                </div>
            </div>
            <div className="container mx-auto px-40 mt-28 pb-20">
                <div className="flex justify-between text-white">
                    <div className="w-[49%]">
                        <p className="text-xl font-medium mb-3">Your Name</p>
                        <input
                            className="w-full bg-transparent border border-primary p-5"
                            placeholder="Your full name"
                        />
                    </div>
                    <div className="w-[49%]">
                        <p className="text-xl font-medium mb-3">Your Email</p>
                        <input
                            type="email"
                            className="w-full bg-transparent border border-primary p-5"
                            placeholder="example@gmail.com"
                        />
                    </div>
                </div>
                <div className="flex justify-between text-white mt-8">
                    <div className="w-[49%]">
                        <p className="text-xl font-medium mb-3">Your Number</p>
                        <PhoneInput
                            country={"bd"}
                            value={state}
                            onChange={hendleChange}
                        />
                    </div>
                    <div className="w-[49%]">
                        <p className="text-xl font-medium mb-3">
                            Your Company Name
                        </p>
                        <input
                            className="w-full bg-transparent border border-primary p-5"
                            placeholder="Company LTD"
                        />
                    </div>
                </div>
                <div className="text-white mt-8">
                    <p className="text-xl font-medium mb-3">
                        Your Project Brief
                    </p>
                    <textarea className="w-full h-32 bg-transparent border border-primary p-5"></textarea>
                </div>
                <div className="text-center">
                    <button className="text-black font-semibold bg-primary px-20 py-2 rounded-lg mt-5 ">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}
