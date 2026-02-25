import React from "react";
import Image from "next/image";

interface GuaranteeCardProps {
    iconSrc: string;
    title: string;
    description: string;
    gradientStart: string;
    gradientEnd: string;
}

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({
    iconSrc,
    title,
    description,
    gradientStart,
    gradientEnd,
}) => {
    const cardBase =
        "bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-full";

    const titleColor = "text-[#6A0DAD]";

    return (
        <div className={cardBase}>
            <div
                className="w-24 h-24 relative flex items-center justify-center rounded-full mb-6 p-1"
                style={{
                    background: `conic-gradient(from 0deg, ${gradientStart}, ${gradientEnd}, ${gradientStart})`,
                }}
            >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-3">
                    <Image
                        src={iconSrc}
                        alt={`${title} icon`}
                        width={48}
                        height={48}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>

            <h3 className={`text-xl font-bold ${titleColor} mb-2`}>{title}</h3>

            <p className="text-gray-600 text-base flex-grow">{description}</p>

            <div
                className="w-10 h-0.5 mt-4"
                style={{ backgroundColor: gradientStart }}
            ></div>
        </div>
    );
};

export default GuaranteeCard;
