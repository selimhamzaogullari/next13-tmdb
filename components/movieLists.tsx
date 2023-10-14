'use client';
import {MovieListIF} from '@/interfaces';
import {useGenreStore} from '@/store';
import Image from 'next/image';
import React from 'react';

interface MovieListCompIF {
  title: string;
  data: Array<MovieListIF>;
  classNames?: string;
}

function MovieLists({title, data, classNames = ''}: MovieListCompIF) {
  const genres = useGenreStore(state => state.genres);
  return (
    <div className={`${classNames}`}>
      <h2 className="text-color-text text-3xl mb-6">{title}</h2>
      <div className="flex justify-between gap-x-5">
        {data.map(movie => (
          <div key={'movie-list-' + movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              className="rounded-lg"
              width={200}
              height={300}
              alt={movie.original_title}
            />
            <h4 className="text-color-text text-lg text-center mt-2">{movie.original_title}</h4>
            <h5 className="text-color-text-secondary text-base text-center mt-2">
              {movie.release_date.slice(0, 4)} / Adventure
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieLists;
