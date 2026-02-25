"use client";
import React, { useState } from "react";
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Trophy, 
  BookMarked, 
  Settings, 
  LogOut,
  ChevronRight,
  Bell
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = () => {
  const [activeMenu, setActiveMenu] = useState("Study Dashboard");

  const menuItems = [
    { name: "Study Dashboard", icon: <LayoutDashboard size={20} />, group: "MENU" },
    { name: "Study Plan & Topics", icon: <BookOpen size={20} />, group: "MENU" },
    { name: "AI Bible Chat", icon: <MessageSquare size={20} />, group: "MENU" },
    { name: "Community", icon: <Users size={20} />, group: "MENU" },
    { name: "Achievements", icon: <Trophy size={20} />, group: "MENU" },
    { name: "Reference Books", icon: <BookMarked size={20} />, group: "STUDY TOOLS" },
    { name: "Settings", icon: <Settings size={20} />, group: "SYSTEM" },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] dark:bg-[#0A0A0A] overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white dark:bg-[#111] border-r border-slate-200 dark:border-white/5 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6A0DAD] rounded-lg flex items-center justify-center text-white font-bold">B</div>
          <span className="font-black text-slate-800 dark:text-white tracking-tight uppercase">Bible Study</span>
        </div>

        <nav className="flex-1 px-4 space-y-8 mt-4">
          {["MENU", "STUDY TOOLS", "SYSTEM"].map((group) => (
            <div key={group}>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 mb-4 px-2 tracking-widest">{group}</p>
              <div className="space-y-1">
                {menuItems.filter(item => item.group === group).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveMenu(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      activeMenu === item.name 
                        ? "bg-purple-50 dark:bg-purple-900/10 text-[#6A0DAD] shadow-sm" 
                        : "text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={activeMenu === item.name ? "text-[#6A0DAD]" : "text-slate-400"}>
                        {item.icon}
                      </span>
                      <span className="text-sm font-bold">{item.name}</span>
                    </div>
                    {activeMenu === item.name && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t border-slate-100 dark:border-white/5">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-red-500 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* TOP BAR */}
        <header className="h-20 bg-white dark:bg-[#111] border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-8">
          <h2 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">
            {activeMenu}
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-[#6A0DAD] relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111]" />
            </button>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#6A0DAD] to-[#FF6600] border-2 border-white dark:border-slate-800 shadow-md" />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <section className="p-8 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full"
            >
              {activeMenu === "Study Dashboard" ? (
                <div className="space-y-6">
                  {/* Banner similar to your image */}
                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/20 dark:to-orange-900/20 border border-white dark:border-white/5">
                    <h1 className="text-2xl font-black text-slate-800 dark:text-white mb-2">Welcome, Ayana D.</h1>
                    <p className="text-slate-600 dark:text-slate-400 italic font-medium max-w-xl">
                      `Do your best to present yourself to God as one approved...` - 2 Timothy 2:15
                    </p>
                  </div>

                  {/* Placeholder for the rest of the grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-32 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                        Stats Card
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                  <div className="p-6 bg-slate-100 dark:bg-white/5 rounded-full mb-4">
                    <LayoutDashboard size={40} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Coming Soon</h3>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">The {activeMenu} module is under development.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;