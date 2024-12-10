import React from "react";

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
  return (
    <div className="flex h-min flex-grow bg-accent">
      <div className="flex w-full flex-grow flex-col gap-[1px]">
        {conversations.map((conversation, index) => {
          return (
            <div className="bg-white py-2 pl-4" key={index}>
              {conversation.left}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-grow flex-col gap-[1px]">
        {conversations.map((conversation, index) => {
          return (
            <div className="bg-white py-2" key={index}>
              {conversation.middle}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-grow flex-col gap-[1px]">
        {conversations.map((conversation, index) => {
          return (
            <div className="bg-white py-2 pr-6 text-right" key={index}>
              {conversation.right}
            </div>
          );
        })}
      </div>
    </div>
  );
}
