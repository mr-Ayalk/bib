"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ProgramsSection from "@/sections/ProgramsPage";

const ProgramsPage = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-[#050505]">
            <Navbar theme={theme} setTheme={toggleTheme} />

            <main className="pt-20">
                {" "}
                {/* Padding added to prevent content from hiding under fixed Navbar */}
                <ProgramsSection />
            </main>

            <Footer />
        </div>
    );
};

export default ProgramsPage;
