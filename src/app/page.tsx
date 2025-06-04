"use client"
import MovieList from "@/components/MovieList";
import { useCountry } from "@/contexts/countryContext";
export default function Home() {

  const { selectedCountry } = useCountry();

  return (
    <main className=" p-8 flex items-center justify-center">
      {!selectedCountry ? (
        <p className="text-[1.3rem] md:text-[2rem] md:mt-[5%] px-[2rem] text-center max-w-[60rem] animate-[fadeInGrowSubtle_1s_ease_forwards]">

          Discover horror films from around the globe.
          Select a country to explore its cinematic nightmares — from cult classics to hidden gems.
        </p>) : (
        <MovieList />)}
    </main>
  );
}
