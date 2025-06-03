import { MovieDetails } from "@/types/movie";

export async function fetchMovieDetails(id: number): Promise<MovieDetails> {
  const res = await fetch(`/api/movie-details?id=${id}`);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return await res.json();
}