import {getPopularMovies, getTopRatedMovies} from '@/services/movies';
import React from 'react';
import MovieList from '@/components/movieLists';
import {MovieListIF} from '@/interfaces';

interface MiddleContentIF {
  nowPlaying: Array<MovieListIF>;
}

async function MiddleContent({nowPlaying}: MiddleContentIF) {
  const [popularMovies, topRatedMovies] = await Promise.all([getPopularMovies(), getTopRatedMovies()]);

  return (
    <div className="mt-12">
      <MovieList data={nowPlaying.slice(0, 5)} title="Now Playing" />
      <MovieList data={popularMovies.slice(0, 5)} title="Popular" classNames="mt-6 mb-6" />
      <MovieList data={topRatedMovies.slice(0, 5)} title="Most Rated" />
    </div>
  );
}

export default MiddleContent;
