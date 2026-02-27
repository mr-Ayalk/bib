"use client";
import React, { useState, useEffect, useRef } from "react";
import {
    X,
    Loader2,
    CheckCircle2,
    AlertCircle,
    Camera,
    User,
} from "lucide-react";

interface Member {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    birthDayMonth?: string;
    department?: string;
    batch?: string;
    subCircleNumber?: number;
    gender?: string;
    favoriteVerse?: string;
    imageUrl?: string;
}

interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    initialData: Member | null; // Null = Add Mode, Object = Edit Mode
}

export default function AddMemberModal({
    isOpen,
    onClose,
    onSuccess,
    initialData,
}: AddMemberModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const isEditMode = !!initialData?.id;

    // Reset state when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            setImagePreview(initialData?.imageUrl || null);
            setStatus("idle");
            setErrorMessage("");
        }
    }, [isOpen, initialData]);

    if (!isOpen) return null;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                setErrorMessage("Image too large (Max 2MB)");
                setStatus("error");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");

        const formData = new FormData(e.currentTarget);
        const endpoint = isEditMode
            ? `/api/members/${initialData.id}`
            : "/api/members";
        const method = isEditMode ? "PUT" : "POST";

        try {
            const res = await fetch(endpoint, { method, body: formData });
            const result = await res.json();

            if (res.ok) {
                setStatus("success");
                setTimeout(() => {
                    onSuccess();
                    onClose();
                }, 1500);
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Connection error. Check your database.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl my-auto animate-in zoom-in duration-300">
                {/* Header */}
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h2 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
                        {isEditMode ? "Edit" : "Register"}{" "}
                        <span className="text-[#4C0B81]">Member</span>
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-3 hover:bg-white rounded-2xl transition-all"
                    >
                        <X size={24} className="text-slate-400" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-12 space-y-4">
                            <CheckCircle2
                                size={48}
                                className="text-green-600"
                            />
                            <h3 className="text-xl font-black uppercase">
                                Member {isEditMode ? "Updated" : "Saved"}!
                            </h3>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Image Section */}
                            <div className="col-span-full flex flex-col items-center mb-4">
                                <div
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="relative w-24 h-24 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center cursor-pointer overflow-hidden group"
                                >
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User
                                            size={32}
                                            className="text-slate-300"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <Camera
                                            className="text-white"
                                            size={20}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    name="image"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <p className="text-[10px] font-black text-slate-400 uppercase mt-2">
                                    Upload Photo
                                </p>
                            </div>

                            {status === "error" && (
                                <div className="col-span-full bg-red-50 p-4 rounded-2xl flex items-center gap-3 text-red-600 border border-red-100">
                                    <AlertCircle size={20} />
                                    <span className="text-sm font-bold">
                                        {errorMessage}
                                    </span>
                                </div>
                            )}

                            {/* Form Fields */}
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    First Name
                                </label>
                                <input
                                    name="firstName"
                                    defaultValue={initialData?.firstName}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#4C0B81]"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Last Name
                                </label>
                                <input
                                    name="lastName"
                                    defaultValue={initialData?.lastName}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#4C0B81]"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={initialData?.email}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#4C0B81]"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">
                                    Birth Date
                                </label>
                                <input
                                    name="birthDayMonth"
                                    placeholder="October 12"
                                    defaultValue={initialData?.birthDayMonth}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#4C0B81]"
                                />
                            </div>

                            {/* Actions */}
                            <div className="col-span-full pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#4C0B81] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#37085e] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <Loader2
                                            className="animate-spin"
                                            size={20}
                                        />
                                    ) : isEditMode ? (
                                        "Update Member"
                                    ) : (
                                        "Save Member"
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
