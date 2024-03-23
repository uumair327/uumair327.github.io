"use client";

import Image from "next/image";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <br />
        <br />
        <br />
        <br />
        <h1>404</h1>
        <br />
        <p>Oops! The page you are looking for cannot be found.</p>
        <p>It's possible that the address has changed, so try searching with '/'.</p>
        <br />
        <Image src="/banner_cat.png" alt="banner" width={200} height={200} />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}
