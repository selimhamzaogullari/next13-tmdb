'use client';
import React from 'react';
import {GenresIF, MovieListIF} from '@/interfaces';
import ButtonContent from './buttonContent';
import TopContent from './topContent';
import {useGenreStore} from '@/store';

interface MainContentIF {
  nowPlaying: MovieListIF;
  genres: Array<GenresIF>;
}

function MainContent({nowPlaying, genres}: MainContentIF) {
  const addGenres = useGenreStore(state => state.add);
  addGenres(genres);
  return (
    <div className="sm:max-w-4xl text-white">
      <TopContent nowPlaying={nowPlaying} />
      <ButtonContent />
    </div>
  );
}

export default MainContent;
