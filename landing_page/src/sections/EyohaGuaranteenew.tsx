import React from "react";
import { Target, Settings, BarChart3 } from "lucide-react";

interface GuaranteeCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlightText?: string;
    iconBgColor: string;
}

const GuaranteeCard = ({
    icon,
    title,
    description,
    // highlightText,
    iconBgColor,
}: GuaranteeCardProps) => {
    return (
        <div className="relative bg-white rounded-[24px] p-8 pt-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col h-full transition-transform hover:translate-y-[-5px] duration-300">
            <div
                className={`absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${iconBgColor}`}
            >
                {icon}
            </div>

            <h3 className="text-[#0F172A] text-xl font-bold mb-4">{title}</h3>

            <p className="text-[#64748B] leading-relaxed text-[15px]">
                {description.split(",").map((part, i) => (
                    <React.Fragment key={i}>
                        {part.includes("real impact") ? (
                            <span>
                                {part.split("real impact")[0]}
                                <span className="text-[#9333EA] font-medium">
                                    real impact
                                </span>
                                {part.split("real impact")[1]}
                            </span>
                        ) : part.includes("customized for your business") ? (
                            <span>
                                Every strategy is{" "}
                                <span className="text-[#EA580C] font-medium">
                                    customized for your business
                                </span>
                                {part.split("customized for your business")[1]}
                            </span>
                        ) : part.includes("our priority") ? (
                            <span>
                                {part.split("our priority")[0]}
                                <span className="text-[#9333EA] font-medium">
                                    our priority
                                </span>
                                {part.split("our priority")[1]}
                            </span>
                        ) : (
                            part
                        )}
                        {i < description.split(",").length - 1 && ","}
                    </React.Fragment>
                ))}
            </p>

            <div className="mt-auto pt-8">
                <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F97316]" />
            </div>
        </div>
    );
};

export default function EyohaGuaranteenew() {
    const cards = [
        {
            icon: <Target size={22} />,
            title: "Real Impact",
            description:
                "We promise marketing that delivers, not vanity real impact metrics.",
            iconBgColor: "bg-[#8B5CF6]",
        },
        {
            icon: <Settings size={22} />,
            title: "Custom Strategy",
            description:
                "Every strategy is customized for your business, backed by analytics, creativity",
            iconBgColor: "bg-[#F97316]",
        },
        {
            icon: <BarChart3 size={22} />,
            title: "Your Growth",
            description:
                "Your growth is — and we our priority stand behind every campaign we launch.",
            iconBgColor: "bg-[#F97316]",
        },
    ];

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-white">
            <div className="absolute top-10 left-[-5%] w-64 h-64 bg-[#F5F3FF] rounded-full blur-3xl -z-10 opacity-60" />
            <div className="absolute top-20 right-[-5%] w-48 h-48 bg-[#FFF7ED] rounded-full blur-3xl -z-10 opacity-80" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <div className="w-20 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-[#F97316] mx-auto mb-6" />
                    <h2 className="text-[#0F172A] text-4xl md:text-5xl font-extrabold tracking-tight">
                        The Eyoha Guarantee
                    </h2>
                    <div className="w-24 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-[#F97316] mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 ">
                    {cards.map((card, index) => (
                        <GuaranteeCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
