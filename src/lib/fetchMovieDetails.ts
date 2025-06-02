const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchMovieDetails(movieId: number) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );

    if (!res.ok) throw new Error("Failed to fetch movie details");

    return res.json();
}