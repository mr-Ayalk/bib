"use client"; // This line is the fix!

import Footer from "@/sections/Footer";
import MaterialsSection from "@/sections/MaterialsSection";
import Navbar from "@/sections/Navbar";
import ScriptureMaterial from "@/sections/ScriptureMaterial";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Checking for saved theme in localStorage
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);

        // Apply the class to the document for Tailwind's dark mode to work
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Helper to sync theme changes with the HTML class
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
            <main className=" py-20">
                <MaterialsSection />
                <ScriptureMaterial />
            </main>
            <Footer />
        </div>
    );
};

export default Page;
