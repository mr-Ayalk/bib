import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  
  return (
    <div
      className={twMerge(
        // Flex container with brand-aligned gradient and rounded shape
        "inline-flex items-center gap-2 border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest transition-all duration-500",
        // Gradient background: Purple to Orange
        "bg-gradient-to-r from-[#6A0DAD] to-[#FF6600]",
        // Text styling: Bold, white, and small
        "text-white font-black text-[10px] md:text-xs shadow-lg shadow-purple-500/20",
        className
      )}
      {...otherProps}
    >
      {/* Decorative Star Icon (retained from original project design) */}
      <span className="text-orange-200 text-sm animate-pulse">&#10038;</span>
      
      {/* The Tag Label */}
      <span className="leading-none">{children}</span>
    </div>
  );
}