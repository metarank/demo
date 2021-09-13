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

export const MovieDataModel = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  image_url: Type.String(),
});

export type MovieDataModelType = Static<typeof MovieDataModel>;
export type MovieDataStorageModelType = { [index: string]: MovieDataModelType };

export type MovieType = Static<typeof MovieModel>;
export type SimilarMovieType = Static<typeof SimilarMovieModel>;

export default {
  SimilarMovieModel,
  MovieModel,
};
