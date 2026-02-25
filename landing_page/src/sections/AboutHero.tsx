"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative pt-16 pb-12 overflow-hidden bg-white dark:bg-[#050505]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-[#6A0DAD] dark:text-purple-300 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                >
                    <BookOpen size={12} />
                    <span>5K Campus Ministry</span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                    Built on the <span className="text-[#6A0DAD]">Word</span>,{" "}
                    <br />
                    Driven by <span className="text-[#FF6600]">Purpose</span>.
                </h1>

                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                    The 5K Bible Study Team is a student-led fellowship
                    dedicated to equipping university scholars through deep
                    scriptural study and authentic Christian community at the
                    heart of Addis Ababa.
                </p>
            </div>
        </section>
    );
};
export default AboutHero;
