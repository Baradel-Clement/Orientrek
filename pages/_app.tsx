import { AppProps } from "next/app";
import "../styles/index.scss";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { HomeContextProvider } from "../context/Home";
import GoogleAnalytics from "../components/GoogleAnalytics";

export type NextPageWithLayout<Props> = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<AppProps>;
};

function MyApp({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-VQH3J3ZR1Z" />
      <HomeContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </HomeContextProvider>
    </>
  );
}

export default MyApp;
