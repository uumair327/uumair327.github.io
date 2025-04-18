"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { RecoilRoot } from "recoil";

import GlobalStyle from "@/styles/GlobalStyle";
import baseTheme from "@/styles/theme";

export default function Provider(props: React.PropsWithChildren) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="light" enableSystem>
      <ThemeProvider theme={baseTheme}>
        <Global styles={GlobalStyle(baseTheme)} />
        <RecoilRoot>{props.children}</RecoilRoot>
      </ThemeProvider>
    </NextThemesProvider>
  );
}
