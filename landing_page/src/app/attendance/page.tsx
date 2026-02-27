"use client";
import React, { useState, useEffect } from "react";
import { Check, X, Clock, Loader2 } from "lucide-react";

interface Member {
    id: string;
    firstName: string;
    lastName: string;
    batch: string;
}

// FIX: Define a proper interface for the button props
interface StatusBtnProps {
    active: boolean;
    onClick: () => void;
    color: string;
    icon: React.ReactNode;
    label: string;
}

export default function AttendancePage() {
    const [members, setMembers] = useState<Member[]>([]);
    const [attendanceMap, setAttendanceMap] = useState<Record<string, string>>(
        {},
    );
    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split("T")[0],
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                const [memRes, attRes] = await Promise.all([
                    fetch("/api/members"),
                    fetch(`/api/attendance?date=${selectedDate}`),
                ]);
                const membersData = await memRes.json();
                const attendanceData = await attRes.json();

                setMembers(membersData);

                const map: Record<string, string> = {};
                // FIX: Replaced 'any' with a specific record type
                attendanceData.forEach(
                    (record: { memberId: string; status: string }) => {
                        map[record.memberId] = record.status;
                    },
                );
                setAttendanceMap(map);
            } catch (error) {
                console.error("Failed to load attendance:", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [selectedDate]);

    const updateAttendance = async (memberId: string, status: string) => {
        setAttendanceMap((prev) => ({ ...prev, [memberId]: status }));

        await fetch("/api/attendance", {
            method: "POST",
            body: JSON.stringify({ memberId, status, date: selectedDate }),
        });
    };

    return (
        <div className="p-8 max-w-5xl mx-auto dark:bg-[#050505] min-h-screen text-white">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-black uppercase tracking-tighter">
                    Daily <span className="text-[#6A0DAD]">Attendance</span>
                </h1>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg p-2 outline-none focus:border-[#6A0DAD]"
                />
            </div>

            <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                {/* FIX: Use 'loading' state to show a spinner during fetch */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2
                            className="animate-spin text-[#6A0DAD]"
                            size={40}
                        />
                        <p className="text-gray-400 font-medium animate-pulse">
                            Syncing records...
                        </p>
                    </div>
                ) : (
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-xs uppercase text-gray-400">
                            <tr>
                                <th className="p-4">Member Name</th>
                                <th className="p-4">Batch</th>
                                <th className="p-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {members.map((member) => (
                                <tr
                                    key={member.id}
                                    className="hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-4 font-bold">
                                        {member.firstName} {member.lastName}
                                    </td>
                                    <td className="p-4 text-sm text-gray-400">
                                        {member.batch}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex justify-center gap-2">
                                            <StatusBtn
                                                active={
                                                    attendanceMap[member.id] ===
                                                    "Present"
                                                }
                                                onClick={() =>
                                                    updateAttendance(
                                                        member.id,
                                                        "Present",
                                                    )
                                                }
                                                color="bg-green-500"
                                                icon={<Check size={16} />}
                                                label="P"
                                            />
                                            <StatusBtn
                                                active={
                                                    attendanceMap[member.id] ===
                                                    "Absent"
                                                }
                                                onClick={() =>
                                                    updateAttendance(
                                                        member.id,
                                                        "Absent",
                                                    )
                                                }
                                                color="bg-red-500"
                                                icon={<X size={16} />}
                                                label="A"
                                            />
                                            <StatusBtn
                                                active={
                                                    attendanceMap[member.id] ===
                                                    "Permission"
                                                }
                                                onClick={() =>
                                                    updateAttendance(
                                                        member.id,
                                                        "Permission",
                                                    )
                                                }
                                                color="bg-orange-500"
                                                icon={<Clock size={16} />}
                                                label="Per"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

// FIX: Strictly typed the component props
function StatusBtn({ active, onClick, color, icon, label }: StatusBtnProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                active
                    ? `${color} text-white`
                    : "bg-white/5 text-gray-500 hover:bg-white/10"
            }`}
        >
            {icon} {label}
        </button>
    );
}
