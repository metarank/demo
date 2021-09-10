import * as fastify from 'fastify';

function routes(fastifyInstance: fastify.FastifyInstance): void {
  fastifyInstance.get('/', async (_req, res) => {
    await res.send({ msg: 'Hello from Metarank Demo!' });
  });
}

export default routes;
