"use client";

import { useState } from "react";
import { Movie, MovieDetails } from "@/types/movie";
import MovieModal from "@/components/MovieModal";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import { fetchMovieDetails } from "@/lib/fetchMovieDetails";

export default function MovieCard({ movie }: { movie: Movie }) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false); // för mobil
  const [showModal, setShowModal] = useState(false); // för desktop
  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {

    if (!details) {
      setLoading(true);
      fetchMovieDetails(movie.id)
        .then((data) => setDetails(data))
        .finally(() => setLoading(false))
    }
    if (isMobile) {
      setExpanded((prev) => !prev);
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <article
        className="bg-white rounded-lg overflow-hidden w-full max-w-xs cursor-pointer animate-[fadeInGrowSubtle_0.6s_ease-out_forwards]"
        onClick={handleClick}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="500"
          height="750"
          className="h-full md:h-[30rem] object-cover"
        />
        <section className="p-4 md:h-[5rem]">
          <h3 className="text-lg text-black font-semibold">{movie.title}</h3>

          {isMobile && expanded && !loading && details && (
            <>
              <p className="text-gray-700 mt-2">{details.overview}</p>
              {details.production_countries?.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  Production countries:{" "}
                  {details.production_countries.map((c: { name: string }, i: number) => (
                    <span key={c.name}>
                      {c.name}
                      {i < details.production_countries.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              )}
            </>
          )}
        </section>
      </article>

      {!isMobile && showModal && (
        <MovieModal
          movie={movie}
          details={details}
          isLoading={loading}
          onClose={closeModal}
        />
      )}
    </>
  );
}
