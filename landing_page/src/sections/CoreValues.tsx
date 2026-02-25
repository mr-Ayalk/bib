// components/CoreValues.tsx
import { Palette, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Creativity",
      desc: "We believe in pushing boundaries and thinking outside the box to deliver unique solutions.",
      icon: <Palette className="w-6 h-6 text-[#6A0DAD]" />,
    },
    {
      title: "Integrity",
      desc: "Transparency, honesty, and ethical practices are at the core of all our relationships.",
      icon: <ShieldCheck className="w-6 h-6 text-[#6A0DAD]" />,
    },
    {
      title: "Growth Mindset",
      desc: "We embrace continuous learning and adaptation to stay ahead in the digital world.",
      icon: <TrendingUp className="w-6 h-6 text-[#6A0DAD]" />,
    },
    {
      title: "Results-First",
      desc: "Every strategy and creative decision is driven by measurable outcomes and client success.",
      icon: <BarChart3 className="w-6 h-6 text-[#6A0DAD]" />,
    }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-[1233px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#6A0DAD] mb-4">Our Core Values</h2>
          <p className="text-gray-500">The principles that guide everything we do</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-[20px] border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}