import React from 'react';
import Star from './star';
import Genre from './genre';
import Overview from './overview';
import ButtonContent from '@/container/home/Main/buttonContent';
import {MovieListIF} from '@/interfaces';
import Ribbon from './ribbon';

interface MainMovieCompIF {
  movie: MovieListIF;
  ribbonText: string;
}

function MainMovie({movie, ribbonText}: MainMovieCompIF) {
  return (
    <div className="relative h-[700px] w-full">
      <div
        className="fluid bg-center h-[700px] blur-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .2), rgba(0, 0, 0, .7)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      />
      <div
        className="rounded-lg m-auto absolute h-[500px] w-[80%] top-[100px] left-[10%] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}>
        <Ribbon title={ribbonText} />
        <div className="absolute right-[5%] bottom-[8%] text-white w-[90%] lg:w-[60%] lg:right-[3%]">
          <h2 className="text-3xl mb-5 text-center lg:text-left">{movie.original_title}</h2>
          <div className="flex items-center mb-4 text-lg flex-wrap justify-center gap-y-2 lg:flex-nowrap lg:justify-normal">
            <Star vote={movie.vote_average} />
            <span className="ml-3 text-xl mr-7 lg:text-2xl">/ {movie.vote_average.toFixed(1)}</span>
            <Genre genreIds={movie.genre_ids} classNames="lg:ml-3" slice={2} />
          </div>
          <Overview overview={movie.overview} />
          <ButtonContent />
        </div>
      </div>
    </div>
  );
}

export default MainMovie;
