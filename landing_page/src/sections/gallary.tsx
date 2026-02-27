"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Camera } from "lucide-react";

// Replace these with your actual local image paths
import img1 from "../assets/images/bs_banner.png";
import img2 from "../assets/images/leaders1.png";
import img3 from "../assets/images/leaders3.png";
// Reuse or add more unique images for the 6-row look
const galleryImages = [
    { id: 1, src: img1, alt: "Fellowship Gathering" },
    { id: 2, src: img2, alt: "Leaders Session" },
    { id: 3, src: img3, alt: "Community Study" },
    { id: 4, src: img1, alt: "Worship Moment" },
    { id: 5, src: img2, alt: "Group Discussion" },
    { id: 6, src: img3, alt: "Campus Outreach" },
];

export default function Gallery() {
    return (
        <section className="py-20 bg-white dark:bg-[#050505] transition-colors duration-700">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-[2px] w-8 bg-[#6A0DAD]" />
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6A0DAD] dark:text-purple-400">
                                Visual Journey
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                            Captured{" "}
                            <span className="text-orange-500">Moments</span>
                        </h2>
                    </div>

                    <motion.a
                        href="https://t.me/+ouPuFGAGna80YjVk"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:shadow-purple-500/20 transition-all"
                    >
                        See More on Telegram
                        <ExternalLink
                            size={18}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </motion.a>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <div className="flex items-center gap-2 text-white">
                                    <Camera size={16} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">
                                        {image.alt}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile-only button (centered) */}
                <div className="mt-10 flex justify-center md:hidden">
                    <a
                        href="https://t.me/+ouPuFGAGna80YjVk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6A0DAD] font-black text-sm uppercase tracking-widest flex items-center gap-2"
                    >
                        View Full Gallery <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
