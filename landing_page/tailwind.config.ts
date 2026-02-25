import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sectionsclientdetailpage/**/*.{js,ts,jsx,tsx,mdx}", // Add this explicitly
    ],
    theme: {
        extend: {
            fontFamily: {
                // Ensure poppins is defined if you use font-poppins
                poppins: ["var(--font-poppins)", "sans-serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                lg: "2rem",
            },
        },
        screens: {
            xs: "375px", // Your original small
            sm: "640px", // Standard tablet/large phone
            md: "768px", // Standard tablet
            lg: "1024px", // Laptop
            xl: "1280px", // Desktop
            "2xl": "1536px", // Large monitors
        },
    },
    plugins: [],
};
export default config;
