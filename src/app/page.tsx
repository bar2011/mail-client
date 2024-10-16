import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "World" });

  return (
    <HydrateClient>
      <main>{ hello.greeting }</main>
    </HydrateClient>
  );
}
