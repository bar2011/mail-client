"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import type { QueryClient } from "@tanstack/react-query";
import { loggerLink, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { useState } from "react";

import { type AppRouter } from "~/server/api/root.js";
import { createQueryClient } from "./query-client.ts";
import { env } from "~/env.js";
import SuperJSON from "superjson";

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = (): QueryClient => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient());
};

export const api = createTRPCReact<AppRouter>({});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const [queryClient] = useState<QueryClient>(() => getQueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchLink({
          transformer: SuperJSON,
          url: env.NEXT_PUBLIC_SERVER_URL + "/trpc",
          headers: () => {
            const headers = new Headers();
            headers.set("x-trpc-source", "nextjs-react");

            // Convert Headers to a plain object
            const plainHeaders: Record<string, string> = {};
            headers.forEach((value, key) => {
              plainHeaders[key] = value;
            });

            return plainHeaders;
          },
        }),
      ],
    }),
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </api.Provider>
  );
}
