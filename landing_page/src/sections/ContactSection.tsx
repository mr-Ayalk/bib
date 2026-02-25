"use client";
import React, { useState } from "react";
import {
    Send,
    Phone,
    MessageSquare,
    User,
    AtSign,
    CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically integrate with EmailJS or a backend
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#6A0DAD]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Branding & Info */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                            Get In <span className="text-[#6A0DAD]">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Have questions about our Bible study circles or want
                            to partner with the
                            <span className="text-orange-500 font-bold">
                                {" "}
                                Action/Evangelical Team
                            </span>
                            ? Reach out—we’d love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl text-[#6A0DAD] group-hover:bg-[#6A0DAD] group-hover:text-white transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                        Call Us
                                    </p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                                        +251 900 000 000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Send size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                        Telegram
                                    </p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                                        @FiveK_BibleStudy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-slate-50 dark:bg-[#0A0A0A] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-2xl relative"
                    >
                        {isSubmitted ? (
                            <div className="py-20 text-center flex flex-col items-center">
                                <CheckCircle2
                                    size={64}
                                    className="text-green-500 mb-4 animate-bounce"
                                />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Message Sent!
                                </h3>
                                <p className="text-gray-500 mt-2">
                                    We will get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Name Input */}
                                    <div className="relative">
                                        <User
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#6A0DAD] outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    {/* Phone Input */}
                                    <div className="relative">
                                        <Phone
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Phone No"
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#6A0DAD] outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                </div>

                                {/* Telegram Username */}
                                <div className="relative">
                                    <AtSign
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={18}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Telegram Username (e.g. @username)"
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#6A0DAD] outline-none transition-all dark:text-white"
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <MessageSquare
                                        className="absolute left-4 top-6 text-gray-400"
                                        size={18}
                                    />
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Your Short Message..."
                                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#6A0DAD] outline-none transition-all dark:text-white"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r bg-[#6A0DAD] text-white font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-3"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
