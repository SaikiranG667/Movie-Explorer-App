import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User, { IUser } from "@/models/User";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET: string = process.env.SECRET_KEY || "default_secret";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    await connectDB();

    // Check if user exists
    const user: IUser | null = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT token
    const token: string = jwt.sign({ email }, SECRET, { expiresIn: "1h" });

    // ✅ Set the token in HttpOnly Cookie properly
    const response = NextResponse.json({ message: "Logged in" }, { status: 200 });
    // response.cookies.set("auth", token, {
    //   httpOnly: true,
    //   path: "/",
    //   maxAge: 3600, // 1 hour
    // });
    response.headers.set("Set-Cookie", `auth=${token}; HttpOnly; Path=/; Max-Age=3600`);

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
