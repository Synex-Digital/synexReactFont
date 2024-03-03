import Image from "next/image";
import Link from "next/link";
import Reacttilt from "./components/Reacttilt";
import recordimg from "@/public/assets/thumbBody.jpg";
import webicon from "@/public/assets/webicon.png";
import SimpleHook from "./components/SimpleHook";
import ReactSlick from "./components/ReactSlick";

export default function Home() {
    return (
        <>
            <main>
                <section className="pt-10 pb-12">
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
                                className="bg-primary py-2 px-4 rounded-full text-lg font-medium"
                            >
                                Explore Our Service
                            </Link>
                        </div>
                        <div className="text-5xl text-white font-bold leading-snug ">
                            {/* <div className="contentdiv">
                            <h2>SynexDigital</h2>
                            <h2>SynexDigital</h2>
                        </div> */}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto px-2">
                        <div>
                            <h4 className="text-primary text-3xl font-semibold text-center">
                                Our Service
                            </h4>
                            <h4 className="font-medium text-2xl text-center text-white mt-5 mb-10">
                                Elevating Your Business with Innovative Services
                            </h4>
                        </div>
                        <div className="flex justify-between gap-y-5 flex-wrap ">
                            <ReactSlick>
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
                                            />
                                        </div>
                                    </Reacttilt>
                                </div>
                            </ReactSlick>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-2">
                        <h4 className="text-primary text-3xl font-semibold text-center">
                            Our Records
                        </h4>
                        <div className="flex justify-between">
                            <div className="w-[48%] mt-10">
                                <Image
                                    src={recordimg}
                                    alt="Reacording Image"
                                    priority
                                    placeholder="blur"
                                    quality={80}
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="w-[48%]">
                                <h5 className="font-semibold text-white mt-10 mb-5 text-4xl">
                                    Navigating the IT Landscape with Precision
                                </h5>
                                <p className="text-white leading-7">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cumque animi magni
                                    dignissimos est molestias, nihil officia
                                    nemo consequuntur neque iusto ipsa illo
                                    corrupti quam quasi. Aut, eaque voluptatum.
                                    Amet similique nihil ducimus eius nobis?
                                    Magni architecto corporis praesentium
                                    facere? In debitis libero quasi magni? Quam
                                    aut, laborum ab expedita pariatur, quos
                                    minus nulla autem enim rerum neque sit
                                    distinctio. Rerum, voluptatem asperiores
                                    maiores ea inventore temporibus fuga, quia
                                    magnam corporis nam itaque quas
                                    consequuntur, dicta nemo cum numquam ad
                                    deleniti nobis eos obcaecati maxime? Sequi
                                    aliquid, repudiandae doloribus eos molestias
                                    rerum necessitatibus cupiditate enim, rem
                                    corrupti dolor quisquam doloremque autem!
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
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto px-2">
                        <div>
                            <h4 className="text-primary text-3xl font-semibold text-center">
                                Our Project
                            </h4>
                            <h4 className="font-medium text-2xl text-center text-white mt-5 mb-10">
                                Crafting Tailored Business IT Solutions
                            </h4>
                        </div>
                        <div></div>
                    </div>
                </section>
            </main>
        </>
    );
}
