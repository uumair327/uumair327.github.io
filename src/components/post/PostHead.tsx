"use client";

import styled from "@emotion/styled";
import { Post } from "contentlayer/generated";

import { maxMedia } from "@/libs/media";
import { headerImgPath } from "@/utils/url";

import Date from "../Date";
import Readingtime from "../Readingtime";
import TagList from "../common/tag/TagList";

/***************************************************
 *        A component that renders the top section and title of a post.
 ***************************************************/
export default function PostHead({ post }: { post: Post | undefined }) {
  if (post === undefined) return <></>;
  return (
    <PostHeadContainer>
      {post.headerImg && (
        <PostThumbnail
          className="post-thumbnail"
          src={headerImgPath(post.headerImg)}
          alt={post.title}
          // layout="fill"
          // width={0}
          // height={0}
          // objectFit="contain"
          // placeholder="blur"
          // style={{ width: "100%", height: "auto" }}
        />
      )}
      <PostTitle>{post.title}</PostTitle>
      <Description>{post.description}</Description>
      <Detail>
        <Date date={post.date} />
        <Readingtime readingTime={post.readingTime} />
      </Detail>
      <TagList tags={post.tags} />
      <Divder />
    </PostHeadContainer>
  );
}

const PostHeadContainer = styled.div`
  position: relative;
  .post-thumbnail {
    /* height: auto;
    object-fit: contain; */
  }
`;

const PostTitle = styled.h1`
  position: relative;
  display: table;
  color: var(--header);
  ${maxMedia.tablet} {
    line-height: 2.5rem;
  }
  &::after {
    content: ".";
    font-size: 2rem;
    color: var(--secondary);
    position: absolute;
    bottom: -0.25rem;
  }
`;
const Description = styled.p`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.desc};
  font-weight: 500;
`;
const Detail = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0rem 1.5rem 0rem;
`;
const PostThumbnail = styled.img`
  border-radius: 0.5rem;
  margin: 0rem 0rem 2rem 0rem;
  width: 100%;
  height: auto;
  aspect-ratio: 8 / 4;
  ${maxMedia.tablet} {
    margin-bottom: 1rem;
  }
`;
const Divder = styled.hr`
  text-align: center;
  overflow: visible;
  padding: 0px;
  border: none;
  border-top: 1px solid var(--grey);
  margin-top: 4.5rem;
  &::after {
    content: "</>";
    display: inline-block;
    position: relative;
    top: -0.9rem;
    font-size: 1rem;
    padding: 0 1rem;
    color: var(--grey);
    background: var(--white);
    transition: background var(--delay) !important;
    -moz-transition: background var(--delay) !important;
    -webkit-transition: background var(--delay) !important;
    -ms-transition: background var(--delay) !important;
    -o-transition: background var(--delay) !important;
  }
  ${maxMedia.mobile} {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`;
