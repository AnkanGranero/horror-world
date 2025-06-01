export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
};

export type MovieContextType = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  isLoading: boolean;
  error: string | null;
  setError: (err: string | null) => void; 
  hasSearched: boolean;
  setHasSearched: (value: boolean) => void;
};