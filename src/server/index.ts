import { env } from "../env.js";
import { createFastifyServer } from "./fastify.js";

const start = async () => {
  const server = await createFastifyServer();

  try {
    await server.listen({ port: env.SERVER_PORT, host: "0.0.0.0" });
    console.log(`Server listening on ${env.NEXT_PUBLIC_SERVER_URL}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

await start();
