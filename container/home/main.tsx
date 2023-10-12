import React from 'react';
import nowPlayingResponse from '@/mocks/movies.json';
import {IoIosStarHalf, IoIosStarOutline, IoIosStar} from 'react-icons/io';

interface nowPlayingRes {
  id: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
}
[];

async function MainContent() {
  const nowPlaying: Array<nowPlayingRes> = nowPlayingResponse.results;
  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${nowPlaying[0].backdrop_path})`,
        }}
      />
      <div className="text-8xl">{nowPlaying[0].original_title}</div>
      <div className="flex gap-x-2 mt-3">
        {[1, 3, 5, 7, 9].map((x, i) => (
          <>
            {nowPlaying[0].vote_average <= 1 * x && (
              <IoIosStarOutline
                key={i}
                color="var(--color-primary)"
                size="2em"
              />
            )}
            {nowPlaying[0].vote_average === 1 * x && (
              <IoIosStarHalf key={i} color="var(--color-primary)" size="2em" />
            )}
            {nowPlaying[0].vote_average > 1 * x && (
              <IoIosStar key={i} color="var(--color-primary)" size="2em" />
            )}
          </>
        ))}
      </div>
    </>
  );
}

export default MainContent;
