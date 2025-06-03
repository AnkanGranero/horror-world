"use client";

import { fetchCountries } from "@/lib/fetchCountries"
import SelectCountry from "./SelectCountry"
import { useEffect, useState } from "react";
import { Country } from "@/types/country";

export default function Header() {

  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .catch(() => setError("Failed to load countries"));

  }, [])

  return (
    <header className="p-[4rem] pb-0 top-[20vh] w-full">
      <h1 className="font-bold font-serif text-6xl md:text-9xl text-warm text-center glow">HORROR WORLD</h1>
      <nav className="flex justify-center p-[2rem] pb-[0.8rem] mt-4">
        {
          error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <SelectCountry countries={countries}></SelectCountry>
          )
        }
      </nav>
    </header>
  )

}