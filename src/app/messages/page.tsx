import React from "react";
import NavigationBar from "../_components/NavigationBar";
import { randomUUID } from "crypto";
import ConversationList from "./_components/ConversationList";

type Message = {
  author: string;
  sentDate: Date;
  title: string;
  message: string;
  // attachments: ?; // TODO: allow attachments
};

type Conversation = {
  summary: string;
  isFinished: boolean;
  uuid: string;
  text: [Message, ...Message[]];
};

export default function Messages() {
  const conversations: Conversation[] = [
    {
      summary: "Project Kickoff Meeting",
      isFinished: true,
      uuid: randomUUID(),
      text: [
        {
          author: "Alice",
          sentDate: new Date("2024-11-01T09:00:00Z"),
          title: "Welcome to the project!",
          message:
            "Hello everyone, welcome to the project! Let's discuss our goals and timelines.",
        },
        {
          author: "Bob",
          sentDate: new Date("2024-11-01T09:05:00Z"),
          title: "Re: Welcome to the project!",
          message: "Sounds good, Alice. Looking forward to getting started!",
        },
      ],
    },
    {
      summary: "Client Feedback Discussion",
      isFinished: false,
      uuid: randomUUID(),
      text: [
        {
          author: "Charlie",
          sentDate: new Date("2024-11-02T10:15:00Z"),
          title: "Initial feedback from the client",
          message:
            "The client has provided their initial feedback, and they seem to want changes in the design.",
        },
        {
          author: "Dana",
          sentDate: new Date("2024-11-02T10:30:00Z"),
          title: "Re: Initial feedback",
          message:
            "I think we can make the changes they suggested. Let's prepare a plan.",
        },
      ],
    },
    {
      summary: "Team Retrospective",
      isFinished: false,
      uuid: randomUUID(),
      text: [
        {
          author: "Eve",
          sentDate: new Date("2024-11-05T14:45:00Z"),
          title: "Retrospective: What went well?",
          message:
            "We successfully hit our milestones on time and had great team collaboration throughout the sprint.",
        },
        {
          author: "Frank",
          sentDate: new Date("2024-11-05T14:50:00Z"),
          title: "Re: Retrospective",
          message:
            "Agreed! One improvement we can work on is improving communication during blockers.",
        },
      ],
    },
  ];

  function getConversationViewList() {
    return conversations.map((conversation) => {
      return {
        left: conversation.summary,
        middle: conversation.text[0].author,
        right: conversation.text[0].sentDate.toDateString(),
      };
    });
  }

  return (
    <main className="min-w-screen flex min-h-screen flex-col">
      <NavigationBar />
      <div className="flex flex-grow">
        <div className="flex"></div>
        <ConversationList conversations={getConversationViewList()} />
      </div>
    </main>
  );
}
