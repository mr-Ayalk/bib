import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react"; // Import LucideIcon type

interface FinalOutcomeProps {
    // Change string[] to LucideIcon[]
    tools: LucideIcon[];
    finalOutcome: string;
    accentColor?: string;
}

export const FinalOutcome = ({
    tools,
    finalOutcome,
    accentColor = "#7C3AED",
}: FinalOutcomeProps) => (
    <section className="py-24 px-6 max-w-7xl mx-auto font-sans">
        {/* Tools Section */}
        <div className="mb-32">
            <h2 className="text-[32px] font-bold text-[#111827] mb-12 tracking-tight">
                Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-x-16 gap-y-10 items-center justify-between">
                {tools?.map((ToolIcon, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="text-gray-900 group-hover:text-indigo-600 transition-colors bg-[#E5E7EB] p-2 rounded-md">
                            {/* Now TypeScript knows this is a component with size/strokeWidth */}
                            <ToolIcon size={40} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">
                            {/* Use name property as a fallback for displayName */}
                            {ToolIcon.displayName || ToolIcon.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        {/* Final Outcome CTA Card */}
        <div className="rounded-[4rem] p-12 md:p-24 text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden bg-[#780AC7]">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

            <div className="relative z-10">
                <span className="uppercase tracking-[0.2em] text-sm font-bold opacity-80 mb-6 block">
                    The Result
                </span>
                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1]">
                    Final Outcome
                </h2>
                <p className="text-white/90 text-xl md:text-3xl max-w-4xl mx-auto mb-16 font-medium leading-relaxed">
                    &quot;{finalOutcome}&quot;
                </p>

                <button
                    className="group relative z-10 bg-white px-14 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
                    style={{ color: accentColor }}
                >
                    Start Your Project
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    </section>
);
