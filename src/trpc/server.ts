import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers.js";
import { cache } from "react";

import { createCaller, type AppRouter } from "../server/api/root.ts";
import { createTRPCContext } from "../server/api/trpc.ts";
import { createQueryClient } from "./query-client.ts";
import { type FastifyRequest, type FastifyReply } from "fastify";

const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    req: {
      headers: heads,
    } as unknown as FastifyRequest,
    res: {} as FastifyReply,
    info: {} as any,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(await createContext());

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
);
