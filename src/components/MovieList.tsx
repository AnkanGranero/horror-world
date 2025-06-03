"use client"

import MovieCard from "@/components/MovieCard"
import { useEffect, useState } from "react";
import { Movie } from "@/types/movie"
import { useCountry } from "@/contexts/countryContext"
import { fetchMovies } from "@/lib/fetchMovies"


export default function MovieList() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState();
    const { selectedCountry } = useCountry();

    useEffect(() => {
        if (!selectedCountry?.cca2) return;

        setLoading(true);
        setError(undefined);

        fetchMovies(selectedCountry)
            .then((movies) => setMovies(movies))
            .catch((err) => setError(err.message))
            .finally(() => {
                setLoading(false);
                setHasSearched(true)
            })
    }, [selectedCountry]);

    if (!hasSearched) return null;
    if (loading) return <p className="text-white text-xl md:text-4xl px-8 md:mt-[5%]">Loading movies...</p>;
    if (error) return <p className="text-red-500 text-xl md:text-4xl px-8 md:mt-[5%]">Something went wrong: {error}</p>;
    if (movies.length === 0) return <p className="text-white text-xl md:text-4xl px-8 md:mt-[5%]">No horror movies found from this country.</p>;

    return (
        <ul className="flex flex-wrap gap-6 justify-center">
            {movies.map((movie) => (
                <li key={movie.id}><MovieCard key={movie.id} movie={movie} /></li>
            ))}
        </ul>
    );
}
