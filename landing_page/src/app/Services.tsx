"use client";
import React from "react";

import { ServiceRow } from "@/sections/ServiceRow";
import { Globe, Megaphone, PenTool } from "lucide-react";

// Import your images here
// import socialImg from "../assets/images/social-media.jpg";
// import contentImg from "../assets/images/content-creation.jpg";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white pt-32">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    Our{" "}
                    <span className="text-[#8B5CF6]">Digital Marketing</span>{" "}
                    Services
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                    We help businesses grow their online presence through
                    strategic digital marketing solutions that drive real
                    results.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-20">
                {/* Social Media Marketing */}
                <ServiceRow
                    title="Social Media Marketing"
                    subtitle="Build community, engagement & loyalty."
                    description="We create social strategies that build authentic connections and drive meaningful engagement across all platforms."
                    features={[
                        "Increase brand engagement by 80%",
                        "Platform specific content strategies",
                        "Community management & monitoring",
                    ]}
                    image="/path-to-your-social-image.jpg"
                    imageRight={true}
                    icon={<Megaphone className="text-orange-500 w-8 h-8" />}
                />

                {/* Content Creation */}
                <ServiceRow
                    title="Content Creation & Management"
                    subtitle="Content + Videos that resonate & convert."
                    description="Our creative team produces stunning visuals that tell your brand story and drive conversions across all digital touchpoints."
                    features={[
                        "Pro photography & videography",
                        "Creative content management",
                        "Brand storytelling expertise",
                    ]}
                    image="/path-to-your-content-image.jpg"
                    imageRight={false}
                    icon={<PenTool className="text-purple-500 w-8 h-8" />}
                />

                {/* Website Design */}
                <ServiceRow
                    title="Website Design & Development"
                    subtitle="Clean, modern & fast-loading websites."
                    description="We build responsive websites that look great on any device while focusing on user experience and conversion optimization."
                    features={[
                        "Custom UI/UX designs",
                        "Lightning fast load speeds",
                        "SEO friendly architecture",
                    ]}
                    image="/path-to-your-web-image.jpg"
                    imageRight={true}
                    icon={<Globe className="text-orange-500 w-8 h-8" />}
                />
            </div>

            {/* CTA Section (From your Figma bottom orange/purple section) */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
                <div className="bg-[#6A0DAD] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="mb-10 text-white/90 font-medium">
                            Let&apos;s discuss how our services can help you
                            grow and succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                Get Free Consultation
                            </button>
                            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
