import { HydrateClient } from "~/trpc/server";
import MessageButton from "./_components/MessageButton";

const backgroundImages = [
  "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

  return (
    <HydrateClient>
      <main
        className="min-w-screen flex min-h-screen flex-col gap-3 bg-slate-300 bg-cover bg-center bg-no-repeat p-2 text-white bg-blend-normal"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${currentImage})`,
        }}
      >
        <div className="flex min-w-full flex-grow flex-col items-center justify-center gap-3">
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight drop-shadow-xl lg:text-6xl">
            Good Morning!
          </h1>
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight drop-shadow-xl lg:text-6xl">
            {props?.title ? props.title : "Short title"}
          </h1>
          <h2 className="max-w-3xl scroll-m-20 pb-2 text-center text-xl font-medium tracking-tight drop-shadow-md first:mt-0">
            {props?.description
              ? props.description
              : "Longer and smaller description of mails. I'll try to make it very long so that it will wrap to the next line and for me to be able to see how it looks and how much should I constrane it in the wrapping part."}
          </h2>
        </div>
        <div className="flex min-w-full flex-row-reverse">
          <MessageButton />
        </div>
      </main>
    </HydrateClient>
  );
}
