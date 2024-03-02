import { AppProps } from "next/app";
import "../styles/index.scss";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { HomeContextProvider } from "../context/Home";

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
      <HomeContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </HomeContextProvider>
    </>
  );
}

export default MyApp;
