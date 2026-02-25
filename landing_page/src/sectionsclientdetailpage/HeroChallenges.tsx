import { ArrowLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// 1. Define the Interface
interface HeroChallengesProps {
    companyName: string;
    logo: string | StaticImageData;
    description: string;
    challenges: string[];
    accentColor?: string;
}
const BRAND_RED = "#8B1538"; // Standardized color from Figma
export const HeroChallenges = (
    {
        companyName,
        logo,
        description,
        challenges,
    }: // accentColor = "#7C3AED",
    HeroChallengesProps // 2. Replace 'any' with the interface
) => (
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-1 pt-6">
            <Link href="/#FeaturedClients" className="inline-block">
                <button
                    style={{ color: BRAND_RED }}
                    className="flex items-center gap-2 font-bold text-sm mb-2 uppercase tracking-tight"
                >
                    <ArrowLeft size={16} strokeWidth={3} /> Back to Projects
                </button>
            </Link>

            <div
                style={{ backgroundColor: BRAND_RED }}
                className="w-16 h-1 rounded-full"
            />
        </div>
        .{/* Header Section: Logo + Title (Centered) */}
        <div className="flex flex-row items-center justify-center text-center gap-6 mb-8">
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-sm flex items-center justify-center overflow-hidden border border-gray-50">
                <Image
                    src={logo}
                    alt={`${companyName} logo`}
                    fill
                    className="object-contain rounded-full"
                />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#7C3AED]">
                {companyName}
            </h1>
        </div>
        {/* Description Section */}
        <div className="max-w-6xl mx-auto mb-10">
            <div className="text-gray-500 text-base md:text-lg leading-relaxed font-medium whitespace-pre-line space-y-8">
                {description.split("\n\n").map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-gray-500 text-sm md:text-[17px] leading-relaxed font-medium"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
        {/* Challenges Section */}
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
                Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10">
                {challenges.map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div
                            style={{ backgroundColor: BRAND_RED }}
                            className="w-2 h-2 rounded-full mt-[10px] shrink-0"
                        />
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
