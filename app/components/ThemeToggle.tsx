"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="relative flex h-8 w-8 items-center justify-center rounded-full"
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-muted"
    >
      {isDark ? (
        <Moon className="h-3.5 w-3.5 text-primary" />
      ) : (
        <Sun className="h-3.5 w-3.5 text-primary" />
      )}
    </button>
  );
}
