"use client";
import { useState, useEffect } from "react";
import logoImage from "../assets/images/eyohalogonew.png";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/Services" },
    { label: "Portfolio", href: "/Portfolio" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
];

export default function Navbar2() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const desktopMaxWidth = "max-w-[1233px]";

    const navbarClasses = scrolled
        ? "bg-black/30 backdrop-blur-md shadow-lg"
        : "bg-white text-black";

    return (
        <section
            className={`fixed top-0 left-0 w-full py-[24px] z-50 transition-all duration-300 bg-white text-black ${navbarClasses}`}
        >
            <div className={`mx-auto w-[96%] sm:w-[94%] ${desktopMaxWidth}`}>
                <div className="flex justify-between items-center h-10 ml-7">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2 h-[68px] w-[229.19px]">
                        <div className="flex items-center justify-center rounded-sm">
                            <Image
                                src={logoImage}
                                alt="Eyoha Digitals Logo"
                                width={88}
                                height={88}
                                className="object-contain "
                            />
                        </div>
                        <Link
                            href="/"
                            className="text-white text-lg font-bold font-poppins tracking-wider whitespace-nowrap"
                        >
                            Eyoha Digitals
                        </Link>
                    </div>

                    {/* Desktop Navigation - UPDATED to use <Link> */}
                    <div className="hidden md:flex items-center">
                        <nav className="flex space-x-8 font-medium text-black text-sm">
                            {navLinks.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.label}
                                    className="hover:text-purple-300 transition duration-150"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <Link href="#Contact">
                            <button
                                className="bg-[#6A0DAD] text-white text-sm font-medium h-10 px-6 
                                hover:bg-[#7b1fa2] transition duration-200 shadow-lg w-[132.86px] rounded-md"
                            >
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none p-2"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="black"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16m-7 6h7"
                                    }
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu - UPDATED to use <Link> */}
            {isOpen && (
                <div
                    className={`md:hidden bg-purple-900 mx-auto w-[96%] sm:w-[94%] p-4 rounded-b-lg mt-2`}
                >
                    <nav className="flex flex-col space-y-2 text-white">
                        {navLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.label}
                                className="py-2 px-2 rounded-md hover:bg-purple-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="#Contact" onClick={() => setIsOpen(false)}>
                            <button className="w-full bg-purple-700 text-white py-2 mt-2 rounded-md hover:bg-purple-600">
                                Get Started
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </section>
    );
}
