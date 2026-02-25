import React from "react";

interface MetricItem {
    label: string;
    value: string;
}

interface MetricsProps {
    metrics: MetricItem[];
    accentColor?: string;
}

export const Metrics = ({ metrics }: MetricsProps) => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto font-poppins">
            {/* Header: Matching the "Services Provided" style */}
            <h2 className="text-[32px] md:text-[40px] font-black text-[#111827] mb-20 tracking-tight">
                Results & Metrics
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                {metrics.map((m, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-start" // Left-aligned like Figma
                    >
                        {/* Metric Value: Extremely bold and large */}
                        <span className="text-6xl md:text-5xl font-bold mb-4 tracking-tighter text-[#610C9E]">
                            {m.value}
                        </span>

                        {/* Metric Label: Small, All-caps, Bold, Spaced */}
                        <p className="text-[11px] text-gray-400 font-[800] uppercase tracking-[0.15em] leading-tight ">
                            {m.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
