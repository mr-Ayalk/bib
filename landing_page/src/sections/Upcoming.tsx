"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Bell } from "lucide-react";
import Tag from "@/components/Tag";

const upcomingEvents = [
    {
        title: "TNT Training",
        desc: "Equipping leaders with explosive spiritual growth and leadership tools.",
    },
    {
        title: "Manuscript Program",
        desc: "Deep-dive inductive study exploring the original context of scripture.",
    },
    {
        title: "Hermeneutics Program",
        desc: "Mastering the art and science of biblical interpretation.",
    },
    {
        title: "Bible Reading Challenge",
        desc: "A community-wide journey through the Word of God together.",
    },
    {
        title: "Freshers Welcome",
        desc: "Welcoming new students into our spiritual family with open arms.",
    },
    {
        title: "GC Goodbye",
        desc: "Celebrating our graduates as they transition to their next calling.",
    },
    {
        title: "Outreach Mission",
        desc: "Spreading the message of hope and love to our local community.",
    },
    {
        title: "Panel Discussion",
        desc: "Engaging difficult questions with biblical wisdom and community clarity.",
    },
    {
        title: "Summer Bible Study",
        desc: "An intensive summer program exploring key themes in scripture.",
    },
];

export default function Upcoming() {
    const duplicatedEvents = [...upcomingEvents, ...upcomingEvents];

    return (
        <section className="relative py-12 md:py-16 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-700">
            {/* Minimalist Top Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

            <div className="container mx-auto px-6 mb-8">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-3"
                    >
                        <Tag className="scale-90">
                            <Sparkles size={12} className="mr-2" />
                            Don&apos;t Miss Out
                        </Tag>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                        Upcoming{" "}
                        <span className="text-[#6A0DAD] dark:text-purple-400">
                            Events
                        </span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl text-base font-medium">
                        Save the dates for these transformative experiences.
                    </p>
                </div>
            </div>

            <div className="relative flex items-center">
                {/* Edge Fades for Seamless Scrolling */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 z-20 bg-gradient-to-r from-white dark:from-[#050505] via-white/80 dark:via-[#050505]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 z-20 bg-gradient-to-l from-white dark:from-[#050505] via-white/80 dark:via-[#050505]/80 to-transparent pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap gap-6 py-6 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ transition: { duration: 80 } }}
                >
                    {duplicatedEvents.map((event, index) => (
                        <div
                            key={index}
                            className="inline-block w-[300px] md:w-[380px] flex-shrink-0"
                        >
                            <div className="group relative bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 p-7 md:p-8 rounded-[2rem] transition-all duration-700 hover:bg-white dark:hover:bg-slate-800/60 hover:shadow-xl hover:shadow-purple-500/5">
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-5">
                                        <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/10 text-[#6A0DAD] dark:text-purple-400 group-hover:scale-110 transition-transform duration-500">
                                            <Calendar size={20} />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#FF6600] bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full border border-orange-100 dark:border-orange-500/10">
                                            Coming Soon
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 whitespace-normal tracking-tight leading-snug">
                                        {event.title}
                                    </h3>

                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed whitespace-normal mb-6 line-clamp-2">
                                        {event.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-5 border-t border-slate-200 dark:border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                                                Timeline
                                            </span>
                                            <span className="text-xs font-black text-slate-900 dark:text-white uppercase">
                                                TBA 2026
                                            </span>
                                        </div>

                                        <button className="inline-flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#FF6600] text-white px-4 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-md shadow-purple-500/10">
                                            <Bell size={12} />
                                            Notify
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
