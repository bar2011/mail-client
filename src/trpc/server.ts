import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";

import { createCaller, type AppRouter } from "../server/api/root.ts";
import { createTRPCContext } from "../server/api/trpc.ts";
import { createQueryClient } from "./query-client.ts";
import { type FastifyRequest, type FastifyReply } from "fastify";
import { type TRPCRequestInfo } from "@trpc/server/http";

const createContext = cache(() => {
  return createTRPCContext({
    req: {} as unknown as FastifyRequest,
    res: {} as FastifyReply,
    info: {} as TRPCRequestInfo,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(await createContext());

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
);
