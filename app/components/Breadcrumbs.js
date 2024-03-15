import React from "react";
import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import Link from "next/link";
import {
    FaReact,
    FaLaravel,
    FaNode,
    FaPhp,
    FaAws,
    FaFigma,
    FaPython,
    FaVuejs,
} from "react-icons/fa";
import {
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiPostgresql,
    SiJavascript,
    SiFlutter,
} from "react-icons/si";
import { TbBrandNextjs, TbSeo } from "react-icons/tb";

const Breadcrumbs = ({ title, stateoff }) => {
    return (
        <div>
            <div id="banner" className="!relative container mx-auto">
                <div className="round1 absolute rounded-full text-primary top-[128px] right-[43px] xl:text-4xl md:text-3xl text-xl">
                    <FaLaravel />
                </div>
                <div className="cross1 absolute text-primary xl:text-4xl md:text-3xl text-xl sm:top-[80px] top-20 sm:right-[400px] right-3/4">
                    <FaReact />
                </div>
                <div className="round3 absolute rounded-full text-primary top-[120px] sm:left-[400px] left-1/2 right-[300px] xl:text-4xl md:text-3xl text-xl">
                    <FaNode />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[20px] sm:left-[300px] left-10 xl:text-4xl md:text-3xl text-xl">
                    <FaAws />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[20px] right-[40px] xl:text-4xl md:text-3xl text-xl">
                    <SiFirebase />
                </div>
                <div className="round1 absolute rounded-full text-primary top-[208px] right-[150px] xl:text-4xl md:text-3xl text-xl">
                    <SiPostgresql />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[200px] sm:left-[350px] left-16 xl:text-4xl md:text-3xl text-xl">
                    <SiMysql />
                </div>
                <div className="round1 absolute rounded-full text-primary top-[200px] sm:right-[400px] left-[300px] xl:text-4xl md:text-3xl text-xl">
                    <SiMongodb />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[250px] left-[100px] xl:text-4xl md:text-3xl text-xl">
                    <FaPhp />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[120px] left-[100px] xl:text-3xl md:text-2xl text-lg">
                    <SiJavascript />
                </div>
                <div className="cross1 absolute rounded-full text-primary top-[70px] left-1/2 xl:text-4xl md:text-3xl text-xl">
                    <TbBrandNextjs />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[0px] left-20 xl:text-4xl md:text-3xl text-xl">
                    <TbSeo />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[20px] left-1/2 sm:max-md:left-[60%] xl:text-3xl md:text-2xl text-lg">
                    <FaFigma />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[40px] left-1/3 xl:text-3xl md:text-2xl text-lg">
                    <SiFlutter />
                </div>
                <div className="cross1 absolute rounded-full text-primary top-[250px] left-3/4 xl:text-4xl md:text-3xl text-xl">
                    <FaPython />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[40px] left-3/4 xl:text-4xl md:text-3xl text-xl">
                    <FaVuejs />
                </div>
                <div className="cross2"></div>
            </div>
            <div className=" py-36">
                <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
                    {title}
                </h2>
                {stateoff && (
                    <p className="text-white text-center md:text-lg font-light mt-5">
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
