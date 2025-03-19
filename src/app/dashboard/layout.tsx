"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; 

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false); 

  const handleLogout = async (): Promise<void> => {
    console.log("Logging out...");
    setIsLoggingOut(true); 

    try {
      const response = await fetch("/api/logout", { method: "POST" });

      if (response.ok) {
        router.push("/login"); // Redirect to login page
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar  */}
      <aside className="w-64 h-full fixed top-0 left-0 bg-background text-foreground p-6 border-r border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            Home
          </Link>
          <Link href="/dashboard/favorites" className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            Favorites
          </Link>

          {/* Logout Button with Loading */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
            disabled={isLoggingOut} 
          >
            {isLoggingOut ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Logging out...
              </>
            ) : (
              "Logout"
            )}
          </button>
        </nav>
      </aside>

      {/* Main Content (Scrollable) */}
      <main className="flex-1 ml-64 p-6 overflow-y-auto bg-background text-foreground">
        <div className="flex justify-end mb-4">
          
        </div>
        {children}
      </main>
    </div>
  );
}
