import movieDB from '../../../assets/movies.json';
import topTags from '../../../assets/top_tags.json';
import {
  MovieDataStorageModelType,
  TopTagsType,
  MovieResponseType,
} from '../models/movie';

const typedDB = movieDB as unknown as MovieDataStorageModelType;
const typedTags = topTags as unknown as TopTagsType;

function getRandomNumber(x: number): number {
  return Math.floor(Math.random() * x);
}

function getRandomTag(): string {
  const randomID = getRandomNumber(typedTags.length);
  return typedTags[randomID];
}

export function getMovies(tag?: string, limit?: number): MovieResponseType {
  const tagToUse = (!tag || tag === 'Random') ? getRandomTag() : tag;

  const toPersonalize = typedDB
    .filter((f) => f.tags.includes(tagToUse))
    .sort((a, b) => b.tmdbPopularity - a.tmdbPopularity)
    .slice(0, 100);

  const movies = toPersonalize.slice(0, limit || 10);

  return {
    tag: tagToUse,
    movies,
  };
}

export default { getMovies };
