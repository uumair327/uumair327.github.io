"use client";

import Giscus, { type Theme } from "@giscus/react";
import { useTheme } from "next-themes";

// import { useGlobalTheme } from "./layout/Provider";

type DefaultThemeType = Extract<
  Theme,
  | "light"
  | "light_high_contrast"
  | "light_protanopia"
  | "light_tritanopia"
  | "dark"
  | "dark_high_contrast"
  | "dark_protanopia"
  | "dark_tritanopia"
  | "dark_dimmed"
  | "preferred_color_scheme"
  | "transparent_dark"
  | "noborder_light"
  | "noborder_dark"
  | "cobalt"
>;

export default function Comments() {
  const { theme } = useTheme();
  // const { theme } = useGlobalTheme();

  return (
    <Giscus
      id="giscus-comments"
      repo="uumair327/uumair327.github.io"
      repoId="R_kgDOLkTTeA"
      category="General"
      categoryId="DIC_kwDOLkTTeM4CeK-f"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={
        theme === "dark"
          ? ("transparent_dark" satisfies DefaultThemeType)
          : ("noborder_light" satisfies DefaultThemeType)
      }
      lang="en"
      loading="lazy"
      inputPosition="top"
    />
  );
}
