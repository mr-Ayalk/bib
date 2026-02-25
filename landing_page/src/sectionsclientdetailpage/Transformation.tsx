import React from "react";
import { Check, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface TransformationProps {
    beforeImage: string | StaticImageData;
    afterImage: string | StaticImageData;
    transformationPoints: {
        before: string[];
        after: string[];
    };
    companyName: string;
    accentColor?: string;
}

export const Transformation = ({
    beforeImage,
    afterImage,
    transformationPoints,
    companyName,
    accentColor = "#7C3AED",
}: TransformationProps) => {
    // Helper to render lists
    // const isAfter = true;

    return (
        <section className="py-24 bg-[#F9FAFB] px-6 font-poppins">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[32px] md:text-[40px] font-[900] mb-16 text-[#111827] tracking-tight">
                    Before & After Transformation
                </h2>

                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Before Column */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-[900] mb-8 text-gray-900 tracking-tight">
                            Before Eyoha
                        </h3>

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm aspect-[16/11] mb-10 bg-gray-200 border border-gray-100">
                            <Image
                                src={beforeImage}
                                alt={`${companyName} before`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            {transformationPoints.before.map((point, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-50"
                                >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                                        <X
                                            size={12}
                                            className="text-red-500"
                                            strokeWidth={4}
                                        />
                                    </div>
                                    <span className="text-gray-500 text-[15px] font-medium">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* After Column */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-[900] mb-8 text-gray-900 tracking-tight">
                            After Eyoha
                        </h3>

                        <div
                            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[16/11] mb-10 border-4"
                            style={{ borderColor: accentColor }}
                        >
                            <Image
                                src={afterImage}
                                alt={`${companyName} after`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-5 px-2">
                            {transformationPoints.after.map((point, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                                        <Check
                                            size={12}
                                            className="text-green-600"
                                            strokeWidth={4}
                                        />
                                    </div>
                                    <span className="text-gray-900 text-[16px] font-extrabold leading-snug">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
