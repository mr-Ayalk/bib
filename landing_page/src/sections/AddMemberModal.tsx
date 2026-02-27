"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

// 1. Define the Member type here (or import it) to avoid 'any'
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
    initialData: Member | null; // Fixed: Replaced 'any' with 'Member'
}

export default function AddMemberModal({
    isOpen,
    onClose,
    onSuccess,
}: AddMemberModalProps) {
    // 2. Form State
    const [formData, setFormData] = useState<Omit<Member, "id">>({
        firstName: "",
        lastName: "",
        email: "",
        gender: "MALE",
        department: "",
        batch: "",
        subCircleNumber: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/members", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onSuccess();
                onClose();
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    gender: "MALE",
                    department: "",
                    batch: "",
                    subCircleNumber: "",
                });
            } else {
                console.error("Failed to save member");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all";
    const labelClasses = "block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5 ml-1";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#4C0B81]/20 backdrop-blur-md p-4">
            <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-8 py-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-black text-slate-800 tracking-tight">Add New Member</h2>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Onboarding Portal</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={labelClasses}>First Name</label>
                            <input
                                required
                                type="text"
                                className={inputClasses}
                                placeholder="John"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Last Name</label>
                            <input
                                required
                                type="text"
                                className={inputClasses}
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className={labelClasses}>Email Address</label>
                        <input
                            required
                            type="email"
                            className={inputClasses}
                            placeholder="john.doe@university.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={labelClasses}>Gender</label>
                            <select
                                className={inputClasses}
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value as "MALE" | "FEMALE" })}
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelClasses}>Batch</label>
                            <input
                                required
                                type="text"
                                className={inputClasses}
                                placeholder="2024"
                                value={formData.batch}
                                onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={labelClasses}>Department</label>
                            <input
                                required
                                type="text"
                                className={inputClasses}
                                placeholder="Computer Science"
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>Circle Number</label>
                            <input
                                required
                                type="number"
                                className={inputClasses}
                                placeholder="1"
                                value={formData.subCircleNumber}
                                onChange={(e) => setFormData({ ...formData, subCircleNumber: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3.5 text-slate-500 font-black text-xs uppercase tracking-widest hover:bg-slate-50 rounded-2xl transition-all"
                        >
                            Discard
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-[2] bg-[#4C0B81] text-white px-4 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-xl hover:shadow-purple-200 active:scale-[0.98] transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? "Saving..." : "Save Member"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}