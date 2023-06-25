import {
  Layout,
  LayoutProps,
  ShareVideoForm,
  VideoItem,
  YoutubeEmbed,
} from "@/components";
import { AuthContext } from "@/contexts/authContext";
import api from "@/utils/api";
import { LocalStorage } from "@/utils/localStorage";
import withAuth from "@/utils/withAuth";
import { GetServerSideProps } from "next";
import { useCallback, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { Video } from "./index";

const Dashboard: React.FC = () => {
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
          title,
          thumbnailUrl,
          sharedDate: new Date().toString(),
          user: {
            _id: "649554e7ef95a1a2043133b9",
            username: "user 2",
            email: "user2@email.com",
          },
        },
      ]);

      await api.post("/video/add", { embedId, userId, title, thumbnailUrl });
    },
    []
  );

  useEffect(() => {
    const fetchSharedVideos = async () => {
      try {
        const userId = LocalStorage.get("_id");

        const response: { user: { sharedVideos: Video[] } } = await api.get(
          `/video/user/${userId}`
        );

        console.log({ response });

        if (response.user.sharedVideos.length) {
          setSharedList(response.user.sharedVideos);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchSharedVideos();
  }, []);

  return (
    <Layout {...layoutProps}>
      <ShareVideoForm onAddSharedVideo={onAddSharedVideoHandler} />
      {sharedList.map((item) => (
        <VideoItem {...item} />
      ))}
    </Layout>
  );
};

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
