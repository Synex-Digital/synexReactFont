import Breadcrumbs from "../components/Breadcrumbs";
import aboutimg from "../../public/assets/about group.webp";
import Image from "next/image";
import Heading from "../components/Heading";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import SimpleHook from "../components/SimpleHook";
import Collaborate from "../components/Collaborate";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";

export default function About() {
    return (
        <main>
            <Breadcrumbs title={"About"} stateoff={false} />
            <section className="pb-20">
                <div className="container mx-auto px-2 flex justify-between">
                    <div className="w-[48%] text-white">
                        <h1 className="text-xl lg:text-4xl md:text-3xl font-semibold lg:font-bold ">
                            Going further than just a cowering space,Synex
                            Digital offers more.
                        </h1>
                        <p className="text-sm lg:text-lg lg:font-medium mt-7">
                            Driven by our passion for software agency, we are
                            committed to transforming this enthusiasm into a
                            thriving online platform. Whether you're seeking
                            cutting-edge software development, innovative IT
                            solutions, or expert consultancy, Synex Digital is
                            your trusted partner every step of the way. Join us
                            on our journey as we continue to set new standards
                            in the software agency industry. Experience
                            excellence with Synex Digital - where innovation
                            meets reliability.
                        </p>
                    </div>
                    <div className="w-[48%]">
                        <Image
                            className="rounded-xl"
                            alt="About picture"
                            src={aboutimg}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-2">
                    <Heading
                        title={"Our Developers"}
                        subtitle={
                            "Meet the dedicated minds behind Synex Digital"
                        }
                    />
                    <div className="flex flex-wrap justify-evenly gap-y-7">
                        <div className="w-[23%] text-white text-center p-5 rounded-xl shadow-xl">
                            <Image
                                alt="Developer picture"
                                src={aboutimg}
                                className="rounded-full w-32 h-32 mx-auto object-cover"
                            />
                            <div className="font-medium text-xl mt-3">
                                Ali Imran Mehedi
                            </div>
                            <p>Founder & CEO</p>
                            <div className="flex justify-center gap-x-3 text-xl mt-3">
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                        <div className="w-[23%] text-white text-center p-5 rounded-xl shadow-xl">
                            <Image
                                alt="Developer picture"
                                src={aboutimg}
                                className="rounded-full w-32 h-32 mx-auto object-cover"
                            />
                            <div className="font-medium text-xl mt-3">
                                Ali Imran Mehedi
                            </div>
                            <p>Founder & CEO</p>
                            <div className="flex justify-center gap-x-3 text-xl mt-3">
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                        <div className="w-[23%] text-white text-center p-5 rounded-xl shadow-xl">
                            <Image
                                alt="Developer picture"
                                src={aboutimg}
                                className="rounded-full w-32 h-32 mx-auto object-cover"
                            />
                            <div className="font-medium text-xl mt-3">
                                Ali Imran Mehedi
                            </div>
                            <p>Founder & CEO</p>
                            <div className="flex justify-center gap-x-3 text-xl mt-3">
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                        <div className="w-[23%] text-white text-center p-5 rounded-xl shadow-xl">
                            <Image
                                alt="Developer picture"
                                src={aboutimg}
                                className="rounded-full w-32 h-32 mx-auto object-cover"
                            />
                            <div className="font-medium text-xl mt-3">
                                Ali Imran Mehedi
                            </div>
                            <p>Founder & CEO</p>
                            <div className="flex justify-center gap-x-3 text-xl mt-3">
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                        <div className="w-[23%] text-white text-center p-5 rounded-xl shadow-xl">
                            <Image
                                alt="Developer picture"
                                src={aboutimg}
                                className="rounded-full w-32 h-32 mx-auto object-cover"
                            />
                            <div className="font-medium text-xl mt-3">
                                Ali Imran Mehedi
                            </div>
                            <p>Founder & CEO</p>
                            <div className="flex justify-center gap-x-3 text-xl mt-3">
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                        <div className="w-[23%] text-white text-center p-5 rounded-xl shadow-xl">
                            <Image
                                alt="Developer picture"
                                src={aboutimg}
                                className="rounded-full w-32 h-32 mx-auto object-cover"
                            />
                            <div className="font-medium text-xl mt-3">
                                Ali Imran Mehedi
                            </div>
                            <p>Founder & CEO</p>
                            <div className="flex justify-center gap-x-3 text-xl mt-3">
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                        <div className="w-[23%] text-white text-center p-5 rounded-xl shadow-xl">
                            <Image
                                alt="Developer picture"
                                src={aboutimg}
                                className="rounded-full w-32 h-32 mx-auto object-cover"
                            />
                            <div className="font-medium text-xl mt-3">
                                Ali Imran Mehedi
                            </div>
                            <p>Founder & CEO</p>
                            <div className="flex justify-center gap-x-3 text-xl mt-3">
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#1d2934] py-20 mt-20">
                <div className="container mx-auto px-2">
                    <div className="flex max-sm:flex-col max-sm:gap-y-5 justify-between mt-7 ">
                        <div className=" text-primary  md:font-semibold font-medium text-center sm:w-[32%]">
                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                <SimpleHook endtime={5} />
                                <span>+</span>{" "}
                            </div>
                            <p className="md:text-xl text-lg">
                                YEARS OF EXPERIENCE
                            </p>
                        </div>
                        <div className=" text-primary  md:font-semibold font-medium  text-center  sm:w-[32%]">
                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                <SimpleHook endtime={89} />
                                <span>+</span>{" "}
                            </div>
                            <p className="md:text-xl text-lg uppercase">
                                Project Complete
                            </p>
                        </div>
                        <div className=" text-primary md:font-semibold font-medium  text-center sm:w-[32%]">
                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                <SimpleHook endtime={22} />
                                <span>+</span>{" "}
                            </div>
                            <p className="md:text-xl text-lg max-sm:leading-6">
                                DESIGNERS AND DEVELOPERS
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-2 flex justify-between">
                    <div className="w-[48%] ">
                        <iframe
                            className="rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096.2305514072784!2d90.36732961145226!3d23.7495884389046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40311a29c1f9eaa9%3A0x7eda334fe00e121c!2sSynex%20Digital!5e0!3m2!1sen!2sbd!4v1711811413537!5m2!1sen!2sbd"
                            width="100%"
                            height="400"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="w-[48%] text-white">
                        <h4 className="text-2xl font-medium">
                            GET IN TOUCH WITH US
                        </h4>
                        <p className="text-sm mt-5">
                            Reach out to us for assistance and inquiries.
                        </p>
                        <div className="mt-7 flex items-center gap-x-5">
                            <MdLocationOn className="text-2xl" />
                            <div>
                                <div className="text-lg font-medium">
                                    Our Location
                                </div>
                                <p className="text-sm">
                                    87/3 West dhanmondi, Shankar
                                </p>
                            </div>
                        </div>
                        <div className="mt-7 flex items-center gap-x-5 ">
                            <MdCall className="text-2xl" />
                            <div>
                                <div className="text-lg font-medium">
                                    Phone Number
                                </div>
                                <p className="text-sm">+8801613408101</p>
                            </div>
                        </div>
                        <div className="mt-7 flex items-center gap-x-5">
                            <MdEmail className="text-2xl" />
                            <div>
                                <div className="text-lg font-medium">
                                    Email Address
                                </div>
                                <p className="text-sm">
                                    office@synexdigital.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Collaborate />
        </main>
    );
}
