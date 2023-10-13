import {get} from './fetch';

export const getNowPlaying = async () => {
  return get('movie/now_playing', 'language=en-US&page=1', false);
};
