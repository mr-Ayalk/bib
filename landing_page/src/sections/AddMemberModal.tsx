"use client";
import React from "react";

// This interface MUST match what the parent sends
interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void; // Added this
    initialData: any | null; // Added this
}

export default function AddMemberModal({
    isOpen,
    onClose,
    onSuccess,
}: AddMemberModalProps) {
    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Your logic to save member...

        // After successful save:
        onSuccess();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-[2rem] w-full max-w-md shadow-2xl">
                <h2 className="text-xl font-bold mb-4">Add New Member</h2>
                {/* Your Form Fields Here */}
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-slate-500 font-bold"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-[#4C0B81] text-white rounded-xl font-bold"
                    >
                        Save Member
                    </button>
                </div>
            </div>
        </div>
    );
}
