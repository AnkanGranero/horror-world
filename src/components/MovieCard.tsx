"use client";

import { useState } from "react";
import { Movie } from "@/types/movie";
import MovieModal from "@/components/MovieModal";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function MovieCard({ movie }: { movie: Movie }) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false); // för mobil
  const [showModal, setShowModal] = useState(false); // för desktop
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    
    if (!details) {
      setLoading(true);
      fetch(`/api/movie-details?id=${movie.id}`)
      .then(res => {
        if(!res.ok) throw new Error("Failed to fetch movie details");
        return res.json();
      })
        .then((data) => setDetails(data))
        .finally(() => setLoading(false));
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
        className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto"
        />
        <section className="p-4">
          <h3 className="text-lg text-black font-semibold">{movie.title}</h3>

          {isMobile && expanded && !loading && (
            <>
              <p className="text-gray-700 mt-2">{details.overview}</p>
              {details.production_countries?.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  Production countries:{" "}
                  {details.production_countries.map((c: any, i: number) => (
                    <span key={c.iso_3166_1}>
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
