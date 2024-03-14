"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function TechPartner() {
    let [state, setState] = useState("");

    let hendleChange = (e) => {
        setState(e);
    };
    return (
        <section>
            <Breadcrumbs title={"Become Tech Partner"} stateoff={false} />

            <div className="container mx-auto px-2 md:py-20 py-10">
                <div className="flex flex-col sm:w-1/2 gap-y-7 mx-auto text-white">
                    <div className=" w-full">
                        <p className="text-xl font-medium mb-3">
                            Business Name
                        </p>
                        <input
                            className="w-full bg-transparent border border-primary p-5"
                            placeholder="Business name"
                        />
                    </div>
                    <div className=" w-full">
                        <p className="text-xl font-medium mb-3">Email</p>
                        <input
                            type="email"
                            className="w-full bg-transparent border border-primary p-5"
                            placeholder="example@gmail.com"
                        />
                    </div>
                </div>
                <div className="flex sm:w-1/2 mx-auto max-md:flex-col max-md:gap-y-5 justify-between text-white mt-8">
                    <div className=" w-full">
                        <p className="text-xl font-medium mb-3">Phone Number</p>
                        <PhoneInput
                            country={"bd"}
                            value={state}
                            onChange={hendleChange}
                        />
                    </div>
                </div>
                <div className="text-white mx-auto mt-8 sm:w-1/2">
                    <p className="text-xl font-medium mb-3">About Business</p>
                    <textarea className="w-full h-28 bg-transparent border border-primary p-5" placeholder="Tell us about your business"></textarea>
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
