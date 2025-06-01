import { Country } from "@/types/country"
export async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) throw new Error("Failed to fetch countries");

    const data = await res.json();

    return data.sort((a: Country, b: Country) =>
        a.name.common.localeCompare(b.name.common))
}