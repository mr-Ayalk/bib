import { 
//   Target, 
//   Lightbulb, 
//   TrendingUp, 
//   BarChart3, 
//   Users, 
//   DollarSign,
  Palette,
  Megaphone,
  Layout,
  LineChart,
  Framer
} from "lucide-react";

export default function CaseStudyDetailStrategy() {
  return (
    <section className="py-20 bg-[#F9FAFB] px-4 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* ... Previous Header and Challenge sections ... */}

        {/* Our Strategy Section */}
        <div className="bg-white p-10 md:p-14 rounded-[32px] border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-2xl font-extrabold text-[#111827]">Our Strategy</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <StrategyItem 
              icon={<Palette size={20} />} 
              title="Viral Content Creation" 
              desc="Produced high-energy TikTok videos highlighting modern home aesthetics and functional furniture design." 
            />
            <StrategyItem 
              icon={<Layout size={20} />} 
              title="Social-to-Sales Funnel" 
              desc="Integrated strategic Social Media Marketing to convert viral reach into direct sales inquiries." 
            />
            <StrategyItem 
              icon={<Megaphone size={20} />} 
              title="Brand Identity Overhaul" 
              desc="Redesigned the brand's visual language to reflect luxury, comfort, and reliability." 
            />
            <StrategyItem 
              icon={<LineChart size={20} />} 
              title="User Journey Optimization" 
              desc="Streamlined the mobile ordering process to ensure a seamless transition from discovery to purchase." 
            />
          </div>

          {/* Divider and Tools Section */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h4 className="text-lg font-bold text-[#111827] mb-6">Tools & Platforms Used</h4>
            <div className="flex flex-wrap gap-4">
              <ToolBadge icon={<Framer size={14} className="text-[#A259FF]"/>} label="Figma" />
              <ToolBadge 
                icon={<div className="w-4 h-4 bg-[#0668E1] rounded-full flex items-center justify-center text-[10px] text-white font-bold">f</div>} 
                label="Meta Ads Manager" 
              />
              <ToolBadge 
                icon={<div className="w-4 h-4 bg-[#4285F4] rounded-full flex items-center justify-center text-[10px] text-white font-bold">G</div>} 
                label="Google Analytics" 
              />
            </div>
          </div>
        </div>

        {/* ... Purple Measurable Results section ... */}

      </div>
    </section>
  );
}

function StrategyItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-5">
      {/* Icon Container: Light purple rounded square */}
      <div className="flex-shrink-0 w-12 h-12 bg-[#F3E8FF] rounded-2xl flex items-center justify-center text-[#6A0DAD]">
        {icon}
      </div>
      <div className="space-y-1.5">
        <h4 className="font-bold text-[17px] text-[#111827]">{title}</h4>
        <p className="text-[14px] leading-relaxed text-gray-500 font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ToolBadge({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-[#F9FAFB] border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
      {icon}
      <span className="text-sm font-bold text-[#374151]">{label}</span>
    </div>
  );
}