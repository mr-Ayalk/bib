
"use client";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggleBtn({ 
  theme, 
  setTheme 
}: { 
  theme: string; 
  setTheme: (t: string) => void 
}) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-slate-700" size={20} />
      )}
    </button>
  );
}