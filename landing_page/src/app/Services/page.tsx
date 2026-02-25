import React from "react";
import service1Image from "../../assets/images/serviceImage.png";
import service1Image2 from "../../assets/images/serviceImage2.png";
import service1Image3 from "../../assets/images/serviceImage3.png";
import service1Image4 from "../../assets/images/serviceImage4.png";
import service1Image5 from "../../assets/images/serviceImage5.png";
import service1Image6 from "../../assets/images/serviceImage6.png";
import Footer from "@/sections/Footer";
import { ServiceRow } from "@/sections/ServiceRow";
import Navbar2 from "@/sections/Navbar2";
import CtaBannerServicePage from "@/sections/CtaBannerServicePage";
import {
    // Globe,
    // Layout,
    Megaphone,
    MonitorSpeaker,
    Palette,
    PenTool,
    SearchCheck,
    TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="bg-white text-gray-900">
            <Navbar2 />

            {/* Main Content Area */}
            <main className="pt-32 pb-20">
                {/* Hero Header */}
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Our{" "}
                        <span className="text-[#8B5CF6]">
                            Digital Marketing
                        </span>{" "}
                        Services
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        We help businesses grow their online presence through
                        strategic digital marketing solutions that drive real
                        results.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    {/* Social Media Marketing Section */}
                    <ServiceRow
                        title="Social Media Marketing"
                        subtitle="Build community, engagement & loyalty."
                        description="We create social strategies that build authentic connections and drive meaningful engagement across all platforms."
                        features={[
                            "Increase brand engagement by 80%",
                            "Platform specific content strategies",
                            "Community management",
                        ]}
                        image={service1Image} // Add your image path
                        imageRight={false}
                        icon={<Megaphone className="text-orange-500 w-8 h-8" />}
                    />
                    {/* Content Creation Section */}
                    <ServiceRow
                        title="Content Creation & Management"
                        subtitle="Content + Videos that resonate & convert."
                        description="Our creative team produces stunning visuals that tell your brand story and drive conversions."
                        features={[
                            "Pro photography & videography",
                            "Creative management",
                            "Brand storytelling",
                        ]}
                        image={service1Image2}
                        imageRight={true}
                        icon={<PenTool className="text-purple-500 w-8 h-8" />}
                    />
                    {/* Website Section */}
                    <ServiceRow
                        title="Paid Advertising"
                        subtitle="Targeted Google, Meta, and TikTok campaigns that drive ROI."
                        description="We create precision-targeted campaigns with advanced ROI tracking 
that maximize your advertising investment across all major platforms."
                        features={[
                            "Multi-platform campaign management",
                            "Advanced audience targeting",
                            "Real-time optimization",
                        ]}
                        image={service1Image3}
                        imageRight={false}
                        icon={
                            <TrendingUp className="text-orange-500 w-8 h-8" />
                        }
                    />
                    {/* Content Creation Section */}
                    <ServiceRow
                        title="Brand Identity & Graphic Design"
                        subtitle="Logo, style guides, and creative assets."
                        description="We create memorable visual identities that deliver a cohesive brand experience across every customer touchpoint."
                        features={[
                            "Complete brand identity packages",
                            "Comprehensive style guides",
                            "Marketing collateral design",
                        ]}
                        image={service1Image4}
                        imageRight={true}
                        icon={<Palette className="text-orange-500 w-8 h-8" />}
                    />
                    {/* Website Section */}
                    <ServiceRow
                        title="Complete Web Solutions"
                        subtitle="Clean, modern & fast-loading websites."
                        description="We build responsive websites focusing on user experience and conversion optimization."
                        features={[
                            "Custom UI/UX designs",
                            "SEO friendly architecture",
                            "Fast loading speeds",
                        ]}
                        image={service1Image5}
                        imageRight={false}
                        icon={
                            <MonitorSpeaker className="text-orange-500 w-8 h-8" />
                        }
                    />{" "}
                    <ServiceRow
                        title="SEO + Online Presence"
                        subtitle="Local listings, Google Maps, site security, and more."
                        description="We optimize your complete online presence to dominate search rankings
 and ensure customers find you first across all platforms."
                        features={[
                            "Complete SEO optimization",
                            "Local search domination",
                            "Technical SEO & security",
                        ]}
                        image={service1Image6}
                        imageRight={true}
                        icon={
                            <SearchCheck className="text-orange-500 w-8 h-8" />
                        }
                    />
                </div>
            </main>
            <CtaBannerServicePage />

            <Footer />
        </div>
    );
}
