import React from 'react';
import {IoIosStarHalf, IoIosStarOutline, IoIosStar} from 'react-icons/io';
import {NowPlayingResIF, GenresIF} from '.';

interface TopContentPropsIF {
  nowPlaying: NowPlayingResIF;
  nowPlayingGenres: Array<GenresIF>;
}

function TopContent({nowPlaying, nowPlayingGenres}: TopContentPropsIF) {
  const floor = Math.floor(Math.round(nowPlaying.vote_average) / 2);
  const mod = Math.round(nowPlaying.vote_average) % 2;
  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path})`,
        }}
      />
      <div className="text-8xl mb-10">{nowPlaying.original_title}</div>
      <div className="flex items-center mb-4 text-lg">
        <div className="flex gap-x-2">
          {new Array(floor).fill('').map((x, i) => (
            <div key={i}>
              <IoIosStar color="var(--color-primary)" size="2em" />
            </div>
          ))}
          {mod === 1 && <IoIosStarHalf color="var(--color-primary)" size="2em" />}
          {new Array(5 - (floor + mod)).fill('').map((x, i) => (
            <div key={i + 20}>
              <IoIosStarOutline color="var(--color-primary)" size="2em" />
            </div>
          ))}
        </div>
        <span className="ml-3 text-2xl mr-7">/ {nowPlaying.vote_average.toFixed(1)}</span>
        <div className="flex ml-7">
          {nowPlayingGenres.map((genre, i) => (
            <div key={genre.id}>
              {i !== 0 && <span className="ml-3 mr-3">|</span>}
              {genre.name}
            </div>
          ))}
        </div>
      </div>
      <div className="text-lg line-clamp-3 mb-6 leading-8">{nowPlaying.overview}T</div>
    </>
  );
}

export default TopContent;
