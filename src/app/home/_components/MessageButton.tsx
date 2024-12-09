"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "~/components/ui/button";

export default function MessageButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={() => startTransition(() => void router.push("/messages"))}
      disabled={isPending}
    >
      Continue to Messages
    </Button>
  );
}
