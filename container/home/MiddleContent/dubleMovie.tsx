import Genre from '@/components/genre';
import Overview from '@/components/overview';
import Ribbon from '@/components/ribbon';
import Star from '@/components/star';
import {MovieListIF} from '@/interfaces';
import React from 'react';
import ButtonContent from '../Main/buttonContent';

interface DubleMovieCompIF {
  movies: Array<MovieListIF>;
  ribbonText: string;
}

function DubleMovie({movies, ribbonText}: DubleMovieCompIF) {
  return (
    <div className="flex justify-between gap-x-6">
      {movies.map(movie => (
        <div className="flex-1 relative">
          <div
            className="rounded-lg w-100 h-[500px] bg-cover"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}>
            <Ribbon title={ribbonText} />
            <div className="absolute bottom-[8%] left-[5%] text-white w-[90%]">
              <h2 className="text-3xl mb-5">{movie.original_title}</h2>
              <div className="flex items-center mb-4 text-lg">
                <Star vote={movie.vote_average} />
                <span className="ml-3 text-2xl mr-7">/ {movie.vote_average.toFixed(1)}</span>
                <Genre genreIds={movie.genre_ids} classNames="ml-7" slice={2} />
              </div>
              <Overview overview={movie.overview} />
              <ButtonContent />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DubleMovie;
