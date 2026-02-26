"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
    LayoutDashboard,
    Users,
    ClipboardCheck,
    Target,
    BookOpen,
    Calendar,
    LogOut,
    UserPlus,
    Search,
    GraduationCap,
    MoreVertical,
    TrendingUp,
} from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from "recharts";
import AddMemberModal from "../../sections/AddMemberModal";

// Expanded color palette for batches
const BATCH_COLORS = ["#4C0B81", "#8B5CF6", "#D946EF", "#06B6D4", "#10B981"];
const GENDER_COLORS = {
    Male: "#4C0B81", // Deep Purple
    Female: "#F97316", // Vibrant Orange
};

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const res = await fetch("/api/members");
                const data = await res.json();
                setMembers(data);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMembers();
    }, []);

    // 1. Data Processing for Gender with specific Orange/Purple logic
    const genderData = useMemo(() => {
        const counts = members.reduce((acc, member) => {
            const g = member.gender === "MALE" ? "Male" : "Female";
            acc[g] = (acc[g] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(counts).map((key) => ({
            name: key,
            value: counts[key],
        }));
    }, [members]);

    // 2. Data Processing for Academic Year (Dynamic Bar Colors)
    const batchData = useMemo(() => {
        const counts = members.reduce((acc, member) => {
            const b = member.batch || "Unknown";
            acc[b] = (acc[b] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(counts)
            .sort()
            .map((key, index) => ({
                year: key,
                students: counts[key],
                fill: BATCH_COLORS[index % BATCH_COLORS.length], // Assign color per bar
            }));
    }, [members]);

    const menuItems = [
        { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
        { name: "Members", icon: <Users size={20} /> },
        { name: "Attendance", icon: <ClipboardCheck size={20} /> },
        { name: "SWOT PLAN", icon: <Target size={20} /> },
        { name: "Materials", icon: <BookOpen size={20} /> },
        { name: "Upcoming Events", icon: <Calendar size={20} /> },
    ];

    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            {/* Sidebar Navigation */}
            <aside className="w-72 bg-[#4C0B81] text-white p-6 flex flex-col shadow-2xl">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center border border-white/20 shadow-lg shadow-orange-500/20">
                        <TrendingUp className="text-white" size={24} />
                    </div>
                    <h1 className="text-xl font-black tracking-tighter">
                        EXECUTIVE HUB
                    </h1>
                </div>

                <nav className="flex-1 space-y-1.5">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                                activeTab === item.name
                                    ? "bg-white text-[#4C0B81] shadow-xl shadow-black/20 font-bold"
                                    : "hover:bg-white/10 text-purple-100/70 hover:text-white"
                            }`}
                        >
                            <span
                                className={
                                    activeTab === item.name
                                        ? "text-[#4C0B81]"
                                        : "group-hover:scale-110 transition-transform"
                                }
                            >
                                {item.icon}
                            </span>
                            <span className="text-sm tracking-wide">
                                {item.name}
                            </span>
                        </button>
                    ))}
                </nav>

                <button className="mt-auto flex items-center gap-4 px-4 py-4 text-red-300 font-bold hover:bg-red-500/10 rounded-2xl transition-all">
                    <LogOut size={20} /> Logout
                </button>
            </aside>

            <div className="flex flex-col w-full overflow-y-auto">
                {/* Main Content Area */}
                <main className="flex-1 flex flex-col">
                    <header className="px-10 py-6 bg-white flex justify-between items-center border-b border-slate-100 sticky top-0 z-10">
                        <div>
                            <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                                {activeTab}
                            </h2>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                                Management Portal
                            </p>
                        </div>

                        {activeTab === "Members" && (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group flex items-center gap-2 bg-[#4C0B81] text-white px-6 py-3 rounded-2xl font-bold hover:shadow-2xl hover:shadow-purple-200 transition-all active:scale-95"
                            >
                                <UserPlus
                                    size={18}
                                    className="group-hover:rotate-12 transition-transform"
                                />
                                Add Member
                            </button>
                        )}
                    </header>

                    <div className="flex-1 p-10 space-y-8">
                        {activeTab === "Dashboard" && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {/* Summary Card */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-5 shadow-sm">
                                        <div className="p-4 bg-orange-50 rounded-2xl text-orange-500">
                                            <Users size={32} />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs font-black uppercase">
                                                Total Students
                                            </p>
                                            <h4 className="text-3xl font-black text-slate-800">
                                                {members.length}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Gender Distribution - Custom Colors */}
                                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                        <h3 className="font-black text-slate-700 uppercase text-xs tracking-[0.2em] mb-8">
                                            Gender distribution
                                        </h3>
                                        <div className="h-[300px] w-full">
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <PieChart>
                                                    <Pie
                                                        data={genderData}
                                                        innerRadius={80}
                                                        outerRadius={110}
                                                        paddingAngle={10}
                                                        dataKey="value"
                                                        stroke="none"
                                                    >
                                                        {genderData.map(
                                                            (entry) => (
                                                                <Cell
                                                                    key={`cell-${entry.name}`}
                                                                    fill={
                                                                        GENDER_COLORS[
                                                                            entry
                                                                                .name
                                                                        ] ||
                                                                        "#CBD5E1"
                                                                    }
                                                                />
                                                            ),
                                                        )}
                                                    </Pie>
                                                    <Tooltip
                                                        contentStyle={{
                                                            borderRadius:
                                                                "20px",
                                                            border: "none",
                                                            boxShadow:
                                                                "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                                                        }}
                                                    />
                                                    <Legend
                                                        verticalAlign="bottom"
                                                        height={36}
                                                    />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    {/* Academic Year - Dynamic Bar Heights and Colors */}
                                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                        <h3 className="font-black text-slate-700 uppercase text-xs tracking-[0.2em] mb-8">
                                            Batch Breakdown
                                        </h3>
                                        <div className="h-[300px] w-full">
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <BarChart data={batchData}>
                                                    <CartesianGrid
                                                        strokeDasharray="3 3"
                                                        vertical={false}
                                                        stroke="#F1F5F9"
                                                    />
                                                    <XAxis
                                                        dataKey="year"
                                                        axisLine={false}
                                                        tickLine={false}
                                                        tick={{
                                                            fill: "#94A3B8",
                                                            fontSize: 12,
                                                        }}
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
                                                        }}
                                                        contentStyle={{
                                                            borderRadius:
                                                                "15px",
                                                            border: "none",
                                                            boxShadow:
                                                                "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                                                        }}
                                                    />
                                                    <Bar
                                                        dataKey="students"
                                                        radius={[10, 10, 0, 0]}
                                                        barSize={50}
                                                    >
                                                        {batchData.map(
                                                            (entry, index) => (
                                                                <Cell
                                                                    key={`bar-${index}`}
                                                                    fill={
                                                                        entry.fill
                                                                    }
                                                                />
                                                            ),
                                                        )}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Members List Table remains consistent with style */}
                        {activeTab === "Members" && (
                            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
                                <div className="p-6 border-b border-slate-50 flex items-center gap-4 bg-slate-50/50">
                                    <Search
                                        className="text-slate-400"
                                        size={20}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search records..."
                                        className="bg-transparent outline-none text-sm w-full font-medium"
                                    />
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
                                                <th className="px-8 py-5">
                                                    Full Member Details
                                                </th>
                                                <th className="px-8 py-5">
                                                    Academic Info
                                                </th>
                                                <th className="px-8 py-5">
                                                    Group
                                                </th>
                                                <th className="px-8 py-5 text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {members.map((member) => (
                                                <tr
                                                    key={member.id}
                                                    className="hover:bg-slate-50/80 transition-colors"
                                                >
                                                    <td className="px-8 py-5 flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-2xl bg-[#4C0B81]/10 text-[#4C0B81] flex items-center justify-center font-black text-xs">
                                                            {
                                                                member
                                                                    .firstName[0]
                                                            }
                                                            {member.lastName[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-700 text-sm">
                                                                {
                                                                    member.firstName
                                                                }{" "}
                                                                {
                                                                    member.lastName
                                                                }
                                                            </p>
                                                            <p className="text-[10px] text-slate-400 font-bold uppercase">
                                                                {member.email}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <p className="text-xs font-black text-slate-600 uppercase">
                                                            {member.department}
                                                        </p>
                                                        <p className="text-[10px] text-slate-400 font-bold">
                                                            BATCH {member.batch}
                                                        </p>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase">
                                                            Circle{" "}
                                                            {
                                                                member.subCircleNumber
                                                            }
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 text-center">
                                                        <button className="p-2 text-slate-300 hover:text-slate-600">
                                                            <MoreVertical
                                                                size={18}
                                                            />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                <AddMemberModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
}
