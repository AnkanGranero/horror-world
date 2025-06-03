import { Movie } from "@/types/movie";
import { Country } from "@/types/country";

export async function fetchMovies(selectedCountry: Country): Promise<Movie[]> {
  const res = await fetch(`/api/movies?region=${selectedCountry.cca2}`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();
  return data.results;
}