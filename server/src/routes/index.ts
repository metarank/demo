import { FastifyInstance, FastifySchema } from 'fastify';
import { getMovies } from '../services/db';
import { click } from '../services/metarank';
import {
  GetMoviesQuerystringParams,
  GetMoviesQuerystringParamsType,
  ClickBodyParams,
  ClickBodyParamsType,
} from '../models/api';
import { MovieResponse } from '../models/movie';

const moviesSchema: FastifySchema = {
  querystring: GetMoviesQuerystringParams,
  response: { 200: MovieResponse },
};

const clickSchema: FastifySchema = {
  body: ClickBodyParams,
};

function routes(fastifyInstance: FastifyInstance): void {
  fastifyInstance.get<{ Querystring: GetMoviesQuerystringParamsType }>('/movies', { schema: moviesSchema }, async (req, res) => {
    const movies = await getMovies(req.query.user, req.query.session, req.query.tag, req.query.limit);

    return res.send(movies);
  });

  fastifyInstance.post<{ Body: ClickBodyParamsType }>('/click', { schema: clickSchema }, async (req, res) => {
    await click(req.body.user, req.body.session, req.body.ranking, req.body.item);

    return res.send(true);
  });

  fastifyInstance.get('/', async (_req, res) => res.send({ msg: 'Hello from Metarank Demo!' }));
}

export default routes;
