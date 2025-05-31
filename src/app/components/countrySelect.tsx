"use client";

import { useState } from "react";

export default function CountrySelect({
  countries,
}: {
  countries: Country[];
}) {
  const [selected, setSelected] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedCountry = e.target.value;
    setSelected(selectedCountry);
  }


  return (
    <select
      value={selected}
      onChange={handleChange}
      className="text-black text-2xl px-4 py-4 rounded bg-white max-w-[20rem] max-h-60 overflow-y-auto"
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
