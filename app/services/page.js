import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import Link from "next/link";
import Collaborate from "../components/Collaborate";
import webicon from "@/public/assets/webicon.png";
import { PiWebhooksLogo } from "react-icons/pi";
import Breadcrumbs from "../components/Breadcrumbs";
import getAllServices from "@/lio/getAllServices";

export default async function Services() {
    const Service_data = await getAllServices();

    return (
        <main>
            <Breadcrumbs title={"All Service"} stateoff={false} />
            <section>
                <div className="container mx-auto px-2 pb-20 text-white">
                    <h2 className="text-center font-semibold text-primary lg:text-5xl md:text-4xl text-3xl flex justify-center items-center gap-x-3 mt-5">
                        <PiWebhooksLogo /> Let's see our service
                    </h2>
                    <p className="text-center mt-5 md:text-lg text-gray-300">
                        You can see many service of us which we have done with
                        our previous clients.
                    </p>
                    <div className="mb-20 mt-16 flex flex-wrap max-sm:flex-col gap-5 justify-center">
                        {Service_data.services.map((item) => (
                            <div
                                key={item.id}
                                className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#c0dbe2] xl:w-[32%] sm:w-[48%] text-black "
                                id="serviseslinkdiv"
                            >
                                <Image
                                    width={250}
                                    height={250}
                                    alt="Web Image"
                                    quality={80}
                                    src={`http://sd-admin-backend.synexdigital.com/uploads/service/${item.thumbnail}`}
                                    className="mx-auto p-5"
                                />
                                <h2 className="text-center text-3xl font-semibold mt-5">
                                    {item.title}
                                </h2>
                                <h3 className=" mt-5 font-medium text-center">
                                    {item.description}
                                </h3>

                                <div className="text-center mt-5">
                                    <Link
                                        id="serviseslink"
                                        href={`/services/${item.slugs}`}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Collaborate />
        </main>
    );
}
