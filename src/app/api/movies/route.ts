import { NextResponse } from "next/server";

const API_KEY = process.env.TMDB_API_KEY!;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export async function GET() {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data: MovieAPIResponse = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// Type Definition
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieAPIResponse {
  results: Movie[];
}
