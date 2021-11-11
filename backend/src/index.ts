import { SetupServer } from './server';
// import config from 'config';

(async (): Promise<void> => {
  const server = new SetupServer(3333);
  await server.init();
  server.start();
})();
