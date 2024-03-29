"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { InlineWidget } from "react-calendly";
import Modal from "react-modal";

const Collaborate = () => {
    const customStyles = {
        content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "90vh",
            padding: "50px",
        },
        overlay: { zIndex: 1000 },
    };
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section className="py-20 bg-[#1d2934]">
            <div className="container mx-auto px-2">
                <div className="text-white text-center">
                    <h6 className="lg:text-3xl text-2xl font-semibold">
                        Ready to Collaborate with us?
                    </h6>
                    <p className="font-light mt-5">
                        Let's unite and craft something truly remarkable. We're
                        excited to collaborate and bring visionary ideas to
                        life.
                    </p>
                </div>
                <div className="sm:flex gap-x-5 justify-center mt-10">
                    <Link
                        href={"/contact"}
                        className="px-7 py-3 border border-primary text-white hover:shadow hover:shadow-primary transition duration-300 ease-in-out flex items-center gap-x-3  max-sm:w-fit max-sm:mx-auto"
                    >
                        Contact Us
                        <span>
                            <GoArrowRight className="text-2xl" />
                        </span>
                    </Link>

                    <button
                        className="px-7 py-3 border border-primary bg-primary text-black hover:shadow hover:shadow-primary transition duration-300 ease-in-out flex items-center gap-x-3  max-sm:w-fit max-sm:mx-auto max-sm:mt-5"
                        onClick={openModal}
                    >
                        Schedule Meeting
                        <span>
                            <GoArrowUpRight className="text-2xl" />
                        </span>
                    </button>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <InlineWidget url="https://calendly.com/synexdigital" />
            </Modal>
        </section>
    );
};

export default Collaborate;
