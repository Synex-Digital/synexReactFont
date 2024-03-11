import React from "react";
import Link from "next/link";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

const Collaborate = () => {
    return (
        <section className="py-20 bg-[#1d2934]">
            <div className="container mx-auto px-2">
                <div className="text-white text-center">
                    <h6 className="lg:text-3xl text-2xl font-semibold">
                        Ready to Collaborate with us?
                    </h6>
                    <p className="font-light mt-5">
                        Let's unite and craft something truly remarkable. We're
                        excited to collaborate and bring visionary ideas to
                        life.
                    </p>
                </div>
                <div className="sm:flex gap-x-5 justify-center mt-10">
                    <Link
                        href={"/contact"}
                        className="px-7 py-3 border border-primary text-white hover:shadow hover:shadow-primary transition duration-300 ease-in-out flex items-center gap-x-3  max-sm:w-fit max-sm:mx-auto"
                    >
                        Contact Us
                        <span>
                            <GoArrowRight className="text-2xl" />
                        </span>
                    </Link>
                    <Link
                        className="px-7 py-3 border border-primary bg-primary text-black hover:shadow hover:shadow-primary transition duration-300 ease-in-out flex items-center gap-x-3  max-sm:w-fit max-sm:mx-auto max-sm:mt-5"
                        href={"#"}
                    >
                        Schedule Meeting
                        <span>
                            <GoArrowUpRight className="text-2xl" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Collaborate;
