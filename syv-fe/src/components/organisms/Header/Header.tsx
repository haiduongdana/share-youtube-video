import React, { useCallback, useContext } from "react";
import { HeaderProps } from "./Header.types";
import { Button, Container } from "@/components/atoms";
import Link from "next/link";
import { HeaderContainer, Logo, RouteContainer } from "./Header.styled";
import { HeaderItem } from "@/components/molecules";
import { AuthContext } from "@/contexts/authContext";
import { ThemeContext } from "@/contexts/themeContext";
import { LangContext } from "@/contexts/langContext";
import { useI18n } from "next-localization";
import { LANG } from "@/constants";

const Header: React.FC<HeaderProps> = ({}) => {
  const { isLoggedIn, userData } = useContext(AuthContext);
  const { theme, themeToggle } = useContext(ThemeContext);
  const { lang, changeLang } = useContext(LangContext);
  const { t } = useI18n();

  const onChangeLangHandler = useCallback(() => {
    if (lang === "en") {
      changeLang("vi");
    } else {
      changeLang("en");
    }
  }, [lang, changeLang]);

  return (
    <HeaderContainer>
      <Container
        width="80%"
        lgMaxWidth="1200px"
        xsMargin="0 auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/">
          <Logo>Share Youtube Video</Logo>
        </Link>
        <RouteContainer>
          <Button onClick={themeToggle}>
            {theme === "light" ? t(LANG.DARK) : t(LANG.LIGHT)}
          </Button>
          <Button onClick={onChangeLangHandler}>
            {lang === "en" ? "VI" : "EN"}
          </Button>
          {!isLoggedIn && <HeaderItem link="/signup" title={t(LANG.SIGN_UP)} />}
          {!isLoggedIn && <HeaderItem link="/login" title={t(LANG.LOG_IN)} />}
          {isLoggedIn && (
            <HeaderItem
              link="/dashboard"
              title={`${userData?.username} ${t(LANG.DASHBOARD)}`}
            />
          )}
          {isLoggedIn && <HeaderItem link="/logout" title={t(LANG.LOG_OUT)} />}
        </RouteContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
