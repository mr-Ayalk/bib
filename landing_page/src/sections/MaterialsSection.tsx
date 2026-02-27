"use client";
import React from "react";
import {
    FileText,
    Download,
    ExternalLink,
    Calendar,
    BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag"; // Ensure the path is correct

const mainArticle = {
    title: "ቅድስና፦ ከእግዚአብሔር፣ በእግዚአብሔር፣ ለእግዚአብሔር",
    description:
        "An in-depth exploration by the 5K Bible Study team on living a set-apart life in a modern world. This article dives into biblical sanctification.",
    date: "Oct 24, 2025",
    category: "Featured Study",
    fileUrl: "/materials/holiness.pdf",
    fileName: "Holiness_Study_5K.pdf",
};

const otherResources = [
    {
        title: "Psalms of Asaph",
        description:
            "A comprehensive study guide on worship, justice, and God's sovereignty through the lens of Asaph.",
        date: "Jan 12, 2026",
        fileUrl: "/materials/psalms_of_asaph.pdf",
        fileName: "psalms_of_asaph.pdf",
    },
    {
        title: "IBS Guide for 5K",
        description:
            "A practical manual for mastering the Inductive Bible Study method in our community.",
        date: "Nov 18, 2025",
        fileUrl: "/materials/ibs_guide_5k.pdf",
        fileName: "IBS_GUIDE_5K.pdf",
    },
    {
        title: "Discipleship Foundations",
        description:
            "Mastering the basics of following Jesus: prayer, word, and consistent fellowship.",
        date: "Dec 05, 2025",
        fileUrl: "/materials/ibs_guide_5k.pdf",
        fileName: "IBS_GUIDE_5K.pdf",
    },
];

const MaterialsSection: React.FC = () => {
    const handleView = (url: string, isPPT: boolean) => {
        if (isPPT) {
            const viewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(window.location.origin + url)}`;
            window.open(viewerUrl, "_blank");
        } else {
            window.open(url, "_blank");
        }
    };

    const handleDownload = (url: string, name: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    };

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* CENTERED HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 flex flex-col items-center">
                    <Tag className="mb-6 scale-90">Articles & Resources</Tag>

                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                        Study <span className="text-[#6A0DAD]">Materials</span>
                    </h2>

                    <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium max-w-xl">
                        &quot;ሕይወት ለዋጩ ፤ የእግዚአብሔር ቃል ይጠና&quot; — Access our
                        latest study guides and deepening resources.
                    </p>
                </div>

                {/* Featured Card - Adjusted for center balance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-gray-100 dark:border-white/5 p-8 md:p-12 mb-10 group transition-all"
                >
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 text-[#6A0DAD] dark:text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-5">
                            <BookOpen size={14} />
                            <span>{mainArticle.category}</span>
                            <span className="flex items-center gap-1 opacity-60">
                                <Calendar size={12} className="ml-2" />
                                {mainArticle.date}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                            {mainArticle.title}
                        </h3>

                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            {mainArticle.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() =>
                                    handleView(mainArticle.fileUrl, false)
                                }
                                className="flex items-center gap-2 bg-[#6A0DAD] hover:bg-[#5a0bb4] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-purple-500/10"
                            >
                                <ExternalLink size={16} /> Open Article
                            </button>
                            <button
                                onClick={() =>
                                    handleDownload(
                                        mainArticle.fileUrl,
                                        mainArticle.fileName,
                                    )
                                }
                                className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#6A0DAD] text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-sm transition-all"
                            >
                                <Download size={16} /> Download PDF
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {otherResources.map((res, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/5 p-8 rounded-[2rem] hover:border-[#6A0DAD]/50 transition-all flex flex-col items-center text-center h-full group"
                        >
                            <div className="p-3 bg-orange-100 dark:bg-orange-500/10 rounded-2xl text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                                <FileText size={24} />
                            </div>

                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                                {res.date}
                            </span>

                            <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
                                {res.title}
                            </h4>

                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                                {res.description}
                            </p>

                            <div className="mt-auto flex w-full gap-3">
                                <button
                                    onClick={() =>
                                        handleView(res.fileUrl, false)
                                    }
                                    className="flex-1 bg-gray-50 dark:bg-white/5 hover:bg-[#6A0DAD] hover:text-white text-gray-900 dark:text-gray-300 py-3 rounded-xl text-[11px] font-bold transition-all uppercase tracking-widest border border-transparent"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            res.fileUrl,
                                            res.fileName,
                                        )
                                    }
                                    className="p-3 bg-gray-50 dark:bg-white/5 hover:bg-orange-500 hover:text-white text-gray-900 dark:text-gray-300 rounded-xl transition-all border border-transparent"
                                >
                                    <Download size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MaterialsSection;
