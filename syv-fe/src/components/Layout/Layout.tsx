import React from "react";
import { LayoutProps } from "./Layout.types";
import { LayoutWrapper } from "./Layout.styled";
import Head from "next/head";
import { useReadyDocument } from "@/hooks/useReadyDocument";

const Layout: React.FC<LayoutProps> = ({ children, seoTitle, styles }) => {
  const { isDomLoaded } = useReadyDocument();

  return (
    <LayoutWrapper>
      <Head>
        <title>{seoTitle}</title>
      </Head>
      {isDomLoaded && children}
    </LayoutWrapper>
  );
};

export default Layout;
