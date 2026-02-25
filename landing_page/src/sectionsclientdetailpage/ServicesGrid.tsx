
import React from "react";

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    date?: string;
}

interface ServicesGridProps {
    services: Service[];
    accentColor?: string;
}

export const ServicesGrid = ({ services }: ServicesGridProps) => (
    <div className="w-full bg-[#F9FAFB] ">
        {" "}
        <section className="py-20 px-6 max-w-7xl mx-auto font-poppins  ">
            <h2 className="text-[28px] md:text-[38px] font-bold mb-12 text-black tracking-tight">
                Services Provided
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="p-10 rounded-[2.5rem] bg-white border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start"
                    >
                        {/* Icon Container */}
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-8 shadow-sm bg-[#F97316]">
                            {/* Scaling the icon to match Figma proportions */}
                            {React.cloneElement(s.icon as React.ReactElement, {
                                size: 20,
                                strokeWidth: 2.5,
                            })}
                        </div>

                        {/* Content */}
                        <h3 className="text-[19px] font-semibold mb-3 text-gray-900 leading-tight tracking-tight">
                            {s.title}
                        </h3>

                        <p className="text-gray-500 text-[14px] leading-relaxed font-medium mb-6">
                            {s.description}
                        </p>

                        {/* Date Tag */}
                        {s.date && (
                            <p className="mt-auto text-[11px] font-black text-gray-900 uppercase tracking-widest">
                                {s.date}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    </div>
);
