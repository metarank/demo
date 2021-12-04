import * as fastify from 'fastify';
import cors from 'fastify-cors';

import routes from './routes';

const PORT = process.env.PORT || 3001;

const fastifyInstance = fastify.fastify();

async function main() {
  await fastifyInstance.register(cors, {
    origin: '*',
  });

  routes(fastifyInstance);

  fastifyInstance.listen(PORT, () => console.log(`Listening API on ${PORT}`));
}

// eslint-disable-next-line no-void
void main();
