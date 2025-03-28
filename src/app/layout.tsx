"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"; 
import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Movie Explorer App",
//   description: "Discover and explore movies!",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        {/* ThemeProvider inside <body> */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <header className="flex justify-end p-4">
            <ThemeSwitcher />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
