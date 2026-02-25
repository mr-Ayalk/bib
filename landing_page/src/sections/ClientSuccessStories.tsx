import skillBridgeLogo from "../assets/images/skillBridgelogo.png";
import beltech from "../assets/images/beltechlogo.png";
import sofiFurnitureImage from "../assets/images/sofiFerniture.png";
import FinanceImage from "../assets/images/aminhospitallogo.png";
import galaxyFurniture from "../assets/images/galaxyfurniture.png";
import makiImage from "../assets/images/maki.png";
import sebenImage from "../assets/images/sebenlogo.png";
import Image from "next/image";

const clientLogos = [
    {
        src: skillBridgeLogo,
        alt: "Flintstone",
        radius: 245,
        angle: -140,
        size: 110, // Added custom size
    },
    {
        src: sebenImage,
        alt: "Seben",
        radius: 100,
        angle: -100,
        size: 70, // Smaller size
    },
    {
        src: FinanceImage,
        alt: "Real Estate",
        radius: 245,
        angle: -90,
        size: 120, // Larger size
    },
    {
        src: makiImage,
        alt: "Ethio Telecom",
        radius: 245,
        angle: -40,
        size: 90,
    },
    {
        src: galaxyFurniture,
        alt: "Meta",
        radius: 245,
        angle: 90,
        size: 100,
    },
    {
        src: beltech,
        alt: "Help",
        radius: 170,
        angle: 150,
        size: 100,
    },
    {
        src: sofiFurnitureImage,
        alt: "Finance",
        radius: 170,
        angle: 10,
        size: 75,
    },
];

export default function ClientSuccessStories() {
    const purpleAccent = "text-[#6A0DAD]";
    const contentMaxWidth = "max-w-[1233px]";

    // Function to calculate position with a "scale" factor for responsiveness
    const getLogoPosition = (
        radius: number,
        angle: number,
        scale: number = 1
    ) => {
        const radians = (angle * Math.PI) / 180;
        // Apply the scale to the radius
        const x = Math.cos(radians) * (radius * scale);
        const y = Math.sin(radians) * (radius * scale);

        return {
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        };
    };

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
            <div className={`mx-auto px-6 md:px-12 w-full ${contentMaxWidth}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT COLUMN: Content */}
                    <div className="text-left z-30">
                        <div className="inline-block px-4 py-1.5 rounded-full mb-6 bg-[#F9F4FF]">
                            <span
                                className={`text-xs font-semibold ${purpleAccent} uppercase tracking-widest`}
                            >
                                Trusted Worldwide
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Client success{" "}
                            <span className={purpleAccent}>stories</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 max-w-[550px]">
                            Join over 500+ companies that trust us to deliver
                            exceptional results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                className="text-white px-8 h-12 rounded-lg font-semibold shadow-xl bg-gradient-to-right from-[#FF8C00] to-[#F06A35] hover:opacity-90 transition-all"
                                style={{
                                    background:
                                        "linear-gradient(to right, #FF8C00, #F06A35)",
                                }}
                            >
                                View All Clients
                            </button>
                            <button className="text-gray-900 px-8 h-12 rounded-lg font-semibold border border-gray-300 bg-white hover:bg-gray-50 transition-all">
                                Case Studies
                            </button>
                        </div>

                        {/* Stats grid: 3 columns on small, responsive gaps */}
                        <div className="grid grid-cols-3 gap-4 md:gap-12 border-t border-gray-100 pt-8">
                            <StatBlock
                                label="Happy Clients"
                                value="500+"
                                accentColor={purpleAccent}
                            />
                            <StatBlock
                                label="Satisfaction"
                                value="98%"
                                accentColor={purpleAccent}
                            />
                            <StatBlock
                                label="Support"
                                value="24/7"
                                accentColor={purpleAccent}
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Orbit (Hidden on extra small, scaled on medium+) */}
                    <div className="relative h-[450px] sm:h-[600px] w-full flex items-center justify-center scale-[0.7] sm:scale-90 lg:scale-100">
                        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
                            {/* Orbit Rings (Scaled with container) */}
                            <div className="absolute inset-0 border border-[#6A0DAD]/20 rounded-full" />
                            <div className="absolute inset-[15%] border border-[#6A0DAD]/20 rounded-full" />
                            <div className="absolute inset-[30%] border border-[#6A0DAD]/20 rounded-full" />

                            {/* Central Hub */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl z-20 bg-gradient-to-br from-[#6A0DAD] to-[#9370DB]">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-white">
                                    <CrownIcon />
                                </div>
                            </div>

                            {/* Logos: Positioned using a scale factor for smaller screens */}
                            {clientLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="absolute bg-white rounded-full shadow-lg flex items-center justify-center p-1.5 sm:p-2 z-10 hover:scale-110 transition-transform duration-300"
                                    style={{
                                        ...getLogoPosition(
                                            logo.radius,
                                            logo.angle,
                                            0.8 // Scaling factor for the orbit radius on smaller screens
                                        ),
                                        width: `calc(${logo.size}px * 0.8)`,
                                        height: `calc(${logo.size}px * 0.8)`,
                                    }}
                                >
                                    <div className="relative w-full h-full bg-gray-50 rounded-full overflow-hidden">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            fill
                                            className="object-contain p-1"
                                            sizes="120px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Sub-components to keep clean
function StatBlock({
    label,
    value,
    accentColor,
}: {
    label: string;
    value: string;
    accentColor: string;
}) {
    return (
        <div className="flex flex-col">
            <span
                className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${accentColor}`}
            >
                {value}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">
                {label}
            </span>
        </div>
    );
}

function CrownIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m2 4 3 12h14l3-12-6 2-4-8-4 8-6-2z" />
            <path d="M7 21h10" />
        </svg>
    );
}
