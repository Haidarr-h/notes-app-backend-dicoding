const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5050,
    host: process.env.NODE_ENV == 'production'? '0.0.0.0': 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server is running at port ${server.info.uri}`);
};

init();
