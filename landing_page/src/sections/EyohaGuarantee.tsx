import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Import your assets
import galaxyfurniture from "../assets/images/galaxyfurniture.png";
import sofifurniture from "../assets/images/sofiFerniture.png";
import maki from "../assets/images/maki.png";
import amin from "../assets/images/aminhospitallogo.png";
import Skillbridge from "../assets/images/skillBridgelogo.png";
import beltech from "../assets/images/beltechlogo.png";

interface ClientCardProps {
    id: string;
    logo: string | StaticImageData;
    companyName: string;
    subcompanyName: string;
    testimonial: string;
    category: string;
    accentColor: string;
}

const clientData: ClientCardProps[] = [
    {
        id: "galaxyFurniture",
        logo: galaxyfurniture,
        companyName: "Galaxy Furniture",
        subcompanyName: "Interior and Furniture",
        testimonial:
            '"Exceptional digital transformation that increased our conversion rate by 340%"',
        category: "E-commerce Platform",
        accentColor: "orange",
    },
    {
        id: "safeFurniture",
        logo: sofifurniture,
        companyName: "Safe Furniture",
        subcompanyName: "Interior and Furniture",
        testimonial:
            '"Outstanding mobile app development that revolutionized our customer experience"',
        category: "Mobile Banking App",
        accentColor: "purple",
    },
    {
        id: "makiInterior",
        logo: maki,
        companyName: "Maki Interior Design",
        subcompanyName: "Interior and Furniture",
        testimonial:
            '"Outstanding mobile app development that revolutionized our customer experience"',
        category: "Mobile Banking App",
        accentColor: "purple",
    },
    {
        id: "aminHospital",
        logo: amin,
        companyName: "Amin Hospital",
        subcompanyName: "Healthcare Services",
        testimonial:
            '"Exceptional digital transformation that increased our conversion rate by 340%"',
        category: "E-commerce Platform",
        accentColor: "orange",
    },
    {
        id: "skillbridge",
        logo: Skillbridge,
        companyName: "Skillbridge Institute of Technology",
        subcompanyName: "Education",
        testimonial:
            '"Exceptional digital transformation that increased our conversion rate by 340%"',
        category: "E-commerce Platform",
        accentColor: "orange",
    },
    {
        id: "beltechSolutions",
        logo: beltech,
        companyName: "Beitech Solutions",
        subcompanyName: "Education",
        testimonial:
            '"Exceptional digital transformation that increased our conversion rate by 340%"',
        category: "E-commerce Platform",
        accentColor: "orange",
    },
];

const ClientCard = ({
    id,
    logo,
    companyName,
    subcompanyName,
    testimonial,
    category,
    accentColor,
}: ClientCardProps) => {
    const dotColor =
        accentColor === "orange" ? "bg-orange-500" : "bg-purple-500";
    const gradient =
        accentColor === "orange"
            ? "from-purple-500 to-orange-400"
            : "from-orange-400 to-purple-500";

    return (
        <div className="relative bg-white rounded-2xl px-8 pb-8 pt-14 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center text-center border border-gray-50 transition-transform hover:scale-[1.02] mt-10">
            {/* Logo Section */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 z-10">
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-white shadow-lg relative">
                    <Image
                        src={logo}
                        alt={companyName}
                        fill
                        className="object-contain rounded-full p-2"
                    />
                </div>
            </div>

            <div
                className={`absolute top-6 right-6 w-2 h-2 rounded-full ${dotColor}`}
            />

            <h3 className="text-[#7C3AED] font-bold text-lg mb-1">
                {companyName}
            </h3>
            <p className="text-gray-400 text-sm mb-6 font-medium">
                {subcompanyName}
            </p>

            <p className="text-gray-500 text-sm leading-relaxed italic mb-8 px-4">
                {testimonial}
            </p>

            <div className="w-full mb-8 flex items-center gap-3 mt-auto">
                <div
                    className={`h-1 flex-grow rounded-full bg-gradient-to-r ${gradient}`}
                />
                <span className="text-[10px] uppercase tracking-wider text-gray-400 whitespace-nowrap font-semibold">
                    {category}
                </span>
            </div>

            {/* UPDATED: Link Component replacing the static button */}
            <Link
                href={`/Details/${id}`}
                className="inline-block bg-[#A855F7] hover:bg-[#9333EA] text-white px-10 py-2.5 rounded-lg font-semibold text-sm transition-colors text-center w-full shadow-md hover:shadow-purple-200"
            >
                See Details
            </Link>
        </div>
    );
};

export default function ClientSection() {
    return (
        <section
            className="bg-[#FDFDFD] py-20 px-4 sm:px-6 lg:px-8"
            id="FeaturedClients"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-6 h-[2px] bg-orange-500" />
                        <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                            Featured Clients
                        </span>
                        <div className="w-6 h-[2px] bg-orange-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
                        We&apos;ve partnered with innovative companies to
                        deliver exceptional digital experiences that drive
                        growth and success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {clientData.map((client, idx) => (
                        <ClientCard key={idx} {...client} />
                    ))}
                </div>

                {/* <div className="flex justify-center">
                    <button className="bg-[#FF6600] hover:bg-[#E66000] text-white px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-200 md:w-[316px]">
                        See All
                    </button>
                </div> */}
            </div>
        </section>
    );
}
