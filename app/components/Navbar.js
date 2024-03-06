import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.svg";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="container mx-auto px-2 py-3 flex justify-between">
                    <Link href={"/"}>
                        <Image
                            priority={true}
                            alt="synex logo"
                            width={140}
                            className="cursor-pointer"
                            src={logo}
                        />
                    </Link>
                    <ul className="text-white flex gap-x-10 items-center">
                        <li>
                            <Link href={"/"} className="narhoverAni">
                                Home<span></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services"} className="narhoverAni">
                                Services<span></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/project"} className="narhoverAni">
                                Project<span></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"} className="narhoverAni">
                                Blog<span></span>
                            </Link>
                        </li>
                    </ul>
                    <button className="px-7 py-2 bg-primary hover:bg-[#bcdd2d] font-medium text-black rounded-lg">
                        Let's Talk
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
