"use client";
import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    let [state, setState] = useState("");

    let hendleChange = (e) => {
        setState(e);
    };
    return (
        <section>
            <div className="relative">
                <Image
                    alt="contact picture"
                    src={bgcontact}
                    className="w-full h-[350px] object-cover "
                />
                <div className="absolute top-1/2 right-1/2">
                    <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-xl translate-x-1/2 -translate-y-14 font-semibold">
                        Get in touch
                    </h2>
                    <p className="text-white text-center translate-x-1/2 md:text-lg font-light">
                        <span>
                            <Link
                                href={"/"}
                                className="hover:underline hover:text-primary"
                            >
                                Home
                            </Link>
                        </span>{" "}
                        / <span>Contact</span>
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-40 py-20">
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
