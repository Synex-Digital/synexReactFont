import Image from "next/image";
import Link from "next/link";
import Reacttilt from "./components/Reacttilt";
import Head from "next/head";
import Script from "next/script";
import Swiperslider from "./components/Swiperslider";

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
                        <div className="flex justify-between gap-y-5 flex-wrap">
                            {/* <div className="w-[32%]">
                                <Reacttilt>
                                    <div className="text-black h-64 bg-[#edd6cf] rounded-xl p-7">
                                        <h2 className="text-center text-2xl font-semibold">
                                            Website Development
                                        </h2>
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
                            <div className="w-[32%]">
                                <Reacttilt>
                                    <div className="text-black h-64 bg-[#edd6cf] rounded-xl p-7">
                                        <h2 className="text-center text-2xl font-semibold">
                                            Website Development
                                        </h2>
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
                            <div className="w-[32%]">
                                <Reacttilt>
                                    <div className="text-black h-64 bg-[#edd6cf] rounded-xl p-7">
                                        <h2 className="text-center text-2xl font-semibold">
                                            Website Development
                                        </h2>
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
                            <div className="w-[32%]">
                                <Reacttilt>
                                    <div className="text-black h-64 bg-[#edd6cf] rounded-xl p-7">
                                        <h2 className="text-center text-2xl font-semibold">
                                            Website Development
                                        </h2>
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
                            <div className="w-[32%]">
                                <Reacttilt>
                                    <div className="text-black h-64 bg-[#edd6cf] rounded-xl p-7">
                                        <h2 className="text-center text-2xl font-semibold">
                                            Website Development
                                        </h2>
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
                            <div className="w-[32%]">
                                <Reacttilt>
                                    <div className="text-black h-64 bg-[#edd6cf] rounded-xl p-7">
                                        <h2 className="text-center text-2xl font-semibold">
                                            Website Development
                                        </h2>
                                        <h3 className="text-justify mt-5 font-medium">
                                            Synex Digital develops dynamic
                                            websites with React on the front end
                                            and PHP-Laravel on the back end.
                                            Strengthen your digital identity
                                            with our creative web...
                                        </h3>
                                    </div>
                                </Reacttilt>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section>
                    <Swiperslider>
                        <div>
                            <Reacttilt>
                                <div className="text-black h-64 bg-[#edd6cf] rounded-xl p-7">
                                    <h2 className="text-center text-2xl font-semibold">
                                        Website Development
                                    </h2>
                                    <h3 className="text-justify mt-5 font-medium">
                                        Synex Digital develops dynamic websites
                                        with React on the front end and
                                        PHP-Laravel on the back end. Strengthen
                                        your digital identity with our creative
                                        web...
                                    </h3>
                                </div>
                            </Reacttilt>
                        </div>
                    </Swiperslider>
                </section>
                <section className="h-96 bg-transparent">

                </section>
            </main>
        </>
    );
}
