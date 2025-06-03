"use client"

import MovieCard from "@/components/MovieCard"
import { useEffect, useState } from "react";
import { Movie } from "@/types/movie"
import { useCountry } from "@/contexts/countryContext"


export default function MovieList() {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState();
    const { selectedCountry } = useCountry();

    useEffect(() => {
        if (selectedCountry?.cca2) {
            setLoading(true)
            fetch(`/api/movies?region=${selectedCountry.cca2}`)
                .then(res => {
                    if (!res.ok) throw new Error("Failed to fetch movies")
                    return res.json();
                })
                .then((data) => {
                    setMovies(data.results)

                })
                .catch((err) => setError(err.message))
                .finally(() => {
                    setLoading(false)
                    setHasSearched(true)
                }
                )
        }
    }, [selectedCountry, setMovies, setError, setLoading]);

    if (!hasSearched) return null;
    if (loading) return <p className="text-white text-xl">Loading movies...</p>;
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
