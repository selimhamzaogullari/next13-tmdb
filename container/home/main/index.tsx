import React from 'react';
import TopContent from './topContent';
import ButtonContent from './buttonContent';
import {getNowPlaying} from '@/services/movies';

export interface NowPlayingResIF {
  id: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

async function MainContent() {
  const nowPlaying: Array<NowPlayingResIF> = await getNowPlaying();

  return (
    <div className="sm:max-w-4xl text-white">
      <TopContent nowPlaying={nowPlaying[0]} />
      <ButtonContent />
    </div>
  );
}

export default MainContent;
