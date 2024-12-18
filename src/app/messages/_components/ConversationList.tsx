"use client";

import React, { CSSProperties, useState } from "react";

type ConversationView = {
  left: string;
  middle: string;
  right: string;
};

export default function ConversationList({
  conversations,
}: {
  conversations: ConversationView[];
}) {
  const [actionIndex, setActionIndex] = useState<number>(-1);
  const [transparency, setTransparency] = useState<string>("50");

  return (
    <div className="flex h-min flex-grow cursor-pointer bg-accent">
      <div className="flex w-full flex-grow flex-col gap-px">
        {conversations.map((conversation, index) => {
          return (
            <div
              className={
                "w-full bg-white py-2 pl-4 text-sm font-medium" +
                " bg-opacity-" +
                (actionIndex === index ? transparency : "100")
              }
              onMouseEnter={() => {
                setActionIndex(index);
                setTransparency("50");
              }}
              onMouseDown={() => setTransparency("0")}
              onMouseUp={() => setTransparency("50")}
              onMouseLeave={() => setActionIndex(-1)}
              key={index}
            >
              {conversation.left}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-grow flex-col gap-px">
        {conversations.map((conversation, index) => {
          return (
            <div
              className="w-full border-x-8 border-white bg-white py-2 text-sm text-muted-foreground"
              style={
                {
                  "--tw-bg-opacity":
                    actionIndex === index ? transparency : "100",
                  "--tw-border-opacity":
                    actionIndex === index
                      ? (parseInt(transparency) / 100.0).toString()
                      : "100",
                } as CSSProperties
              }
              onMouseEnter={() => {
                setActionIndex(index);
                setTransparency("50");
              }}
              onMouseDown={() => setTransparency("0")}
              onMouseUp={() => setTransparency("50")}
              onMouseLeave={() => setActionIndex(-1)}
              key={index}
            >
              {conversation.middle}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-grow flex-col gap-px">
        {conversations.map((conversation, index) => {
          return (
            <div
              className={
                "w-full bg-white py-2 pr-6 text-right text-sm text-muted-foreground" +
                " bg-opacity-" +
                (actionIndex === index ? transparency : "100")
              }
              onMouseEnter={() => {
                setActionIndex(index);
                setTransparency("50");
              }}
              onMouseDown={() => setTransparency("0")}
              onMouseUp={() => setTransparency("50")}
              onMouseLeave={() => setActionIndex(-1)}
              key={index}
            >
              {conversation.right}
            </div>
          );
        })}
      </div>
    </div>
  );
}
