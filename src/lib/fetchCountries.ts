import { Country } from "@/types/country"
export async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca2");
    if (!res.ok) throw new Error("Failed to fetch countries");

    const data: Country[] = await res.json();

    return data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common))
}