import { useEffect, useRef } from "react";
import { Movie, MovieDetails } from "@/types/movie"
import Image from "next/image"

type Props = {
    movie: Movie;
    details?: null | MovieDetails
    isLoading: boolean;
    onClose: () => void;
};

export default function MovieModal({ movie, details, isLoading, onClose }: Props) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-4">
            <div
                ref={modalRef}
                className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-black text-xl hover:scale-110 transition-transform"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded"
                    height="750"
                    width="500"
                />

                <h2 id="modal-title" className="text-xl text-black font-bold mt-4">{movie.title}</h2>

                {isLoading ? (
                    <p className="text-gray-500 mt-4">Loading details...</p>
                ) : details && (
                    <>
                        <p className="mt-2 text-gray-700">{details?.overview}</p>

                        {details?.production_countries?.length > 0 && (
                            <p className="text-sm text-gray-500 mt-4">
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
            </div>
        </div>
    );
}
