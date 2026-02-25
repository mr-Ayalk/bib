import { PricingCard } from "@/components/PricingCard";

const packages = [
    {
        title: "Basic",
        buttonText: "Get Started",
        features: [
            { text: "Video quantity: 3 Videos per week", included: true },
            { text: "Platforms: TikTok, Fb, and IG", included: true },
            { text: "Graphic Posts: 2 per week", included: true },
            {
                text: "Social Media Management + Audience Engagement",
                included: true,
            },
            {
                text: "Professional Video Production two days a month",
                included: true,
            },
            { text: "Professional Video Editing", included: true },
            { text: "Monthly Analytics and Report", included: true },
            { text: "Video Host", included: true },
        ],
    },
    {
        title: "Standard",
        buttonText: "Choose Standard",
        isFeatured: true, // You can uncomment this now
        features: [
            { text: "Video quantity: 5 Videos per week", included: true },
            { text: "Platforms: TikTok, Fb, and IG", included: true },
            { text: "Graphic Posts: 5 per week", included: true },
            {
                text: "Social Media Management + Audience Engagement",
                included: true,
            },
            {
                text: "Professional Video Production two days a month",
                included: true,
            },
            { text: "Professional Video Editing", included: true },
            { text: "Monthly Analytics and Report", included: true },
            { text: "Video Host", included: true },
            { text: "Paid Ad Management", included: true },
        ],
    },
    {
        title: "Premium",
        buttonText: "Go Premium",
        features: [
            { text: "Video quantity: 6 Videos per week", included: true },
            { text: "Platforms: TikTok, Fb, and IG", included: true },
            { text: "Graphic Posts: 5 per week", included: true },
            { text: "Management", included: true },
            {
                text: "Professional Video Production two days a month",
                included: true,
            },
            { text: "Professional Video Editing", included: true },
            { text: "Monthly Analytics and Report", included: true },
            { text: "Video Host", included: true },
            { text: "Paid Ad Management", included: true },
        ],
    },
];

export default function PricingSection() {
    return (
        <section className="bg-white py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-black text-4xl font-black mb-2 tracking-tight uppercase">
                    Eyoha Digitals
                </h2>
                <h3 className="text-[#8B5CF6] text-4xl font-black mb-20 uppercase">
                    Packages
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, idx) => (
                        <PricingCard
                            key={idx}
                            title={pkg.title}
                            features={pkg.features}
                            buttonText={pkg.buttonText}
                            isFeatured={pkg.isFeatured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
