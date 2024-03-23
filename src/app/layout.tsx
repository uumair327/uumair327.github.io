import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Provider from "@/components/layout/Provider";
import { getBaseMetadata } from "@/utils/seo";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--Noto-Sans-KR",
});

export const metadata: Metadata = getBaseMetadata({ title: "uumair327" });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="" lang="kr" suppressHydrationWarning={true}>
      <head>
        <meta name="google-site-verification" content="gn2sWvweuddbK08UkGVye5iG662plG8LYiGmYbYWFYU" />
        <meta name="naver-site-verification" content="3bd8194507b9189faf92fab7ddf5b100bffa590f" />
      </head>
      <body className={notoSansKr.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

