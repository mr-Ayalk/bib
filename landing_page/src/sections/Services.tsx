"use client";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import Tag from "@/components/Tag";

// Core Images (Keeping your imports)
import socialmedia from "../assets/images/manuscript.png";
import contentcreation from "../assets/images/scripture.png";
import branding from "../assets/images/recitaion.png";
import seo from "../assets/images/weekly.png";
import webdesign from "../assets/images/game.png";
import paidAd from "../assets/images/special.png";

const serviceData = [
    {
        title: "Manuscript Study",
        description:
            "An intensive, distraction-free 3-week immersion into a specific biblical book. Join 100-150 students in deep exegesis every semester.",
        thumbnailImage: socialmedia,
        linkUrl: "/Programs",
    },
    {
        title: "Scripture Day",
        description:
            "Explore the journey of the Word from ancient scrolls to your hands. A yearly deep-dive into canonization and biblical history.",
        thumbnailImage: contentcreation,
        linkUrl: "/Programs",
    },
    {
        title: "Friday Regular BS",
        description:
            "Our core weekly gathering. A systematic, book-by-book study designed to build a lifelong foundation in Truth every Friday.",
        thumbnailImage: seo,
        linkUrl: "/Programs",
    },
    {
        title: "Special Programs",
        description:
            "Building community through Semester Dinners, Freshers Welcomes, and Graduate Send-offs. Faith is meant to be shared.",
        thumbnailImage: paidAd,
        linkUrl: "/Programs",
    },
    {
        title: "Recitation Program",
        description:
            "The art of hiding the Word in your heart. Weekly sessions focused on memorization and public proclamation of scripture.",
        thumbnailImage: branding,
        linkUrl: "/Programs",
    },
    {
        title: "Game & Get-together",
        description:
            "Beyond the books—fostering deep relationships through organized get-togethers, team games, and community events.",
        thumbnailImage: webdesign,
        linkUrl: "/Programs",
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="relative py-16 md:py-24 bg-white dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* CENTERED HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
                    <Tag className="mb-6 scale-90">
                        Commitment to Excellence
                    </Tag>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                        Our Spiritual{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#FF6600]">
                            Growth Programs
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-2xl">
                        Structured Bible study is the heartbeat of our
                        community. Explore our pathways for scriptural mastery.
                    </p>
                </div>

                {/* Grid layout stays the same for clarity */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {serviceData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            linkText="View Program"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
