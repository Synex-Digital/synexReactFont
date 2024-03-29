import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import Link from "next/link";
import Collaborate from "../components/Collaborate";
import webicon from "@/public/assets/webicon.png";
import { PiWebhooksLogo } from "react-icons/pi";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Services() {
    return (
        <section>
            <Breadcrumbs title={"All Service"} stateoff={false} />
            <div className="container mx-auto px-2 pb-20 text-white">
                <h2 className="text-center font-semibold text-primary lg:text-5xl md:text-4xl text-3xl flex justify-center items-center gap-x-3 mt-5">
                    <PiWebhooksLogo /> Let's see our service
                </h2>
                <p className="text-center mt-5 md:text-lg text-gray-300">
                    You can see many service of us which we have done with our
                    previous clients.
                </p>
                <div className="mb-20 mt-16 flex flex-wrap max-sm:flex-col gap-5 justify-center">
                    <div
                        className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#c0dbe2] xl:w-[32%] sm:w-[48%] text-black "
                        id="serviseslinkdiv"
                    >
                        <Image
                            width={200}
                            alt="Web Image"
                            priority
                            placeholder="blur"
                            quality={80}
                            src={webicon}
                            className="mx-auto"
                        />
                        <h2 className="text-center text-3xl font-semibold mt-5">
                            Website Development
                        </h2>
                        <h3 className="text-justify mt-5 font-medium">
                            Synex Digital develops dynamic websites with React
                            on the front end and PHP-Laravel on the back end.
                            Strengthen your digital identity with our creative
                            web...
                        </h3>

                        <div className="text-center mt-5">
                            <Link
                                id="serviseslink"
                                href={"/services/websitedevelopment"}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div
                        className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#e0bb7b] xl:w-[32%] sm:w-[48%] text-black"
                        id="serviseslinkdiv"
                    >
                        <Image
                            width={200}
                            alt="Web Image"
                            priority
                            placeholder="blur"
                            quality={80}
                            src={webicon}
                            className="mx-auto"
                        />
                        <h2 className="text-center text-3xl font-semibold mt-5">
                            Website Development
                        </h2>
                        <h3 className="text-justify mt-5 font-medium">
                            Synex Digital develops dynamic websites with React
                            on the front end and PHP-Laravel on the back end.
                            Strengthen your digital identity with our creative
                            web...
                        </h3>

                        <div className="text-center mt-5">
                            <Link
                                id="serviseslink"
                                href={"/services/websitedevelopment"}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div
                        className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#adc7a5] xl:w-[32%] sm:w-[48%] text-black"
                        id="serviseslinkdiv"
                    >
                        <Image
                            width={200}
                            alt="Web Image"
                            priority
                            placeholder="blur"
                            quality={80}
                            src={webicon}
                            className="mx-auto"
                        />
                        <h2 className="text-center text-3xl font-semibold mt-5">
                            Website Development
                        </h2>
                        <h3 className="text-justify mt-5 font-medium">
                            Synex Digital develops dynamic websites with React
                            on the front end and PHP-Laravel on the back end.
                            Strengthen your digital identity with our creative
                            web...
                        </h3>

                        <div className="text-center mt-5">
                            <Link
                                id="serviseslink"
                                href={"/services/websitedevelopment"}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div
                        className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#e0bb7b] xl:w-[32%] sm:w-[48%] text-black"
                        id="serviseslinkdiv"
                    >
                        <Image
                            width={200}
                            alt="Web Image"
                            priority
                            placeholder="blur"
                            quality={80}
                            src={webicon}
                            className="mx-auto"
                        />
                        <h2 className="text-center text-3xl font-semibold mt-5">
                            Website Development
                        </h2>
                        <h3 className="text-justify mt-5 font-medium">
                            Synex Digital develops dynamic websites with React
                            on the front end and PHP-Laravel on the back end.
                            Strengthen your digital identity with our creative
                            web...
                        </h3>

                        <div className="text-center mt-5">
                            <Link
                                id="serviseslink"
                                href={"/services/websitedevelopment"}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div
                        className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#adc7a5] xl:w-[32%] sm:w-[48%] text-black"
                        id="serviseslinkdiv"
                    >
                        <Image
                            width={200}
                            alt="Web Image"
                            priority
                            placeholder="blur"
                            quality={80}
                            src={webicon}
                            className="mx-auto"
                        />
                        <h2 className="text-center text-3xl font-semibold mt-5">
                            Website Development
                        </h2>
                        <h3 className="text-justify mt-5 font-medium">
                            Synex Digital develops dynamic websites with React
                            on the front end and PHP-Laravel on the back end.
                            Strengthen your digital identity with our creative
                            web...
                        </h3>

                        <div className="text-center mt-5">
                            <Link
                                id="serviseslink"
                                href={"/services/websitedevelopment"}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Collaborate />
        </section>
    );
}
