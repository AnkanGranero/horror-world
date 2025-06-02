export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
};

export type MovieDetails = {
  overview: string;
  production_countries: {
    name: string;
  }[];
};

export type MovieContextType = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  error: string | null;
  setError: (err: string | null) => void; 
  hasSearched: boolean;
  setHasSearched: (value: boolean) => void;
};