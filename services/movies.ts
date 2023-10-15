import {get} from './fetch';

export const getGenresOfMovies = async () => get('genre/movie/list');

export const getNowPlaying = async () => get('movie/now_playing', 'language=en-US&page=1', false);

export const getPopularMovies = async () => get('movie/popular', 'language=en-US&page=1', false);

export const getTopRatedMovies = async () => get('movie/top_rated', 'language=en-US&page=1', false);

export const getUpcomingMovies = async () => get('movie/upcoming', 'language=en-US&page=1', false);
