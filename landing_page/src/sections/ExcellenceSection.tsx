import { Handshake, Zap, Shield, Rocket, LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon; 
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: Handshake, 
    title: "Exclusive Access",
    description: "Gain VIP entry to premium content, events, and early product releases, tailored just for our top-tier users.",
  },
  {
    Icon: Zap, 
    title: "Seamless Integration",
    description: "Our platform connects effortlessly with your existing tools, ensuring a smooth, interruption-free workflow.",
  },
  {
    Icon: Shield, 
    title: "24/7 Premium Support",
    description: "Get immediate, round-the-clock assistance from a dedicated team of experts ready to solve your challenges.",
  },
  {
    Icon: Rocket, 
    title: "Data-Driven Insights",
    description: "Leverage advanced analytics and personalized reports to make smarter decisions and accelerate your growth.",
  },
];

const FeatureCard: React.FC<Feature> = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 shadow-md mb-6">
      <Icon className="w-8 h-8" aria-hidden="true" />
    </div>

    <h3 className="text-xl font-extrabold text-gray-900 mb-2">
      {title}
    </h3>

    <p className="text-base text-gray-600">
      {description}
    </p>
  </div>
);


const ExcellenceSection: React.FC = () => {
  return (

    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
      
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Backed by Excellence
          </h2>
        
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            We are committed to providing a top-tier service, backed by core principles that drive success for all our clients.
          </p>
        </div>

        {/* Features Grid: Responsive Layout 
            - grid-cols-1: Mobile (1 column)
            - sm:grid-cols-2: Tablet (2 columns)
            - lg:grid-cols-4: Desktop (4 columns)
        */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title} 
              Icon={feature.Icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;