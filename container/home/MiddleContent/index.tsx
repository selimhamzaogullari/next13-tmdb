import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '@/services/movies';
import React from 'react';
import MovieList from '@/components/movieLists';
import {MovieListIF} from '@/interfaces';
import MainMovie from '@/components/mainMovie';
import DubleMovie from './dubleMovie';

interface MiddleContentIF {
  nowPlaying: Array<MovieListIF>;
}

async function MiddleContent({nowPlaying}: MiddleContentIF) {
  const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ]);

  return (
    <div className="mt-12">
      <MovieList data={nowPlaying.slice(0, 6)} title="Now Playing" classNames="mb-10" />
      <MainMovie movie={popularMovies[0]} ribbonText="Most Popular" />
      <MovieList data={popularMovies.slice(1, 7)} title="Popular" classNames="mt-10 mb-20" />
      <DubleMovie movies={topRatedMovies.slice(0, 2)} ribbonText="Most Rated" />
      <MovieList data={topRatedMovies.slice(2, 8)} title="Most Rated" classNames="mt-20 mb-10" />
      <MainMovie movie={upcomingMovies[0]} ribbonText="Upcoming" />
      <MovieList data={upcomingMovies.slice(1, 7)} title="Upcoming" classNames="mt-10 mb-20" />
    </div>
  );
}

export default MiddleContent;
