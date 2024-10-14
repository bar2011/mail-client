import { env } from "../env.js";
import { createFastifyServer } from "./fastify.js";

const start = async () => {
  const server = await createFastifyServer();

  try {
    await server.listen({ port: env.SERVER_PORT });
    console.log(`Server listening on ${env.SERVER_URL}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

await start();
