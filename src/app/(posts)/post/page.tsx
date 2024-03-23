import { Metadata } from "next";

import Banner from "@/components/Bannder";
import { Layout } from "@/components/layout";
import { PostFeed } from "@/components/post/PostFeed";
import { allPostPosts } from "@/constants/posts";
import { getBaseMetadata } from "@/utils/seo";

export const metadata: Metadata = getBaseMetadata({
  title: "Posts",
  path: "/post",
});

export default function PostPage() {
  return (
    <Layout>
      <h1>Posts</h1>
      <Banner>
        This is a space to record research or study.
        <br />
        Learning grows as you share it.
      </Banner>
      <PostFeed posts={allPostPosts} />
    </Layout>
  );
}