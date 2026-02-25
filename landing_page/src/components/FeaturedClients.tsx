import { ClientCard } from "./ClientCard";

export default function FeaturedClients() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ClientCard
                        id="skillbridge" // Required by interface
                        companyName="TechFlow Solutions"
                        subcompanyName="TechFlow Solutions" // Required by interface
                        tagline="Innovation at Scale"
                        logo="/path-to-logo.png"
                        testimonial='"Exceptional digital transformation that increased our conversion rate by 340%"'
                        category="E-commerce Platform"
                        accentColor="orange" // Interface says accentColor, not accentTheme
                    />

                    <ClientCard
                        id="galaxyFurniture" // Required by interface
                        companyName="FinanceCore Group"
                        subcompanyName="FinanceCore Group" // Required by interface
                        tagline="Future of Finance"
                        logo="/path-to-logo-2.png"
                        testimonial='"Outstanding mobile app development that revolutionized our customer experience"'
                        category="Mobile Banking App"
                        accentColor="purple" // Interface says accentColor, not accentTheme
                    />
                </div>
            </div>
        </section>
    );
}
