import { Target, CheckCircle2, Play } from "lucide-react";

export default function CaseStudyDetailmain() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans antialiased">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* --- HERO HEADER CARD --- */}
                <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <div className="flex items-center gap-4">
                            {/* Brand Logo Container */}
                            <div className="w-14 h-14 bg-gradient-to-br from-[#9333EA] to-[#EA580C] rounded-2xl flex items-center justify-center text-white">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    {/* Simplified Couch Icon Placeholder */}
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M4 18v3h3v-3h10v3h3v-3h1c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h1z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-black text-gray-900 leading-tight">
                                    Galaxy Furniture
                                </h1>
                                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                                    Interior • Furniture
                                </p>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                text="Branding"
                                color="bg-purple-100 text-purple-700"
                            />
                            <Badge
                                text="Furniture"
                                color="bg-purple-100 text-purple-700"
                            />
                            <Badge
                                text="Meta Ads"
                                color="bg-purple-100 text-purple-700"
                            />
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-3xl">
                        Driving high-volume furniture sales through strategic
                        brand positioning and viral TikTok marketing showcasing
                        modern home aesthetics and functional furniture design.
                    </p>

                    {/* Video Placeholder Container */}
                    <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-video group cursor-pointer border-8 border-gray-50/50 shadow-inner">
                        {/* Mock Background for the "Video" */}
                        <div className="absolute inset-0 bg-[#0A192F] flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center mb-4 mx-auto">
                                    <span className="text-yellow-400 font-bold text-xs uppercase text-center px-4">
                                        Galaxy Furniture
                                    </span>
                                </div>
                                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-[10px] text-white/80">
                                    https://via.placeholder/Brando_100x307?
                                </div>
                            </div>
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                                <Play
                                    className="fill-gray-900 text-gray-900 ml-1"
                                    size={28}
                                />
                            </div>
                        </div>

                        {/* Video Controls Bar Mockup */}
                        <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full">
                            <div className="w-1/3 h-full bg-white rounded-full relative">
                                <div className="absolute right-0 -top-1 w-3 h-3 bg-white rounded-full border-2 border-gray-400"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CHALLENGE CARD --- */}
                <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                    <div className="flex gap-6">
                        {/* Icon Block */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                                <Target size={24} strokeWidth={2.5} />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-extrabold text-gray-900">
                                The Challenge
                            </h3>

                            <ul className="space-y-4">
                                {[
                                    "Low Digital Visibility",
                                    "Engagement Gap",
                                    "Conversion Barriers",
                                    "Content Saturation",
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-gray-500 font-semibold text-sm"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="text-purple-600 fill-purple-50"
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Badge({ text, color }: { text: string; color: string }) {
    return (
        <span
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${color}`}
        >
            {text}
        </span>
    );
}
