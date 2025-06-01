import { fetchCountries } from "@/lib/fetchCountries"
import CountrySelect from "./CountrySelect"

export default async function Header() {

    const countries = await fetchCountries()

    return (
                    <header className="p-[4rem] top-[20vh] w-full">
              <h1 className="font-bold font-serif text-3xl md:text-9xl text-warm text-center glow">HORROR WORLD</h1>
              <nav className="flex justify-center p-[2rem] mt-4">
                <CountrySelect countries={countries}></CountrySelect>
              </nav>
            </header>
    )

}