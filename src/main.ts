import { createServer } from '@entropy-kit/core';
import { RootModule } from './root.module';

const server = createServer({
  config: {
    envFile: '.env',
  },
  modules: [
    RootModule,
  ],
});

await server.start();
