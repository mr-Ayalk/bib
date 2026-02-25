import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

// app/layout.tsx
export const metadata: Metadata = {
    title: ` 5K Bible Study - Empowering Your Faith Journey`,
    description: "ሕይወት ለዋጩ ፤ የእግዚአብሔር ቃል ይጠና ፤ በታማኝነትም ይታወጅ !",
    icons: {
        icon: "/eyohalogo.png", // Standard favicon
        shortcut: "/eyohalogo.png", // Alternative for older browsers
        apple: "/eyohalogo.png", // For iOS home screen bookmarks
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* suppressHydrationWarning is needed because the theme script changes attributes */}
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `,
                    }}
                />
            </head>
            <body
                className={`${inter.variable} font-sans antialiased bg-white dark:bg-black text-slate-900 dark:text-slate-100`}
            >
                {children}
            </body>
        </html>
    );
}
