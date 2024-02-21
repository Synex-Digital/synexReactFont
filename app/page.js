import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="pt-10 pb-12">
                <div className="container flex mx-auto px-2 h-[500px]">
                    <div className="flex items-center">
                        <h1 className="text-5xl text-white font-bold leading-snug">
                            Business IT Solutions:
                            <br />{" "}
                            <span className="text-primary">
                                Pioneering Excellence for
                            </span>
                            <br />
                            Your Technological Needs
                        </h1>
                    </div>
                    <div className="text-5xl text-white font-bold leading-snug ">
                        {/* <div className="contentdiv">
                            <h2>SynexDigital</h2>
                            <h2>SynexDigital</h2>
                        </div> */}
                    </div>
                </div>
            </section>
        </main>
    );
}
