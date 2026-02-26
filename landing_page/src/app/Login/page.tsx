"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, X, Info, AlertCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../assets/images/fellow_logo.png";

export default function LoginPage() {
    const router = useRouter();

    // --- State Management ---
    const [showPopup, setShowPopup] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // --- Authentication Logic ---
    // const handleLogin = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setError("");
    //     setIsLoading(true);

    //     // Mimicking a small delay for realism
    //     setTimeout(() => {
    //         if (username === "Admin" && password === "1234") {
    //             router.push("/dashboard");
    //         } else {
    //             setError("Invalid username or password. Please try again.");
    //             setIsLoading(false);
    //         }
    //     }, 800);
    // };
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();

            if (res.ok) {
                // Check role and redirect
                if (data.role === "ADMIN") {
                    router.push("/admin-dashboard");
                } else {
                    router.push("/dashboard");
                }
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("Something went wrong. Check your connection.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-100">
            {/* --- Header (AAU Inspired) --- */}
            <header className="bg-white border-b py-4 px-6 flex justify-between items-center shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                        <Image
                            src={logoImage}
                            alt="5K Logo"
                            fill
                            className="rounded-full object-cover border border-slate-100 shadow-sm"
                        />
                    </div>
                    <div>
                        <h1 className="text-[#4C0B81] font-black text-lg leading-tight uppercase tracking-tight">
                            5K Bible Study
                        </h1>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                            Addis Ababa University Fellowship
                        </p>
                    </div>
                </div>
                <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-600 uppercase tracking-wide">
                    <Link
                        href="/"
                        className="hover:text-[#4C0B81] transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/Programs"
                        className="hover:text-[#4C0B81] transition-colors"
                    >
                        Programs
                    </Link>
                    <Link
                        href="/About"
                        className="hover:text-[#4C0B81] transition-colors"
                    >
                        About
                    </Link>
                </nav>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-200/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-200/20 blur-3xl rounded-full" />

                <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* --- LEFT SIDE: Info Cards --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden lg:flex flex-col gap-5"
                    >
                        <h2 className="text-4xl font-black text-slate-800 leading-tight mb-4">
                            Deepen Your Faith, <br />
                            <span className="text-[#4C0B81]">
                                Shape Your Future.
                            </span>
                        </h2>
                        {[
                            {
                                title: "Study Materials",
                                desc: "Access weekly guides and archives.",
                                color: "bg-blue-600",
                            },
                            {
                                title: "Member Portal",
                                desc: "Manage your profile and track progress.",
                                color: "bg-[#4C0B81]",
                            },
                            {
                                title: "Announcements",
                                desc: "Get latest updates on fellowship events.",
                                color: "bg-indigo-600",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className={`${card.color} text-white p-6 rounded-[1.5rem] shadow-xl flex gap-5 items-center cursor-default`}
                            >
                                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg uppercase tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium">
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* --- RIGHT SIDE: Login Card --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                    >
                        <div className="p-10 lg:p-14">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                                    Login
                                </h2>
                                <p className="text-slate-500 text-sm font-medium mt-1">
                                    Enter your credentials to continue
                                </p>
                                <div className="h-1.5 w-12 bg-[#4C0B81] mx-auto mt-4 rounded-full" />
                            </div>

                            <AnimatePresence mode="wait">
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold"
                                    >
                                        <AlertCircle size={20} />
                                        {error}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleLogin} className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                                        Username
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#4C0B81] transition-colors">
                                            <User size={20} />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            placeholder="e.g. Admin"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-purple-500/10 focus:border-[#4C0B81] outline-none transition-all font-medium text-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                                        Password
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#4C0B81] transition-colors">
                                            <Lock size={20} />
                                        </div>
                                        <input
                                            required
                                            type="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            placeholder="••••••••"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-purple-500/10 focus:border-[#4C0B81] outline-none transition-all font-medium text-slate-700"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#4C0B81] text-white font-black py-4 rounded-2xl shadow-xl shadow-purple-900/20 hover:bg-[#3a0863] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Login <ChevronRight size={18} />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <button className="text-sm font-bold text-slate-400 hover:text-[#4C0B81] transition-colors">
                                    Forgot Password?
                                </button>
                            </div>
                        </div>

                        {/* Registration Footer */}
                        <div className="bg-slate-50 p-8 border-t border-slate-100 text-center">
                            <button
                                onClick={() => setShowPopup(true)}
                                className="text-[#4C0B81] font-black text-sm uppercase tracking-tight hover:underline transition-all"
                            >
                                New to the fellowship? Join here
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* --- POPUP MODAL (Member Info) --- */}
            <AnimatePresence>
                {showPopup && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowPopup(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-[2.5rem] p-8 lg:p-12 max-w-md w-full shadow-2xl relative z-10"
                        >
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X size={20} className="text-slate-400" />
                            </button>

                            <div className="text-center">
                                <div className="bg-purple-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-3">
                                    <Info
                                        className="text-[#4C0B81]"
                                        size={40}
                                    />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                                    Welcome to 5K!
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                                    Join our community of scholars and
                                    believers. Registration is currently
                                    facilitated through our mentor network.
                                </p>
                                <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 mb-8">
                                    <p className="text-sm font-bold text-orange-800">
                                        Check the joining instructions in the{" "}
                                        <Link
                                            href="/FAQ"
                                            className="underline decoration-2 underline-offset-4"
                                        >
                                            FAQ section
                                        </Link>
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl shadow-lg uppercase tracking-widest text-xs"
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
