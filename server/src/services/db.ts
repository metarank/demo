import { v4 } from 'uuid';
import movieDB from '../../../assets/movies.json';
import topTags from '../../../assets/top_tags.json';
import {
  MovieDataStorageModelType,
  TopTagsType,
  MovieResponseType,
} from '../models/movie';
import { rank, rankFeedback } from './metarank';

const typedDB = movieDB as unknown as MovieDataStorageModelType;
const typedTags = topTags as unknown as TopTagsType;

function getRandomNumber(x: number): number {
  return Math.floor(Math.random() * x);
}

function getRandomTag(): string {
  const randomID = getRandomNumber(typedTags.length);
  return typedTags[randomID];
}

export async function getMovies(user: string, session: string, tag?: string, limit?: number): Promise<MovieResponseType> {
  const tagToUse = (!tag || tag === 'Random') ? getRandomTag() : tag;
  const id = v4();

  const toPersonalize = typedDB
    .filter((f) => f.tags.includes(tagToUse))
    .sort((a, b) => b.tmdbPopularity - a.tmdbPopularity)
    .slice(0, 100);

  const ranked = await rank(user, session, id, toPersonalize);

  const movies = toPersonalize.slice(0, limit || 10);
  const personalized = ranked.slice(0, limit || 10);

  await rankFeedback(user, session, id, personalized.map((item) => ({ id: item.id.toString(), relevancy: item.personalization_score })));

  return {
    tag: tagToUse,
    movies,
    personalized_movies: personalized,
    id,
  };
}

export default { getMovies };
