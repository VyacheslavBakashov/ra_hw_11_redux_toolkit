export type MoviePreviewTypes = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
};

export type SelectedMovieTypes = {
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  imdbRating: string;
} & MoviePreviewTypes;