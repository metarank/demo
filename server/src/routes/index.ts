import { FastifyInstance, FastifySchema } from 'fastify';
import { Type } from '@sinclair/typebox';
import { getSimilar, getMovies } from '../services/db';
import { SimilarMovieModel, MovieModel } from '../models/movie';
import { IIDModel, IIDType } from '../models/api';

const similarMovieSchema: FastifySchema = {
  params: IIDModel,
  response: { 200: Type.Array(SimilarMovieModel) },
};

const moviesSchema: FastifySchema = {
  response: { 200: Type.Array(MovieModel) },
};

function routes(fastifyInstance: FastifyInstance): void {
  fastifyInstance.get('/movies', { schema: moviesSchema }, async (_eq, res) => {
    const movies = getMovies();

    return res.send(movies);
  });

  fastifyInstance.get<{ Params: IIDType }>('/movies/:id/similar', { schema: similarMovieSchema }, async (req, res) => {
    const similar = getSimilar(req.params.id);

    return res.send(similar);
  });

  fastifyInstance.get('/', async (_req, res) => res.send({ msg: 'Hello from Metarank Demo!' }));
}

export default routes;
