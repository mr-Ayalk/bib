import React from "react";
import {
    Shield,
    Handshake,
    Trophy,
    Users,
    Clock,
    BarChart3,
    Heart,
} from "lucide-react";

const FeaturesSection = () => {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16 font-sans">
            <div className="relative bg-[#FFF9F5] rounded-[40px] p-8 md:p-16 text-center overflow-hidden mb-20">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#A855F7] to-[#9333EA] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
                        <Shield className="text-white w-7 h-7" />
                    </div>
                    <div className="w-2 h-[2px] bg-purple-200" />
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Handshake className="text-white w-7 h-7" />
                    </div>
                    <div className="w-2 h-[2px] bg-orange-200" />
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                        <Trophy className="text-white w-7 h-7" />
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                    Backed by Excellence
                </h2>

                <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
                    Our commitment goes beyond promises. We deliver measurable
                    results through data-driven strategies, creative innovation,
                    and unwavering dedication to your success.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <Users className="text-[#6A0DAD] w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                        Expert Team
                    </h3>
                    <p className="text-gray-500 text-sm">
                        Seasoned professionals
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <Clock className="text-[#6A0DAD] w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                        On-Time Delivery
                    </h3>
                    <p className="text-gray-500 text-sm">Always on schedule</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                        <BarChart3 className="text-[#6A0DAD] w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                        Data-Driven
                    </h3>
                    <p className="text-gray-500 text-sm">
                        Analytics-backed decisions
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                        <Heart className="text-[#6A0DAD] fill-[#6A0DAD] w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                        Client-Focused
                    </h3>
                    <p className="text-gray-500 text-sm">
                        Your success matters
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
