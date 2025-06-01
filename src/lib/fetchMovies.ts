const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchHorrorMoviesByCountry(countryCode: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&with_origin_country=${countryCode}`
  );

  if (!response.ok) throw new Error("Kunde inte hämta filmer");

  const data = await response.json();
  return data.results;
}