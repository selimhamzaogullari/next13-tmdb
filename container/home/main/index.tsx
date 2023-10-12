import React from 'react';
import nowPlayingResponse from '@/mocks/movies.json';
import Button from '@/components/button';
import TopContent from './topContent';
import ButtonContent from './buttonContent';

export interface NowPlayingResIF {
  id: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

const goDetailPage = () => {
  console.log('Go detail page');
};

async function MainContent() {
  const nowPlaying: NowPlayingResIF = nowPlayingResponse.results[0];

  return (
    <div className="sm:max-w-4xl text-white">
      <TopContent nowPlaying={nowPlaying} />
      <ButtonContent />
    </div>
  );
}

export default MainContent;
