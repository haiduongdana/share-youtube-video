import { Layout, LayoutProps, YoutubeEmbed } from "@/components";
import { getYouTubeInfo } from "@/utils/youtubeapi";
import { GetServerSideProps } from "next";
import { useI18n } from "next-localization";

export default function Home() {
  const { t } = useI18n();

  const layoutProps: LayoutProps = {
    seoTitle: "Youtube Video Sharing App",
  };

  return (
    <Layout {...layoutProps}>
      <YoutubeEmbed embedId="6TBPQ10UxEM" />
      <YoutubeEmbed embedId="6TBPQ10UxEM" />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale, params } = ctx;

  const lan = locale ? locale : "en";

  const lngDict = await import(`../../public/lang/${lan}.json`);

  return {
    props: {
      lngDict: JSON.parse(JSON.stringify(lngDict)),
    },
  };
};
