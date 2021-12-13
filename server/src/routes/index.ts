import { FastifyInstance, FastifySchema } from 'fastify';
import { getMovies } from '../services/db';
import { GetMoviesQuerystringParams, GetMoviesQuerystringParamsType } from '../models/api';
import { MovieResponse } from '../models/movie';

const moviesSchema: FastifySchema = {
  querystring: GetMoviesQuerystringParams,
  response: { 200: MovieResponse },
};

function routes(fastifyInstance: FastifyInstance): void {
  fastifyInstance.get<{ Querystring: GetMoviesQuerystringParamsType }>('/movies', { schema: moviesSchema }, async (req, res) => {
    const movies = getMovies(req.query.tag, req.query.limit);

    return res.send(movies);
  });

  fastifyInstance.get('/', async (_req, res) => res.send({ msg: 'Hello from Metarank Demo!' }));
}

export default routes;
