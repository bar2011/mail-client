"use client";

import React from "react";

import type { FilterGroup } from "../page";

export default function FilterGroup({
  filterGroup,
  filterIndex,
  openFilters,
  setOpenFilters,
}: {
  filterGroup?: FilterGroup;
  filterIndex: number;
  openFilters: number[];
  setOpenFilters: (newOpenFilters: number[]) => void;
}) {
  if (!filterGroup) return null;

  return (
    <div className="flex flex-col items-center gap-3 border-r-2 border-border px-3 py-1">
      <div className="text-lg font-semibold">{filterGroup.name}</div>
      <div className="flex flex-col gap-0.5 bg-white">
        {filterGroup.filters.map((filter, index) => {
          const title = filter.title ?? filter.childFilterGroup.name;
          return (
            <div
              className="flex w-full min-w-max cursor-pointer items-center gap-2 rounded-sm bg-muted bg-opacity-0 px-2 py-2 hover:bg-opacity-50 active:bg-opacity-100"
              onClick={() =>
                setOpenFilters([
                  ...openFilters.slice(0, filterIndex),
                  index,
                  ...openFilters.slice(filterIndex + 1),
                ])
              }
              style={
                {
                  "--tw-bg-opacity":
                    openFilters[filterIndex] === index ? "100" : undefined,
                } as React.CSSProperties
              }
              key={index}
            >
              <div
                className="size-10 rounded-full"
                style={{ backgroundColor: filter.color }}
              />
              <div>{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
