"use client";

import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from "next-themes";
import { useIsMounted } from "@/hooks/use-is-mounted";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const isMounted = useIsMounted();

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {isMounted && children}
    </NextThemeProvider>
  );
}
