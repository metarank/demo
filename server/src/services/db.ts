import similar from '../../../similar.json';
import movies from '../../../movies.json';
import { MovieType, MovieDataStorageModelType, MovieDataModelType } from '../models/movie';

const similarDB = similar as unknown as MovieType[];
const moviesDB = movies as unknown as MovieDataStorageModelType;

export function getSimilar(id: number): MovieDataModelType[] {
  const movie = similarDB.find((f) => f.id === id);

  if (!movie) {
    return [];
  }

  return movie.similar.map((m) => moviesDB[m.id.toString()]);
}

export function getMovies(limit = 10): MovieDataModelType[] {
  return similarDB.slice(0, limit).map((m) => moviesDB[m.id.toString()]);
}

export default { getSimilar, getMovies };
