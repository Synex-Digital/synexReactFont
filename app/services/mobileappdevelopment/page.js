import Image from "next/image";
import webimg from "@/public/assets/thumbBody.jpg";
import { PiWebhooksLogo } from "react-icons/pi";
import Collaborate from "@/app/components/Collaborate";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function mobileapp() {
    return (
        <section>
            <Breadcrumbs title={"Mobile App Development"} stateoff={true} />
            <div className="container mx-auto px-2 ">
                <div className=" text-white pb-20 max-sm:text-center">
                    <h2 className=" text-center font-semibold text-primary lg:text-5xl md:text-4xl text-3xl flex justify-center items-center gap-x-3 my-5">
                        <PiWebhooksLogo /> Mobile App Development
                    </h2>
                    <p className=" font-light">
                        Flaidex is a top web architecture and web advancement
                        organization Internationally conveying the best web
                        improvement administrations to create custom sites, web
                        applications, web-instruments, and so on to worldwide
                        organizations and new businesses with 100 percent
                        project conveyance.
                    </p>
                    <p className="font-bold underline mt-10 mb-5 text-primary">
                        Enterprise Solutions
                    </p>
                    <p className="font-light">
                        Flaidex is a top venture web advancement organization
                        has represented considerable authority in making
                        staggered undertaking-grade web answers to meet
                        different corporate necessities. We foster customized
                        endeavor online interfaces, eCommerce arrangements, B2B
                        and B2C applications, ERP and CRM programming
                        applications, Reporting, Billing & Secure Financial
                        Transaction Processing Systems, and so forth Our
                        undertaking IT and web arrangements are fabricated
                        utilizing the most recent web innovations and they are
                        secure, strong and adaptable which assist organizations
                        with decreasing generally functional expense and upgrade
                        functional productivity.
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
                        Flaidex is a top venture web advancement organization
                        has represented considerable authority in making
                        staggered undertaking-grade web answers to meet
                        different corporate necessities. We foster customized
                        endeavor online interfaces, eCommerce arrangements, B2B
                        and B2C applications, ERP and CRM programming
                        applications, Reporting, Billing & Secure Financial
                        Transaction Processing Systems, and so forth Our
                        undertaking IT and web arrangements are fabricated
                        utilizing the most recent web innovations and they are
                        secure, strong and adaptable which assist organizations
                        with decreasing generally functional expense and upgrade
                        functional productivity.
                    </p>
                    <ul className="list-square mt-5 font-light pl-10">
                        <li>Custom Enterprise Web Development</li>
                        <li>Custom Enterprise Web Development</li>
                        <li>Custom Enterprise Web Development</li>
                        <li>Custom Enterprise Web Development</li>
                        <li>Custom Enterprise Web Development</li>
                    </ul>
                </div>
                <Collaborate />
            </div>
        </section>
    );
}
