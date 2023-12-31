import Genre from '@/components/genre';
import Overview from '@/components/overview';
import Star from '@/components/star';
import {GenresIF, MovieListIF} from '@/interfaces';
import React from 'react';
import {IoIosStarHalf, IoIosStarOutline, IoIosStar} from 'react-icons/io';

interface TopContentPropsIF {
  nowPlaying: MovieListIF;
}

function TopContent({nowPlaying}: TopContentPropsIF) {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path})`,
        }}
      />
      <div className="text-5xl md:text-8xl text-center md:text-left mb-10">{nowPlaying.original_title}</div>
      <div className="flex items-center justify-center md:justify-normal mb-4 text-lg flex-wrap gap-y-2">
        <Star vote={nowPlaying.vote_average} />
        <span className="ml-3 text-2xl md:mr-7">/ {nowPlaying.vote_average.toFixed(1)}</span>
        <Genre genreIds={nowPlaying.genre_ids} classNames="md:ml-3" />
      </div>
      <Overview overview={nowPlaying.overview} />
    </>
  );
}

export default TopContent;
