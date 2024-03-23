"use client";

import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

import { SmallBanner } from "../Bannder";

export default function PostArticle(props: PropsWithChildren) {
  return (
    <article>
      <Content>{props.children}</Content>
      <SmallBanner>
        If there is any incorrect content, please point it out., <br className="tablet-br" />Please share any better methods or ideas you have.
      </SmallBanner>
    </article>
  );
}

const Content = styled.div`
  padding-bottom: 5rem;
`;
