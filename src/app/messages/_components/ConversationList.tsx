"use client";

import React, { useState } from "react";

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
  const [transparency, setTransparency] = useState<string>("#7F");

  return (
    <div className="flex h-min flex-grow cursor-pointer bg-accent">
      <div className="flex w-full flex-grow flex-col gap-[1px]">
        {conversations.map((conversation, index) => {
          return (
            <div
              className="w-full py-2 pl-4"
              style={{
                backgroundColor:
                  "#FFFFFF" + (actionIndex === index ? transparency : ""),
              }}
              onMouseEnter={() => {
                setActionIndex(index);
                setTransparency("7F");
              }}
              onMouseDown={() => setTransparency("00")}
              onMouseUp={() => setTransparency("7F")}
              onMouseLeave={() => setActionIndex(-1)}
              key={index}
            >
              {conversation.left}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-grow flex-col gap-[1px]">
        {conversations.map((conversation, index) => {
          return (
            <div
              className="w-full py-2"
              style={{
                backgroundColor:
                  "#FFFFFF" + (actionIndex === index ? transparency : ""),
              }}
              onMouseEnter={() => {
                setActionIndex(index);
                setTransparency("7F");
              }}
              onMouseDown={() => setTransparency("00")}
              onMouseUp={() => setTransparency("7F")}
              onMouseLeave={() => setActionIndex(-1)}
              key={index}
            >
              {conversation.middle}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-grow flex-col gap-[1px]">
        {conversations.map((conversation, index) => {
          return (
            <div
              className="w-full py-2 pr-6 text-right"
              style={{
                backgroundColor:
                  "#FFFFFF" + (actionIndex === index ? transparency : ""),
              }}
              onMouseEnter={() => {
                setActionIndex(index);
                setTransparency("7F");
              }}
              onMouseDown={() => setTransparency("00")}
              onMouseUp={() => setTransparency("7F")}
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
