"use client";

import { PricingCard } from "@/components/PricingCard";
import React, { useState } from "react";

const pricingData = [
    {
        planName: "Starter",
        description: "Best for new businesses or launching a pilot project.",
        priceMonthly: "$299",
        priceAnnually: "$2900",
        isFeatured: false,
        gradientStart: "#6A0DAD",
        gradientEnd: "#9370DB",
        features: [
            { text: "1 Social Media Platform", included: true },
            { text: "8 Graphics/Month", included: true },
            { text: "Basic Content Strategy", included: true },
            { text: "Community Management", included: true },
            { text: "Monthly Analytics Report", included: true },
            { text: "Ad Campaign Budget Management", included: false },
            { text: "24/7 Priority Support", included: false },
        ],
    },
    {
        planName: "Pro",
        description: "Our most popular choice for businesses ready to scale.",
        priceMonthly: "$799",
        priceAnnually: "$8000",
        isFeatured: true,
        gradientStart: "#FF8C00",
        gradientEnd: "#F06A35",
        features: [
            { text: "3 Social Media Platforms", included: true },
            { text: "20 Graphics/Month + Video", included: true },
            { text: "Advanced Content Strategy", included: true },
            { text: "Community Management", included: true },
            { text: "Weekly Performance Meeting", included: true },
            { text: "Ad Campaign Budget Management", included: true },
            { text: "24/7 Priority Support", included: false },
        ],
    },
    {
        planName: "Flex",
        description: "Custom solutions for large enterprises and unique goals.",
        priceMonthly: "$1499",
        priceAnnually: "$15000",
        isFeatured: false,
        gradientStart: "#00BFFF",
        gradientEnd: "#00CED1",
        features: [
            { text: "All Social Media Platforms", included: true },
            { text: "Unlimited Content Production", included: true },
            { text: "Full Funnel Strategy & SEO", included: true },
            { text: "Dedicated Account Manager", included: true },
            { text: "Weekly Performance Meeting", included: true },
            { text: "Ad Campaign Budget Management", included: true },
            { text: "24/7 Priority Support", included: true },
        ],
    },
];

export default function PricingPlans() {
    const [isMonthly, setIsMonthly] = useState(true);

    const purpleAccent = "text-[#6A0DAD]";
    const orangeAccent = "text-[#FF8C00]";

    const contentMaxWidth = "max-w-[1233px]";

    return (
        <section className="py-24 md:py-32 bg-gray-50/50">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <span
                        className={`text-sm font-bold ${orangeAccent} uppercase tracking-widest`}
                    >
                        Our Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        EYOHA DIGITALS{" "}
                        <span className={purpleAccent}>PACKAGES</span>
                    </h2>

                    <div className="inline-flex p-1 rounded-full bg-gray-200">
                        <button
                            onClick={() => setIsMonthly(true)}
                            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                isMonthly
                                    ? "bg-white shadow-md text-gray-900"
                                    : "text-gray-600"
                            }`}
                        >
                            Monthly Billing
                        </button>
                        <button
                            onClick={() => setIsMonthly(false)}
                            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                !isMonthly
                                    ? "bg-white shadow-md text-gray-900"
                                    : "text-gray-600"
                            }`}
                        >
                            Annual Billing
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    {pricingData.map((plan, index) => (
                        // Inside PricingPlans.tsx map function:
                        <PricingCard
                            key={index}
                            title={plan.planName} // Corrected prop name
                            features={plan.features} // Now matches Feature[] type
                            buttonText={isMonthly ? "Get Started" : "Save Now"} // Added required buttonText
                            isFeatured={plan.isFeatured}
                            // These props need to be added to PricingCardProps if you want to use them:
                            gradientStart={plan.gradientStart}
                            gradientEnd={plan.gradientEnd}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
