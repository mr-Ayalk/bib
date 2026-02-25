import React from "react";
import Image, { StaticImageData } from "next/image"; // Added StaticImageData
import { LucideIcon } from "lucide-react";

interface WinCardProps {
    metric: string;
    metricColor: string;
    title: string;
    description: string;
    graphicSrc: string | StaticImageData; // Changed from any
    iconBgColor: string;
    iconSrc: string | StaticImageData; // Changed from any
    BottomIcon: LucideIcon; // Receives the specific icon component
}

const WinCard: React.FC<WinCardProps> = ({
    metric,
    metricColor,
    title,
    description,
    graphicSrc,
    iconBgColor,
    iconSrc,
    BottomIcon,
}) => {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100">
            {/* Top Icon and Gradient Circle */}
            <div
                className="w-[64px] h-[64px] relative flex items-center justify-center rounded-full mb-6 shrink-0"
                style={{ background: iconBgColor }}
            >
                <div className="w-[24px] h-[24px] relative">
                    <Image
                        src={iconSrc}
                        alt={`${title} icon`}
                        fill
                        className="object-contain invert brightness-0" // Ensures the top white icon stands out
                    />
                </div>
            </div>

            {/* Metric and Title */}
            <h3
                className={`text-4xl font-black ${metricColor} mb-1 tracking-tight`}
            >
                {metric}
            </h3>
            <p
                className={`text-lg font-bold ${metricColor} mb-4 uppercase tracking-tight`}
            >
                {title}
            </p>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8 h-12">
                {description}
            </p>

            {/* Unique Graphic Area */}
            <div className="w-full h-32 relative mb-10 flex items-center justify-center">
                <Image
                    src={graphicSrc}
                    alt={`${title} graphic`}
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* Bottom Accent Icon - Unique for each, Orange, No BG */}
            <div className="mt-auto">
                <BottomIcon
                    size={24}
                    color="#FF8C00"
                    strokeWidth={2.5}
                    fill={metric === "+1M" ? "#FF8C00" : "none"} // Fills the pie chart for the last card
                />
            </div>
        </div>
    );
};

export default WinCard;
