import { PiWebhooksLogo } from "react-icons/pi";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";
import webimg from "@/public/assets/thumbBody.jpg";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Collaborate from "../components/Collaborate";

export default function Project() {
    return (
        <section>
            <Breadcrumbs title={"All Projects"} stateoff={false} />
            <div className="container mx-auto px-2 text-white">
                <h2 className="text-center font-semibold text-primary lg:text-5xl md:text-4xl text-3xl flex justify-center items-center gap-x-3 mt-5">
                    <PiWebhooksLogo /> Let's see our project
                </h2>
                <p className="text-center mt-5 md:text-lg text-gray-300">
                    You can see many project of us which we have done with our
                    previous clients.
                </p>
                <div className="mt-16 flex flex-wrap gap-5 mb-20">
                    <div className="group w-[32%] overflow-hidden relative ">
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 p-7 self-start ">
                                <h3 className="text-2xl font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg mt-4 flex items-center gap-x-2"
                                    href="/project/1"
                                >
                                    Explore <GoArrowRight className="text-xl" />
                                </Link>
                                <p
                                    id="small1overlayptag"
                                    className="mt-5 font-light"
                                >
                                    company in bangladesh since 2019 in
                                    Bangladesh by synex Digital. A Service
                                    provider company portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[32%] overflow-hidden relative ">
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 p-7 self-start ">
                                <h3 className="text-2xl font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg mt-4 flex items-center gap-x-2"
                                    href="#"
                                >
                                    Explore <GoArrowRight className="text-xl" />
                                </Link>
                                <p
                                    id="small1overlayptag"
                                    className="mt-5 font-light"
                                >
                                    company in bangladesh since 2019 in
                                    Bangladesh by synex Digital. A Service
                                    provider company portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[32%] overflow-hidden relative ">
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 p-7 self-start ">
                                <h3 className="text-2xl font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg mt-4 flex items-center gap-x-2"
                                    href="#"
                                >
                                    Explore <GoArrowRight className="text-xl" />
                                </Link>
                                <p
                                    id="small1overlayptag"
                                    className="mt-5 font-light"
                                >
                                    company in bangladesh since 2019 in
                                    Bangladesh by synex Digital. A Service
                                    provider company portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[32%] overflow-hidden relative ">
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 p-7 self-start ">
                                <h3 className="text-2xl font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg mt-4 flex items-center gap-x-2"
                                    href="#"
                                >
                                    Explore <GoArrowRight className="text-xl" />
                                </Link>
                                <p
                                    id="small1overlayptag"
                                    className="mt-5 font-light"
                                >
                                    company in bangladesh since 2019 in
                                    Bangladesh by synex Digital. A Service
                                    provider company portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[32%] overflow-hidden relative ">
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 p-7 self-start ">
                                <h3 className="text-2xl font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg mt-4 flex items-center gap-x-2"
                                    href="#"
                                >
                                    Explore <GoArrowRight className="text-xl" />
                                </Link>
                                <p
                                    id="small1overlayptag"
                                    className="mt-5 font-light"
                                >
                                    company in bangladesh since 2019 in
                                    Bangladesh by synex Digital. A Service
                                    provider company portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[32%] overflow-hidden relative ">
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 p-7 self-start ">
                                <h3 className="text-2xl font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg mt-4 flex items-center gap-x-2"
                                    href="#"
                                >
                                    Explore <GoArrowRight className="text-xl" />
                                </Link>
                                <p
                                    id="small1overlayptag"
                                    className="mt-5 font-light"
                                >
                                    company in bangladesh since 2019 in
                                    Bangladesh by synex Digital. A Service
                                    provider company portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Collaborate />
            </div>
        </section>
    );
}
