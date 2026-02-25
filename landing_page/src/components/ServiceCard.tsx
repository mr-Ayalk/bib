import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { MoveRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    linkUrl: string;
    thumbnailImage: StaticImageData;
    linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    linkUrl,
    thumbnailImage,
    linkText = "Learn More",
}) => {
    return (
        <div className="group bg-white dark:bg-slate-900/40 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200/60 dark:border-white/5 overflow-hidden flex flex-col h-full">
            {/* Reduced Image Height from h-64 to h-48 */}
            <div className="h-48 overflow-hidden relative">
                <Image
                    src={thumbnailImage}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Reduced Padding from p-10 to p-8 */}
            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#6A0DAD] dark:group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Compact Footer */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                    <Link
                        href={linkUrl}
                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#6A0DAD] dark:text-purple-400 group/link"
                    >
                        <span>{linkText}</span>
                        <div className="w-6 h-[1px] bg-[#6A0DAD] dark:bg-purple-400 group-hover/link:w-10 transition-all duration-300" />
                        <MoveRight
                            size={14}
                            className="group-hover/link:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;
