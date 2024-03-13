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
                <div className="round1 absolute rounded-full text-primary top-[128px] right-[43px] text-4xl">
                    <FaLaravel />
                </div>
                <div className="cross1 absolute text-primary text-4xl top-[80px] right-[400px]">
                    <FaReact />
                </div>
                <div className="round3 absolute rounded-full text-primary top-[120px] sm:left-[400px] left-20 text-4xl">
                    <FaNode />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[20px] left-[300px] text-4xl">
                    <FaAws />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[20px] right-[40px] text-4xl">
                    <SiFirebase />
                </div>
                <div className="round1 absolute rounded-full text-primary top-[188px] right-[150px] text-4xl">
                    <SiPostgresql />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[200px] sm:left-[350px] left-16 text-4xl">
                    <SiMysql />
                </div>
                <div className="round1 absolute rounded-full text-primary top-[200px] right-[400px] text-4xl">
                    <SiMongodb />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[250px] left-[100px] text-4xl">
                    <FaPhp />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[150px] left-[100px] text-3xl">
                    <SiJavascript />
                </div>
                <div className="cross1 absolute rounded-full text-primary top-[70px] left-1/2 text-4xl">
                    <TbBrandNextjs />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[0px] left-20 text-4xl">
                    <TbSeo />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[20px] left-1/2 text-3xl">
                    <FaFigma />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[40px] left-1/3 text-3xl">
                    <SiFlutter />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[250px] left-3/4 text-4xl">
                    <FaPython />
                </div>
                <div className="round2 absolute rounded-full text-primary top-[40px] left-3/4 text-4xl">
                    <FaVuejs />
                </div>
                <div className="cross2"></div>
            </div>
            <div className=" py-36">
                <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-xl   font-semibold text-center">
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
