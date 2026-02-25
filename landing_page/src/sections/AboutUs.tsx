"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import aboutImage from "../assets/images/abt.jpg";
import { Users, Target } from "lucide-react";

const AboutSection: React.FC = () => {
    return (
        // Reduced py-16/24 to py-12/16
        <section className="relative py-12 md:py-16 bg-slate-50 dark:bg-[#080808] transition-colors duration-700 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-500/5 dark:bg-orange-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header - Centered with reduced mb-10 */}
                <div className="max-w-3xl mx-auto text-center mb-10 flex flex-col items-center">
                    <Tag className="mb-4 scale-75">About Our Team</Tag>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase">
                        Who <span className="text-[#6A0DAD]">We Are</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        Rooted in Truth, serving as one body within the larger 5
                        Killo campus ministry.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left: Content Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-[2rem] shadow-xl shadow-purple-500/5 border border-slate-100 dark:border-white/5">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                One Team, One Mission
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                                The **5K Bible Study Team** is a specialized
                                ministry under the
                                <span className="text-[#6A0DAD] font-bold">
                                    {" "}
                                    5 Killo Main Fellowship
                                </span>
                                . We are one of Eight core teams dedicated to
                                spiritual formation.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-[#6A0DAD] rounded-lg">
                                        <Users size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase">
                                            Community
                                        </h4>
                                        <p className="text-[10px] text-slate-500">
                                            Vibrant campus life.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                                        <Target size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase">
                                            Mastery
                                        </h4>
                                        <p className="text-[10px] text-slate-500">
                                            Inductive tools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="bg-gradient-to-r from-[#6A0DAD] to-[#FF6600] text-white px-8 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg transition-all active:scale-95">
                            Learn More About 5 Killo Fellowship
                        </button>
                    </motion.div>

                    {/* Right: Stylized Image - Switched aspect to 16/9 to take less vertical space */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group lg:mt-0 mt-8"
                    >
                        <div className="relative overflow-hidden rounded-[2rem] border-4 border-white dark:border-slate-800 shadow-xl aspect-video">
                            <Image
                                src={aboutImage}
                                alt="5K Bible Study Group"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Smaller Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl font-black text-[#6A0DAD]">
                                    8
                                </div>
                                <div className="text-[8px] font-bold uppercase tracking-tighter text-slate-500 leading-tight">
                                    Core Teams of
                                    <br />5 Killo Fellowship
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
