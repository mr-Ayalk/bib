"use client";
import React from "react";
import { FileText, Download, ExternalLink, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const scriptureDayResources = [
    {
        title: "Canonization of the Bible",
        description:
            "The historical process and criteria used to recognize the inspired books of the Bible.",
        fileUrl: "/materials/canonization.pdf",
        fileName: "Canonization_of_the_Bible.pdf",
    },
    {
        title: "Internal Evidence",
        description:
            "Examining the Bible's self-authentication through fulfilled prophecy and internal consistency.",
        fileUrl: "/materials/internal-evidence.pdf",
        fileName: "Internal_Evidence_Study.pdf",
    },
    {
        title: "External Evidence",
        description:
            "Archaeological discoveries and extra-biblical historical records that validate Scripture.",
        fileUrl: "/materials/external-evidence.pdf",
        fileName: "External_Evidence_Data.pdf",
    },
    {
        title: "Bible Preservation",
        description:
            "How the Word of God has been miraculously preserved through centuries of transcription.",
        fileUrl: "/materials/preservation.pdf",
        fileName: "Bible_Preservation_History.pdf",
    },
    {
        title: "Hermeneutics",
        description:
            "The art and science of biblical interpretation: Principles for accurate study.",
        fileUrl: "/materials/hermeneutics.pdf",
        fileName: "Hermeneutics_Principles.pdf",
    },
];

const ScriptureMaterial: React.FC = () => {
    const handleView = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
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
        <section className="py-16 bg-slate-50 dark:bg-[#0A0A0A] transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-[#6A0DAD] rounded-2xl text-white shadow-lg shadow-purple-500/20">
                        <CalendarDays size={28} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                            Scripture Day{" "}
                            <span className="text-orange-500 text-xl font-bold italic ml-2">
                                Materials
                            </span>
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                            Essential documents for our annual Scripture Day
                            Fellowship.
                        </p>
                    </div>
                </div>

                {/* Materials List */}
                <div className="space-y-4">
                    {scriptureDayResources.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[1.5rem] hover:border-[#6A0DAD]/40 transition-all group"
                        >
                            {/* Title & Info */}
                            <div className="flex items-start gap-4 mb-4 md:mb-0">
                                <div className="mt-1 text-[#6A0DAD] dark:text-orange-400">
                                    <FileText size={22} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#6A0DAD] transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 self-end md:self-center">
                                <button
                                    onClick={() => handleView(item.fileUrl)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-[#6A0DAD] hover:text-white transition-all active:scale-95"
                                >
                                    <ExternalLink size={16} />
                                    Open
                                </button>
                                <button
                                    onClick={() =>
                                        handleDownload(
                                            item.fileUrl,
                                            item.fileName,
                                        )
                                    }
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-orange-500/10 text-orange-600 hover:bg-orange-500 hover:text-white transition-all active:scale-95"
                                >
                                    <Download size={16} />
                                    Download
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScriptureMaterial;
