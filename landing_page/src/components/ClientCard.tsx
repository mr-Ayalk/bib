import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

// 1. Define the interface once
interface ClientCardProps {
    id: string;
    logo: string | StaticImageData;
    companyName: string;
    subcompanyName: string;
    testimonial: string;
    category: string;
    accentColor: string;
    tagline: string;
}

// ... (imports and interface remain the same)

export const ClientCard = ({
    id,
    logo,
    companyName,
    subcompanyName,
    testimonial,
    category,
    accentColor,
    tagline, // Now being read below
}: ClientCardProps) => {
    const dotColor =
        accentColor === "orange" ? "bg-orange-500" : "bg-purple-500";
    const gradient =
        accentColor === "orange"
            ? "from-purple-500 to-orange-400"
            : "from-orange-400 to-purple-500";

    return (
        <div className="relative bg-white rounded-2xl px-8 pb-8 pt-14 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center text-center border border-gray-50 transition-transform hover:scale-[1.02] mt-10">
            {/* Logo Section */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 z-10">
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-white shadow-lg relative">
                    <Image
                        src={logo}
                        alt={companyName}
                        fill
                        className="object-contain rounded-full"
                    />
                </div>
            </div>

            <div
                className={`absolute top-6 right-6 w-2 h-2 rounded-full ${dotColor}`}
            />

            {/* Tagline Addition: This resolves the 'unused variable' error */}
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                {tagline}
            </span>

            <h3 className="text-[#7C3AED] font-bold text-lg mb-1">
                {companyName}
            </h3>

            <p className="text-gray-400 text-sm mb-6 font-medium">
                {subcompanyName}
            </p>

            <p className="text-gray-500 text-sm leading-relaxed italic mb-8 px-4">
                {testimonial}
            </p>

            <div className="w-full mb-8 flex items-center gap-3 mt-auto">
                <div
                    className={`h-1 flex-grow rounded-full bg-gradient-to-r ${gradient}`}
                />
                <span className="text-[10px] uppercase tracking-wider text-gray-400 whitespace-nowrap font-semibold">
                    {category}
                </span>
            </div>

            <Link
                href={`/Details/${id}`}
                className="w-full bg-[#A855F7] hover:bg-[#9333EA] text-white py-2.5 rounded-lg font-semibold text-sm transition-colors text-center block"
            >
                See Details
            </Link>
        </div>
    );
};
