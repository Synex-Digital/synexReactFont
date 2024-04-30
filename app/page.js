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
import getAllServices from "@/lio/getAllServices";

export default async function Home() {
    const data_services = await getAllServices();

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
                                Welcome to Synex Digital, your corporate IT
                                partner. As a Digital Solutions Expert, we are
                                excited to help you through our extensive
                                variety of services to elevate your business in
                                the ever-changing digital landscape. Synex
                                Digital's commercial IT solutions reflect our
                                dedication to excellence. We are your one-stop
                                technological solution supplier, meeting your
                                business's particular demands with precision and
                                competence.
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
                            <ReactSlick className="w-full h-full ">
                                {data_services.services.map((item, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer !w-[95%] !mx-auto !block py-7"
                                    >
                                        <Reacttilt>
                                            <Link
                                                href={`/services/${item.slugs}`}
                                            >
                                                <div className=" rounded-xl xl:p-7 lg:p-6 md:p-5 p-4 bg-[#c0dbe2]">
                                                    <h2 className="text-center text-3xl font-semibold">
                                                        {item.title}
                                                    </h2>
                                                    <h4 className="text-justify mt-5 font-medium">
                                                        {item.description}
                                                    </h4>
                                                    <Image
                                                        width={250}
                                                        height={250}
                                                        alt="Web Image"
                                                        quality={80}
                                                        src={`https://sd-admin-backend.synexdigital.com/uploads/service/${item.thumbnail}`}
                                                        className="mx-auto p-5"
                                                    />
                                                </div>
                                            </Link>
                                        </Reacttilt>
                                    </div>
                                ))}
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
                                    <div className="font-semibold max-lg:font-medium text-white lg:mb-5 mb-3 xl:text-4xl lg:text-3xl text-2xl">
                                        Navigating the IT Landscape with
                                        Precision
                                    </div>
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
                                    <div className="flex max-sm:flex-col max-sm:gap-y-5 justify-between mt-7 ">
                                        <div className="border border-primary text-primary px-2 md:py-5 py-3 max-sm:py-5 md:font-semibold font-medium text-center sm:w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={5} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="md:text-xl text-lg">
                                                YEARS OF EXPERIENCE
                                            </p>
                                        </div>
                                        <div className="border border-primary text-primary px-2 md:py-5 py-3 md:font-semibold font-medium  text-center max-sm:py-5 sm:w-[32%] rounded-xl">
                                            <div className="flex gap-1 text-2xl items-center justify-center mb-2">
                                                <SimpleHook endtime={89} />
                                                <span>+</span>{" "}
                                            </div>
                                            <p className="md:text-xl text-lg uppercase">
                                                Project Complete
                                            </p>
                                        </div>
                                        <div className="border border-primary text-primary px-2 md:py-5 py-3 md:font-semibold font-medium  text-center max-sm:py-5 sm:w-[32%] rounded-xl">
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
                                            alt="Recording Image"
                                            priority
                                            placeholder="blur"
                                            quality={80}
                                            className="rounded-xl object-cover"
                                        />
                                        <div className="p-3 pt-8 text-center">
                                            <time className="bg-[#007d58] text-white font-light text-sm py-2 px-5 rounded-3xl">
                                                28 sep 2023
                                            </time>
                                            <div className="text-white text-xl font-semibold text-center mt-5 mb-3">
                                                Nugor Tech - Company portfolio
                                            </div>
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
                                        <div className="text-justify mt-5 ">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </div>
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
                                        <div className="text-justify mt-5 ">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </div>
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
                                        <div className="text-justify mt-5 ">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </div>
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
                                        <div className="text-justify mt-5 ">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </div>
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
                                        <div className="text-justify mt-5 ">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </div>
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
                                        <div className="text-justify mt-5 ">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </div>
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
