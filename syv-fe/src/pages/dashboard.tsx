import { Layout, LayoutProps, ShareVideoForm } from "@/components";
import { AuthContext } from "@/contexts/authContext";
import api from "@/utils/api";
import withAuth from "@/utils/withAuth";
import { GetServerSideProps } from "next";
import { useCallback, useContext, useState } from "react";
import { v4 } from "uuid";

interface Video {
  _id: string;
  embedId: string;
  userId: string;
  title: string;
  thumbnailUrl: string;
  sharedDate: Date;
}

function Dashboard() {
  const { userData } = useContext(AuthContext);
  const userId = userData?._id || "";
  const [sharedList, setSharedList] = useState<Video[]>([]);

  const layoutProps: LayoutProps = {
    seoTitle: "Dashboard",
  };

  const onAddSharedVideoHandler = useCallback(
    async (embedId: string, title: string, thumbnailUrl: string) => {
      setSharedList((sharedList) => [
        ...sharedList,
        {
          _id: v4(),
          embedId,
          userId,
          title,
          thumbnailUrl,
          sharedDate: new Date(),
        },
      ]);

      await api.post("/video/add", { embedId, userId, title, thumbnailUrl });
    },
    []
  );

  return (
    <Layout {...layoutProps}>
      <ShareVideoForm onAddSharedVideo={onAddSharedVideoHandler} />
      {/* {sharedList.map((item) => (
        <YoutubeEmbed embedId={item.embedId} key={item._id} />
      ))} */}
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
