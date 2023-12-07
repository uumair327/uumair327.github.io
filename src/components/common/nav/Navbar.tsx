"use client";

import { maxMedia } from "@/libs/media";
import styled from "@emotion/styled";

// export default function Navbar() {
//     return (

//     )
// }
export const Navbar = styled.nav`
  width: 100%;
  position: relative;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  ${maxMedia.mobile} {
    padding: 0rem;
  }
`;
