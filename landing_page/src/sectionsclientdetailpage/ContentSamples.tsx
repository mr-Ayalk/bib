import Image, { StaticImageData } from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ContentSampleItem {
    title: string;
    desc: string;
    img: string | StaticImageData;
}

interface ContentSamplesProps {
    contentSamples: ContentSampleItem[];
    accentColor: string;
}

export const ContentSamples = ({
    contentSamples,
}: // accentColor,
ContentSamplesProps) => {
    if (!contentSamples || contentSamples.length === 0) return null;

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto font-poppins">
            {/* Header: Matches "Services Provided" style */}
            <h2 className="text-[32px] md:text-[40px] font-black text-[#111827] mb-14 tracking-tight">
                Content Samples
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {contentSamples.map((item, i) => (
                    <div key={i} className="flex flex-col group">
                        {/* Image Container: High Border Radius & Shadow */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-8 aspect-[16/10] bg-white border border-gray-100 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-start px-2">
                            <h4 className="text-[22px] font-[900] text-gray-900 mb-3 leading-tight tracking-tight">
                                {item.title}
                            </h4>

                            <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-6 line-clamp-2">
                                {item.desc}
                            </p>

                            {/* Verify Link: Styled exactly like Figma */}
                            <button className="flex items-center gap-1.5 text-[14px] font-black transition-all hover:opacity-80 text-[#6A0DAD]">
                                verify
                                <ArrowUpRight size={18} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
