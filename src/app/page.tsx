import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "World" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Next.js + tRPC + Fastify</h1>
      <p className="text-2xl">{hello.greeting}</p>
    </main>
  );
}
