import { Metadata } from "next";

import { PostType } from "@/types/post";

import { headerImgPath } from "./url";

export const siteConfig = {
  url: "https://uumair327.github.io",
  title: "uumair327",
  description: "uumair327",
  copyright: "uumair327 © All rights reserved.",
  since: 2024,
  googleAnalyticsId: "G-SM3Z0KDM2T",
  author: "uumair327",
  email: "uumair327@gmail.com",
  profile: "https://uumair327.github.io/profile.png",
};

const getRelativeUrl = (url?: string) => {
  if (!url) return siteConfig.url;

  return `${siteConfig.url}/${url.replace(/^\/+/g, "")}`;
};

export const getBaseMetadata = ({ title, path }: { title: string; path?: string }): Metadata => {
  const url = getRelativeUrl(path);
  const { description } = siteConfig;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: siteConfig.title,
      url,
      type: "website",
      images: [
        {
          url: siteConfig.profile,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
};

export const getArticleMetadata = (post: PostType): Metadata => {
  const description = post.description?.slice(0, 90);
  const url = getRelativeUrl(post.url);
  const dateTime = new Date(post.date).toISOString();

  return {
    title: post.title,
    description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      siteName: siteConfig.title,
      url,
      publishedTime: dateTime,
      modifiedTime: dateTime,
      authors: [`https://github.com/uumair327`],
      tags: post.tags,
      images: [
        {
          url: `${siteConfig.url}${headerImgPath(post.headerImg)}`,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
};

export const JSONLD = (post: PostType) => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    name: siteConfig.author,
    author: {
      "@type": "Person",
      name: siteConfig.author,
      email: siteConfig.email,
      url: siteConfig.url,
      nationality: {
        "@type": "Country",
        name: "India",
      },
    },
    image: siteConfig.profile,
    description: post.description,
    title: post.title,
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    inLanguage: "ko",
    mainEntityOfPage: { "@type": "WebPage", "@id": getRelativeUrl(post.url) },
  };
  return JSON.stringify(jsonLD);
};
