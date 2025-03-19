"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const defaultImage = "default_movie_img.png";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
}

export default function Dashboard() {
  const [movies, setMovies] = useState<Movie[]>([]); 
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const router = useRouter(); 

  // Function to fetch movies from TMDB API
  const fetchMovies = async (page: number) => {
    setLoading(true); 
    
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`
      );
      
      if (!res.ok) return; 
      
      const data = await res.json();
      setMovies(data.results); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false); 
    }
  };

  // Fetch movies when the page number changes
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <div className="flex flex-col items-center bg-background text-foreground min-h-screen">
      <h1 className="text-3xl font-bold my-4">Movies</h1>
    
      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <Link href={`/movies/${movie.id}`}>
            <Image
  className="w-full h-60 object-cover"
  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/default_movie_img.png"}
  alt={movie.title}
  width={500}
  height={750}
  priority
/>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="opacity-80">⭐ {movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4 my-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))} 
          disabled={page === 1}
          className="px-4 py-2 rounded border border-foreground disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 rounded border border-foreground"
        >
          Next
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="opacity-60 my-4">Loading...</p>}
    </div>
  );
}