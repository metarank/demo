import * as fastify from 'fastify';
import cors from 'fastify-cors';

import routes from './routes';

const PORT = process.env.PORT || 3000;

const fastifyInstance = fastify.fastify();

fastifyInstance.register(cors, {
  origin: '*'
});

routes(fastifyInstance);

fastifyInstance.listen(PORT, () => console.log(`Listening API on ${PORT}`));
