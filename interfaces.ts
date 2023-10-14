export interface MovieListIF {
  id: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genre_ids: Array<number>;
  release_date: string;
}

export interface GenresIF {
  id: number;
  name: string;
}
