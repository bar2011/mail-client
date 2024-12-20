import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import {
  fastifyTRPCPlugin,
  type FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import { appRouter, type AppRouter } from "./api/root.js";
import { createTRPCContext } from "./api/trpc.js";
import { env } from "~/env.js";

export const createFastifyServer = async () => {
  const server = fastify({
    maxParamLength: 5000,
  });

  const origin = [
    env.NEXT_PUBLIC_CLIENT_URL,
    "capacitor://localhost",
    "capacitor-electron://-",
  ];

  if (env.NODE_ENV !== "production") {
    origin.push("http://localhost:3000");
  }

  server.register(fastifyCors, {
    origin: origin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-trpc-source"],
    credentials: true,
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

  // server health check
  server.get("/", (_req, res) => {
    res.send({ status: "ok" });
  });

  return server;
};
