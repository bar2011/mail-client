"use client";

import React, { useState } from "react";
import NavigationBar from "../_components/NavigationBar";
import ConversationList from "./_components/ConversationList";
import FilterGroup from "./_components/FilterGroup";

type Message = {
  author: string;
  sentDate: Date;
  title: string;
  message: string;
  // attachments?: string[]; // TODO: allow attachments
};

type Conversation = {
  summary: string;
  isFinished: boolean;
  uuid: string;
  text: [Message, ...Message[]];
};

interface GeneralFilter {
  filter:
    | { type: "latest-author"; searchedAuthors: string[] }
    | { type: "from-date"; date: Date }
    | { type: "is-finished"; searchedState: boolean }
    | { type: "title"; searchedKeywords: string[] };
  // icon?: string; // TODO: allow icons
  color: string;
}

interface FilterWithChild extends GeneralFilter {
  childFilterGroup: FilterGroup;
  title?: never;
}

interface FilterWithoutChild extends GeneralFilter {
  childFilterGroup?: never;
  title: string;
}

type Filter = FilterWithChild | FilterWithoutChild;

export type FilterGroup = {
  name: string;
  filters: Filter[];
  currentChosenFilter: number;
  includesOther: boolean;
};

export default function Messages() {
  const conversations: Conversation[] = [
    {
      summary: "Project Kickoff Meeting",
      isFinished: true,
      uuid: "e55faca8-0ee9-4b7c-9715-ffbccaf0f645",
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
      uuid: "6fb104cc-fb8f-4100-95e2-697645faf284",
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
      uuid: "c15a56e6-7f29-412b-a916-4d9c6eff9c8c",
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

  const filterGroupTree: FilterGroup = {
    name: "Main",
    filters: [
      {
        filter: { type: "latest-author", searchedAuthors: ["Mom", "Dad"] },
        color: "#D9D9D9",
        childFilterGroup: {
          name: "Parents",
          filters: [
            {
              filter: { type: "is-finished", searchedState: true },
              title: "Finished conversations",
              color: "#33FF57",
            },
            {
              filter: { type: "from-date", date: new Date("2024-01-01") },
              title: "From this year",
              color: "#5733FF",
            },
          ],
          currentChosenFilter: -1,
          includesOther: true,
        },
      },
      {
        filter: { type: "from-date", date: new Date("2024-06-20") },
        color: "#D9D9D9",
        childFilterGroup: {
          name: "From graduation",
          filters: [
            {
              filter: { type: "title", searchedKeywords: ["completed"] },
              title: "Filter Titles by Completion",
              color: "#33B8FF",
            },
            {
              filter: { type: "is-finished", searchedState: true },
              title: "Finished Works from Date",
              color: "#B833FF",
            },
          ],
          currentChosenFilter: -1,
          includesOther: true,
        },
      },
      {
        filter: { type: "is-finished", searchedState: true },
        color: "#D9D9D9",
        childFilterGroup: {
          name: "Finished Conversations",
          filters: [
            {
              filter: { type: "latest-author", searchedAuthors: ["Mom"] },
              title: "Latest Finished by Mom",
              color: "#FFB833",
            },
            {
              filter: { type: "from-date", date: new Date("2023-05-10") },
              title: "Finished Works from Date",
              color: "#33FFB8",
            },
          ],
          currentChosenFilter: -1,
          includesOther: false,
        },
      },
    ],
    currentChosenFilter: -1,
    includesOther: true,
  };

  function getConversationViewList() {
    return conversations.map((conversation) => {
      return {
        left: conversation.summary,
        middle: conversation.text[0].author,
        right: conversation.text[0].sentDate.toDateString(),
      };
    });
  }

  const [openFilters, setOpenFilters] = useState<number[]>([-1]);

  return (
    <main className="min-w-screen flex min-h-screen flex-col">
      <NavigationBar />
      <div className="flex flex-grow">
        <div className="flex">
          <FilterGroup filterGroup={filterGroupTree} filterIndex={0} openFilters={openFilters} setOpenFilters={setOpenFilters} />
        </div>
        <ConversationList conversations={getConversationViewList()} />
      </div>
    </main>
  );
}
