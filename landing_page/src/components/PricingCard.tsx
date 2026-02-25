import React from "react";
import { CheckCircle2, XCircle } from "lucide-react"; // Added XCircle for non-included items

interface Feature {
    text: string;
    included: boolean;
}

interface PricingCardProps {
    title: string; // Changed from planName to match your usage
    features: Feature[]; // Changed from string[] to Feature[]
    buttonText: string;
    isFeatured?: boolean;
    // Add these if you want to use them, otherwise remove from parent call
    gradientStart?: string;
    gradientEnd?: string;
}

// export const PricingCard: React.FC<PricingCardProps> = ({
//     title,
//     features,
//     buttonText,
//     isFeatured = false,
// }) => {
//     return (
//         <div
//             className={`
//             relative flex flex-col items-center p-8 rounded-[2.5rem] transition-all duration-300 cursor-default
//             bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4
//             ${
//                 isFeatured
//                     ? "border-[#FF6B00] scale-105 z-10"
//                     : "border-transparent hover:border-[#6A0DAD] hover:scale-105 hover:z-10"
//             }
//             group
//         `}
//         >
//             <div
//                 className={`
//         absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#FF6B00]
//         transition-opacity duration-300
//         ${
//             isFeatured
//                 ? "opacity-100 hover:border-[#6A0DAD]"
//                 : "opacity-0 group-hover:opacity-100"
//         }
//       `}
//             >

//                 <span className="text-white text-[10px] font-black uppercase tracking-widest">
//                     Most Popular
//                 </span>
//             </div>

//             <h3 className="text-[#8B5CF6] text-3xl font-bold mb-10 mt-4">
//                 {title}
//             </h3>

//             <ul className="flex-grow space-y-4 w-full mb-10">
//                 {features.map((feature, idx) => (
//                     <li
//                         key={idx}
//                         className={`flex items-start gap-3 text-left ${
//                             !feature.included ? "opacity-40" : ""
//                         }`}
//                     >
//                         {feature.included ? (
//                             <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
//                         ) : (
//                             <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
//                         )}
//                         <span className="text-gray-500 text-sm font-medium leading-tight">
//                             {feature.text}
//                         </span>
//                     </li>
//                 ))}
//             </ul>

//             <button
//                 className={`
//                 w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300
//                 ${
//                     isFeatured
//                         ? "bg-[#FF6B00] text-white shadow-lg shadow-orange-200"
//                         : "bg-[#7C3AED] text-white group-hover:bg-[#FF6B00] group-hover:shadow-orange-200"
//                 }
//             `}
//             >
//                 {buttonText}
//             </button>
//         </div>
//     );
// };
export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    features,
    buttonText,
    isFeatured = false,
}) => {
    return (
        <div
            className={`
            relative flex flex-col items-center p-8 rounded-[2.5rem] transition-all duration-300 cursor-default
            bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4
            ${
                isFeatured
                    ? "border-[#FF6B00] scale-105 z-10 hover:scale-[1.08]" // Featured: starts large, grows slightly more on hover
                    : "border-transparent hover:border-[#6A0DAD] hover:scale-105 hover:z-10" // Non-featured: grows to standard 105
            }
            group
        `}
        >
            {/* Only show the badge if it is the featured card. 
               This prevents it from appearing on non-featured cards during hover.
            */}
            {isFeatured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#FF6B00] shadow-md">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">
                        Most Popular
                    </span>
                </div>
            )}

            <h3 className="text-[#8B5CF6] text-3xl font-bold mb-10 mt-4">
                {title}
            </h3>

            <ul className="flex-grow space-y-4 w-full mb-10">
                {features.map((feature, idx) => (
                    <li
                        key={idx}
                        className={`flex items-start gap-3 text-left ${
                            !feature.included ? "opacity-40" : ""
                        }`}
                    >
                        {feature.included ? (
                            <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                        ) : (
                            <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        )}
                        <span className="text-gray-500 text-sm font-medium leading-tight">
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                className={`
                w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300
                ${
                    isFeatured
                        ? "bg-[#FF6B00] text-white shadow-lg shadow-orange-200"
                        : "bg-[#7C3AED] text-white group-hover:bg-[#FF6B00] group-hover:shadow-orange-200"
                }
            `}
            >
                {buttonText}
            </button>
        </div>
    );
};
