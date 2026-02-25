"use client";
import React from "react";
import { Heart, Users, ArrowRight } from "lucide-react";

const CtaSection: React.FC = () => {
    return (
        // Reduced section padding from py-12/24 to py-8/12
        <section className="px-6 py-8 md:py-12 bg-white dark:bg-[#050505] transition-colors duration-500">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#6A0DAD] to-[#4B0082] dark:from-slate-900/80 dark:to-slate-900/40 border border-white/5 p-8 md:p-12 relative shadow-2xl">
                {/* Decorative Background Glow - Scaled down */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
                    <div className="max-w-2xl text-center lg:text-left">
                        {/* Smaller Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            <Users size={12} />
                            <span>Action / Evangelical Team</span>
                        </div>

                        {/* Tightened Heading */}
                        <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl leading-[1.1]">
                            Partner With Our <br />
                            <span className="text-orange-400">
                                Mission of Grace
                            </span>
                        </h2>

                        <p className="text-base md:text-lg text-purple-100/80 dark:text-gray-400 mb-2 font-medium">
                            Join our weekly{" "}
                            <span className="text-white font-bold">
                                General Fellowship Outreach
                            </span>
                            . Your support fuels these life-changing encounters.
                        </p>

                        <p className="text-[10px] font-bold text-orange-200/70 uppercase tracking-widest">
                            Every Tuesday • Be the hands and feet
                        </p>
                    </div>

                    {/* Compact Button Group */}
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full lg:w-auto">
                        <button
                            type="button"
                            className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black uppercase tracking-widest text-[#6A0DAD] shadow-lg transition-all hover:bg-orange-50 hover:scale-[1.03] active:scale-95"
                        >
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            Support Us
                        </button>

                        <button
                            type="button"
                            className="group flex items-center justify-center gap-2 rounded-xl bg-[#FF6600] px-6 py-3.5 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#e65c00] hover:scale-[1.03] active:scale-95"
                        >
                            Engage
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
