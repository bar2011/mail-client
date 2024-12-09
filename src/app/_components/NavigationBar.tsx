"use client";

import { Menubar } from "~/components/ui/menubar";
import React, { type ReactElement } from "react";
import {
  AlarmClock,
  Calendar,
  House,
  Inbox,
  Pencil,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

type Menus = Record<string, ReactElement>;

export default function NavigationBar() {
  const router = useRouter();

  const paths: Menus = {
    "/": <House />,
    "/messages": <Inbox />,
    "/actions": <AlarmClock />,
    "/trash": <Trash2 />,
    "/calendar": <Calendar />,
    "/settings": <Settings />,
  };

  const actions: Menus = {
    search: <Search />,
    compose: <Pencil />,
  };

  const pathname = usePathname();

  return (
    <Menubar>
      {Object.keys(paths).map((path, index) => {
        return (
          <Button
            variant="ghost"
            size="menu_icon"
            className={pathname == path ? "bg-muted" : ""}
            onClick={() => router.push(path)}
            key={index}
          >
            {paths[path]}
          </Button>
        );
      })}
      <div className="w-full" />
      {Object.keys(actions).map((action, index) => {
        return (
          <Button variant="ghost" size="menu_icon" key={index}>
            {actions[action]}
          </Button>
        );
      })}
    </Menubar>
  );
}
