import Image from "next/image";
import { Briefcase, Heart, GraduationCap, Home } from "lucide-react"; // Optional: Using lucide-react for icons
import portfolio21 from "../assets/images/portfolio21.png";
import portfolio22 from "../assets/images/portfolio22.png";
import portfolio23 from "../assets/images/portfolio23.png";
import portfolio24 from "../assets/images/portfolio24.png";
import portfolio25 from "../assets/images/portfolio25.png";
import portfolio26 from "../assets/images/portfolio26.png";
const projects = [
    {
        title: "Amin General Hospital",
        category: "Healthcare",
        subCategory: "Content Development",
        desc: "Creating high-impact medical awareness and patient education content to boost brand visibility on TikTok.",
        stats: "150k increase engagement",
        image: portfolio21, // Replace with your actual paths
        icon: <Heart size={16} className="text-purple-700" />,
    },
    {
        title: "Skillbridge Institute of Technology",
        category: "Education",
        subCategory: "Branding and Educational Content Marketing",
        desc: "Building an engaged digital learning community through professional branding and educational content.",
        stats: "4,400+ students enrolled",
        image: portfolio22,
        icon: <GraduationCap size={16} className="text-purple-700" />,
    },
    {
        title: "Seben Dental Clinic",
        category: "Healthcare",
        subCategory: "Content Development",
        desc: "High-impact visual storytelling showcasing premium clinical interiors and dental care to drive brand reach.",
        stats: "2.5M+ Views",
        image: portfolio23,
        icon: <Briefcase size={16} className="text-purple-700" />,
    },
    {
        title: "Safe Furniture",
        category: "Interior and Furniture",
        subCategory: "Branding and Social Media Marketing",
        desc: "Strategic brand positioning and viral TikTok marketing to drive high-volume furniture sales.",
        stats: "200k+ increase in engagement",
        image: portfolio24,
        icon: <Home size={16} className="text-purple-700" />,
    },
    {
        title: "Maki Interior Design",
        category: "Interior and Furniture",
        subCategory:
            "Property Promotion, Lead Generation through Meta Ad Campaigns.",
        desc: "Driving premium lead generation and property sales through targeted Meta Ad campaigns.",
        stats: "271K Impression",
        image: portfolio25,
        icon: <Home size={16} className="text-purple-700" />,
    },
    {
        title: "Beltech Solutions",
        category: "Education",
        subCategory: "Branding and Educational Content Marketing",
        desc: "Professional branding and educational content to build B2B authority and reach.",
        stats: "450+ Professional Reach one month",
        image: portfolio26,
        icon: <GraduationCap size={16} className="text-purple-700" />,
    },
];

export default function ProjectGrid() {
    return (
        <section className="py-16 px-4 md:px-8 bg-[#FDFDFF]">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-8 flex flex-col flex-grow">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    {project.icon}
                                </div>
                                <div>
                                    <div className="text-[13px] font-black text-gray-900 leading-none">
                                        {project.category}
                                    </div>
                                    <div className="text-[11px] text-gray-400 mt-1">
                                        {project.subCategory}
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-[22px] font-bold mb-3 text-[#6A0DAD] leading-tight">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-[14px] mb-6 leading-relaxed flex-grow">
                                {project.desc}
                            </p>

                            {/* Stats */}
                            <div className="text-[#FF6B00] font-extrabold text-[15px] mt-auto">
                                {project.stats}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
