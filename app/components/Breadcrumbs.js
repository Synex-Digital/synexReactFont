import React from "react";
import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import Link from "next/link";

const Breadcrumbs = ({ title }) => {
    return (
        <div className="relative">
            <Image
                alt="contact picture"
                src={bgcontact}
                className="w-full h-[350px] object-cover"
            />
            <div className="absolute top-1/2 right-1/2 ">
                <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-xl  translate-x-1/2 -translate-y-14 font-semibold text-center">
                    {title}
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
            </div>
        </div>
    );
};

export default Breadcrumbs;
