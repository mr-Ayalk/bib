"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Tag from "@/components/Tag";

// Image Imports
import testimonial1 from "../assets/images/SisayTadewos.jpg";
import testimonial2 from "../assets/images/semalign_mark.jpg";
import testimonial3 from "../assets/images/Beimnet-Abdi.jpg";
import testimonial4 from "../assets/images/Masamo-Mathewos.jpg";

const testimonies = [
    {
        name: "Semalign Mark",
        role: "TNT Trainee",
        image: testimonial2,
        text: "The TNT program didn't just teach me leadership; it showed me how to live the Word in my daily campus life. My perspective on service has shifted forever.",
    },
    {
        name: "Beimnet Abdi",
        role: "Manuscript Member",
        image: testimonial3,
        text: "Studying the Bible through the Manuscript method opened my eyes. For the first time, I felt like I was hearing God's voice directly from the text.",
    },
    {
        name: "Masamo Mathewos",
        role: "Hermenutics Student",
        image: testimonial4,
        text: "I used to struggle with difficult passages. Now, I have the tools to interpret faithfully. This study has been a foundation for my spiritual growth.",
    },
    {
        name: "Sisay T.",
        role: "Bible Reading Challenge",
        image: testimonial1,
        text: "Consistency was my biggest challenge. Being part of this 5K community kept me accountable, and reading through the Word changed my heart.",
    },
];

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonies.length);
    }, []);

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);
    };

    // Auto-slide effect
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(next, 5000); // 5 seconds
            return () => clearInterval(interval);
        }
    }, [next, isPaused]);

    return (
        <section className="relative py-12 md:py-16 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-700">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6A0DAD]/5 dark:bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-10">
                    <Tag className="mb-4 scale-90">
                        <MessageCircle size={14} className="mr-2" />
                        Impact Stories
                    </Tag>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        The <span className="text-[#6A0DAD]">Student</span> Experience
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div 
                        className="relative min-h-[450px] md:min-h-[350px] flex items-center justify-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 15, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -15, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 dark:bg-slate-900/40 p-6 md:p-10 rounded-[2.5rem] border border-slate-200/50 dark:border-white/5 backdrop-blur-sm shadow-xl"
                            >
                                {/* Student Image */}
                                <div className="relative group w-40 h-40 md:w-64 md:h-64 mx-auto md:mx-0">
                                    <div className="absolute -inset-2 bg-gradient-to-tr from-[#6A0DAD] to-orange-400 opacity-20 blur-xl rounded-full" />
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg">
                                        <Image
                                            src={testimonies[activeIndex].image}
                                            alt={testimonies[activeIndex].name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center text-center md:text-left">
                                    <Quote size={32} className="text-[#6A0DAD] opacity-20 mb-4 mx-auto md:mx-0" />
                                    
                                    <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 leading-snug mb-6 italic">
                                        &ldquo;{testimonies[activeIndex].text}&rdquo;
                                    </p>

                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 dark:text-white leading-none">
                                            {testimonies[activeIndex].name}
                                        </h4>
                                        <p className="text-[#FF6600] font-bold uppercase tracking-widest text-[10px] mt-2">
                                            {testimonies[activeIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                            <button 
                                onClick={prev}
                                className="p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full shadow-lg border border-slate-100 dark:border-white/10 hover:bg-[#6A0DAD] hover:text-white transition-all active:scale-90"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            
                            <div className="flex gap-1.5 px-2">
                                {testimonies.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-6 bg-[#6A0DAD]' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`}
                                    />
                                ))}
                            </div>

                            <button 
                                onClick={next}
                                className="p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full shadow-lg border border-slate-100 dark:border-white/10 hover:bg-[#6A0DAD] hover:text-white transition-all active:scale-90"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Minimized Footer Verse */}
                <div className="mt-20 text-center opacity-40 hover:opacity-100 transition-opacity">
                    <p className="text-lg md:text-xl font-bold text-slate-400 dark:text-slate-700 select-none italic">
                        &quot;ሕይወት ለዋጩ፤ የእግዚአብሔር ቃል ይጠና፤ በታማኝነትም ይታወጅ!&quot;
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;