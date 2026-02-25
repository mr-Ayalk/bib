"use client";

import React, { useEffect, useState } from "react";

import Members from "@/sections/MembersSection";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const Page = () => {
    // Initial state set to light
    const [theme, setTheme] = useState("light");

    // Effect to sync theme with browser storage and document class
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Function to handle theme switching across the entire page
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
            {/* Navigation Bar with Theme Toggle */}
            <Navbar theme={theme} setTheme={toggleTheme} />

            <main>
                {/* The Members Section component we built earlier */}
                <Members />
            </main>

            {/* Site Footer */}
            <Footer />
        </div>
    );
};

export default Page;
