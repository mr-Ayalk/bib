// components/VisionMission.tsx
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
    const data = [
        {
            title: "Our Vision",
            desc: "To be the leading digital agency that empowers businesses to thrive in the digital landscape through innovative solutions and creative excellence that make a lasting impact.",
            icon: <Eye className="w-6 h-6 text-white" />,
        },
        {
            title: "Our Mission",
            desc: "To deliver exceptional digital experiences that connect brands with their audiences, drive growth, and create meaningful relationships through strategic thinking and creative execution.",
            icon: <Target className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <section className="py-20 bg-gray-50 px-4">
            <div className="max-w-[1233px] mx-auto">
                <h2 className="text-3xl font-bold text-[#6A0DAD] text-center mb-12">
                    Vision & Mission
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[20px] shadow-sm border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-[#6A0DAD] rounded-full flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
