import { allPosts as allCLPosts } from "contentlayer/generated";

import { PostType } from "@/types/post";

// Sort allPosts from contentlayer by date
export const allPosts: PostType[] = allCLPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Filter posts under the 'post' category
export const allPostPosts: PostType[] = allPosts.filter(post => post._raw.sourceFilePath.includes("post"));

// Filter posts under the 'project' category
export const allProjectPosts: PostType[] = allPosts.filter(post => post._raw.sourceFilePath.includes("project"));

// Get all tags from all posts
interface TagCount {
  [key: string]: number;
}
interface TagType {
  tag: string;
  count: number;
}
const getElCount = (arr: string[]) => arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {} as TagCount);
const tags: string[] = allPosts.flatMap(post => post.tags ?? []);
const tagsWithCnt = getElCount(tags);
export const allTags: TagType[] = Object.entries(tagsWithCnt).map(([tag, count]) => ({ tag, count }));

// export const allTags: string[] = tags.filter((v, i) => tags.indexOf(v) === i);
