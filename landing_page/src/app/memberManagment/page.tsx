"use client";
import React, { useState } from "react";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddMemberModal({
    isOpen,
    onClose,
}: AddMemberModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus("success");
                // Close modal after 2 seconds on success
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    window.location.reload(); // Refresh table data
                }, 2000);
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Failed to save member");
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Connection error. Please check your database.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
                            Register{" "}
                            <span className="text-[#4C0B81]">New Member</span>
                        </h2>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                            Admin Database Entry
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 hover:bg-white hover:shadow-md rounded-2xl transition-all group"
                    >
                        <X
                            size={24}
                            className="text-slate-400 group-hover:text-red-500 transition-colors"
                        />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8">
                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in slide-in-from-bottom-4">
                            <div className="bg-green-100 p-4 rounded-full">
                                <CheckCircle2
                                    size={48}
                                    className="text-green-600"
                                />
                            </div>
                            <h3 className="text-xl font-black text-slate-800">
                                MEMBER REGISTERED!
                            </h3>
                            <p className="text-slate-500 font-medium text-center">
                                The new member has been successfully added to
                                the database.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Error Message */}
                            {status === "error" && (
                                <div className="col-span-full bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600 animate-shake">
                                    <AlertCircle size={20} />
                                    <span className="text-sm font-bold">
                                        {errorMessage}
                                    </span>
                                </div>
                            )}

                            {/* Name Fields */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] focus:ring-4 focus:ring-purple-50 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] focus:ring-4 focus:ring-purple-50 outline-none transition-all"
                                />
                            </div>

                            {/* Contact & Bio */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] focus:ring-4 focus:ring-purple-50 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Birth Date (e.g. Oct 12)
                                </label>
                                <input
                                    type="text"
                                    name="birthDayMonth"
                                    placeholder="October 12"
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] focus:ring-4 focus:ring-purple-50 outline-none transition-all"
                                />
                            </div>

                            {/* Academic Details */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] focus:ring-4 focus:ring-purple-50 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Year Group
                                </label>
                                <select
                                    name="batch"
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none bg-white"
                                >
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                    <option value="5th Year">5th Year</option>
                                </select>
                            </div>

                            {/* Sub-Circle & Gender */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Sub-Circle (1-5)
                                </label>
                                <input
                                    type="number"
                                    name="subCircleNumber"
                                    min="1"
                                    max="5"
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#4C0B81]"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Gender
                                </label>
                                <div className="flex gap-3">
                                    <label className="flex-1 flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-[#4C0B81] has-[:checked]:bg-purple-50">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="MALE"
                                            required
                                            className="accent-[#4C0B81]"
                                        />
                                        <span className="text-xs font-bold text-slate-700">
                                            Male
                                        </span>
                                    </label>
                                    <label className="flex-1 flex items-center justify-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-[#4C0B81] has-[:checked]:bg-purple-50">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="FEMALE"
                                            required
                                            className="accent-[#4C0B81]"
                                        />
                                        <span className="text-xs font-bold text-slate-700">
                                            Female
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Verse */}
                            <div className="col-span-full space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Favorite Bible Verse
                                </label>
                                <textarea
                                    name="favoriteVerse"
                                    required
                                    disabled={isLoading}
                                    rows={2}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] outline-none transition-all resize-none"
                                    placeholder="e.g. John 3:16"
                                />
                            </div>

                            <div className="col-span-full pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#4C0B81] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#37085e] disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-xl shadow-purple-200 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2
                                                className="animate-spin"
                                                size={20}
                                            />
                                            Processing...
                                        </>
                                    ) : (
                                        "Save Member to Database"
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
