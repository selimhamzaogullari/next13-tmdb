import {get} from './fetch';

export const getNowPlaying = async () => get('movie/now_playing', 'language=en-US&page=1', false);

export const getGenresOfMovies = async () => get('genre/movie/list');
