import { Metadata } from "next";

import Banner from "@/components/Bannder";
import { Row } from "@/components/common/grid/Container";
import { Layout } from "@/components/layout";
import { PostFeed } from "@/components/post/PostFeed";

import { getBaseMetadata } from "@/utils/seo";

import { allProjectPosts } from "@/constants/posts";

export const metadata: Metadata = getBaseMetadata({
  title: "Projects",
  path: "/project",
});

export default function PostPage() {
  return (
    <Layout>
      <h1>Projects</h1>
      <Banner bannerType="project">
        Dreaming, designing, and implementing is thrilling.
        <br />
        I actively strive to participate in new challenges.
      </Banner>
      <PostFeed posts={allProjectPosts} />
    </Layout>
  );
}