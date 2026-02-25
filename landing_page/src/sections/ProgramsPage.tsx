"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Users,
    Star,
    GraduationCap,
  
} from "lucide-react";
import Tag from "@/components/Tag";

// Reuse your existing images or paths
import manuscriptImg from "../assets/images/manuscript.png";
import scriptureImg from "../assets/images/scripture.png";
import weeklyImg from "../assets/images/weekly.png";
import specialImg from "../assets/images/special.png";

const programs = [
    {
        title: "Manuscript Study",
        tag: "Deep Dive",
        icon: <BookOpen size={20} />,
        description:
            "An intensive 3-week immersion. We remove the verse numbers and chapters, looking at the text in its rawest form to discover the author's original intent without modern distractions.",
        image: manuscriptImg,
        stats: {
            duration: "3 Weeks",
            capacity: "150 Students",
            frequency: "Every Semester",
        },
    },
    {
        title: "Scripture Day",
        tag: "Annual Event",
        icon: <Star size={20} />,
        description:
            "A celebration of the Word. This program traces the history of the Bible, from the original papyrus to the modern translations we hold today. Includes workshops on canonization.",
        image: scriptureImg,
        stats: {
            duration: "1 Day",
            capacity: "500+ Attendees",
            frequency: "Yearly",
        },
    },
    {
        title: "Friday Regular BS",
        tag: "Core Community",
        icon: <Users size={20} />,
        description:
            "Our weekly heartbeat. Every Friday, we gather for systematic, book-by-book teaching. It’s where deep theology meets practical application in a warm community setting.",
        image: weeklyImg,
        stats: { duration: "2 Hours", capacity: "Open", frequency: "Weekly" },
    },
    {
        title: "The Recitation Program",
        tag: "Memorization",
        icon: <GraduationCap size={20} />,
        description:
            "Writing the Word on the heart. We focus on the discipline of memorizing entire chapters and performing public recitations to encourage the body of Christ.",
        image: specialImg, // Replace with branding/recitation image
        stats: {
            duration: "Ongoing",
            capacity: "30 Slots",
            frequency: "Monthly",
        },
    },
];

const ProgramsSection: React.FC = () => {
    return (
        <main className="bg-white dark:bg-[#050505] transition-colors duration-700">
            {/* Header Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Tag className="mb-6 mx-auto">Our Curriculum</Tag>
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Pathways to{" "}
                        <span className="text-[#6A0DAD]">
                            Spiritual Mastery
                        </span>
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        From intensive workshops to weekly fellowships, our
                        programs are designed to build a robust, scriptural
                        foundation for every student.
                    </p>
                </div>
            </section>

            {/* Zig-Zag Programs List */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                    {programs.map((prog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col gap-12 items-center ${
                                index % 2 === 0
                                    ? "md:flex-row"
                                    : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#6A0DAD]/10 to-orange-500/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative h-[300px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl">
                                        <Image
                                            src={prog.image}
                                            alt={prog.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="flex items-center gap-3 text-[#FF6600] font-bold text-xs uppercase tracking-[0.2em]">
                                    <span className="p-2 bg-orange-50 dark:bg-orange-500/10 rounded-lg">
                                        {prog.icon}
                                    </span>
                                    {prog.tag}
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                    {prog.title}
                                </h2>

                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    {prog.description}
                                </p>

                                {/* Mini Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100 dark:border-white/5">
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase font-black mb-1">
                                            Duration
                                        </p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                            {prog.stats.duration}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase font-black mb-1">
                                            Capacity
                                        </p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                            {prog.stats.capacity}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase font-black mb-1">
                                            Frequency
                                        </p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                            {prog.stats.frequency}
                                        </p>
                                    </div>
                                </div>

                                <button className="inline-flex items-center gap-2 text-[#6A0DAD] dark:text-purple-400 font-bold hover:gap-4 transition-all">
                                    Learn more about this program{" "}
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-50 dark:bg-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                        Ready to deepen your faith?
                    </h2>
                    <button className="bg-[#6A0DAD] text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all">
                        Register for Next Semester
                    </button>
                </div>
            </section>
        </main>
    );
};

export default ProgramsSection;
