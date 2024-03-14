import Breadcrumbs from "@/app/components/Breadcrumbs";
import Image from "next/image";
import webimg from "@/public/assets/thumbBody.jpg";
import Collaborate from "@/app/components/Collaborate";
import { PiWebhooksLogo } from "react-icons/pi";

export default async function ProjectPage({ params }) {
    const { id } = params;

    return (
        <section>
            <Breadcrumbs
                title={"Multi BD Shop - Gaming eCommerce Store "}
                stateoff={false}
            />
            <div className="container mx-auto px-2 pb-20">
                <Image
                    alt="contact picture"
                    src={webimg}
                    className="w-full h-[400px] object-cover "
                />

                <div className="sm:flex justify-between mt-10">
                    <div className=" text-white pb-20 sm:w-[68%]">
                        <h2 className="text-center font-semibold text-primary lg:text-5xl md:text-4xl text-3xl gap-x-3 mb-[72px]">
                            Multi BD Shop - Gaming eCommerce Store
                        </h2>
                        <p className=" font-light">
                            Flaidex is a top web architecture and web
                            advancement organization Internationally conveying
                            the best web improvement administrations to create
                            custom sites, web applications, web-instruments, and
                            so on to worldwide organizations and new businesses
                            with 100 percent project conveyance.
                        </p>
                        <p className="font-bold underline mt-10 mb-5 text-primary">
                            Enterprise Solutions
                        </p>
                        <p className="font-light">
                            Flaidex is a top venture web advancement
                            organization has represented considerable authority
                            in making staggered undertaking-grade web answers to
                            meet different corporate necessities. We foster
                            customized endeavor online interfaces, eCommerce
                            arrangements, B2B and B2C applications, ERP and CRM
                            programming applications, Reporting, Billing &
                            Secure Financial Transaction Processing Systems, and
                            so forth Our undertaking IT and web arrangements are
                            fabricated utilizing the most recent web innovations
                            and they are secure, strong and adaptable which
                            assist organizations with decreasing generally
                            functional expense and upgrade functional
                            productivity.
                        </p>
                        <ul className="list-square mt-5 font-light pl-10">
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                        </ul>
                        <p className="font-bold underline mt-10 mb-5 text-primary">
                            E-Commerce
                        </p>
                        <p className="font-light">
                            Flaidex is a top venture web advancement
                            organization has represented considerable authority
                            in making staggered undertaking-grade web answers to
                            meet different corporate necessities. We foster
                            customized endeavor online interfaces, eCommerce
                            arrangements, B2B and B2C applications, ERP and CRM
                            programming applications, Reporting, Billing &
                            Secure Financial Transaction Processing Systems, and
                            so forth Our undertaking IT and web arrangements are
                            fabricated utilizing the most recent web innovations
                            and they are secure, strong and adaptable which
                            assist organizations with decreasing generally
                            functional expense and upgrade functional
                            productivity.
                        </p>
                        <ul className="list-square mt-5 font-light pl-10">
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                            <li>Custom Enterprise Web Development</li>
                        </ul>
                    </div>
                    <div className="sm:w-[30%]">
                        <p className="text-3xl text-white font-semibold">
                            Author
                        </p>
                        <div className="p-3 border flex text-white items-center gap-x-3 rounded-lg mt-5 mb-10">
                            <Image
                                alt="contact picture"
                                src={webimg}
                                className="w-24 h-24 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-2xl">
                                    Shafin Mahmud
                                </p>
                                <p className="text-lg">800$</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-3xl text-white font-semibold">
                                Published
                            </p>
                            <p className="text-lg text-white">29 Sep 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <Collaborate />
        </section>
    );
}
