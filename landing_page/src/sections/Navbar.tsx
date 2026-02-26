"use client";
import { useState, useEffect, useRef } from "react";
import logoImage from "../assets/images/fellow_logo.png";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Languages, ChevronDown } from "lucide-react";
import ThemeToggleBtn from "../components/ThemeToggleBtn";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/Programs" },
    { label: "Materials", href: "/Materials" },
    { label: "Members", href: "/Members" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
];

const languages = [
    { code: "en", label: "English" },
    { code: "am", label: "አማርኛ" },
    { code: "ar", label: "العربية" },
];

export default function Navbar({
    theme,
    setTheme,
}: {
    theme: string;
    setTheme: (theme: string) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("English");

    // Close dropdown when clicking outside
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                langRef.current &&
                !langRef.current.contains(event.target as Node)
            ) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const textColor = "text-slate-900 dark:text-white";

    return (
        <section
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-white/90 dark:bg-black/40 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="mx-auto w-[94%] max-w-[1233px]">
                <div className="flex justify-between items-center rounded-full">
                    {/* 1. Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 cursor-pointer group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12">
                                <Image
                                    src={logoImage}
                                    alt="5K Logo"
                                    fill
                                    className="rounded-full object-cover border border-slate-100 shadow-sm"
                                />
                            </div>
                            <div>
                                {/* Changed text-[#4C0B81] to include dark:text-white or a lighter purple */}
                                <h1 className="text-[#4C0B81] dark:text-purple-400 font-black text-lg leading-tight uppercase tracking-tight">
                                    5K Bible Study
                                </h1>
                                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                    Addis Ababa University Fellowship
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* 2. Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav
                            className={`flex space-x-6 font-semibold text-sm ${textColor}`}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="cursor-pointer hover:text-[#6A0DAD] dark:hover:text-purple-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Interactive Elements: Language + Theme + Login */}
                        <div className="flex items-center space-x-5 border-l border-slate-300 dark:border-white/20 pl-6">
                            {/* LANGUAGE DROPDOWN */}
                            <div className="relative" ref={langRef}>
                                <button
                                    onClick={() => setLangOpen(!langOpen)}
                                    className={`flex items-center space-x-1 cursor-pointer font-medium text-sm ${textColor} hover:opacity-70 transition-opacity cursor-pointer`}
                                >
                                    <Languages size={18} />
                                    <span>{currentLang}</span>
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {langOpen && (
                                    <div className="absolute top-full mt-2 right-0 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-lg shadow-xl py-2 w-32 z-[60]">
                                        {languages.map((l) => (
                                            <button
                                                key={l.code}
                                                onClick={() => {
                                                    setCurrentLang(l.label);
                                                    setLangOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-white/5 ${textColor}`}
                                            >
                                                {l.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="cursor-pointer hover:opacity-80 transition-opacity">
                                <ThemeToggleBtn
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            </div>

                            <Link href="/Login">
                                <button className="bg-[#6A0DAD] text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-[#520a85] transition-all cursor-pointer active:scale-95">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* 3. Mobile Navigation Controls */}
                    <div className="md:hidden flex items-center space-x-4 cursor-pointer ">
                        <Languages
                            size={20}
                            className={textColor}
                            onClick={() => setLangOpen(!langOpen)}
                        />
                        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${textColor} cursor-pointer p-1`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5 p-8 shadow-2xl cursor-pointer">
                    <nav className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium ${textColor}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex flex-col space-y-4 pt-4 border-t border-slate-100 dark:border-white/10">
                            <p
                                className={`text-sm font-bold uppercase tracking-widest opacity-50 ${textColor}`}
                            >
                                Switch Language
                            </p>
                            <div className="flex gap-4">
                                {languages.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => setCurrentLang(l.label)}
                                        className={`text-sm p-2 rounded-md border dark:border-white/10 ${textColor}`}
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Link href="/Login">
                            <button className="w-full bg-[#6A0DAD] text-white py-4 rounded-xl font-bold">
                                Login
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </section>
    );
}
