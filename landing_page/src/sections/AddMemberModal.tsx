"use client";
import React, { useState, useEffect } from "react";
import { X, Loader2, CheckCircle2, AlertCircle, Plus } from "lucide-react";

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
    initialData: Member | null; // Null means "Add Mode", Object means "Edit Mode"
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

    // Synchronize image preview with initialData
    useEffect(() => {
        if (isOpen) {
            setImagePreview(initialData?.imageUrl || null);
            setStatus("idle");
            setErrorMessage("");
        }
    }, [isOpen, initialData]);

    if (!isOpen) return null;

    const isEditMode = !!initialData?.id;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        // Determine Endpoint and Method
        const endpoint = isEditMode
            ? `/api/members/${initialData.id}`
            : "/api/members";
        const method = isEditMode ? "PUT" : "POST";

        try {
            const res = await fetch(endpoint, {
                method: method,
                body: formData,
            });

            const result = await res.json();

            if (res.ok) {
                setStatus("success");
                setTimeout(() => {
                    onSuccess();
                    onClose();
                    setStatus("idle");
                    setImagePreview(null);
                }, 1500);
            } else {
                setStatus("error");
                setErrorMessage(
                    result.error ||
                        `Failed to ${isEditMode ? "update" : "save"} member`,
                );
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Connection error. Please check your server.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl my-auto animate-in zoom-in duration-300">
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
                                Member {isEditMode ? "Updated" : "Registered"}!
                            </h3>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* IMAGE UPLOAD */}
                            <div className="col-span-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 p-6 rounded-[2rem] bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-24 h-24 rounded-2xl object-cover mb-4 shadow-md"
                                    />
                                ) : (
                                    <div className="w-24 h-24 rounded-2xl bg-slate-200 flex items-center justify-center mb-4">
                                        <Plus className="text-slate-400" />
                                    </div>
                                )}
                                <label className="cursor-pointer">
                                    <span className="bg-[#4C0B81]/10 text-[#4C0B81] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#4C0B81]/20 transition-all">
                                        {isEditMode
                                            ? "Change Photo"
                                            : "Upload Photo"}
                                    </span>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                        disabled={isLoading}
                                    />
                                </label>
                            </div>

                            {status === "error" && (
                                <div className="col-span-full bg-red-50 p-4 rounded-2xl flex items-center gap-3 text-red-600">
                                    <AlertCircle size={20} />
                                    <span className="text-sm font-bold">
                                        {errorMessage}
                                    </span>
                                </div>
                            )}

                            {/* INPUT FIELDS - Using defaultValue for Edit Mode */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    disabled={isLoading}
                                    defaultValue={initialData?.firstName}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] outline-none"
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
                                    disabled={isLoading}
                                    defaultValue={initialData?.lastName}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] outline-none"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    disabled={isLoading}
                                    defaultValue={initialData?.email}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] outline-none"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Birth Date
                                </label>
                                <input
                                    type="text"
                                    name="birthDayMonth"
                                    placeholder="October 12"
                                    required
                                    disabled={isLoading}
                                    defaultValue={initialData?.birthDayMonth}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] outline-none"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    required
                                    disabled={isLoading}
                                    defaultValue={initialData?.department}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4C0B81] outline-none"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Year Group
                                </label>
                                <select
                                    name="batch"
                                    disabled={isLoading}
                                    defaultValue={
                                        initialData?.batch || "1st Year"
                                    }
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#4C0B81]"
                                >
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                    <option value="5th Year">5th Year</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Sub-Circle (1-5)
                                </label>
                                <input
                                    type="number"
                                    name="subCircleNumber"
                                    min="1"
                                    max="5"
                                    required
                                    disabled={isLoading}
                                    defaultValue={initialData?.subCircleNumber}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#4C0B81]"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Gender
                                </label>
                                <div className="flex gap-3">
                                    {["MALE", "FEMALE"].map((g) => (
                                        <label
                                            key={g}
                                            className="flex-1 flex items-center justify-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-slate-50"
                                        >
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={g}
                                                required
                                                defaultChecked={
                                                    initialData?.gender === g
                                                }
                                                className="accent-[#4C0B81]"
                                            />
                                            <span className="text-xs font-bold">
                                                {g === "MALE"
                                                    ? "Male"
                                                    : "Female"}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="col-span-full space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    Favorite Bible Verse
                                </label>
                                <textarea
                                    name="favoriteVerse"
                                    required
                                    disabled={isLoading}
                                    defaultValue={initialData?.favoriteVerse}
                                    rows={2}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#4C0B81]"
                                    placeholder="e.g. John 3:16"
                                />
                            </div>

                            <div className="col-span-full pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#4C0B81] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#37085e] flex items-center justify-center gap-2 transition-all"
                                >
                                    {isLoading ? (
                                        <Loader2
                                            className="animate-spin"
                                            size={20}
                                        />
                                    ) : isEditMode ? (
                                        "Update Member Details"
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
