"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Target } from "lucide-react";
import Tag from "@/components/Tag";

const TournamentVictory: React.FC = () => {
    return (
        // Reduced py-16 to py-12 for a 30% height reduction
        <section className="relative py-12 bg-white dark:bg-[#050505] transition-colors duration-700 overflow-hidden border-y border-slate-100 dark:border-white/5">
            {/* Consistent Brand Glow - Using your Purple instead of Dark Blue */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6A0DAD]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Visual Side: Styled for Consistency */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:order-last"
                    >
                        {/* Changed background from dark to your brand-compatible slate/glass look */}
                        <div className="relative p-10 bg-slate-50 dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/10 backdrop-blur-sm">
                            <Trophy
                                size={100}
                                className="text-[#6A0DAD] dark:text-[#FF6600] filter drop-shadow-lg"
                            />

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-2 -right-2 bg-gradient-to-r from-[#6A0DAD] to-[#FF6600] text-white p-3 rounded-2xl shadow-xl"
                            >
                                <Star fill="white" size={20} />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="text-center">
                        {/* Tag updated to brand purple */}
                        <Tag className="mb-4 scale-90">
                            Tournament Champions
                        </Tag>

                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase leading-tight">
                            5K FELLOW <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#FF6600]">
                                TOURNAMENT WINNERS
                            </span>
                        </h2>

                        <p className="text-base text-slate-500 dark:text-slate-400 mb-6 max-w-lg leading-relaxed font-medium">
                            Discipline in the Word translates to excellence on
                            the field. Our team clinched the gold in the last 5K
                            Fellowship tournament, celebrating victory through
                            unity and strength.
                        </p>

                        {/* Victory Stats - Consistent Colors */}
                        <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-white/10 pt-6">
                            <div>
                                <div className="text-[#6A0DAD] dark:text-[#FF6600] mb-1">
                                    <Medal size={18} />
                                </div>
                                <div className="text-xl font-black text-slate-900 dark:text-white">
                                    1st
                                </div>
                                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                                    Position
                                </div>
                            </div>
                            <div>
                                <div className="text-[#6A0DAD] dark:text-[#FF6600] mb-1">
                                    <Target size={18} />
                                </div>
                                <div className="text-xl font-black text-slate-900 dark:text-white">
                                    UNDEFEATED
                                </div>
                                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                                    Record
                                </div>
                            </div>
                            <div>
                                <div className="text-[#6A0DAD] dark:text-[#FF6600] mb-1">
                                    <Trophy size={18} />
                                </div>
                                <div className="text-xl font-black text-slate-900 dark:text-white">
                                    CHAMPS
                                </div>
                                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                                    Trophy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TournamentVictory;
