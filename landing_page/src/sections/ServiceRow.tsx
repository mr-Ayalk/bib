import React from "react";
import Image, { StaticImageData } from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceRowProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    image: StaticImageData | string;
    imageRight?: boolean;
    icon?: React.ReactNode;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
    title,
    subtitle,
    description,
    features,
    image,
    imageRight = false,
    icon,
}) => {
    return (
        <div className="py-20 border-b border-gray-100 last:border-0">
            <div
                className={`flex flex-col ${
                    imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20`}
            >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            {icon}
                            <h2 className="text-3xl font-extrabold text-[#4C1D95]">
                                {title}
                            </h2>
                        </div>
                        <p className="text-gray-500 font-bold text-sm tracking-wide">
                            {subtitle}
                        </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        {description}
                    </p>

                    <ul className="space-y-3">
                        {features.map((feature, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-3 text-gray-700 font-medium"
                            >
                                <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="bg-[#6A0DAD] hover:bg-[#580b91] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md">
                        Request Proposal
                    </button>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                        <Image
                            src={image}
                            alt={title}
                            className="w-full h-auto object-cover aspect-[4/3]"
                            width={600}
                            height={450}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
