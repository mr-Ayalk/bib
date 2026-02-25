"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Lock, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../assets/images/fellow_logo.png";

export default function LoginPage() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            {/* Top Header Style mimicking AAU */}
            <header className="bg-white border-b py-4 px-6 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <Image
                        src={logoImage}
                        alt="5K Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="text-[#4C0B81] font-bold text-lg leading-tight uppercase tracking-tight">
                            5K Bible Study
                        </h1>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                            Addis Ababa University Fellowship
                        </p>
                    </div>
                </div>
                <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
                    <Link href="/" className="hover:text-[#4C0B81]">
                        Home
                    </Link>
                    <Link href="/Programs" className="hover:text-[#4C0B81]">
                        Programs
                    </Link>
                    <Link href="/About" className="hover:text-[#4C0B81]">
                        About
                    </Link>
                </nav>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* LEFT SIDE: Info Cards (AAU Style) */}
                    <div className="hidden lg:flex flex-col gap-4 justify-center">
                        {[
                            {
                                title: "Study Materials",
                                desc: "Access weekly guides and archives.",
                                color: "bg-blue-600",
                            },
                            {
                                title: "Member Portal",
                                desc: "Manage your profile and track progress.",
                                color: "bg-purple-700",
                            },
                            {
                                title: "Announcements",
                                desc: "Get latest updates on fellowship events.",
                                color: "bg-indigo-600",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className={`${card.color} text-white p-6 rounded-2xl shadow-lg flex gap-4 items-center transform hover:scale-[1.02] transition-transform`}
                            >
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Login Card */}
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
                        <div className="p-10 flex-1">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl font-bold text-slate-800">
                                    Login to your account
                                </h2>
                                <div className="h-1 w-12 bg-[#4C0B81] mx-auto mt-2 rounded-full" />
                            </div>

                            <form className="space-y-6">
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#4C0B81]">
                                        <User size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="User name"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#4C0B81] focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#4C0B81]">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#4C0B81] focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <button className="w-full bg-[#4C0B81] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#3a0863] active:scale-[0.98] transition-all">
                                    Login
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <button className="text-sm text-slate-500 hover:text-[#4C0B81] transition-colors">
                                    Forgot Password?
                                </button>
                            </div>
                        </div>

                        {/* Are you new section */}
                        <div className="bg-slate-50 p-6 border-t text-center">
                            <button
                                onClick={() => setShowPopup(true)}
                                className="text-[#4C0B81] font-bold hover:underline transition-all"
                            >
                                Are you new and want to be a member?
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* POPUP MODAL */}
            <AnimatePresence>
                {showPopup && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X size={20} className="text-slate-400" />
                            </button>

                            <div className="text-center">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Info
                                        className="text-[#4C0B81]"
                                        size={32}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Welcome to 5K BS!
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    We are excited to have you join our
                                    fellowship. Registration is currently
                                    managed through our mentors.
                                </p>
                                <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300">
                                    <p className="text-sm font-semibold text-slate-700">
                                        Please see the instruction to join in
                                        the{" "}
                                        <Link
                                            href="/FAQ"
                                            className="text-orange-500 underline"
                                        >
                                            FAQ section
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="mt-8 w-full py-3 bg-slate-900 text-white font-bold rounded-xl"
                                >
                                    Got it
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
