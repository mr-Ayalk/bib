import React from "react";
import { Quote } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface TestimonialData {
    quote: string;
    author: string;
    role: string;
    avatar: string | StaticImageData;
}

interface TestimonialProps {
    testimonial: TestimonialData;
    accentColor?: string;
}

export const Testimonial = ({
    testimonial,
    accentColor = "#F97316",
}: TestimonialProps) => (
    <section className="py-24 px-6 bg-[#E5E7EB]">
        <div className="max-w-4xl mx-auto rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center relative bg-white">
            {/* Quote Icon - Positioned exactly half-way off the top border */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-200 bg-[#F97316]">
                <Quote size={22} fill="#fff" className="opacity-90" />
            </div>

            {/* Main Quote Text */}
            <p className="text-[#4B5563] text-lg md:text-2xl font-medium italic leading-[1.6] mb-10">
                &quot;{testimonial.quote}&quot;
            </p>

            {/* Author Section */}
            <div className="flex flex-row items-center justify-center gap-4">
                {/* Profile Image with Accent Border */}
                <div
                    className="relative w-20 h-20 rounded-full border-[3px] p-1 overflow-hidden"
                    style={{ borderColor: accentColor }}
                >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100">
                        <Image
                            alt={testimonial.author}
                            src={testimonial.avatar}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Name and Role */}
                <div className="text-center">
                    <h4 className="font-[900] text-gray-900 text-xl tracking-tight mb-1">
                        {testimonial.author}
                    </h4>
                    <p className="text-[19px] text-gray-400 font-extrabold uppercase tracking-[0.2em]">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    </section>
);
