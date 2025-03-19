"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  
  const [form, setForm] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Handle form submission and login API call
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); 
    setError(""); 
    setLoading(true); 

    try {
      // Send login request to the server with form data
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        // Navigate to the dashboard on successful login
        console.log("Login successful");
        router.push("/dashboard");
      } else {
        // Display error message from server or a default message
        setError(data.error || "Login failed");
      }
    } catch (error) {
      // Handle any unexpected errors
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Login form */}
      <form
        onSubmit={handleSubmit} 
        className="p-6 rounded-lg shadow-md border w-96"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

        {/* Email input */}
        <div className="flex items-center space-x-2 mb-2">
          <label className="font-medium w-24">Email</label>
          <input
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
            required
            disabled={loading} 
          />
        </div>

        {/* Password input */}
        <div className="flex items-center space-x-2">
          <label className="font-medium w-24">Password</label>
          <input
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setForm({ ...form, password: e.target.value })} 
            required
            disabled={loading} 
          />
        </div>

        {/* Display error message if there's an error */}
        {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

        {/* Submit button with loading feedback */}
        <button
          className="w-full mt-4 p-3 font-medium rounded-md bg-primary text-white dark:bg-secondary dark:text-black flex justify-center items-center gap-2 disabled:opacity-50"
          type="submit"
          disabled={loading} 
        >
          {loading && (
            
            <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          )}
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Navigation link to the registration page */}
        <p className="text-center mt-3 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
