import React from "react";
import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import Link from "next/link";

const Breadcrumbs = ({ title, stateoff }) => {
    return (
        <div className="relative">
            <Image
                alt="contact picture"
                src={bgcontact}
                className="w-full h-[350px] "
            />

            <div className="absolute top-1/2 right-1/2 -translate-y-1/2 w-full">
                <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-xl  translate-x-1/2 font-semibold text-center">
                    {title}
                </h2>
                {stateoff && (
                    <p className="text-white text-center translate-x-1/2 md:text-lg font-light mt-5">
                        <span>
                            <Link
                                href={"/"}
                                className="hover:underline hover:text-primary"
                            >
                                Home
                            </Link>
                        </span>{" "}
                        /{" "}
                        <span>
                            <Link
                                href={"/services"}
                                className="hover:underline hover:text-primary"
                            >
                                Services
                            </Link>
                        </span>{" "}
                        / <span>Service Details</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Breadcrumbs;
