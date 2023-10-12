import React from 'react';
import {IoIosStarHalf, IoIosStarOutline, IoIosStar} from 'react-icons/io';
import {NowPlayingResIF} from '.';

interface TopContentPropsIF {
  nowPlaying: NowPlayingResIF;
}

function TopContent({nowPlaying}: TopContentPropsIF) {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${nowPlaying.backdrop_path})`,
        }}
      />
      <div className="text-8xl mb-10">{nowPlaying.original_title}</div>
      <div className="flex gap-x-2 mb-4">
        {[1, 3, 5, 7, 9].map((x, i) => (
          <div key={i}>
            {nowPlaying.vote_average <= 1 * x && <IoIosStarOutline color="var(--color-primary)" size="2em" />}
            {nowPlaying.vote_average === 1 * x && <IoIosStarHalf color="var(--color-primary)" size="2em" />}
            {nowPlaying.vote_average > 1 * x && <IoIosStar color="var(--color-primary)" size="2em" />}
          </div>
        ))}
      </div>
      <div className="text-lg line-clamp-3 mb-6">{nowPlaying.overview}T</div>
    </>
  );
}

export default TopContent;
