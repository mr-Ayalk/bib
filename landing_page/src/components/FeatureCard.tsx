import React from "react";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
    // Restrict this to only valid image types
    iconSrc: string | StaticImageData;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    iconSrc,
    title,
    description,
}) => {
    const cardStyle =
        "shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300";

    return (
        <div className={`bg-white rounded-xl p-8 h-full ${cardStyle}`}>
            <div
                className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg "
                style={{ backgroundColor: "#F9F4FF" }}
            >
                <div className=" relative">
                    <Image
                        src={iconSrc}
                        alt={`${title} icon`}
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

            <p className="text-gray-600 text-base">{description}</p>
        </div>
    );
};

export default FeatureCard;
