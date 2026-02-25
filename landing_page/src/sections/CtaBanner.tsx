"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const CtaBanner: React.FC = () => {
    return (
        // Reduced section padding from py-32 to py-12
        <section className="py-12 md:py-24 px-6 sm:px-8 bg-white dark:bg-[#050505] transition-colors duration-700">
            <div className="max-w-7xl mx-auto">
                {/* Reduced internal padding from p-24 to p-12 */}
                <div className="relative overflow-hidden p-8 md:p-24 rounded-[2rem] shadow-xl bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] dark:from-slate-900/80 dark:to-slate-900/40 border border-white/10 transition-all duration-700">
                    {/* Background Accents - Scaled down */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white/5 blur-[60px]" />
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#FF6600]/10 blur-[60px]" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
                        <div className="flex-1 text-center md:text-left">
                            {/* Smaller Tag-style Sparkle */}
                            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                                <Sparkles className="text-orange-300 w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                                    Join the Community
                                </span>
                            </div>

                            {/* Reduced font size for better height management */}
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                                Ready to Deepen Your <br />
                                <span className="text-orange-300">
                                    Walk in Faith?
                                </span>
                            </h2>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-4">
                            <Link href="/Join" passHref>
                                <button className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-[#6A0DAD] dark:bg-[#6A0DAD] dark:text-white text-base font-black rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-[1.02] active:scale-95 whitespace-nowrap">
                                    Join Us Now
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            {/* Minimalist mini-features */}
                            <div className="flex gap-4 opacity-70">
                                <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                                    Free Materials
                                </span>
                                <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                                    •
                                </span>
                                <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                                    Weekly Study
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
