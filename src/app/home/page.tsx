import { redirect } from "next/navigation";
import { HydrateClient } from "~/trpc/server";
import MessageButton from "./_components/MessageButton";

const backgroundImages = [
  "https://images.unsplash.com/photo-1673313530503-39b757cc1572?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

type homeProps =
  | {
      title: string;
      description: string;
    }
  | undefined;

export default async function Home(props: homeProps) {
  const currentImage =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  async function redirectToMessages() {
    "use server";
    redirect("/messages");
  }

  return (
    <HydrateClient>
      <main
        className="min-w-screen flex min-h-screen flex-col gap-3 p-2"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="flex min-w-full flex-grow flex-col items-center justify-center gap-3">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {props?.title ? props.title : "Short title"}
          </h1>
          <h2 className="max-w-3xl scroll-m-20 pb-2 text-center text-xl font-medium tracking-tight first:mt-0">
            {props?.description
              ? props.description
              : "Longer and smaller description of mails. I'll try to make it very long so that it will wrap to the next line and for me to be able to see how it looks and how much should I constrane it in the wrapping part."}
          </h2>
        </div>
        <div className="flex min-w-full flex-row-reverse">
          <MessageButton redirectAction={redirectToMessages} />
        </div>
      </main>
    </HydrateClient>
  );
}
