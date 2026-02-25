"use client";

import Tag from "../components/Tag";
import { useState } from "react";
import { Plus } from "react-feather";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What is the primary goal of the 5K Bible Study?",
        answer: "Our mission is to equip students with profound biblical literacy and foster sustainable spiritual maturity. We strive to create a community where the Word of God is studied diligently, interpreted faithfully, and applied practically to everyday life.",
    },
    {
        question: "What Bible study method do you utilize?",
        answer: "We employ the Inductive Bible Study (IBS) method. This systematic approach consists of three vital stages: Observation (What does it say?), Interpretation (What does it mean?), and Application (How should I live in light of this truth?).",
    },
    {
        question: "How are the study sessions structured?",
        answer: "To ensure deep engagement, we organize into 'Sub-Circles.' Each circle consists of approximately 10 students led by a facilitator. This intimate setting allows for thorough discussion, personal accountability, and meaningful fellowship during our book-by-book or topical studies.",
    },
    {
        question: "How can I join the 5K Bible Study team?",
        answer: "First-year students are encouraged to attend our Monday General Fellowship to learn about enrollment cycles. Students in their 3rd year or above can visit us at the 5-Kilo Assembly of God Church on Fridays at 11:00 (Local Time) to meet our leadership team.",
    },
    {
        question: "What are your current ministry needs and challenges?",
        answer: "We are currently seeking dedicated study spaces and financial partnerships to expand our outreach programs and resource materials. Your prayers and support in these areas are greatly appreciated.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex justify-center">
                    <Tag className="bg-gradient-to-r from-[#6A0DAD] to-orange-400 text-white border-none">
                       Faqs
                    </Tag>
                </div>

                <h2 className="text-3xl md:text-6xl font-black mt-6 text-center max-w-2xl mx-auto text-gray-900 dark:text-white leading-tight">
                    Questions? 
                </h2>

                <div className="mt-16 flex flex-col gap-4 max-w-3xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            className={twMerge(
                                "group rounded-3xl border transition-all duration-300",
                                selectedIndex === faqIndex
                                    ? "bg-slate-50 dark:bg-slate-900/40 border-[#6A0DAD]/30 dark:border-purple-500/30"
                                    : "bg-white dark:bg-[#0A0A0A] border-gray-100 dark:border-white/5 hover:border-[#6A0DAD]/20",
                            )}
                            key={faq.question}
                        >
                            <div
                                className="flex justify-between items-center p-6 md:p-8 cursor-pointer"
                                onClick={() =>
                                    setSelectedIndex(
                                        selectedIndex === faqIndex
                                            ? null
                                            : faqIndex,
                                    )
                                }
                            >
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#6A0DAD] dark:group-hover:text-orange-400 transition-colors">
                                    {faq.question}
                                </h3>
                                <div
                                    className={twMerge(
                                        "p-2 rounded-full transition-all duration-300",
                                        selectedIndex === faqIndex
                                            ? "bg-[#6A0DAD] text-white rotate-45"
                                            : "bg-gray-100 dark:bg-white/5 text-gray-500",
                                    )}
                                >
                                    <Plus size={20} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8">
                                            <div className="h-px w-full bg-gray-200 dark:bg-white/5 mb-6" />
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
