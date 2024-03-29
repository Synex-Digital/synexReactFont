import { PiWebhooksLogo } from "react-icons/pi";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";
import webimg from "@/public/assets/thumbBody.jpg";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Collaborate from "../components/Collaborate";

export const metadata = {
    title: "Synex Digital - Projects",
    description:
        "Discover Our Success Stories: Synex Digital's Impressive Portfolio of Innovative Projects",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synex Digital",
    description:
        "Discover Our Success Stories: Synex Digital's Impressive Portfolio of Innovative Projects",
    url: "http://synexdigital.com",
    image: "http://synexdigital.com/asset/Frontend/logo_dsefault.png",
    logo: "http://synexdigital.com/asset/Frontend/logo_dsefault.png",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Dhanmondi",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        postalCode: "1208",
        addressCountry: "Bangladesh",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801757647319",
        contactType: "Customer Support",
        email: "digitalsynex@gmail.com",
    },
    sameAs: [
        "https://www.upwork.com/ag/synexdigital",
        "https://www.linkedin.com/company/synex-digital",
    ],
    foundingDate: "2023",
    founder: [
        {
            "@type": "Person",
            name: "Ali Imran Mehedi",
            sameAs: "https://www.linkedin.com/in/ali-imran-mehedi-601bab290",
            image: "https://media.licdn.com/dms/image/D4E03AQGmCJN8rN374Q/profile-displayphoto-shrink_200_200/0/1694458382289?e=1701907200&v=beta&t=gHFXBV7cAki0gPqaGmzF74aeiNGWK6DdFyvREKjM0vc",
            jobTitle: "Founder",
        },
        {
            "@type": "Person",
            name: "Md Ismail Hossain",
            sameAs: "https://www.linkedin.com/in/md-ismail-hossain-911a96236",
            image: "https://media.licdn.com/dms/image/C5603AQHb9Gbn9OLYUA/profile-displayphoto-shrink_200_200/0/1664188182447?e=1701907200&v=beta&t=giVYihC6XF4cYBupoObOYadjq-cqAkQ82qaqDRoUus4",
            jobTitle: "Founder",
        },
    ],
    employees: "10+",
    keywords:
        "web development, web application development, UI/UX design, digital agency",
};

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
                <div className="mt-16 flex flex-wrap xl:gap-5 gap-4 justify-center mb-20">
                    <div
                        id="small1overlaydiv"
                        className="group lg:w-[32%]  rounded-xl sm:w-[48%] w-full overflow-hidden relative "
                    >
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 xl:p-7 p-3 self-start ">
                                <h3 className="xl:text-2xl md:text-xl text-lg font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg xl:mt-4 mt-2 flex items-center gap-x-2"
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
                    <div
                        id="small1overlaydiv"
                        className="group lg:w-[32%] sm:w-[48%]  rounded-xl w-full overflow-hidden relative "
                    >
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 xl:p-7 p-3 self-start ">
                                <h3 className="xl:text-2xl md:text-xl text-lg font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg xl:mt-4 mt-2 flex items-center gap-x-2"
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
                    <div
                        id="small1overlaydiv"
                        className="group lg:w-[32%] sm:w-[48%]  rounded-xl w-full overflow-hidden relative "
                    >
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 xl:p-7 p-3 self-start ">
                                <h3 className="xl:text-2xl md:text-xl text-lg font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg xl:mt-4 mt-2 flex items-center gap-x-2"
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
                    <div
                        id="small1overlaydiv"
                        className="group lg:w-[32%] sm:w-[48%] rounded-xl w-full overflow-hidden relative "
                    >
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 xl:p-7 p-3 self-start ">
                                <h3 className="xl:text-2xl md:text-xl text-lg font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg xl:mt-4 mt-2 flex items-center gap-x-2"
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
                    <div
                        id="small1overlaydiv"
                        className="group lg:w-[32%] sm:w-[48%] rounded-xl w-full overflow-hidden relative "
                    >
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 xl:p-7 p-3 self-start ">
                                <h3 className="xl:text-2xl md:text-xl text-lg font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg xl:mt-4 mt-2 flex items-center gap-x-2"
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
                    <div
                        id="small1overlaydiv"
                        className="group lg:w-[32%] sm:w-[48%] rounded-xl w-full overflow-hidden relative "
                    >
                        <Image alt="contact picture" src={webimg} />
                        <div
                            id="small1overlay"
                            className=" group-hover:bottom-0 w-full h-full  absolute -bottom-[65%] left-0 flex items-end "
                        >
                            <div className="text w-full h-1/2 xl:p-7 p-3 self-start ">
                                <h3 className="xl:text-2xl md:text-xl text-lg font-semibold">
                                    Nugor Tech - Company portfolio
                                </h3>
                                <Link
                                    className="text-primary text-lg xl:mt-4 mt-2 flex items-center gap-x-2"
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
                </div>
            </div>
            <Collaborate />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
