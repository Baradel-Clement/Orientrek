import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

/* const navLinks = [
  { label: "Séjours" },
  { label: "Calendrier", to: "/calendrier" },
  { label: "Réservation", to: "/reservation" },
  { label: "Nous connaître", to: "/nous-connaitre" },
  { label: "Contact", to: "/contact" },
]; */

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <nav>
      <button />
      <p className="logo">LOGO</p>
      <Link href="/contact">Contact</Link>
    </nav>
    {children}
  </div>
);

export default Layout;
