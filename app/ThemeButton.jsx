"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import React from "react";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="shadow-sm flex items-center justify-center rounded-lg p-2 dark:shadow-sm dark:border-gray-500"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
};

export default ThemeButton;
