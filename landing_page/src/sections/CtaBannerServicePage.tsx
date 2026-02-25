import React from 'react';
import Link from 'next/link';

const CtaBannerServicePage = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1233px] mx-auto">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-[#6A0DAD] via-[#B530A4] to-[#FF6B00] px-8 py-12 md:py-16 text-center shadow-2xl">
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Let&apos;s discuss how our services can help your business grow and thrive online.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact">
                <button className="bg-white text-[#6A0DAD] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto shadow-md">
                  Get Free Consultation
                </button>
              </Link>
              
              <Link href="/Portfolio">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* Optional: Subtle background glow for extra depth like in the screenshot */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerServicePage ;