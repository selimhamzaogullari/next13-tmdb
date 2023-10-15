import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '@/services/movies';
import React from 'react';
import MovieList from '@/components/movieLists';
import {MovieListIF} from '@/interfaces';
import MainMovie from '@/components/mainMovie';

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
      <MovieList data={nowPlaying.slice(0, 6)} title="Now Playing" />
      <MainMovie movie={popularMovies[0]} ribbonText="Most Popular" />
      <MovieList data={popularMovies.slice(1, 7)} title="Popular" classNames="mt-6 mb-6" />
      <MovieList data={topRatedMovies.slice(0, 6)} title="Most Rated" />
      <MovieList data={upcomingMovies.slice(0, 6)} title="Upcoming" />
    </div>
  );
}

export default MiddleContent;
