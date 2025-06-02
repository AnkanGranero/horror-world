"use client"

import MovieCard from "@/components/MovieCard"
import { useMovies } from "@/contexts/movieContext";


export default function MovieList() {

    const { movies, isLoading, error, hasSearched } = useMovies();

    if (!hasSearched) return null;
    if (isLoading) return <p className="text-white text-xl">Loading movies...</p>;
    if (error) return <p className="text-red-500 text-xl">Something went wrong: {error}</p>;
    if (movies.length === 0) return <p className="text-white text-xl">No horror movies found from this country.</p>;

    return (
        <ul className="flex flex-wrap gap-6 justify-center">
            {movies.map((movie) => (
                <li key={movie.id}><MovieCard key={movie.id} movie={movie} /></li>
            ))}
        </ul>
    );
}
