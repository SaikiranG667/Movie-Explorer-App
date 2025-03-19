import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET_KEY || "default_secret"; // Fallback in case env is missing

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies(); // ✅ No await needed
    console.log("Cookies:", cookieStore.getAll());
    const token = cookieStore.get("auth")?.value;

    console.log("Token:", token); 
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify JWT
    jwt.verify(token, SECRET);

    return NextResponse.json({ message: "Welcome to the Dashboard!" }, { status: 200 });
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
