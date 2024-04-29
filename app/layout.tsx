'use client'

import { AppProps } from "next/app";
import "../styles/index.scss";
import { Metadata, NextPage } from "next";
import { ReactElement, ReactNode } from "react";
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
        <GoogleAnalytics GA_MEASUREMENT_ID="G-88JTZML9Q3" />
        <HomeContextProvider>{children}</HomeContextProvider>
      </body>
    </html>
  );
}
