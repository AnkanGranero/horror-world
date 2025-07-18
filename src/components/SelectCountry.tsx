"use client";
import { useCountry } from "@/contexts/countryContext";
import { Country } from "../types/country";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";

export default function SelectCountry({
  countries,
}: {
  countries: Country[];
}) {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const isMobile = useIsMobile();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const countryCode = e.target.value;
    const country = countries.find((country) => country.cca2 === countryCode)
    setSelectedCountry(country ?? null);
  }

  return (

    <div className="flex flex-col md:flex-row items-center md:gap-4">
      {!isMobile && selectedCountry?.flags?.svg && (
        <Image
          src={selectedCountry.flags.svg}
          alt={`Flag of ${selectedCountry.name.common}`}
          className="w-auto h-[3.5rem] object-cover rounded opacity-90"
          height={1000}
          width={1500}
        />
      )}
      <select
        value={selectedCountry?.cca2 ?? ""}
        onChange={handleChange}
        className="w-[15rem] md:w-[20rem] text-black text-[1rem] md:text-2xl px-4 rounded bg-white h-[3.5rem] overflow-y-auto truncate"
      >
        <option value="">Pick a country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      {selectedCountry?.flags?.svg && (
        <Image
          src={selectedCountry.flags.svg}
          alt={`Flag of ${selectedCountry.name.common}`}
          className="mt-[3rem] md:mt-0 w-[auto] h-[3.5rem] object-cover rounded opacity-90"
          height={1000}
          width={1500}
        />
      )}
    </div>

  );
}
