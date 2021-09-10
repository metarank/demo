import db from '../../../similar.json';
import { MovieType, SimilarMovieType } from '../models/movie';

const DB = db as unknown as MovieType[];

export function getSimilar(id: number): SimilarMovieType[] {
  const movie = DB.find((f) => f.id === id);

  if (!movie) {
    return [];
  }

  return movie.similar;
}

export function getMovies(limit = 10): MovieType[] {
  return DB.slice(0, limit);
}

export default { getSimilar, getMovies };
