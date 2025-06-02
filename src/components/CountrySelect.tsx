"use client";
import { useCountry } from "@/contexts/countryContext";
import { Country } from "../types/country";
import { useEffect } from "react";
import { fetchHorrorMoviesByCountry } from "@/lib/fetchMovies"
import { useMovies } from "@/contexts/movieContext"

type Props = {
  countries: Country[];
};

export default function CountrySelect({
  countries,
}: {
  countries: Country[];
}) {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const { setMovies, setError, setHasSearched } = useMovies();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const countryCode = e.target.value;
    const country = countries.find((country) => country.cca2 === countryCode)
    setSelectedCountry(country ?? null);
  }
  useEffect(() => {
    if (selectedCountry?.cca2) {
      fetchHorrorMoviesByCountry(selectedCountry.cca2)
        .then((movies) => {
          setMovies(movies)
          setHasSearched(true)
        })
        .catch((err) => setError(err.message))
        .finally

    }
  }, [selectedCountry]);

  return (
    <select
      value={selectedCountry?.cca2 ?? ""}
      onChange={handleChange}
      className="text-black text-xl md:text-2xl px-4 py-4 rounded bg-white max-w-[15rem] md:max-w-[20rem] max-h-60 overflow-y-auto"
    >
      <option value="">Pick a country</option>
      {countries.map((country) => (
        <option key={country.cca2} value={country.cca2}>
          {country.name.common}
        </option>
      ))}
    </select>
  );
}
