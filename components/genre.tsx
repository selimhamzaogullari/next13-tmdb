'use client';
import {useGenreStore} from '@/store';
import React from 'react';
import {GenresIF} from '@/interfaces';

interface GenreCompIF {
  genreIds: Array<number>;
  classNames?: string;
  slice?: number | null;
}

function Genre({genreIds, classNames = '', slice = null}: GenreCompIF) {
  const _genreIds = slice ? genreIds.splice(0, slice) : genreIds;
  const genres: Array<GenresIF> = useGenreStore(state => state.genres);
  const genreNames = genres.filter(genre => _genreIds.includes(genre.id));
  return (
    <div className={`flex text-primary ${classNames}`}>
      {genreNames.map((genre, i) => (
        <div key={genre.id}>
          {i !== 0 && <span className="ml-3 mr-3">|</span>}
          {genre.name}
        </div>
      ))}
    </div>
  );
}

export default Genre;
