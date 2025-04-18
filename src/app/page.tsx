import { HomeBanner } from "@/components/Bannder";
import ProfileBoard from "@/components/dashboard/ProfileBoard";
import RecentBoard from "@/components/dashboard/RecentBoard";
import TagsBoard from "@/components/dashboard/TagsBoard";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <ProfileBoard />
      <RecentBoard />
      {/* <RepoBoard /> */}
      <HomeBanner>🚶🏻‍♂️𝚆𝚘𝚛𝚔 𝙷𝚊𝚛𝚍.𝙳𝚛𝚎𝚊𝚖 𝙱𝙸𝙶..</HomeBanner>
      <TagsBoard />
    </Layout>
  );
}
