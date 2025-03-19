"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Loader2 } from "lucide-react"; 
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      loadFavorites();
      setLoading(false);
    }, 500); 
  }, []);

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]") as Movie[];
    setFavorites(storedFavorites);
  };

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-foreground">
        <Loader2 className="w-12 h-12 animate-spin text-primary dark:text-secondary" />
        <p className="mt-2 text-lg font-semibold">Loading your favorites...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">My Favorite Movies</h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <div key={movie.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
              {/* Movie Poster & Details */}
              <Link href={`/movies/${movie.id}`} className="block">
                <Image
                  className="w-full h-60 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={500}
                  height={750}
                  loading="lazy"
                />
              </Link>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">⭐ {movie.vote_average.toFixed(1)}</p>
              </div>

              {/* Remove from Favorites Button */}
              <button
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                onClick={() => removeFavorite(movie.id)}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 mt-4">No favorite movies yet.</p>
      )}
    </div>
  );
}
