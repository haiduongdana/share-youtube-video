import { Layout, LayoutProps, VideoItem } from "@/components";
import api from "@/utils/api";
import { GetServerSideProps } from "next";

export interface Video {
  _id: string;
  embedId: string;
  title: string;
  thumbnailUrl: string;
  sharedDate: string;
  user: {
    _id: string;
    username: string;
    email: string;
  };
}

interface Props {
  sharedVideos: Video[];
}

const Home: React.FC<Props> = ({ sharedVideos }) => {
  const layoutProps: LayoutProps = {
    seoTitle: "Youtube Video Sharing App",
  };

  return (
    <Layout {...layoutProps}>
      {sharedVideos.map((item) => (
        <VideoItem {...item} />
      ))}
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale, params } = ctx;

  const lan = locale ? locale : "en";

  const lngDict = await import(`../../public/lang/${lan}.json`);

  const response: { message: string; videos: Video[] } = await api.get(
    "/video"
  );

  return {
    props: {
      lngDict: JSON.parse(JSON.stringify(lngDict)),
      sharedVideos: response.videos,
    },
  };
};
