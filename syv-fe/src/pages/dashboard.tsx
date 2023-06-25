import {
  Layout,
  LayoutProps,
  ShareVideoForm,
  YoutubeEmbed,
} from "@/components";
import { AuthContext } from "@/contexts/authContext";
import withAuth from "@/utils/withAuth";
import { getYouTubeInfo } from "@/utils/youtubeapi";
import { GetServerSideProps } from "next";
import { useI18n } from "next-localization";
import { useCallback, useContext, useState } from "react";
import { v4 } from "uuid";

interface Video {
  _id: string;
  embedId: string;
  userId: string;
  title: string;
  sharedDate: Date;
}

function Dashboard() {
  const { t } = useI18n();
  const { userData } = useContext(AuthContext);
  const userId = userData?._id || "";
  const [sharedList, setSharedList] = useState<Video[]>([]);

  const layoutProps: LayoutProps = {
    seoTitle: "Dashboard",
  };

  const onAddSharedVideoHandler = useCallback(
    (embedId: string, title: string) => {
      setSharedList((sharedList) => [
        ...sharedList,
        {
          _id: v4(),
          embedId,
          userId,
          title,
          sharedDate: new Date(),
        },
      ]);
    },
    []
  );

  return (
    <Layout {...layoutProps}>
      <ShareVideoForm onAddSharedVideo={onAddSharedVideoHandler} />
      {sharedList.map((item) => (
        <YoutubeEmbed embedId={item.embedId} key={item._id} />
      ))}
    </Layout>
  );
}

export default withAuth(Dashboard);

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
