"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Loader2 } from "lucide-react"; 
interface MovieDetailProps {
  params: { id: string };
}

interface MovieDetails {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
}

export default function MovieDetail({ params }: MovieDetailProps) {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true); 
        const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
        const BASE_URL = "https://api.themoviedb.org/3/movie";
        const res = await fetch(`${BASE_URL}/${params.id}?api_key=${API_KEY}&language=en-US`, { cache: "no-store" });

        if (!res.ok) throw new Error("Movie not found");

        const data = await res.json();
        setMovie(data);

        // Check if movie is already in favorites
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favorites.some((fav: MovieDetails) => fav.id === data.id));
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false); 
      }
    }

    fetchMovieDetails();
  }, [params.id]);

  const toggleFavorite = () => {
    if (!movie) return;

    let favorites: MovieDetails[] = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== movie.id); // Remove from favorites
    } else {
      favorites.push(movie); // Add to favorites
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-foreground">
        <Loader2 className="w-12 h-12 animate-spin text-primary dark:text-secondary" />
        <p className="mt-2 text-lg font-semibold">Loading movie details...</p>
      </div>
    );
  }

  if (!movie) return <p className="text-center mt-10 text-red-500">Movie not found.</p>;

  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/default_movie_img.png"; // Default poster

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Back to Dashboard */}
      <div className="w-full max-w-md mb-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-foreground hover:opacity-80">
          <ArrowLeft size={24} /> <span className="text-lg font-semibold">Back to Dashboard</span>
        </Link>
      </div>

      {/* Movie Details */}
      <div className="bg-background text-foreground rounded-lg shadow-lg p-6 max-w-md w-full text-center border border-border">
        <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>

        <Image
          className="w-48 mx-auto rounded-lg shadow"
          src={posterSrc}
          alt={movie.title}
          width={192}
          height={288}
          loading="lazy"
        />

        <p className="mt-4">{movie.overview || "No description available."}</p>
        <p className="mt-2">⭐ {movie.vote_average.toFixed(1)}</p>
        <p className="mt-1">📅 Release Date: {movie.release_date || "Unknown"}</p>

        {/* Favorite Button */}
        <button
          className="mt-4 px-4 py-2 rounded-lg flex items-center justify-center gap-2 border border-border hover:opacity-80"
          onClick={toggleFavorite}
        >
          <Heart size={20} className={isFavorite ? "fill-current text-red-500" : "text-foreground"} />
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
