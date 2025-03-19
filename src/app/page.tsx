"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState<"login" | "register" | null>(null);
  const router = useRouter();

  const handleNavigation = (path: string, type: "login" | "register") => {
    setLoading(type);
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4">Welcome to Movie Explorer App</h1>

      <div className="flex gap-6 mt-4"> {/* Added gap-6 for spacing */}
        <button
          onClick={() => handleNavigation("/login", "login")}
          className="px-6 py-3 rounded bg-primary text-white flex items-center justify-center gap-2 hover:opacity-80 disabled:opacity-50"
          disabled={loading !== null}
        >
          {loading === "login" && (
            <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          )}
          Login
        </button>

        <button
          onClick={() => handleNavigation("/register", "register")}
          className="px-6 py-3 rounded bg-secondary text-white flex items-center justify-center gap-2 hover:opacity-80 disabled:opacity-50"
          disabled={loading !== null}
        >
          {loading === "register" && (
            <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          )}
          Register
        </button>
      </div>
    </div>
  );
}
