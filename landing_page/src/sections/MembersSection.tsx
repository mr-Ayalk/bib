"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    GraduationCap,
    ChevronDown,
    Hash,
    UserCircle,
    Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Men from "../assets/images/Men_icon.png";

import Women from "../assets/images/Women_icon.png";
// Updated Data with Gender and Sub-Circle

import sis from "../assets/images/SisayTadewos.jpg";
import seme from "../assets/images/semalign_mark.jpg";
import bemni from "../assets/images/Beimnet-Abdi.jpg";
import mase from "../assets/images/Masamo-Mathewos.jpg";
import fenu from "../assets/images/fenet_bekele.jpg";
import teme from "../assets/images/TEMESGEN-TAMIRAT.jpg";
const memberData = {
    "2nd Year": [
        {
            name: "Fenet Bekele",
            dept: "Software Engineering",
            gender: "F",
            circle: 1,
            photo: fenu,
        },
        {
            name: "Beti Solomon",
            dept: "Architecture",
            gender: "F",
            circle: 3,
            photo: Women,
        },
    ],
    "3rd Year": [
        {
            name: "Beimnet-Abdi",
            dept: "Chemical Engineering",
            gender: "F",
            circle: 2,
            photo: bemni,
        },
        {
            name: "TEMESGEN TAMIRAT",
            dept: "Statistics",
            gender: "M",
            circle: 3,
            photo: teme,
        },

        {
            name: "Martha Desta",
            dept: "Mechanical Engineering",
            gender: "F",
            circle: 2,
            photo: Women,
        },
    ],
    "4th Year": [
        {
            name: "Masamo-Mathewos",
            dept: "Mechanical Engineering",
            gender: "M",
            circle: 1,
            photo: mase,
        },
        {
            name: "Sisay Tadewos",
            dept: "Software Engineering",
            gender: "M",
            circle: 3,
            photo: sis,
        },
    ],
    "5th Year": [
        {
            name: "Semalign Markos",
            dept: "Electrical Engineering(Communication)",
            gender: "M",
            circle: 3,
            photo: seme,
        },

        {
            name: "Xolani Mamo",
            dept: "IT Support",
            gender: "M",
            circle: 2,
            photo: Men,
        },
    ],
};

const Members: React.FC = () => {
    const [openYear, setOpenYear] = useState<string | null>("2nd Year");

    return (
        <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">
                        Our <span className="text-[#6A0DAD]">Members</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto italic">
                        `Rooted. Growing. Together.` — Organizing the body of
                        Christ.
                    </p>
                </div>

                {/* Year Batches */}
                <div className="space-y-8">
                    {Object.entries(memberData).map(([year, students]) => (
                        <div
                            key={year}
                            className="border border-gray-100 dark:border-white/5 rounded-[2rem] overflow-hidden bg-slate-50/30 dark:bg-white/5 backdrop-blur-sm shadow-xl"
                        >
                            {/* Year Toggle Header */}
                            <button
                                onClick={() =>
                                    setOpenYear(openYear === year ? null : year)
                                }
                                className="w-full px-8 py-7 flex items-center justify-between text-left hover:bg-white dark:hover:bg-white/5 transition-all"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-gradient-to-br from-[#6A0DAD] to-orange-500 text-white rounded-2xl shadow-lg">
                                        <GraduationCap size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                                            {year}
                                        </h3>
                                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                                            {students.length} Registered Members
                                        </span>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={twMerge(
                                        "transition-transform duration-500 text-gray-400",
                                        openYear === year &&
                                            "rotate-180 text-[#6A0DAD]",
                                    )}
                                />
                            </button>

                            {/* Members Table Section */}
                            <AnimatePresence>
                                {openYear === year && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-x-auto"
                                    >
                                        <div className="px-8 pb-10 min-w-[800px]">
                                            {/* Table Headings */}
                                            <div className="grid grid-cols-12 gap-4 py-4 mb-4 border-b border-gray-200 dark:border-white/10 text-[#6A0DAD] dark:text-orange-400 font-black text-xs uppercase tracking-widest">
                                                <div className="col-span-1 flex items-center gap-2">
                                                    <Hash size={14} /> No.
                                                </div>
                                                <div className="col-span-4 flex items-center gap-2">
                                                    <UserCircle size={14} />{" "}
                                                    Full Name
                                                </div>
                                                <div className="col-span-3">
                                                    Department
                                                </div>
                                                <div className="col-span-2 text-center">
                                                    Gender
                                                </div>
                                                <div className="col-span-2 text-center flex items-center justify-center gap-2">
                                                    <Users size={14} />{" "}
                                                    Sub-Circle
                                                </div>
                                            </div>

                                            {/* Student Rows */}
                                            <div className="space-y-2">
                                                {students
                                                    .sort((a, b) =>
                                                        a.name.localeCompare(
                                                            b.name,
                                                        ),
                                                    )
                                                    .map((student, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{
                                                                x: -20,
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                x: 0,
                                                                opacity: 1,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    idx * 0.03,
                                                            }}
                                                            className="grid grid-cols-12 gap-4 p-4 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-transparent hover:border-[#6A0DAD]/30 transition-all items-center group"
                                                        >
                                                            {/* Number */}
                                                            <div className="col-span-1 font-black text-gray-400 group-hover:text-orange-500 transition-colors">
                                                                {idx + 1}.
                                                            </div>

                                                            {/* Name + Photo */}
                                                            <div className="col-span-4 flex items-center gap-3">
                                                                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/10 group-hover:border-[#6A0DAD] transition-all">
                                                                    <Image
                                                                        src={
                                                                            student.photo
                                                                        }
                                                                        alt={
                                                                            student.name
                                                                        }
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                                <span className="font-bold text-gray-800 dark:text-gray-200 truncate">
                                                                    {
                                                                        student.name
                                                                    }
                                                                </span>
                                                            </div>

                                                            {/* Dept */}
                                                            <div className="col-span-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                                {student.dept}
                                                            </div>

                                                            {/* Gender */}
                                                            <div className="col-span-2 text-center">
                                                                <span
                                                                    className={twMerge(
                                                                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                                                                        student.gender ===
                                                                            "M"
                                                                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                                                            : "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
                                                                    )}
                                                                >
                                                                    {student.gender ===
                                                                    "M"
                                                                        ? "Male"
                                                                        : "Female"}
                                                                </span>
                                                            </div>

                                                            {/* Sub-Circle */}
                                                            <div className="col-span-2 text-center">
                                                                <span className="bg-slate-100 dark:bg-white/5 text-gray-800 dark:text-white px-4 py-1.5 rounded-lg font-black text-sm border border-gray-200 dark:border-white/10 group-hover:border-orange-500/50 transition-colors">
                                                                    {
                                                                        student.circle
                                                                    }
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Members;
