"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import leaderimg from "../assets/images/beki.jpg";
interface Leader {
    name: string;
    dept: string;
    role: string;
    verse: string;
    image: string; // Add your asset paths here
}

const currentLeaders: Leader[] = Array(6).fill({
    name: "Leader Name",
    dept: "Software Engineering",
    role: "Chairperson",
    verse: "Psalm 119:105",
    image: leaderimg, // Replace with actual image paths
});

const formerLeaders: Leader[] = Array(5).fill({
    name: "Former Leader",
    dept: "Civil Engineering",
    role: "Ex-Secretary",
    verse: "Romans 8:28",
    image: leaderimg, // Replace with actual image paths
});

const LeaderCard = ({ leader }: { leader: Leader }) => (
    <div className="group bg-slate-50 dark:bg-white/5 rounded-[2rem] p-6 border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl hover:-translate-y-1">
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#6A0DAD]">
            <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
            />
        </div>
        <div className="text-center">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {leader.name}
            </h4>
            <p className="text-[#FF6600] text-[10px] font-black uppercase tracking-widest mb-1">
                {leader.role}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">
                {leader.dept}
            </p>
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 italic text-slate-600 dark:text-slate-400 text-xs flex items-start gap-2 justify-center">
                <Quote size={12} className="text-[#6A0DAD] shrink-0" />
                <span>&quot;{leader.verse}&quot;</span>
            </div>
        </div>
    </div>
);

const LeadershipSection = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">
                        Current{" "}
                        <span className="text-[#6A0DAD]">Leadership</span>
                    </h2>
                    <p className="text-slate-500 text-sm">Batch of 2025/26</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-6 mb-24">
                    {currentLeaders.map((l, i) => (
                        <LeaderCard key={i} leader={l} />
                    ))}
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">
                        Former <span className="text-slate-400">Leaders</span>
                    </h2>
                    <p className="text-slate-500 text-sm">Batch of 2023/24</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {formerLeaders.map((l, i) => (
                        <LeaderCard key={i} leader={l} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
