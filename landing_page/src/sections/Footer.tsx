"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Send, Video, ArrowRight } from "lucide-react";

import logoImage from "../assets/images/fellow_logo.png";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "#upcoming" },
    { name: "About the Study", href: "#about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
];

const studyGroups = [
    "TNT Training",
    "Manuscript Program",
    "Hermeneutics",
    "Bible Reading Challenge",
    "Outreach Missions",
];

const SocialLinks = () => (
    <div className="flex space-x-5 mt-6">
        {/* Telegram */}
        <a
            href="https://t.me/+ouPuFGAGna80YjVk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
        >
            <Send className="w-5 h-5" />
        </a>
        {/* Instagram */}
        <a
            href="https://www.instagram.com/5kilofellowship/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110"
        >
            <Instagram className="w-5 h-5" />
        </a>
        {/* TikTok */}
        <a
            href="https://www.tiktok.com/@5kilofellow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
        >
            <Video className="w-5 h-5" />
        </a>
        {/* YouTube */}
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-gray-400 hover:text-red-500 transition-all transform hover:scale-110"
        >
            <Youtube className="w-5 h-5" />
        </a>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#4C0B81] dark:bg-[#0A0510] text-white pt-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 relative">
                                <Image
                                    src={logoImage}
                                    alt="Logo"
                                    width={45}
                                    height={45}
                                    className="object-contain transform group-hover:scale-105 transition-transform rounded-full"
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">
                                5K BIBLE STUDY
                            </span>
                        </div>
                        <p className="text-purple-100/70 dark:text-gray-400 text-sm leading-relaxed italic font-medium border-l-2 border-orange-500 pl-4">
                            ` ሕይወት ለዋጩ ፤ የእግዚአብሔር ቃል ይጠና ፤ በታማኝነትም ይታወጅ !`
                        </p>
                        <SocialLinks />
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-widest ">
                            Quick Navigation
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-purple-100/80 dark:text-gray-400 text-sm hover:text-orange-300 transition-colors flex items-center group"
                                    >
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Study Groups */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-widest ">
                            Our Programs
                        </h4>
                        <ul className="space-y-4">
                            {studyGroups.map((group) => (
                                <li
                                    key={group}
                                    className="text-purple-100/80 dark:text-gray-400 text-sm"
                                >
                                    {group}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscription */}
                    <div className="bg-purple-800/30 dark:bg-white/5 p-6 rounded-3xl border border-white/10">
                        <h4 className="text-lg font-bold mb-2">
                            Join Our Mailing List
                        </h4>
                        <p className="text-purple-200/60 dark:text-gray-500 text-xs mb-6">
                            Receive weekly study guides and event updates.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-4 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/10 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95 text-sm uppercase tracking-widest"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-center text-xs text-purple-200/40 dark:text-gray-600 font-medium">
                    <p>© 2026 5K Bible Study Team. All rights reserved.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0 uppercase tracking-widest">
                        <Link
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Support
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
