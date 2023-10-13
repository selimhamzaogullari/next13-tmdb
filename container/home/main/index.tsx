import React from 'react';
import TopContent from './topContent';
import ButtonContent from './buttonContent';
import {getGenresOfMovies, getNowPlaying} from '@/services/movies';

export interface NowPlayingResIF {
  id: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genre_ids: Array<number>;
}

export interface GenresIF {
  id: number;
  name: string;
}

async function MainContent() {
  const [resGenres, nowPlaying]: [{genres: Array<any>}, Array<NowPlayingResIF>] = await Promise.all([
    getGenresOfMovies(),
    getNowPlaying(),
  ]);
  const genres: Array<GenresIF> = resGenres.genres;

  const nowPlayingGenres = genres.filter(genre => nowPlaying[0].genre_ids.includes(genre.id));

  return (
    <div className="sm:max-w-4xl text-white">
      <TopContent nowPlaying={nowPlaying[6]} nowPlayingGenres={nowPlayingGenres} />
      <ButtonContent />
    </div>
  );
}

export default MainContent;
