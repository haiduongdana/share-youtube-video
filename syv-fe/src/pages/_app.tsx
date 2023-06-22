import "@/styles/globals.css";
import type { AppProps } from "next/app";
import createEmotionCache from "@/styles/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { useRouter } from "next/router";
import { I18nProvider } from "next-localization";
import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "@/hooks/useDarkMode";
import { ThemeContext } from "@/contexts/themeContext";
import { GlobalStyles } from "@/styles/GlobalStyles";

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

  const locale = useMemo(
    () => (!!router?.locale ? router?.locale : "en"),
    [router?.locale]
  );

  if (!mountedComponent) return <div />;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeContext.Provider value={{ theme, themeToggle }}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <I18nProvider lngDict={{ ...lngDict }} locale={locale}>
            <Component {...pageProps} />
          </I18nProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
}
