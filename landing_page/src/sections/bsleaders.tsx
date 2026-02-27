"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// Replace these with your actual local paths
import leaderImg1 from "../assets/images/leaders1.png";
import leaderImg2 from "../assets/images/leaders2.png";
import leaderImg3 from "../assets/images/leaders3.png";

const LEADERS_DATA = [
    {
        id: 1,
        image: leaderImg1,
        title: "Guided by Grace",
        description:
            "Our core leadership team at 5K Bible Study is dedicated to fostering a space where every student can encounter the life-transforming power of the Word.",
        role: "Core Committee 2025/26",
    },
    {
        id: 2,
        image: leaderImg2,
        title: "Servant Leadership",
        description:
            "Beyond just organizing events, our leaders are committed to walking alongside students in their spiritual journey, providing mentorship and prayerful support.",
        role: "Program Coordinators",
    },
    {
        id: 3,
        image: leaderImg3,
        title: "A Growing Community",
        description:
            "We believe in equipping the next generation of leaders to carry the message of hope from the campus to the world.",
        role: "Outreach & Vision Team",
    },
];

export default function BSLeaders() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % LEADERS_DATA.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = LEADERS_DATA[currentIndex];

    return (
        <section className="py-24 bg-slate-50 dark:bg-[#080808] transition-colors duration-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                        Meet the{" "}
                        <span className="text-[#6A0DAD] dark:text-purple-400">
                            Leaders
                        </span>
                    </h2>
                    <div className="h-1.5 w-24 bg-orange-500 rounded-full" />
                </div>

                <div className="relative bg-white dark:bg-slate-900/40 rounded-[3rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col lg:flex-row items-center"
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative">
                                <Image
                                    src={current.image}
                                    alt="Leadership Team"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 p-8 lg:p-16">
                                <Quote className="text-orange-500 mb-6 w-12 h-12 opacity-50" />

                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4"
                                >
                                    {current.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8"
                                >
                                    {current.description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="h-px w-8 bg-[#6A0DAD] dark:bg-purple-400" />
                                    <span className="text-sm font-black uppercase tracking-widest text-[#6A0DAD] dark:text-purple-400">
                                        {current.role}
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Indicators */}
                    <div className="absolute bottom-8 right-8 flex gap-2">
                        {LEADERS_DATA.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${
                                    i === currentIndex
                                        ? "w-8 bg-[#6A0DAD]"
                                        : "w-2 bg-slate-300 dark:bg-slate-700"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
