"use client";

import React, { useState } from "react";

import type { FilterGroup } from "../page";
import { X } from "lucide-react";

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
          let [isHovered, setIsHovered] = useState(false);
          return (
            <div
              className="flex w-full min-w-max cursor-pointer justify-between gap-2 rounded-sm bg-muted bg-opacity-0 px-2 py-2 hover:bg-opacity-50 active:bg-opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                setOpenFilters([
                  ...openFilters.slice(0, filterIndex + 1),
                  index,
                ]);
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={
                {
                  "--tw-bg-opacity":
                    openFilters[filterIndex + 1] === index ? "100" : undefined,
                } as React.CSSProperties
              }
              key={index}
            >
              <div className="flex min-h-max items-center gap-2">
                <div
                  className="size-10 rounded-full"
                  style={{ backgroundColor: filter.color }}
                />
                <div>{title}</div>
              </div>
              {openFilters[filterIndex + 1] === index ? (
                <X
                  className="flex min-h-full items-center transition-all duration-100"
                  style={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenFilters(openFilters.slice(0, filterIndex + 1));
                  }}
                  key={index}
                />
              ) : (
                <div className="size-6" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
