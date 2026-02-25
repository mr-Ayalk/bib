"use client";
import React from "react";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
    // Exact location for 5 Kilo Assembly of God
    const mapEmbedUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.504624747761!2d38.7612!3d9.0347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859345c2259f%3A0x63009774677271e!2sAddis%20Ababa%20Assembly%20of%20God%20Church!5e0!3m2!1sen!2set!4v1715600000000!5m2!1sen!2set";

    return (
        <section className="py-20 bg-slate-50 dark:bg-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4">
                        <div className="inline-flex items-center gap-2 text-[#FF6600] font-black text-[10px] uppercase tracking-widest mb-4">
                            <MapPin size={14} /> Our Gathering Place
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
                            Visit <span className="text-[#6A0DAD]">Us</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            We meet regularly for fellowship and study. Whether
                            you are a regular or a first-time visitor, our doors
                            are always open.
                        </p>

                        <div className="space-y-4">
                            <div className="p-5 bg-white dark:bg-[#0A0A0A] rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                                <p className="font-bold text-slate-900 dark:text-white mb-1">
                                    Addis Ababa Assembly Church
                                </p>
                                <p className="text-sm text-slate-500">
                                    5 Kilo, Near AAiT Campus
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/..."
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-[#6A0DAD] text-xs font-bold mt-4 hover:underline"
                                >
                                    Get Directions <Navigation size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* The Map Frame */}
                    <div className="lg:col-span-8 h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#111] relative">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale dark:contrast-125 dark:brightness-75"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
