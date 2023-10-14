'use client';
import React from 'react';
import {getGenresOfMovies, getNowPlaying} from '@/services/movies';
import {GenresIF, MovieListIF} from '@/interfaces';
import ButtonContent from './buttonContent';
import TopContent from './topContent';
import {useGenreStore} from '@/store';

interface MainContentIF {
  nowPlaying: MovieListIF;
  nowPlayingGenres: Array<GenresIF>;
  genres: Array<GenresIF>;
}

async function MainContent({nowPlaying, nowPlayingGenres, genres}: MainContentIF) {
  const addGenres = useGenreStore(state => state.add);
  addGenres(genres);
  return (
    <div className="sm:max-w-4xl text-white">
      <TopContent nowPlaying={nowPlaying} nowPlayingGenres={nowPlayingGenres} />
      <ButtonContent />
    </div>
  );
}

export default MainContent;
