import React from "react";
import NavigationBar from "../_components/NavigationBar";

export default function Messages() {
  return (
    <main className="min-w-screen flex min-h-screen flex-col">
      <NavigationBar />
      <div className="flex flex-grow">
        <div className="flex flex-grow"></div>
        <div className="flex h-min flex-row gap-1 bg-accent"></div>
      </div>
    </main>
  );
}
