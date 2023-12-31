import React from 'react';
import MainContent from './Main';
import MiddleContent from './MiddleContent';
import {getGenresOfMovies, getNowPlaying} from '@/services/movies';
import {GenresIF, MovieListIF} from '@/interfaces';

async function HomeContainer() {
  const [resGenres, nowPlaying]: [{genres: Array<any>}, Array<MovieListIF>] = await Promise.all([
    getGenresOfMovies(),
    getNowPlaying(),
  ]);
  const genres: Array<GenresIF> = resGenres.genres;

  return (
    <>
      <main className="flex flex-column items-center h-[calc(100vh-96px)]">
        <MainContent nowPlaying={nowPlaying[0]} genres={genres} />
      </main>
      <MiddleContent nowPlaying={nowPlaying} />
    </>
  );
}

export default HomeContainer;
