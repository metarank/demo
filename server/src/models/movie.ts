import { Static, Type } from '@sinclair/typebox';

export const SimilarMovieModel = Type.Object({
  id: Type.Number(),
  score: Type.Number(),
  title: Type.String(),
});

export const MovieModel = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  tmdb: Type.String(),
  similar: Type.Array(SimilarMovieModel),
});

export type MovieType = Static<typeof MovieModel>;
export type SimilarMovieType = Static<typeof SimilarMovieModel>;

export default {
  SimilarMovieModel,
  MovieModel,
};
