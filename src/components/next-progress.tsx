"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useTheme } from "next-themes";

export default function NextProgress() {
  const { theme, setTheme } = useTheme();
  return (
    <ProgressBar
      height="4px"
      color={theme === "dark" ? "#00a5e8" : "#f89a4d"}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
