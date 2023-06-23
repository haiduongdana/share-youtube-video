import { Layout, LayoutProps } from "@/components";
import { ThemeContext } from "@/contexts/themeContext";
import { GetServerSideProps } from "next";
import { useI18n } from "next-localization";
import { useContext } from "react";

export default function Home() {
  const { t } = useI18n();
  const { theme, themeToggle } = useContext(ThemeContext);

  const layoutProps: LayoutProps = {
    seoTitle: "Youtube Video Sharing App",
  };

  return <Layout {...layoutProps}>Log in</Layout>;
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
