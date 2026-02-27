"use client";
import React, { useState, useRef } from "react";
import { X,  Camera } from "lucide-react";

interface Member {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "MALE" | "FEMALE";
    department: string;
    batch: string;
    subCircleNumber: string | number;
}

interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    initialData: Member | null;
}

export default function AddMemberModal({
    isOpen,
    onClose,
    onSuccess,
}: AddMemberModalProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "MALE",
        department: "",
        batch: "",
        subCircleNumber: "",
        birthDayMonth: "",
        favoriteVerse: "",
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) =>
            data.append(key, value),
        );
        if (imageFile) data.append("image", imageFile);

        try {
            const response = await fetch("/api/members", {
                method: "POST",
                body: data, // No Headers! Browser handles multipart boundary
            });

            if (response.ok) {
                onSuccess();
                onClose();
            } else {
                const err = await response.json();
                alert(err.error || "Failed to save");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses =
        "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500/20";
    const labelClasses =
        "block text-[10px] font-black text-slate-500 uppercase mb-1 ml-1";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#4C0B81]/30 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[2.5rem] w-full max-w-xl shadow-2xl max-h-[95vh] overflow-y-auto">
                <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-5 border-b flex justify-between items-center z-10">
                    <h2 className="text-xl font-black text-slate-800">
                        Add New Member
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-6">
                    {/* Image Upload Area */}
                    <div className="flex justify-center">
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="relative w-32 h-32 rounded-[2rem] bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 transition-all overflow-hidden"
                        >
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    className="w-full h-full object-cover"
                                    alt="Preview"
                                />
                            ) : (
                                <div className="text-slate-400 flex flex-col items-center">
                                    <Camera size={24} />
                                    <span className="text-[9px] font-black uppercase mt-1">
                                        Add Photo
                                    </span>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                hidden
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={labelClasses}>First Name</label>
                            <input
                                required
                                className={inputClasses}
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        firstName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Last Name</label>
                            <input
                                required
                                className={inputClasses}
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        lastName: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={labelClasses}>Email</label>
                            <input
                                required
                                type="email"
                                className={inputClasses}
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Gender</label>
                            <select
                                className={inputClasses}
                                value={formData.gender}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        gender: e.target.value as
                                            | "MALE"
                                            | "FEMALE",
                                    })
                                }
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className={labelClasses}>Department</label>
                            <input
                                className={inputClasses}
                                value={formData.department}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        department: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Batch</label>
                            <input
                                className={inputClasses}
                                value={formData.batch}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        batch: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Circle #</label>
                            <input
                                type="number"
                                className={inputClasses}
                                value={formData.subCircleNumber}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        subCircleNumber: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={labelClasses}>
                                Birthday (Day/Month)
                            </label>
                            <input
                                placeholder="15 Jan"
                                className={inputClasses}
                                value={formData.birthDayMonth}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        birthDayMonth: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>
                                Favorite Verse
                            </label>
                            <input
                                placeholder="John 1:1"
                                className={inputClasses}
                                value={formData.favoriteVerse}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        favoriteVerse: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-4 text-xs font-black uppercase text-slate-400 tracking-widest"
                        >
                            Discard
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-[2] bg-[#4C0B81] text-white py-4 rounded-[1.2rem] text-xs font-black uppercase tracking-widest shadow-xl shadow-purple-100 disabled:opacity-50"
                        >
                            {isSubmitting ? "Processing..." : "Register Member"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
