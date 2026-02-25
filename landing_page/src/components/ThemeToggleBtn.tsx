// import { Moon, Sun } from "lucide-react";
// import React, { useEffect } from "react";

// const ThemeToggleBtn = ({ theme, setTheme }) => {
//   useEffect(() => {
//     const prefersDarkMode = window.matchMedia(
//       "(prefers-color-scheme:dark)"
//     ).matches;
//     setTheme(theme || (prefersDarkMode ? "dark" : "light"));
//   }, []);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);
//   return (
//     <>
//       <button>
//         {theme === "dark" ? (
//           <Sun
//             onClick={() => setTheme("light")}
//             className="size-8 p-1.5 border border-gray-500 rounded-full bg-white"
//           />
//         ) : (
//           <Moon
//             onClick={() => setTheme("dark")}
//             className="size-8 p-1.5 border border-gray-500 rounded-full "
//           />
//         )}
//       </button>
//     </>
//   );
// };

// export default ThemeToggleBtn;
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