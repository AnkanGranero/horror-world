"use client";

import { createContext, useContext, useState } from "react";
import type { Movie, MovieContextType } from "@/types/movie";

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState(false);

    return (
        <MovieContext.Provider value={{ movies, setMovies, isLoading, error, setError, hasSearched, setHasSearched }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovies = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("useMovies must be used within a MovieProvider");
    }
    return context;
};