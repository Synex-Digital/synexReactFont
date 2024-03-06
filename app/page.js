import Image from "next/image";
import Link from "next/link";
import Reacttilt from "./components/Reacttilt";
import recordimg from "@/public/assets/thumbBody.jpg";
import blogimg from "@/public/assets/blogimg.webp";
import anisvg from "@/public/assets/animation.svg";
import webicon from "@/public/assets/webicon.png";
import SimpleHook from "./components/SimpleHook";
import ReactSlick from "./components/ReactSlick";
import AosAnimation from "./components/AosAnimation";
import TiltAnimation from "./components/TiltAnimation";

export default function Home() {
    return (
        <>
            <main>
                <section className="pt-10 pb-16">
                    <div className="container flex mx-auto px-2 py-16">
                        <div className="w-1/2">
                            <h1 className="text-5xl text-white font-bold leading-snug">
                                Business IT Solutions:
                                <br />{" "}
                                <span className="text-primary">
                                    Pioneering Excellence for
                                </span>
                                <br />
                                Your Technological Needs
                            </h1>
                            <h2 className="text-white my-5 ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga maiores iusto, error
                                reprehenderit suscipit perferendis omnis alias
                                eos ipsa repudiandae optio architecto. Facere
                                porro optio, quaerat nam deserunt quo quia
                                voluptatum, hic amet inventore delectus. Facilis
                                laudantium impedit alias. Vero necessitatibus
                                distinctio animi similique nisi reiciendis
                                blanditiis praesentium officiis possimus
                                accusantium magni perferendis magnam esse, non,
                                vitae maxime ut temporibus consequatur officia
                                eveniet odit! Dicta recusandae sint magnam
                                similique maiores temporibus eius tempora
                                voluptas, repudiandae ratione nam, placeat
                                dignissimos qui ipsum officiis pariatur expedita
                                odio veniam cupiditate esse dolorem? Officiis,
                                necessitatibus. Doloribus accusamus quibusdam
                                explicabo qui vero ex minima et.
                            </h2>
                            <Link
                                href={"project"}
                                className="bg-primary hover:bg-[#bcdd2d] py-2 px-7 rounded-full text-lg font-medium"
                            >
                                Explore Our Service
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto px-2">
                        <div className="mx-auto flex flex-col justify-center items-center">
                            <h4 className="text-primary text-3xl font-semibold text-center z-50 ">
                                Our Service
                            </h4>
                            <AosAnimation
                                aosvalue={"fade-up"}
                                className="relative"
                            >
                                <div className="bg-transparent"></div>
                                <div className="blob -translate-x-[50%]">
                                    <Image
                                        src={anisvg}
                                        alt="Reacording Image"
                                        priority
                                        quality={80}
                                    />
                                </div>
                            </AosAnimation>
                            <h4 className="font-medium text-2xl text-center text-white z-50 mt-5">
                                Elevating Your Business with Innovative Services
                            </h4>
                        </div>
                        <div className="flex justify-between gap-y-5 pt-16 flex-wrap ">
                            <ReactSlick className="w-full h-full">
                                <div className="p-5 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl p-7 bg-[#c0dbe2]">
                                            <h2 className="text-center text-3xl font-semibold">
                                                Website Development
                                            </h2>
                                            <h3 className="text-justify mt-5 font-medium">
                                                Synex Digital develops dynamic
                                                websites with React on the front
                                                end and PHP-Laravel on the back
                                                end. Strengthen your digital
                                                identity with our creative
                                                web...
                                            </h3>
                                            <Image
                                                width={250}
                                                alt="Web Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                                className="mx-auto"
                                            />
                                        </div>
                                    </Reacttilt>
                                </div>
                                <div className="p-5 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl p-7 bg-[#e0bb7b]">
                                            <h2 className="text-center text-3xl font-semibold">
                                                Website Development
                                            </h2>
                                            <h3 className="text-justify mt-5 font-medium">
                                                Synex Digital develops dynamic
                                                websites with React on the front
                                                end and PHP-Laravel on the back
                                                end. Strengthen your digital
                                                identity with our creative
                                                web...
                                            </h3>
                                            <Image
                                                width={250}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                                className="mx-auto"
                                            />
                                        </div>
                                    </Reacttilt>
                                </div>
                                <div className="p-5 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl p-7 bg-[#adc7a5]">
                                            <h2 className="text-center text-3xl font-semibold">
                                                Website Development
                                            </h2>
                                            <h3 className="text-justify mt-5 font-medium">
                                                Synex Digital develops dynamic
                                                websites with React on the front
                                                end and PHP-Laravel on the back
                                                end. Strengthen your digital
                                                identity with our creative
                                                web...
                                            </h3>
                                            <Image
                                                width={250}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                                className="mx-auto"
                                            />
                                        </div>
                                    </Reacttilt>
                                </div>
                                <div className="p-5 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl p-7 bg-[#adc7a5]">
                                            <h2 className="text-center text-3xl font-semibold">
                                                Website Development
                                            </h2>
                                            <h3 className="text-justify mt-5 font-medium">
                                                Synex Digital develops dynamic
                                                websites with React on the front
                                                end and PHP-Laravel on the back
                                                end. Strengthen your digital
                                                identity with our creative
                                                web...
                                            </h3>
                                            <Image
                                                width={250}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                                className="mx-auto"
                                            />
                                        </div>
                                    </Reacttilt>
                                </div>
                                <div className="p-5 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl p-7 bg-[#adc7a5]">
                                            <h2 className="text-center text-3xl font-semibold">
                                                Website Development
                                            </h2>
                                            <h3 className="text-justify mt-5 font-medium">
                                                Synex Digital develops dynamic
                                                websites with React on the front
                                                end and PHP-Laravel on the back
                                                end. Strengthen your digital
                                                identity with our creative
                                                web...
                                            </h3>
                                            <Image
                                                width={250}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                                className="mx-auto"
                                            />
                                        </div>
                                    </Reacttilt>
                                </div>
                                <div className="p-5 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl p-7 bg-[#e0bb7b]">
                                            <h2 className="text-center text-3xl font-semibold">
                                                Website Development
                                            </h2>
                                            <h3 className="text-justify mt-5 font-medium">
                                                Synex Digital develops dynamic
                                                websites with React on the front
                                                end and PHP-Laravel on the back
                                                end. Strengthen your digital
                                                identity with our creative
                                                web...
                                            </h3>
                                            <Image
                                                width={250}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                                className="mx-auto"
                                            />
                                        </div>
                                    </Reacttilt>
                                </div>
                            </ReactSlick>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-2">
                        <div className="mx-auto flex flex-col justify-center items-center">
                            <h4 className="text-primary text-3xl font-semibold text-center z-50 ">
                                Our Records
                            </h4>
                            <AosAnimation
                                aosvalue={"fade-up"}
                                className="relative"
                            >
                                <div className="bg-transparent"></div>
                                <div className="blob -translate-x-[50%]">
                                    <Image
                                        src={anisvg}
                                        alt="Reacording Image"
                                        priority
                                        quality={80}
                                    />
                                </div>
                            </AosAnimation>
                        </div>
                        <div className="flex justify-between mt-20">
                            <div className="w-[48%] ">
                                <AosAnimation aosvalue={"fade-right"}>
                                    <Image
                                        src={recordimg}
                                        alt="Reacording Image"
                                        priority
                                        placeholder="blur"
                                        quality={80}
                                        className="rounded-xl"
                                    />
                                </AosAnimation>
                            </div>
                            <div className="w-[48%]">
                                <AosAnimation aosvalue={"fade-up"}>
                                    <h5 className="font-semibold text-white mb-5 text-4xl">
                                        Navigating the IT Landscape with
                                        Precision
                                    </h5>
                                    <p className="text-white leading-7">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Cumque animi magni
                                        dignissimos est molestias, nihil officia
                                        nemo consequuntur neque iusto ipsa illo
                                        corrupti quam quasi. Aut, eaque
                                        voluptatum. Amet similique nihil ducimus
                                        eius nobis? Magni architecto corporis
                                        praesentium facere? In debitis libero
                                        quasi magni? Quam aut, laborum ab
                                        expedita pariatur, quos minus nulla
                                        autem enim rerum neque sit distinctio.
                                        Rerum, voluptatem asperiores maiores ea
                                        inventore temporibus fuga, quia magnam
                                        corporis nam itaque quas consequuntur,
                                        dicta nemo cum numquam ad deleniti nobis
                                        eos obcaecati maxime? Sequi aliquid,
                                        repudiandae doloribus eos molestias
                                        rerum necessitatibus cupiditate enim,
                                        rem corrupti dolor quisquam doloremque
                                        autem!
                                    </p>
                                    <div className="flex justify-between mt-7">
                                        <div className="bg-primary px-2 py-5 font-semibold text-center w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={5} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="text-xl">
                                                YEARS OF EXPERIENCE
                                            </p>
                                        </div>
                                        <div className="bg-primary px-2 py-5 font-semibold  text-center w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={89} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="text-xl uppercase">
                                                Project Complete
                                            </p>
                                        </div>
                                        <div className="bg-primary px-2 py-5 font-semibold  text-center w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={22} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="text-xl">
                                                DESIGNERS AND DEVELOPERS
                                            </p>
                                        </div>
                                    </div>
                                </AosAnimation>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto px-2">
                        <div className="mx-auto flex flex-col justify-center items-center">
                            <h4 className="text-primary text-3xl font-semibold text-center z-50 ">
                                Our Project
                            </h4>
                            <AosAnimation
                                aosvalue={"fade-up"}
                                className="relative"
                            >
                                <div className="bg-transparent"></div>
                                <div className="blob -translate-x-[50%]">
                                    <Image
                                        src={anisvg}
                                        alt="Reacording Image"
                                        priority
                                        quality={80}
                                    />
                                </div>
                            </AosAnimation>
                            <h4 className="font-medium text-2xl text-center text-white z-50 mt-5">
                                Crafting Tailored Business IT Solutions
                            </h4>
                        </div>

                        <div className="text-center pt-20">
                            <div className="flex justify-between ">
                                <TiltAnimation
                                    color={"#00b9ff"}
                                    bgcolor={
                                        "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
                                    }
                                >
                                    <div className="p-1 absolute z-20">
                                        <Image
                                            src={recordimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl object-cover"
                                        />
                                        <div className="p-3 pt-8 text-center">
                                            <time className="bg-[#007d58] text-white font-light text-sm py-2 px-5 rounded-3xl">
                                                28 sep 2023
                                            </time>
                                            <h4 className="text-white text-xl font-semibold text-center mt-5 mb-3">
                                                Nugor Tech - Company portfolio
                                            </h4>
                                            <p className="text-white text-center">
                                                company in bangladesh since 2019
                                                in Bangladesh by synex Digital.
                                                A Service provider company
                                                portfolio
                                            </p>
                                        </div>
                                    </div>
                                </TiltAnimation>
                                <TiltAnimation
                                    color={"#ff00db"}
                                    bgcolor={
                                        "linear-gradient(90deg, rgba(215,0,0,0.5) 0%, rgba(173,0,149,1) 100%)"
                                    }
                                >
                                    <div className="p-1 absolute z-20 ">
                                        <Image
                                            src={recordimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl object-cover"
                                        />
                                        <div className="p-3 pt-8 text-center">
                                            <time className="bg-[#ac009286] text-white font-light text-sm py-2 px-5 rounded-3xl">
                                                28 sep 2023
                                            </time>
                                            <h4 className="text-white text-xl font-semibold text-center mt-5 mb-3">
                                                Nugor Tech - Company portfolio
                                            </h4>
                                            <p className="text-white text-center">
                                                company in bangladesh since 2019
                                                in Bangladesh by synex Digital.
                                                A Service provider company
                                                portfolio
                                            </p>
                                        </div>
                                    </div>
                                </TiltAnimation>
                                <TiltAnimation
                                    color={"#00d7ff"}
                                    bgcolor={
                                        "linear-gradient(147deg, rgba(0,11,215,1) 0%, rgba(0,134,255,0.8071603641456583) 100%)"
                                    }
                                >
                                    <div className="p-1 absolute z-20 ">
                                        <Image
                                            src={recordimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl object-cover "
                                        />
                                        <div className="p-3 pt-8 text-center">
                                            <time className="bg-[#00d9ffa0] py-2 text-white font-light text-sm px-5 rounded-3xl">
                                                28 sep 2023
                                            </time>
                                            <h4 className="text-white text-xl font-semibold text-center mt-5 mb-3">
                                                Nugor Tech - Company portfolio
                                            </h4>
                                            <p className="text-white text-center">
                                                company in bangladesh since 2019
                                                in Bangladesh by synex Digital.
                                                A Service provider company
                                                portfolio
                                            </p>
                                        </div>
                                    </div>
                                </TiltAnimation>
                                <TiltAnimation
                                    color={"#fd7700"}
                                    bgcolor={
                                        "linear-gradient(258deg, rgba(215,0,0,1) 0%, rgba(255,124,0,0.6) 100%)"
                                    }
                                >
                                    <div className="p-1 absolute z-20 ">
                                        <Image
                                            src={recordimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl object-cover"
                                        />
                                        <div className="p-3 pt-8 text-center">
                                            <time className="bg-[#ff7b00b1] text-white font-light text-sm py-2 px-5 rounded-3xl">
                                                28 sep 2023
                                            </time>
                                            <h4 className="text-white text-xl font-semibold text-center mt-5 mb-3">
                                                Nugor Tech - Company portfolio
                                            </h4>
                                            <p className="text-white text-center">
                                                company in bangladesh since 2019
                                                in Bangladesh by synex Digital.
                                                A Service provider company
                                                portfolio
                                            </p>
                                        </div>
                                    </div>
                                </TiltAnimation>
                            </div>
                            <div className=" w-full text-center mt-16">
                                <Link
                                    href={"#"}
                                    className="text-center bg-primary hover:bg-[#bcdd2d] font-medium text-lg px-8 py-2 rounded-full"
                                >
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 mt-16 Testimonial">
                    <div className="container mx-auto px-2">
                        <div className="mx-auto flex flex-col justify-center items-center">
                            <h4 className="text-primary text-3xl font-semibold text-center z-50 ">
                                Testimonial
                            </h4>
                            <AosAnimation
                                aosvalue={"fade-up"}
                                className="relative"
                            >
                                <div className="bg-transparent"></div>
                                <div className="blob -translate-x-[50%]">
                                    <Image
                                        src={anisvg}
                                        alt="Reacording Image"
                                        priority
                                        quality={80}
                                    />
                                </div>
                            </AosAnimation>
                            <h4 className="font-medium text-2xl text-center text-white z-50 mt-5">
                                Genesys Engage: Redefining Customer Contact
                            </h4>
                        </div>
                        <ReactSlick className="w-full h-full !flex !justify-center !items-end mt-10">
                            <div className="p-5 cursor-grab ">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-white bg-transparent border-primary border">
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                width={40}
                                                alt="Web Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                            />
                                            <div>
                                                <p className="font-medium text-lg">
                                                    ABM Shawon Islam
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="text-justify mt-5 font-medium">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div>
                            <div className="p-5 cursor-grab">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-white bg-transparent border border-primary">
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                width={40}
                                                alt="Web Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                            />
                                            <div>
                                                <p className="font-medium text-lg">
                                                    ABM Shawon Islam
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="text-justify mt-5 font-medium">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div>
                            <div className="p-5 cursor-grab">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-white bg-transparent border border-primary">
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                width={40}
                                                alt="Web Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                            />
                                            <div>
                                                <p className="font-medium text-lg">
                                                    ABM Shawon Islam
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="text-justify mt-5 font-medium">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div>
                            <div className="p-5 cursor-grab">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-white bg-transparent border border-primary">
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                width={40}
                                                alt="Web Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                            />
                                            <div>
                                                <p className="font-medium text-lg">
                                                    ABM Shawon Islam
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="text-justify mt-5 font-medium">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div>
                            <div className="p-5 cursor-grab">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-white bg-transparent border-primary border">
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                width={40}
                                                alt="Web Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                            />
                                            <div>
                                                <p className="font-medium text-lg">
                                                    ABM Shawon Islam
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="text-justify mt-5 font-medium">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div>
                            <div className="p-5 cursor-grab">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-white bg-transparent border-primary border">
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                width={40}
                                                alt="Web Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                src={webicon}
                                            />
                                            <div>
                                                <p className="font-medium text-lg">
                                                    ABM Shawon Islam
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="text-justify mt-5 font-medium">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div>
                        </ReactSlick>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-2">
                        <div className="mx-auto flex flex-col justify-center items-center">
                            <h4 className="text-primary text-3xl font-semibold text-center z-50 ">
                                Our Blog
                            </h4>
                            <AosAnimation
                                aosvalue={"fade-up"}
                                className="relative"
                            >
                                <div className="bg-transparent"></div>
                                <div className="blob -translate-x-[50%]">
                                    <Image
                                        src={anisvg}
                                        alt="Reacording Image"
                                        priority
                                        quality={80}
                                    />
                                </div>
                            </AosAnimation>
                            <h4 className="font-medium text-2xl text-center text-white z-50 mt-5">
                                Latest Blog and Articles
                            </h4>
                        </div>
                        <div className="flex justify-between pt-16 ">
                            <AosAnimation
                                aosvalue={"zoom-in-up"}
                                className="w-[38%]"
                            >
                                <div className=" p-3 pb-5 rounded-xl cursor-pointer shadow-xl shadow-[#03010588] hover:shadow-[#030105e2] ease-out duration-300 hover:-translate-y-1 hover:-translate-x-1 bg-[#4cc39430] h-full">
                                    <Image
                                        src={blogimg}
                                        alt="Reacording Image"
                                        priority
                                        placeholder="blur"
                                        quality={80}
                                        className="rounded-xl"
                                    />
                                    <div className="text-white">
                                        <p className="bg-primary px-3 py-1 rounded-full text-sm inline-block mt-5 text-black">
                                            Development
                                        </p>
                                        <time className="block text-sm my-3 ">
                                            15 Nov 2023
                                        </time>
                                        <h5 className="font-medium text-xl mb-1">
                                            Optimizing Laravel for Search
                                            Engines: Advanced SEO Strategies and
                                            Best Practices
                                        </h5>
                                        <p className="font-light mt-3">
                                            Explore advanced SEO strategies
                                            tailored for Laravel development to
                                            enhance website visibility and
                                            ranking. Discover techniques in URL
                                            structuring, metadata optimization,
                                            content management, and performance
                                            optimization for superior search
                                            engine results.
                                        </p>
                                    </div>
                                </div>
                            </AosAnimation>
                            <div className="w-[60%] flex flex-wrap gap-y-4 justify-between">
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="w-[49%]"
                                >
                                    <div className=" p-3 pb-5 rounded-xl cursor-pointer shadow-xl shadow-[#03010588] hover:shadow-[#030105e2] ease-in-out duration-300 hover:-translate-y-1 hover:-translate-x-1 bg-[#4cc39430] h-fit">
                                        <Image
                                            src={blogimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl"
                                        />
                                        <div className="text-white">
                                            <time className="block my-3 text-sm">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium text-lg ">
                                                Optimizing Laravel for Search
                                                Engines: Advanced SEO Strategies
                                                and Best Practices
                                            </h5>
                                        </div>
                                    </div>
                                </AosAnimation>
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="w-[49%]"
                                >
                                    <div className=" p-3 pb-5 rounded-xl cursor-pointer shadow-xl shadow-[#03010588] hover:shadow-[#030105e2] ease-in-out duration-300 hover:-translate-y-1 hover:-translate-x-1 bg-[#4cc39430] h-fit">
                                        <Image
                                            src={blogimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl"
                                        />
                                        <div className="text-white">
                                            <time className="block my-3 text-sm">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium text-lg ">
                                                Optimizing Laravel for Search
                                                Engines: Advanced SEO Strategies
                                                and Best Practices
                                            </h5>
                                        </div>
                                    </div>
                                </AosAnimation>
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="w-[49%]"
                                >
                                    <div className=" p-3 pb-5 rounded-xl cursor-pointer shadow-xl shadow-[#03010588] hover:shadow-[#030105e2] ease-in-out duration-300 hover:-translate-y-1 hover:-translate-x-1 bg-[#4cc39430] h-fit">
                                        <Image
                                            src={blogimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl"
                                        />
                                        <div className="text-white">
                                            <time className="block my-3 text-sm">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium text-lg ">
                                                Optimizing Laravel for Search
                                                Engines: Advanced SEO Strategies
                                                and Best Practices
                                            </h5>
                                        </div>
                                    </div>
                                </AosAnimation>
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="w-[49%]"
                                >
                                    <div className=" p-3 pb-5 rounded-xl cursor-pointer shadow-xl shadow-[#03010588] hover:shadow-[#030105e2] ease-in-out duration-300 hover:-translate-y-1 hover:-translate-x-1 bg-[#4cc39430] h-fit">
                                        <Image
                                            src={blogimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl"
                                        />
                                        <div className="text-white">
                                            <time className="block my-3 text-sm">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium text-lg">
                                                Optimizing Laravel for Search
                                                Engines: Advanced SEO Strategies
                                                and Best Practices
                                            </h5>
                                        </div>
                                    </div>
                                </AosAnimation>
                            </div>
                        </div>
                        <div className=" w-full text-center mt-16">
                            <Link
                                href={"#"}
                                className="text-center bg-primary hover:bg-[#bcdd2d] font-medium text-lg px-8 py-2 rounded-full"
                            >
                                View More
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-[#1d2934]">
                    <div className="container mx-auto px-2">
                        <div className="text-white text-center">
                            <h6 className="text-3xl font-semibold">
                                Ready to Collaborate with us?
                            </h6>
                            <p className="font-light mt-5">
                                Let's unite and craft something truly
                                remarkable. We're excited to collaborate and
                                bring visionary ideas to life.
                            </p>
                        </div>
                        <div className="flex gap-x-5 justify-center mt-10">
                            <Link
                                href={"#"}
                                className="px-7 py-3 border border-primary text-white hover:shadow hover:shadow-primary transition duration-300 ease-in-out"
                            >
                                Contact Us
                            </Link>
                            <Link
                                className="px-7 py-3 border border-primary bg-primary text-black hover:shadow hover:shadow-primary transition duration-300 ease-in-out"
                                href={"#"}
                            >
                                Schedule Meeting
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
