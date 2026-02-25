"use client"; // This line is the fix!
import Footer from "@/sections/Footer";
import ContactSection from "@/sections/ContactSection";
import Navbar from "@/sections/Navbar";
import { useEffect, useState } from "react";

export default function ContactPage() {
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
        <main className="min-h-screen">
            <Navbar theme={theme} setTheme={toggleTheme} />
            {/* Adding top padding to clear the fixed Navbar */}
            <div className="pt-10">
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
