"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles, Bell, X, Send, CheckCircle2 } from "lucide-react";
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
    const [isPaused, setIsPaused] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");

    const duplicatedEvents = [...upcomingEvents, ...upcomingEvents];

    const handleNotifyClick = (eventTitle: string) => {
        setSelectedEvent(eventTitle);
        setShowModal(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        setShowModal(false);
        setEmail("");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000); // Hide toast after 4s
    };

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
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 z-20 bg-gradient-to-r from-white dark:from-[#050505] via-white/80 dark:via-[#050505]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 z-20 bg-gradient-to-l from-white dark:from-[#050505] via-white/80 dark:via-[#050505]/80 to-transparent pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap gap-6 py-6 px-4 cursor-pointer"
                    animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
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

                                        <button
                                            onClick={() =>
                                                handleNotifyClick(event.title)
                                            }
                                            className="inline-flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#FF6600] text-white px-4 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-md shadow-purple-500/10"
                                        >
                                            <Bell size={12} /> Notify
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* NOTIFY MODAL */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-white/10"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-[#6A0DAD] dark:text-purple-400 mb-4">
                                    <Bell size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    Get Notified
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    We&apos;ll email you as soon as registration
                                    opens for{" "}
                                    <span className="font-bold text-slate-900 dark:text-slate-200">
                                        {selectedEvent}
                                    </span>
                                    .
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email address"
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#6A0DAD] transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#6A0DAD] hover:bg-[#520a85] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                                >
                                    <Send size={18} /> Keep Me Posted
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* CUSTOM TOAST NOTIFICATION */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 20, x: "-50%" }}
                        className="fixed bottom-10 left-1/2 z-[110] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[320px]"
                    >
                        <div className="text-green-500">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Thank you!</p>
                            <p className="text-xs opacity-80">
                                We&apos;ll notify you when registration starts.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
