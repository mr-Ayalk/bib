// src/sections/AddMemberModal.tsx
"use client";
import React, { useState, useRef } from "react";
import Image from "next/image"; // Added for performance
import {
    X,
    Loader2,
    CheckCircle2,
    AlertCircle,
    Camera,
    User,
} from "lucide-react";

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
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                setErrorMessage(
                    "Image is too large. Please select a file under 2MB.",
                );
                setStatus("error");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const file = fileInputRef.current?.files?.[0];
        if (file) {
            formData.set("image", file);
        }

        try {
            const res = await fetch("/api/members", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            if (res.ok) {
                setStatus("success");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setImagePreview(null);
                    window.location.reload();
                }, 2000);
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Failed to save member");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Connection error. Please check your database.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-sm z-10">
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 uppercase">
                            Register{" "}
                            <span className="text-[#4C0B81]">New Member</span>
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 hover:bg-slate-100 rounded-2xl transition-all"
                    >
                        <X size={24} className="text-slate-400" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    {status === "success" ? (
                        <div className="flex flex-col items-center py-12 space-y-4">
                            <CheckCircle2
                                size={48}
                                className="text-green-600"
                            />
                            <h3 className="text-xl font-black">
                                MEMBER REGISTERED!
                            </h3>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {status === "error" && (
                                <div className="col-span-full bg-red-50 p-4 rounded-2xl flex items-center gap-3 text-red-600">
                                    <AlertCircle size={20} />
                                    <span className="text-sm font-bold">
                                        {errorMessage}
                                    </span>
                                </div>
                            )}

                            <div className="col-span-full flex flex-col items-center mb-4">
                                <div
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="relative w-28 h-28 rounded-full border-4 border-slate-100 overflow-hidden cursor-pointer group"
                                >
                                    {imagePreview ? (
                                        <Image
                                            src={imagePreview}
                                            alt="Preview"
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                            <User
                                                size={40}
                                                className="text-slate-300"
                                            />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <Camera
                                            className="text-white"
                                            size={24}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>

                            {/* Inputs (Simplified for brevity, keep your original input fields here) */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                />
                            </div>
                            {/* ... Include your Email, Birth Date, Dept, Year, Sub-Circle, Gender, and Verse fields here ... */}

                            <div className="col-span-full pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#4C0B81] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#37085e] disabled:bg-slate-300 transition-all"
                                >
                                    {isLoading ? (
                                        <Loader2
                                            className="animate-spin"
                                            size={20}
                                        />
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
