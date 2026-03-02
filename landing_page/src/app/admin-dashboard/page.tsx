"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    LayoutDashboard,
    Users,
    ClipboardCheck,
    Target,
    BookOpen,
    // Calendar,
    // LogOut,
    UserPlus,
    TrendingUp,
    Pencil,
    Trash2,
    UserCheck,
    GraduationCap,
    ChevronRight,
    Search,
} from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    // Legend,
} from "recharts";
import AddMemberModal from "../../sections/AddMemberModal";

interface Member {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: "MALE" | "FEMALE";
    department: string;
    batch: string;
    subCircleNumber: string | number;
    birthDayMonth?: string;
    favoriteVerse?: string;
    image?: string;
}

// const BATCH_COLORS = ["#4C0B81", "#6366F1", "#8B5CF6", "#D946EF", "#F43F5E"];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    const fetchMembers = useCallback(async () => {
        try {
            const res = await fetch("/api/members");
            const data = await res.json();
            setMembers(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMembers();
    }, [fetchMembers]);

    // --- DATA CALCULATIONS (Inside Component to avoid ReferenceErrors) ---

    const stats = useMemo(
        () => [
            {
                label: "Total Members",
                value: members.length,
                icon: <Users size={22} />,
                color: "bg-indigo-600",
                shadow: "shadow-indigo-200",
            },
            {
                label: "Male Students",
                value: members.filter((m) => m.gender === "MALE").length,
                icon: <UserCheck size={22} />,
                color: "bg-violet-600",
                shadow: "shadow-violet-200",
            },
            {
                label: "Female Students",
                value: members.filter((m) => m.gender === "FEMALE").length,
                icon: <UserCheck size={22} />,
                color: "bg-fuchsia-600",
                shadow: "shadow-fuchsia-200",
            },
            {
                label: "Active Batches",
                value: new Set(members.map((m) => m.batch)).size,
                icon: <GraduationCap size={22} />,
                color: "bg-amber-500",
                shadow: "shadow-amber-200",
            },
        ],
        [members],
    );

    const batchData = useMemo(() => {
        const counts = members.reduce((acc: Record<string, number>, member) => {
            const b = member.batch || "N/A";
            acc[b] = (acc[b] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(counts)
            .sort()
            .map((key) => ({
                name: `Batch ${key}`,
                students: counts[key],
            }));
    }, [members]);

    const genderData = useMemo(() => {
        const counts = members.reduce((acc: Record<string, number>, member) => {
            const g = member.gender === "MALE" ? "Male" : "Female";
            acc[g] = (acc[g] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(counts).map((key) => ({
            name: key,
            value: counts[key],
        }));
    }, [members]);

    // --- HANDLERS ---
    const handleEdit = (member: Member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        setSelectedMember(null);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this member?")) return;
        try {
            const res = await fetch(`/api/members/${id}`, { method: "DELETE" });
            if (res.ok) fetchMembers();
            else alert("Failed to delete member");
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    if (loading)
        return (
            <div className="flex h-screen items-center justify-center bg-[#F8FAFC]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-900"></div>
            </div>
        );

    return (
        <div className="flex h-screen bg-[#F8FAFC] font-sans antialiased text-slate-900">
            {/* Sidebar */}
            <aside className="w-80 bg-[#1E1B4B] text-white p-8 flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.05)] z-20">
                <div className="flex items-center gap-4 mb-12 px-2">
                    <div className="w-12 h-12 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 rotate-3">
                        <TrendingUp className="text-white" size={28} />
                    </div>
                    <div>
                        <h1 className="text-xl font-black tracking-tight leading-none">
                            UNITY HUB
                        </h1>
                        <span className="text-[10px] text-purple-300/60 font-bold uppercase tracking-[0.3em]">
                            Admin Panel
                        </span>
                    </div>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        {
                            name: "Dashboard",
                            icon: <LayoutDashboard size={20} />,
                        },
                        { name: "Members", icon: <Users size={20} /> },
                        {
                            name: "Attendance",
                            icon: <ClipboardCheck size={20} />,
                        },
                        { name: "SWOT Plan", icon: <Target size={20} /> },
                        { name: "Materials", icon: <BookOpen size={20} /> },
                    ].map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${
                                activeTab === item.name
                                    ? "bg-white/10 text-white shadow-sm ring-1 ring-white/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                {item.icon}
                                <span className="text-sm font-semibold tracking-wide">
                                    {item.name}
                                </span>
                            </div>
                            {activeTab === item.name && (
                                <ChevronRight
                                    size={14}
                                    className="text-purple-400"
                                />
                            )}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col w-full overflow-y-auto">
                <header className="px-12 py-8 bg-white/70 backdrop-blur-xl flex justify-between items-center border-b border-slate-200/60 sticky top-0 z-10">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                            {activeTab}
                        </h2>
                        <p className="text-sm text-slate-500 font-medium">
                            Monitoring system performance and analytics.
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                size={18}
                            />
                            <input
                                type="text"
                                placeholder="Search data..."
                                className="bg-slate-100 border-none rounded-2xl pl-12 pr-6 py-3 text-sm focus:ring-2 focus:ring-purple-500 w-64"
                            />
                        </div>
                        {activeTab === "Members" && (
                            <button
                                onClick={handleAddNew}
                                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200 active:scale-95"
                            >
                                <UserPlus size={20} /> Add Member
                            </button>
                        )}
                    </div>
                </header>

                <main className="p-12 space-y-10">
                    {activeTab === "Dashboard" && (
                        <>
                            {/* Summary Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                    >
                                        <div
                                            className={`${stat.color} p-4 rounded-[1.5rem] text-white shadow-lg ${stat.shadow} group-hover:scale-110 transition-transform`}
                                        >
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">
                                                {stat.label}
                                            </p>
                                            <p className="text-3xl font-black text-slate-900 tracking-tighter">
                                                {stat.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {/* Professional Batch Analysis Graph */}
                                <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 relative overflow-hidden">
                                    <div className="flex justify-between items-center mb-12">
                                        <div>
                                            <h3 className="font-black text-slate-900 text-xl tracking-tight">
                                                Batch Growth
                                            </h3>
                                            <p className="text-sm text-slate-400 font-medium">
                                                Distribution across graduation
                                                years
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                                            <span className="w-3 h-3 rounded-full bg-fuchsia-500"></span>
                                        </div>
                                    </div>
                                    <div className="h-[380px]">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <BarChart
                                                data={batchData}
                                                margin={{
                                                    top: 10,
                                                    right: 10,
                                                    left: -20,
                                                    bottom: 0,
                                                }}
                                            >
                                                <defs>
                                                    <linearGradient
                                                        id="barGrad"
                                                        x1="0"
                                                        y1="0"
                                                        x2="0"
                                                        y2="1"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#6366F1"
                                                        />
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#4338CA"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid
                                                    strokeDasharray="3 3"
                                                    vertical={false}
                                                    stroke="#F1F5F9"
                                                />
                                                <XAxis
                                                    dataKey="name"
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{
                                                        fill: "#94A3B8",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                    }}
                                                    dy={15}
                                                />
                                                <YAxis
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{
                                                        fill: "#94A3B8",
                                                        fontSize: 12,
                                                    }}
                                                />
                                                <Tooltip
                                                    cursor={{
                                                        fill: "#F8FAFC",
                                                        radius: 10,
                                                    }}
                                                    contentStyle={{
                                                        borderRadius: "24px",
                                                        border: "none",
                                                        boxShadow:
                                                            "0 20px 25px -5px rgba(0,0,0,0.1)",
                                                        padding: "15px",
                                                    }}
                                                />
                                                <Bar
                                                    dataKey="students"
                                                    fill="url(#barGrad)"
                                                    radius={[12, 12, 4, 4]}
                                                    barSize={45}
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* Gender Distribution */}
                                <div className="bg-[#1E1B4B] p-10 rounded-[3rem] shadow-2xl text-white flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-black text-sm uppercase tracking-[0.2em] mb-2 text-indigo-300">
                                            Demographics
                                        </h3>
                                        <p className="text-white/60 text-xs font-medium">
                                            Gender split analysis
                                        </p>
                                    </div>
                                    <div className="h-[300px] my-6">
                                        <ResponsiveContainer
                                            width="100%"
                                            height="100%"
                                        >
                                            <PieChart>
                                                <Pie
                                                    data={genderData}
                                                    innerRadius={85}
                                                    outerRadius={115}
                                                    paddingAngle={12}
                                                    dataKey="value"
                                                    stroke="none"
                                                >
                                                    <Cell fill="#818CF8" />
                                                    <Cell fill="#E879F9" />
                                                </Pie>
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor:
                                                            "#1E1B4B",
                                                        borderRadius: "12px",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                    }}
                                                />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-[#818CF8]" />{" "}
                                                <span className="text-xs font-bold uppercase tracking-wider">
                                                    Male
                                                </span>
                                            </div>
                                            <span className="font-black text-lg">
                                                {
                                                    members.filter(
                                                        (m) =>
                                                            m.gender === "MALE",
                                                    ).length
                                                }
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-[#E879F9]" />{" "}
                                                <span className="text-xs font-bold uppercase tracking-wider">
                                                    Female
                                                </span>
                                            </div>
                                            <span className="font-black text-lg">
                                                {
                                                    members.filter(
                                                        (m) =>
                                                            m.gender ===
                                                            "FEMALE",
                                                    ).length
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === "Members" && (
                        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50/50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                            Identity
                                        </th>
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                            Class Info
                                        </th>
                                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">
                                            Management
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {members.map((member) => (
                                        <tr
                                            key={member.id}
                                            className="hover:bg-indigo-50/30 transition-colors group"
                                        >
                                            <td className="px-10 py-6">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden ring-4 ring-slate-50 group-hover:ring-white transition-all">
                                                        {member.image ? (
                                                            <img
                                                                src={
                                                                    member.image
                                                                }
                                                                alt=""
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center text-indigo-600 font-black text-xl">
                                                                {
                                                                    member
                                                                        .firstName[0]
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-slate-800 text-lg tracking-tight">
                                                            {member.firstName}{" "}
                                                            {member.lastName}
                                                        </p>
                                                        <p className="text-xs text-slate-400 font-bold">
                                                            {member.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6">
                                                <p className="text-sm font-bold text-slate-700">
                                                    {member.department}
                                                </p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase rounded-full tracking-wider">
                                                        Batch {member.batch}
                                                    </span>
                                                    <span className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-black uppercase rounded-full tracking-wider">
                                                        S.C #
                                                        {member.subCircleNumber}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6 text-right">
                                                <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() =>
                                                            handleEdit(member)
                                                        }
                                                        className="p-3 bg-white text-blue-600 shadow-md rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                member.id,
                                                            )
                                                        }
                                                        className="p-3 bg-white text-red-600 shadow-md rounded-xl hover:bg-red-600 hover:text-white transition-all"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>
            </div>

            <AddMemberModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedMember(null);
                }}
                onSuccess={fetchMembers}
                initialData={selectedMember}
            />
        </div>
    );
}
