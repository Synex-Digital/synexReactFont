"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Contact() {
    let [state, setState] = useState("");

    let hendleChange = (e) => {
        setState(e);
    };
    return (
        <main>
            <Breadcrumbs title={"Get in touch"} stateoff={false} />

            <section>
                <div className="container mx-auto xl:px-40 md:px-10 px-5 md:py-20 py-10">
                    <div className="flex max-md:flex-col max-md:gap-y-5 justify-between text-white">
                        <div className="md:w-[49%] w-full">
                            <p className="text-xl font-medium mb-3">
                                Your Name
                            </p>
                            <input
                                className="w-full bg-transparent border border-primary p-5"
                                placeholder="Your full name"
                            />
                        </div>
                        <div className="md:w-[49%] w-full">
                            <p className="text-xl font-medium mb-3">
                                Your Email
                            </p>
                            <input
                                type="email"
                                className="w-full bg-transparent border border-primary p-5"
                                placeholder="example@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="flex max-md:flex-col max-md:gap-y-5 justify-between text-white mt-8">
                        <div className="md:w-[49%] w-full">
                            <p className="text-xl font-medium mb-3">
                                Your Number
                            </p>
                            <PhoneInput
                                country={"bd"}
                                value={state}
                                onChange={hendleChange}
                            />
                        </div>
                        <div className="md:w-[49%] w-full">
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
        </main>
    );
}
