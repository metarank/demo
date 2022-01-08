import * as fastify from 'fastify';
import cors from 'fastify-cors';

import routes from './routes';

const PORT = process.env.PORT || 3001;
const ADDRESS = process.env.ADDRESS || 'localhost';

console.log(process.env);

const fastifyInstance = fastify.fastify();

async function main() {
  await fastifyInstance.register(cors, {
    origin: '*',
  });

  routes(fastifyInstance);

  fastifyInstance.setErrorHandler(async (error, _, res) => {
    console.error(error);

    // generic error
    await res.code(500);
  });

  fastifyInstance.listen(PORT, ADDRESS, () => console.log(`Listening API on ${ADDRESS}:${PORT}!`));
}

// eslint-disable-next-line no-void
void main();
