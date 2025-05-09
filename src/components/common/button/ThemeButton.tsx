"use client";

import styled from "@emotion/styled";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import Skeleton from "@/components/skeleton";
import { maxMedia } from "@/libs/media";

import Button from ".";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeButtonStyled onClick={onClickHandler} style={{ display: "flex" }}>
      {theme === "dark" ? (
        <IconSunHigh width={18} height={18} stroke={1.25} />
      ) : (
        <IconMoon width={18} height={18} stroke={1.25} />
      )}
    </ThemeButtonStyled>
  );
}

export const ThemeButtonSkeleton = () => {
  return <Skeleton width="50px" height="34px" $variant="rounded" />;
};

const ThemeButtonStyled = styled(Button)`
  &:focus-visible {
    box-shadow: 0 0px 3px var(--black);
  }
  ${maxMedia.mobile} {
    padding: 0.5rem 0.5rem;
  }
`;
