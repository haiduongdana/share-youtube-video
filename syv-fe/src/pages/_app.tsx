import "@/styles/globals.css";
import type { AppProps } from "next/app";
import createEmotionCache from "@/styles/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { useRouter } from "next/router";
import { I18nProvider } from "next-localization";
import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "@/hooks/useDarkMode";
import { ThemeContext } from "@/contexts/themeContext";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { AuthContext } from "@/contexts/authContext";
import { LangContext } from "@/contexts/langContext";
import { useLang } from "@/hooks/useLang";

const clientSideEmotionCache = createEmotionCache();

interface _AppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: _AppProps) {
  const router = useRouter();
  const { lngDict } = pageProps;

  const { theme, themeToggle, mountedComponent, themeMode } = useDarkMode();
  const { lang, changeLang } = useLang();

  const locale = useMemo(
    () => (!!router?.locale ? router?.locale : "en"),
    [router?.locale]
  );

  if (!mountedComponent) return <div />;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeContext.Provider value={{ theme, themeToggle }}>
        <LangContext.Provider value={{ lang, changeLang }}>
          <AuthContext.Provider value={{}}>
            <ThemeProvider theme={themeMode}>
              <GlobalStyles />
              <I18nProvider lngDict={{ ...lngDict }} locale={locale}>
                <React.Fragment>
                  <Component {...pageProps} />
                </React.Fragment>
              </I18nProvider>
            </ThemeProvider>
          </AuthContext.Provider>
        </LangContext.Provider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
}
