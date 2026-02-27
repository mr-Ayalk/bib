// "use client";
// import React, { useState, useEffect } from "react";
// import { Check, X, Clock, Calendar as CalendarIcon } from "lucide-react";

// interface Member {
//     id: string;
//     firstName: string;
//     lastName: string;
//     batch: string;
// }

// export default function AttendancePage() {
//     const [members, setMembers] = useState<Member[]>([]);
//     const [attendanceMap, setAttendanceMap] = useState<Record<string, string>>(
//         {},
//     );
//     const [selectedDate, setSelectedDate] = useState(
//         new Date().toISOString().split("T")[0],
//     );
//     const [loading, setLoading] = useState(true);

//     // Load Members and existing Attendance
//     useEffect(() => {
//         async function loadData() {
//             setLoading(true);
//             const [memRes, attRes] = await Promise.all([
//                 fetch("/api/members"),
//                 fetch(`/api/attendance?date=${selectedDate}`),
//             ]);
//             const membersData = await memRes.json();
//             const attendanceData = await attRes.json();

//             setMembers(membersData);

//             // Map memberId -> status
//             const map: Record<string, string> = {};
//             attendanceData.forEach((record: any) => {
//                 map[record.memberId] = record.status;
//             });
//             setAttendanceMap(map);
//             setLoading(false);
//         }
//         loadData();
//     }, [selectedDate]);

//     const updateAttendance = async (memberId: string, status: string) => {
//         setAttendanceMap((prev) => ({ ...prev, [memberId]: status }));

//         await fetch("/api/attendance", {
//             method: "POST",
//             body: JSON.stringify({ memberId, status, date: selectedDate }),
//         });
//     };

//     return (
//         <div className="p-8 max-w-5xl mx-auto dark:bg-[#050505] min-h-screen text-white">
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-3xl font-black uppercase tracking-tighter">
//                     Daily <span className="text-[#6A0DAD]">Attendance</span>
//                 </h1>
//                 <input
//                     type="date"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                     className="bg-white/5 border border-white/10 rounded-lg p-2 outline-none focus:border-[#6A0DAD]"
//                 />
//             </div>

//             <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
//                 <table className="w-full text-left">
//                     <thead className="bg-white/5 text-xs uppercase text-gray-400">
//                         <tr>
//                             <th className="p-4">Member Name</th>
//                             <th className="p-4">Batch</th>
//                             <th className="p-4 text-center">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-white/5">
//                         {members.map((member) => (
//                             <tr
//                                 key={member.id}
//                                 className="hover:bg-white/5 transition-colors"
//                             >
//                                 <td className="p-4 font-bold">
//                                     {member.firstName} {member.lastName}
//                                 </td>
//                                 <td className="p-4 text-sm text-gray-400">
//                                     {member.batch}
//                                 </td>
//                                 <td className="p-4">
//                                     <div className="flex justify-center gap-2">
//                                         <StatusBtn
//                                             active={
//                                                 attendanceMap[member.id] ===
//                                                 "Present"
//                                             }
//                                             onClick={() =>
//                                                 updateAttendance(
//                                                     member.id,
//                                                     "Present",
//                                                 )
//                                             }
//                                             color="bg-green-500"
//                                             icon={<Check size={16} />}
//                                             label="P"
//                                         />
//                                         <StatusBtn
//                                             active={
//                                                 attendanceMap[member.id] ===
//                                                 "Absent"
//                                             }
//                                             onClick={() =>
//                                                 updateAttendance(
//                                                     member.id,
//                                                     "Absent",
//                                                 )
//                                             }
//                                             color="bg-red-500"
//                                             icon={<X size={16} />}
//                                             label="A"
//                                         />
//                                         <StatusBtn
//                                             active={
//                                                 attendanceMap[member.id] ===
//                                                 "Permission"
//                                             }
//                                             onClick={() =>
//                                                 updateAttendance(
//                                                     member.id,
//                                                     "Permission",
//                                                 )
//                                             }
//                                             color="bg-orange-500"
//                                             icon={<Clock size={16} />}
//                                             label="Per"
//                                         />
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// function StatusBtn({ active, onClick, color, icon, label }: any) {
//     return (
//         <button
//             onClick={onClick}
//             className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
//                 active
//                     ? `${color} text-white`
//                     : "bg-white/5 text-gray-500 hover:bg-white/10"
//             }`}
//         >
//             {icon} {label}
//         </button>
//     );
// }
