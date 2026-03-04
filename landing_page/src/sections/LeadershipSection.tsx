"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Quote } from "lucide-react";

// Import your images here
import bekiImg from "../assets/images/beki.jpg";
import AyalkImg from "../assets/images/ayalk.jpg";
import febImg from "../assets/images/Feben Getachew(1).webp";
import oliImg from "../assets/images/Olly.jpg";
import tebeImg from "../assets/images/tebe.png";
import choImg from "../assets/images/cho.png";
import nahiImg from "../assets/images/nahi.png";
import mahiImg from "../assets/images/mahi.png";
import gediImg from "../assets/images/Gedion Mekbeb Afework.jpg";
// import other images...
// import saraImg from "../assets/images/sara.jpg";

interface Leader {
    name: string;
    dept: string;
    role: string;
    verse: string;
    image: StaticImageData | string;
}

const currentLeaders: Leader[] = [
    {
        name: "Bereket Getachew",
        dept: "Electrical Engineering",
        role: "BS team Main Leader",
        verse: "Psalm 119:105",
        image: bekiImg,
    },
    {
        name: "Feven Getachew",
        dept: "Software Engineering",
        role: "General Fellow Main Leader & BS Link",
        verse: "Romans 8:28",
        image: febImg, // Replace with actual image
    },
    {
        name: "Ayalkbet Teketel (Bechu)",
        dept: "Electrical Engineering",
        role: "BS team Leader",
        verse: "Matthew 6:33",
        image: AyalkImg, // Replace with actual image
    },
    {
        name: "Oli Dereje",
        dept: "Civil Engineering",
        role: "BS team Leader",
        verse: "John 3:16",
        image: oliImg, // Replace with actual image
    },
];

const formerLeaders: Leader[] = [
    {
        name: "Tebarek Fikiru",
        dept: "Civil Engineering",
        role: "BS team Main Leader",
        verse: "Philippians 4:13",
        image: tebeImg,
    },
    {
        name: "Chombe Eliyas",
        dept: "Chemistry",
        role: "BS team Leader",
        verse: "Proverbs 3:5-6",
        image: choImg,
    },
    {
        name: "Nahom Taye",
        dept: "Civil Engineering",
        role: "BS team Leader",
        verse: "Joshua 1:9",
        image: nahiImg,
    },
    {
        name: "Gedion M.",
        dept: "Software Engineering",
        role: "BS team Leader",
        verse: "1 Peter 5:7",
        image: gediImg,
    },
    {
        name: "Mahider Asefa (Mahi)",
        dept: "Mechanical Engineering",
        role: "BS team Leader",
        verse: "Hebrews 11:1",
        image: mahiImg,
    },
];

const LeaderCard = ({ leader }: { leader: Leader }) => (
    <div className="group bg-slate-50 dark:bg-white/5 rounded-[2rem] p-6 border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl hover:-translate-y-1">
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#6A0DAD] shadow-inner bg-slate-200">
            <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="text-center">
            <h4 className="text-md font-bold text-slate-900 dark:text-white leading-tight">
                {leader.name}
            </h4>
            <p className="text-[#FF6600] text-[10px] font-black uppercase tracking-widest mt-1 mb-1">
                {leader.role}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mb-4">
                {leader.dept}
            </p>
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 italic text-slate-600 dark:text-slate-400 text-[11px] flex items-start gap-2 justify-center leading-relaxed">
                <Quote size={10} className="text-[#6A0DAD] shrink-0 mt-1" />
                <span>{leader.verse}</span>
            </div>
        </div>
    </div>
);

const LeadershipSection = () => {
    return (
        <section className="py-20 px-6 bg-white dark:bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                {/* Current Leadership */}
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">
                        Current{" "}
                        <span className="text-[#6A0DAD]">Leadership</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-medium">
                        Batch of 2025/26
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
                    {currentLeaders.map((l, i) => (
                        <LeaderCard key={i} leader={l} />
                    ))}
                </div>

                {/* Former Leadership */}
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">
                        Former <span className="text-slate-400">Leaders</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-medium">
                        Batch of 2023/24
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {formerLeaders.map((l, i) => (
                        <LeaderCard key={i} leader={l} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
