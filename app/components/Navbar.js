import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.svg";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="container mx-auto px-2 py-3 flex justify-between">
                    <Image width={150} src={logo} />
                    <ul className="text-white flex gap-x-10 items-center">
                        <li><Link href={"#"} className="narhoverAni">Profile<span></span></Link></li>
                        <li><Link href={"#"} className="narhoverAni">Services<span></span></Link></li>
                        <li><Link href={"#"} className="narhoverAni">Project<span></span></Link></li>
                        <li><Link href={"#"} className="narhoverAni">Blog<span></span></Link></li>
                    </ul>
                    <button className="px-7 py-2 bg-[#C2E812] text-white rounded-full">
                        Let's Talk
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
