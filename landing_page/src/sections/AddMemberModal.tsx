"use client";
import React, { useState, useEffect } from "react";
import {
    X,
    Loader2,
    CheckCircle2,
    AlertCircle,
    Plus,
    Search,
    UserPlus,
} from "lucide-react";

// --- MODAL COMPONENT ---
interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

function AddMemberModal({ isOpen, onClose, onSuccess }: AddMemberModalProps) {
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
                setTimeout(() => {
                    onSuccess();
                    onClose();
                    setStatus("idle");
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
                            Register{" "}
                            <span className="text-[#4C0B81]">New Member</span>
                        </h2>
                    </div>
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
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    disabled={isLoading}
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
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white"
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
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200"
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
                                    rows={2}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                                    placeholder="e.g. John 3:16"
                                />
                            </div>
                            <div className="col-span-full pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#4C0B81] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#37085e] flex items-center justify-center gap-2"
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

// --- MAIN PAGE COMPONENT ---
export default function MembersPage() {
    const [members, setMembers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMembers = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/members");
            const data = await res.json();
            setMembers(data);
        } catch (err) {
            console.error("Failed to load members");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <div className="p-10 space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">
                        Member{" "}
                        <span className="text-[#4C0B81]">Management</span>
                    </h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">
                        Total Registered: {members.length}
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#4C0B81] text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-200 transition-all active:scale-95"
                >
                    <UserPlus size={20} />
                    Add New Member
                </button>
            </header>

            {/* Table Section */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                {[
                                    "Name",
                                    "ID/Username",
                                    "Department",
                                    "Year",
                                    "Circle",
                                    "Action",
                                ].map((head) => (
                                    <th
                                        key={head}
                                        className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {isLoading ? (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="p-20 text-center text-slate-400 font-bold uppercase tracking-widest"
                                    >
                                        Loading Records...
                                    </td>
                                </tr>
                            ) : members.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="p-20 text-center text-slate-400 font-bold uppercase tracking-widest"
                                    >
                                        No members found
                                    </td>
                                </tr>
                            ) : (
                                members.map((member: any) => (
                                    <tr
                                        key={member.id}
                                        className="hover:bg-slate-50/50 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-800">
                                                {member.firstName}{" "}
                                                {member.lastName}
                                            </div>
                                            <div className="text-[10px] text-slate-400">
                                                {member.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs text-purple-600">
                                            {member.username}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-600">
                                            {member.department}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-600">
                                            {member.batch}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-purple-50 text-[#4C0B81] px-3 py-1 rounded-full text-[10px] font-black uppercase">
                                                Circle {member.subCircleNumber}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-xs font-bold text-slate-400 hover:text-[#4C0B81]">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddMemberModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={fetchMembers}
            />
        </div>
    );
}
