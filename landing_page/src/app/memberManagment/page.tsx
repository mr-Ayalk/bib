// src/app/memberManagment/page.tsx
"use client";
import React, { useState } from "react";
import AddMemberModal from "@/sections/AddMemberModal";

export default function MemberManagementPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Member Management</h1>

            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4C0B81] text-white px-6 py-3 rounded-xl font-bold"
            >
                Add New Member
            </button>

            {/* Now the default export of this file is a page, 
                and the modal is just a component inside it. */}
            <AddMemberModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
