"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "../_components/NavigationBar";
import ConversationList from "./_components/ConversationList";
import FilterGroupView from "./_components/FilterGroup";

import { conversations, filterGroupTree } from "../constants";
import type { Conversation, FilterGroup } from "~/global.types";

export default function Messages() {
  const [openFilters, setOpenFilters] = useState<number[]>([0]);

  function getFilterGroup(filterIndexArray: number[]) {
    let currentFilterGroup: FilterGroup | null = filterGroupTree;
    filterIndexArray.forEach((index) => {
      if (
        !currentFilterGroup ||
        index < 0 ||
        index >= currentFilterGroup.filters.length
      )
        return (currentFilterGroup = null);
      const newFilterGroup =
        currentFilterGroup.filters[index]?.childFilterGroup;
      if (!newFilterGroup) return (currentFilterGroup = null);
      currentFilterGroup = newFilterGroup;
    });
    return currentFilterGroup;
  }

  const [filteredConversations, setFilteredConversations] =
    useState<Conversation[]>(conversations);

  useEffect(() => {
    let updatedFilteredConversations = conversations;
    openFilters.slice(1).forEach(async (value, index) => {
      const filterGroup = getFilterGroup(openFilters.slice(1, index + 1));
      // if index is one before last, then the user hasn't chosen a filter in the last filter group
      if (!filterGroup) return;
      updatedFilteredConversations = updatedFilteredConversations.filter(
        (conversation) => {
          const currentFilter = filterGroup.filters[value];
          if (!currentFilter) return true;
          switch (currentFilter.filter.type) {
            case "latest-author":
              return currentFilter.filter.searchedAuthors.includes(
                conversation.text[0].author,
              );
            case "from-date":
              return conversation.text[0].sentDate >= currentFilter.filter.date;
            case "is-finished":
              return (
                conversation.isFinished === currentFilter.filter.searchedState
              );
            case "title":
              return currentFilter.filter.searchedKeywords.some((keyword) =>
                conversation.summary.includes(keyword),
              );
          }
        },
      );
    });

    setFilteredConversations(updatedFilteredConversations);
  }, [openFilters]);

  function getConversationViewList() {
    return filteredConversations.map((conversation) => {
      return {
        left: conversation.summary,
        middle: conversation.text[0].author,
        right: conversation.text[0].sentDate.toDateString(),
      };
    });
  }

  return (
    <main className="min-w-screen flex min-h-screen select-none flex-col">
      <NavigationBar />
      <div className="flex flex-grow">
        <div className="flex">
          {openFilters.map((_, index) => {
            // don't count the first, as it's always 0
            const filterGroup = getFilterGroup(openFilters.slice(1, index + 1));
            if (!filterGroup) return null;
            return (
              <FilterGroupView
                filterGroup={filterGroup}
                filterIndex={index}
                openFilters={openFilters}
                setOpenFilters={setOpenFilters}
                key={index}
              />
            );
          })}
        </div>
        <ConversationList conversations={getConversationViewList()} />
      </div>
    </main>
  );
}
