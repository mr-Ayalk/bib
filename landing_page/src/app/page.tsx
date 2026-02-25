import AboutSection1 from "@/sections/AboutUs";
import CtaBanner from "@/sections/CtaBanner";
import CtaSection from "@/sections/CtaSection";
import Faqs from "@/sections/Faqs";

import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import MaterialsSection from "@/sections/MaterialsSection";

import ServicesSection from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import TournamentVictory from "@/sections/TournamentVictory";
import Upcoming from "@/sections/Upcoming";

export default function Home() {
    return (
        <div className="w-full overflow-x-hidden dark:bg-black relative">
            <Hero />
            <AboutSection1 />
            <ServicesSection />
            <CtaBanner />
            <Upcoming />

            <MaterialsSection />
            <TournamentVictory />
            <CtaSection />

            <Testimonials />
            <Faqs />
            <Footer />
        </div>
    );
}
