"use client";
import React, { useState, useEffect } from "react";
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

// Keep your icon imports
import Men from "../assets/images/Men_icon.png";
import Women from "../assets/images/Women_icon.png";

interface Student {
    firstName: string; // Changed from name
    lastName: string; // Added
    department: string; // Changed from dept
    gender: "MALE" | "FEMALE"; // Match Prisma Enum
    subCircleNumber: number; // Changed from circle
    image?: string;
    batch: string; // Changed from yearBatch
}

const Members: React.FC = () => {
    const [openYear, setOpenYear] = useState<string | null>("2nd Year");
    const [memberData, setMemberData] = useState<Record<string, Student[]>>({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch("/api/members");
                const data: Student[] = await response.json();

                // Use 'batch' instead of 'yearBatch'
                const grouped = data.reduce(
                    (acc: Record<string, Student[]>, student) => {
                        const year = student.batch || "Unknown Batch";
                        if (!acc[year]) acc[year] = [];
                        acc[year].push(student);
                        return acc;
                    },
                    {},
                );

                setMemberData(grouped);
            } catch (error) {
                console.error("Error fetching members:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMembers();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center dark:bg-[#050505]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6A0DAD]"></div>
            </div>
        );
    }

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
                                                        a.firstName.localeCompare(
                                                            b.firstName,
                                                        ),
                                                    )
                                                    .map((student, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            // ... keep your existing motion props
                                                            className="grid grid-cols-12 gap-4 p-4 rounded-xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-transparent hover:border-[#6A0DAD]/30 transition-all items-center group"
                                                        >
                                                            <div className="col-span-1 font-black text-gray-400 group-hover:text-orange-500 transition-colors">
                                                                {idx + 1}.
                                                            </div>

                                                            <div className="col-span-4 flex items-center gap-3">
                                                                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 dark:border-white/10 group-hover:border-[#6A0DAD] transition-all">
                                                                    <Image
                                                                        src={
                                                                            student.image || // Use the new field name
                                                                            (student.gender ===
                                                                            "MALE"
                                                                                ? Men
                                                                                : Women)
                                                                        }
                                                                        alt={`${student.firstName} ${student.lastName}`}
                                                                        fill
                                                                        sizes="40px" // Good practice for performance
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                                <span className="font-bold text-gray-800 dark:text-gray-200 truncate">
                                                                    {/* FIXED: Using firstName and lastName */}
                                                                    {
                                                                        student.firstName
                                                                    }{" "}
                                                                    {
                                                                        student.lastName
                                                                    }
                                                                </span>
                                                            </div>

                                                            <div className="col-span-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                                {/* FIXED: Using department */}
                                                                {
                                                                    student.department
                                                                }
                                                            </div>

                                                            <div className="col-span-2 text-center">
                                                                <span
                                                                    className={twMerge(
                                                                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                                                                        /* FIXED: Matching "MALE" Enum */
                                                                        student.gender ===
                                                                            "MALE"
                                                                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                                                            : "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
                                                                    )}
                                                                >
                                                                    {student.gender ===
                                                                    "MALE"
                                                                        ? "Male"
                                                                        : "Female"}
                                                                </span>
                                                            </div>

                                                            <div className="col-span-2 text-center">
                                                                <span className="bg-slate-100 dark:bg-white/5 text-gray-800 dark:text-white px-4 py-1.5 rounded-lg font-black text-sm border border-gray-200 dark:border-white/10 group-hover:border-orange-500/50 transition-colors">
                                                                    {/* FIXED: Using subCircleNumber */}
                                                                    {
                                                                        student.subCircleNumber
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
