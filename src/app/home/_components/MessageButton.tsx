"use client";
import { useTransition } from "react";
import { Button } from "~/components/ui/button";

interface MessageButtonProps {
  redirectAction: () => Promise<void>;
}

export default function MessageButton({ redirectAction }: MessageButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={() => startTransition(() => redirectAction())}
      disabled={isPending}
    >
      Continue to Messages
    </Button>
  );
}
