import React, { useContext } from "react";
import { LayoutProps } from "./Layout.types";
import { LayoutWrapper } from "./Layout.styled";
import Head from "next/head";
import { useReadyDocument } from "@/hooks/useReadyDocument";
import { Header } from "../Header";
import { AuthContext } from "@/contexts/authContext";
import { Container } from "@/components/atoms";

const Layout: React.FC<LayoutProps> = ({ children, seoTitle, styles }) => {
  const { isDomLoaded } = useReadyDocument();
  const { email, photo, refreshTokens, username } = useContext(AuthContext);

  console.log({ email, photo, refreshTokens, username });

  return (
    <LayoutWrapper>
      <Head>
        <title>{seoTitle}</title>
      </Head>
      <Header />
      <Container width="100vw" justifyContent="center">
        <Container width="80%" lgMaxWidth="1200px" xsMargin="0 auto">
          {isDomLoaded && children}
        </Container>
      </Container>
    </LayoutWrapper>
  );
};

export default Layout;
