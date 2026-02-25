import {
    TrendingUp,
    BarChart3,
    Users,
    DollarSign,
    // Target,
    // Lightbulb,
} from "lucide-react";

export default function CaseStudyDetail() {
    return (
        <section className="py-20 bg-[#F9FAFB] px-4 font-sans">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* The Challenge & Strategy sections remain similar but with refined padding */}
                {/* ... (Challenge and Strategy blocks) ... */}

                {/* Measurable Results - Purple Banner (The exact match) */}
                <div className="bg-[#6A0DAD] rounded-[32px] p-12 md:p-16 text-center text-white">
                    <h4 className="text-xl font-bold mb-12">
                        Measurable Results
                    </h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
                        <ResultItem
                            icon={<TrendingUp size={28} />}
                            value="342%"
                            label="Sales Growth"
                            subLabel="In 6 months"
                        />
                        <ResultItem
                            icon={<Users size={28} />}
                            value="185K"
                            label="Website Visitors"
                            subLabel="Monthly average"
                        />
                        <ResultItem
                            icon={<BarChart3 size={28} />}
                            value="4.2%"
                            label="Conversion Rate"
                            subLabel="Up from 0.8%"
                        />
                        <ResultItem
                            icon={<DollarSign size={28} />}
                            value="5.8x"
                            label="ROAS"
                            subLabel="Ad Spend Return"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ResultItem({
    icon,
    value,
    label,
    subLabel,
}: {
    icon: React.ReactNode;
    value: string;
    label: string;
    subLabel?: string;
}) {
    return (
        <div className="flex flex-col items-center">
            {/* Icon Container: Soft purple rounded box */}
            <div className="mb-6 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-white">{icon}</div>
            </div>

            {/* Value: Large and bold */}
            <div className="text-4xl md:text-5xl font-black text-[#FF9F00] mb-2 tracking-tight">
                {value}
            </div>

            {/* Label: Strong and clear */}
            <div className="text-sm md:text-base font-bold text-white mb-1">
                {label}
            </div>

            {/* Sub-label: Small and transparent */}
            {subLabel && (
                <div className="text-[11px] font-medium text-white/70 uppercase tracking-wider">
                    {subLabel}
                </div>
            )}
        </div>
    );
}
