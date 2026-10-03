"use client";

import { List as ListIcon } from "#components/Icons.tsx";
import { useEffect, useState, type ReactNode } from "react";
import { Dialog, DialogTrigger, Popover } from "react-aria-components";
import { Button } from "./Button.tsx";

export function NavigationDisclosure(props: {
  children: (close: () => void) => ReactNode;
}) {
  const [isWide, setIsWide] = useState<boolean>();

  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");

    function updateMatches() {
      setIsWide(query.matches);
    }

    updateMatches();
    query.addEventListener("change", updateMatches);

    return () => {
      query.removeEventListener("change", updateMatches);
    };
  }, []);

  // NOTE: Unmount the overlay at the desktop breakpoint to release its focus scope.
  if (isWide === true) {
    return null;
  }

  return (
    <DialogTrigger>
      <Button
        variant="ghost"
        aria-label="Открыть меню"
        className="text-xl lg:hidden"
      >
        <ListIcon />
      </Button>

      <Popover
        placement="bottom end"
        offset={12}
        className="z-50 w-52 origin-top rounded-control bg-white p-2 text-content shadow-md lg:hidden entering:animate-navigation-enter exiting:animate-navigation-exit"
      >
        <Dialog aria-label="Основная навигация" className="outline-hidden">
          {({ close }) => props.children(close)}
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}
