"use client";
import React, { useState } from "react";
import AddMemberModal from "@/sections/AddMemberModal";

export default function MemberManagementPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // This function runs after the modal successfully saves a member
    const handleRefresh = () => {
        console.log("Member added successfully! Refreshing data...");
        // If you have a fetch function for your list, call it here.
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Member Management</h1>

            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4C0B81] text-white px-6 py-3 rounded-xl font-bold"
            >
                Add New Member
            </button>

            <AddMemberModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={handleRefresh} // Pass the success handler
                initialData={null} // Pass null because we are adding, not editing
            />
        </div>
    );
}
