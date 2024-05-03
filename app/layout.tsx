'use client'

import { AppProps } from "next/app";
import "../styles/index.scss";
import { Metadata, NextPage } from "next";
import { ReactElement, ReactNode, Suspense } from "react";
import { HomeContextProvider } from "../context/Home";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {/* <Suspense fallback>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-88JTZML9Q3" />
        </Suspense> */}
        <HomeContextProvider>{children}</HomeContextProvider>
      </body>
    </html>
  );
}
