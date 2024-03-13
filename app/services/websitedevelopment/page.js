import Image from "next/image";
import bgcontact from "@/public/assets/bgcontact.svg";
import webimg from "@/public/assets/thumbBody.jpg";
import { PiWebhooksLogo } from "react-icons/pi";
import Collaborate from "@/app/components/Collaborate";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function websitedevelopment() {
    return (
        <section>
            <Breadcrumbs title={"Web Development"} stateoff={true} />
            <div className="container mx-auto px-2">
                <div className=" text-white pb-20 max-sm:text-center">
                    <h2 className="text-center font-semibold text-primary lg:text-5xl md:text-4xl text-3xl flex justify-center items-center gap-x-3 my-5">
                        <PiWebhooksLogo /> Web Development
                    </h2>
                    <p className=" font-light">
                        Flaidex is a top web architecture and web advancement
                        organization Internationally conveying the best web
                        improvement administrations to create custom sites, web
                        applications, web-instruments, and so on to worldwide
                        organizations and new businesses with 100 percent
                        project conveyance.
                    </p>
                    <div className="flex justify-between">
                        <div className="w-[48%]">
                            <h2 className="font-bold text-4xl mt-10 mb-5 text-primary">
                                Exploring Project Idea
                            </h2>
                            <p className="font-light">
                                The initial phase of application development
                                involves discussing ideas with stakeholders,
                                conducting research, and brainstorming to
                                identify any problems and determine the most
                                efficient way to solve them. This phase lays the
                                foundation for the project, ensuring that the
                                application's objectives and functionality align
                                with stakeholder requirements.
                            </p>
                        </div>
                        <div className="w-[48%] mt-10">
                            <div className="flex gap-x-4">
                                <div className="self-start rounded bg-gradient bg-red-500 p-5"></div>
                                <div>
                                    <h3 className="font-semibold text-3xl  mb-5 text-primary">
                                        Discussing ideas with stakeholders
                                    </h3>
                                    <p className="font-light">
                                        During the initial phase of the project,
                                        we will engage in extensive discussions
                                        with stakeholders to gain a deep
                                        understanding of the key requirements
                                        and expectations, ensuring that we have
                                        a clear and thorough grasp of the
                                        project's objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-4 my-10">
                                <div className="self-start rounded bg-gradient bg-red-500 p-5"></div>
                                <div>
                                    <h3 className="font-semibold text-3xl  mb-5 text-primary">
                                        Discussing ideas with stakeholders
                                    </h3>
                                    <p className="font-light">
                                        During the initial phase of the project,
                                        we will engage in extensive discussions
                                        with stakeholders to gain a deep
                                        understanding of the key requirements
                                        and expectations, ensuring that we have
                                        a clear and thorough grasp of the
                                        project's objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-4 mb-10">
                                <div className="self-start rounded bg-gradient bg-red-500 p-5"></div>
                                <div>
                                    <h3 className="font-semibold text-3xl  mb-5 text-primary">
                                        Discussing ideas with stakeholders
                                    </h3>
                                    <p className="font-light">
                                        During the initial phase of the project,
                                        we will engage in extensive discussions
                                        with stakeholders to gain a deep
                                        understanding of the key requirements
                                        and expectations, ensuring that we have
                                        a clear and thorough grasp of the
                                        project's objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-x-4">
                                <div className="self-start rounded bg-gradient bg-red-500 p-5"></div>
                                <div>
                                    <h3 className="font-semibold text-3xl  mb-5 text-primary">
                                    Research
                                    </h3>
                                    <p className="font-light">
                                        During the initial phase of the project,
                                        we will engage in extensive discussions
                                        with stakeholders to gain a deep
                                        understanding of the key requirements
                                        and expectations, ensuring that we have
                                        a clear and thorough grasp of the
                                        project's objectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Collaborate />
            </div>
        </section>
    );
}
