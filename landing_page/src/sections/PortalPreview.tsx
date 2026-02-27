"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LayoutDashboard, ShieldCheck, Zap, Star } from "lucide-react";

// The dashboard image you uploaded
import portalMockup from "../assets/images/dashboard.png";

export default function PortalPreview() {
    return (
        <section className="relative py-16 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-700">
            {/* Background Decorative Elements - Slightly dimmed for compactness */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-orange-500/5 blur-[100px] rounded-full" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Text Content - Tighter spacing */}
                    <div className="w-full lg:w-[45%] z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-[#6A0DAD] dark:text-purple-400 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4"
                        >
                            <ShieldCheck size={12} /> Exclusive Access
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                            Deepen Your Study with the{" "}
                            <span className="text-[#6A0DAD] dark:text-purple-400">
                                Members Portal
                            </span>
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 max-w-lg">
                            Track your progress, join group studies, and access
                            exclusive tools to stay consistent in the Word.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    icon: <LayoutDashboard size={16} />,
                                    text: "Dashboard",
                                },
                                {
                                    icon: <Zap size={16} />,
                                    text: "AI Bible Chat",
                                },
                                { icon: <Star size={16} />, text: "Streaks" },
                                {
                                    icon: <ShieldCheck size={16} />,
                                    text: "Badges",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-sm"
                                >
                                    <div className="text-orange-500">
                                        {item.icon}
                                    </div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slanted Image Section - Scaled down for height reduction */}
                    <div className="w-full lg:w-[55%] perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateY: 0 }}
                            whileInView={{
                                opacity: 1,
                                rotateY: -15,
                                rotateX: 8,
                                scale: 0.95, // Reduces visual height
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-purple-600/10 translate-x-3 translate-y-3 rounded-2xl blur-xl" />

                            <div className="relative border-2 border-white dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={portalMockup}
                                    alt="Members Portal Preview"
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Smaller Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-white/10 hidden md:block"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        <Zap size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] uppercase font-black text-slate-400">
                                            Streak
                                        </p>
                                        <p className="text-sm font-bold dark:text-white">
                                            7 Days 🔥
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
