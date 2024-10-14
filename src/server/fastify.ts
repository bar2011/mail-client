import fastify from "fastify";
import { fastifyTRPCPlugin, type FastifyTRPCPluginOptions } from "@trpc/server/adapters/fastify";
import { appRouter, type AppRouter } from "./api/root.js";
import { createTRPCContext } from "./api/trpc.js";

export const createFastifyServer = async () => {
  const server = fastify({
    maxParamLength: 5000,
  });

  server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router: appRouter,
      createContext: createTRPCContext,
      onError({ path, error }) {
        // report to error monitoring
        console.error(`Error in tRPC handler on path '${path}':`, error);
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
  });

  return server;
};
