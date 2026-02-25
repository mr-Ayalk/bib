"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import bibleLogo from "../assets/images/weekly.png";
// Import your other images here
import secondImage from "../assets/images/bs_banner.png";
import thirdImage from "../assets/images/manuscript.png";

const SLIDES = [
    {
        id: 1,
        title: "Deep Roots.",
        highlight: "Infinite Growth.",
        description:
            "Join a community of 500+ students dedicated to mastering the Word through structured, scripture-driven study designed for modern life over the past years.",
        image: bibleLogo,
        tag: "Academic Excellence in Scripture",
    },
    {
        id: 2,
        title: "Faith Driven.",
        highlight: "Purpose Led.",
        description:
            "Discover your spiritual gifts and learn how to apply biblical truths to your academic and professional journey in a supportive environment.",
        image: secondImage, // Replace with your second image
        tag: "Transformative Fellowship",
    },
    {
        id: 3,
        title: "Global Vision.",
        highlight: "Local Impact.",
        description:
            "Equipping the next generation of leaders to carry the message of grace from the campus of Addis Ababa to the ends of the earth.",
        image: thirdImage, // Replace with your third image
        tag: "Mission & Outreach",
    },
];

export default function Hero() {
    const [theme, setTheme] = useState<string>("light");
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto-slide every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle(
            "dark",
            savedTheme === "dark",
        );
    }, []);

    const current = SLIDES[activeSlide];

    return (
        <section className="relative w-full min-h-screen flex flex-col bg-slate-50 dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
            <div className="absolute top-0 w-full z-50">
                <Navbar theme={theme} setTheme={setTheme} />
            </div>

            {/* MAIN ARCHITECTURAL CONTAINER */}
            <div className="relative mt-24 mx-auto w-[96%] lg:w-[98%] h-[750px] lg:h-[550px] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl bg-[#4C0B81]">
                {/* SLIDING CONTENT WRAPPER */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 flex flex-col lg:flex-row"
                    >
                        {/* LEFT SIDE: Image Section */}
                        <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
                            <motion.div
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={current.image}
                                    alt="5K Bible Study"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/20 lg:bg-transparent" />
                        </div>

                        {/* RIGHT SIDE: Content Section */}
                        <div className="relative w-full lg:w-1/2 h-full bg-[#4C0B81] dark:bg-[#1A042D] flex items-center px-8 lg:px-20 py-12">
                            <div className="hidden lg:block absolute top-0 left-0 h-full w-32 -translate-x-full overflow-hidden">
                                <div className="h-full w-[200%] bg-[#4C0B81] dark:bg-[#1A042D] rounded-l-[100%]" />
                            </div>

                            <div className="relative z-10 w-full max-w-xl">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                                >
                                    <Sparkles size={12} />
                                    <span>{current.tag}</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8"
                                >
                                    {current.title} <br />
                                    <span className="text-orange-500">
                                        {current.highlight}
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-purple-100/80 text-lg md:text-xl font-medium leading-relaxed mb-10"
                                >
                                    {current.description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-wrap gap-5 mb-12"
                                >
                                    <Link
                                        href="/Contact"
                                        className="w-full sm:w-auto"
                                    >
                                        <button className="bg-white text-[#4C0B81] font-bold px-10 py-5 w-full rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all hover:bg-slate-100 active:scale-95">
                                            Start Your Journey{" "}
                                            <ArrowRight size={20} />
                                        </button>
                                    </Link>

                                    <Link
                                        href="/Materials"
                                        className="w-full sm:w-auto"
                                    >
                                        <button className="px-10 py-5 w-full rounded-xl border-2 border-white text-white font-bold bg-transparent hover:bg-white/10 transition-all active:scale-95">
                                            Explore Materials
                                        </button>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full border-2 border-[#4C0B81] bg-slate-200"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm font-semibold text-purple-200/70">
                                        <span className="text-white font-bold">
                                            70+
                                        </span>{" "}
                                        Students enrolled this semester
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* SLIDER INDICATORS (Interactive) */}
            <div className="py-8 flex justify-center gap-3">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-2.5 transition-all duration-500 rounded-full ${
                            i === activeSlide
                                ? "w-8 bg-[#4C0B81]"
                                : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
