"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  // State for managing form input
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Stores error messages
  const [loading, setLoading] = useState(false); // Loading state for button
  const router = useRouter(); // Router for navigation

  // Handles form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true); 

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/login"); // Redirect on success
    } else {
      setError(data.error || "Registration failed"); // Display error message
    }
    setLoading(false); 
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg shadow-md border w-96"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

        {/* Email Input */}
        <div className="flex items-center mb-3">
          <label className="font-medium w-24">Email:</label>
          <input
            className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center">
          <label className="font-medium w-24">Password:</label>
          <input
            className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        {/* Register Button with Loading Spinner */}
        <button 
          className="w-full mt-4 p-3 font-medium rounded-md bg-primary text-white dark:bg-secondary dark:text-black flex justify-center items-center gap-2"
          type="submit"
          disabled={loading}
        >
          {loading && <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>}
          Register
        </button>

        {/* Redirect to Login */}
        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary dark:text-secondary hover:underline">
            Login
          </Link>
        </p>
      </form>

      {/* Display error messages if any */}
      {error && <p className="mt-3 text-red-500">{error}</p>}
    </div>
  );
}
