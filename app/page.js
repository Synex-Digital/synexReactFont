import Image from "next/image";
import Link from "next/link";
import Reacttilt from "./components/Reacttilt";
import recordimg from "@/public/assets/thumbBody.jpg";
import blogimg from "@/public/assets/blogimg.webp";
import webicon from "@/public/assets/webicon.png";
import SimpleHook from "./components/SimpleHook";
import ReactSlick from "./components/ReactSlick";
import AosAnimation from "./components/AosAnimation";
import TiltAnimation from "./components/TiltAnimation";
import Heading from "./components/Heading";
import Collaborate from "./components/Collaborate";

export default function Home() {
    return (
        <>
            <main>
                <section className="pt-10 pb-16">
                    <div className="container lg:flex mx-auto px-2 lg:py-16 justify-between max-lg:flex max-lg:flex-col-reverse">
                        <div className="lg:w-[48%]">
                            <h1 className="xl:text-5xl lg:text-4xl text-3xl text-white font-bold max-lg:text-center leading-snug">
                                Business IT Solutions:
                                <br />{" "}
                                <span className="text-primary">
                                    Pioneering Excellence for
                                </span>
                                <br />
                                Your Technological Needs
                            </h1>
                            <h2 className="text-white mt-5 mb-8 max-md:font-light max-lg:text-center">
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
                                explicabo qui vero ex minimaet.
                            </h2>
                            <div className="max-lg:text-center">
                                <Link
                                    href="project"
                                    className="bg-primary hover:bg-[#bcdd2d] py-2 px-7 rounded-full text-lg font-medium"
                                >
                                    Explore Our Service
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-[48%] max-lg:mt-7 max-lg:mb-7 flex justify-center">
                            <Image
                                src={recordimg}
                                alt="Reacording Image"
                                priority
                                placeholder="blur"
                                quality={80}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto px-2">
                        <Heading
                            title="Our Service"
                            subtitle="Elevating Your Business with Innovative Services"
                        />
                        <div className="flex justify-between flex-wrap ">
                            <ReactSlick className="w-full h-full">
                                <div className="xl:p-5 lg:p-4 md:p-3 p-2 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#c0dbe2]">
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
                                <div className="xl:p-5 lg:p-4 md:p-3 p-2 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#e0bb7b]">
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
                                <div className="xl:p-5 lg:p-4 md:p-3 p-2 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#adc7a5]">
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
                                <div className="xl:p-5 lg:p-4 md:p-3 p-2 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#adc7a5]">
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
                                <div className="xl:p-5 lg:p-4 md:p-3 p-2 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#adc7a5]">
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
                                <div className="xl:p-5 lg:p-4 md:p-3 p-2 cursor-grab">
                                    <Reacttilt>
                                        <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#e0bb7b]">
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
                        <Heading
                            title="Our Records"
                            subtitle="Elevating Your Business with Innovative Services"
                        />
                        <div className="lg:flex justify-between">
                            <div className="lg:w-[48%] ">
                                <AosAnimation
                                    aosvalue={"fade-right"}
                                    className="flex justify-center"
                                >
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
                            <div className="lg:w-[48%] max-lg:mt-7 max-lg:text-center">
                                <AosAnimation aosvalue={"fade-up"}>
                                    <h5 className="font-semibold max-lg:font-medium text-white lg:mb-5 mb-3 xl:text-4xl lg:text-3xl text-2xl">
                                        Navigating the IT Landscape with
                                        Precision
                                    </h5>
                                    <p className="text-white leading-7 max-lg:font-light">
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
                                    <div className="flex justify-between mt-7 ">
                                        <div className="bg-primary px-2 md:py-5 py-3 md:font-semibold font-medium text-center w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={5} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="md:text-xl text-lg">
                                                YEARS OF EXPERIENCE
                                            </p>
                                        </div>
                                        <div className="bg-primary px-2 md:py-5 py-3 md:font-semibold font-medium  text-center w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={89} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="md:text-xl text-lg uppercase">
                                                Project Complete
                                            </p>
                                        </div>
                                        <div className="bg-primary px-2 md:py-5 py-3 md:font-semibold font-medium  text-center w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={22} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="md:text-xl text-lg max-sm:leading-6">
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
                        <Heading
                            title="Our Project"
                            subtitle="Crafting Tailored Business IT Solutions"
                        />

                        <div className="text-center">
                            <div className="flex justify-between flex-wrap gap-y-5">
                                <TiltAnimation
                                    color={"#00d7ff"}
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
                                    color={"#00d7ff"}
                                    bgcolor={
                                        "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
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
                                    color={"#00d7ff"}
                                    bgcolor={
                                        "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
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
                                            <time className="bg-[#007d58] py-2 text-white font-light text-sm px-5 rounded-3xl">
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
                                        "linear-gradient(80deg, rgba(3,91,125,1) 0%, rgba(0,133,80,1) 100%)"
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

                <section className="py-20 ">
                    <div className="container mx-auto px-2">
                        <Heading
                            title={"Testimonial"}
                            subtitle={
                                "Genesys Engage: Redefining Customer Contact"
                            }
                        />
                    </div>
                    <div className="container mx-auto px-2 Testimonial py-16">
                        <ReactSlick className="w-full h-full !flex !justify-center !items-end">
                            <div className="p-5 cursor-grab ">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-black bg-[#adc7a5]">
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
                                        <h3 className="text-justify mt-5 ">
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
                                    <div className="rounded-xl p-7 text-black bg-[#e0bb7b]">
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
                                        <h3 className="text-justify mt-5 ">
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
                                    <div className="rounded-xl p-7 text-black bg-[#89afb4]">
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
                                        <h3 className="text-justify mt-5 ">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div>
                            <div className="p-5 cursor-grab ">
                                <Reacttilt className="w-full h-full flex">
                                    <div className="rounded-xl p-7 text-black bg-[#adc7a5]">
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
                                        <h3 className="text-justify mt-5 ">
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
                                    <div className="rounded-xl p-7 text-black bg-[#e0bb7b]">
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
                                        <h3 className="text-justify mt-5 ">
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
                                    <div className="rounded-xl p-7 text-black bg-[#89afb4]">
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
                                        <h3 className="text-justify mt-5 ">
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
                        <Heading
                            title={"Our Blog"}
                            subtitle={"Latest Blog and Articles"}
                        />
                        <div className="lg:flex justify-between">
                            <AosAnimation
                                aosvalue={"zoom-in-up"}
                                className="lg:w-[49.5%] "
                            >
                                <div
                                    className=" p-3 pb-5 rounded-xl  cursor-pointer bg-[#4cc39430] h-full"
                                    id="hover_img"
                                >
                                    <figure>
                                        <Image
                                            src={blogimg}
                                            alt="Reacording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className=" rounded-xl"
                                        />
                                    </figure>

                                    <div className="text-white">
                                        <p className="bg-primary px-3 py-1 rounded-full text-sm inline-block mt-5 text-black">
                                            Development
                                        </p>
                                        <time className="block text-sm my-3 text-gray-400">
                                            15 Nov 2023
                                        </time>
                                        <h5 className="font-medium text-xl mb-1">
                                            Optimizing Laravel for Search
                                            Engines: Advanced SEO Strategies and
                                            Best Practices
                                        </h5>
                                        <p className="font-light mt-3 max-md:hidden">
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
                            <div className="lg:w-[49.5%] flex flex-wrap gap-y-4 justify-between max-lg:mt-5">
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="sm:w-[49%]"
                                >
                                    <div
                                        className=" p-3 pb-5 rounded-xl cursor-pointer  bg-[#4cc39430] h-fit"
                                        id="hover_img"
                                    >
                                        <figure>
                                            <Image
                                                src={blogimg}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                className=" rounded-xl"
                                            />
                                        </figure>
                                        <div className="text-white">
                                            <time className="block my-3 text-sm text-gray-400">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium ">
                                                Optimizing Laravel for Search
                                                Engines: Advanced SEO Strategies
                                                and Best Practices
                                            </h5>
                                        </div>
                                    </div>
                                </AosAnimation>
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="sm:w-[49%]"
                                >
                                    <div
                                        className=" p-3 pb-5 cursor-pointer rounded-xl  bg-[#4cc39430] h-fit"
                                        id="hover_img"
                                    >
                                        <figure>
                                            <Image
                                                src={blogimg}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                className=" rounded-xl"
                                            />
                                        </figure>
                                        <div className="text-white">
                                            <time className="block my-3 text-sm text-gray-400">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium ">
                                                Optimizing Laravel for Search
                                                Engines: Advanced SEO Strategies
                                                and Best Practices
                                            </h5>
                                        </div>
                                    </div>
                                </AosAnimation>
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="sm:w-[49%]"
                                >
                                    <div
                                        className=" p-3 pb-5 rounded-xl cursor-pointer  bg-[#4cc39430] h-fit"
                                        id="hover_img"
                                    >
                                        <figure>
                                            <Image
                                                src={blogimg}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                className=" rounded-xl"
                                            />
                                        </figure>
                                        <div className="text-white">
                                            <time className="block my-3 text-sm text-gray-400">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium ">
                                                Optimizing Laravel for Search
                                                Engines: Advanced SEO Strategies
                                                and Best Practices
                                            </h5>
                                        </div>
                                    </div>
                                </AosAnimation>
                                <AosAnimation
                                    aosvalue={"zoom-in-up"}
                                    className="sm:w-[49%]"
                                >
                                    <div
                                        className=" p-3 pb-5 rounded-xl cursor-pointer  bg-[#4cc39430] h-fit"
                                        id="hover_img"
                                    >
                                        <figure>
                                            <Image
                                                src={blogimg}
                                                alt="Reacording Image"
                                                priority
                                                placeholder="blur"
                                                quality={80}
                                                className=" rounded-xl"
                                            />
                                        </figure>
                                        <div className="text-white">
                                            <time className="block my-3 text-sm text-gray-400">
                                                15 Nov 2023
                                            </time>
                                            <h5 className="font-medium ">
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

                <Collaborate />
            </main>
        </>
    );
}
