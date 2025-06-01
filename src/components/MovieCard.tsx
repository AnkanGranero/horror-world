import { Movie } from "@/types/movie";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-96 object-cover"
        />
      ) : (
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
          No image
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-black">{movie.title}</h3>
      </div>
    </div>
  );
}
