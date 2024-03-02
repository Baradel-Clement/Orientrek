import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import sejours from "../utils/sejours";
import Image from "next/image";
import arrowChevron from "../public/assets/arrow-chevron.svg";
import Hamburger from "hamburger-react";

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

const Layout = ({ children, title = "Orientrek" }: Props) => {
  const [displayNavList, setDisplayNavList] = useState(false);
  const [displayNavSejours, setDisplayNavSejours] = useState(false);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav>
        <div className="nav-upper">
          <Hamburger rounded direction="right" easing="ease-in-out" toggled={displayNavList} toggle={setDisplayNavList} />
          <p className="logo">LOGO</p>
        </div>

        <div className={`nav-list ${displayNavList ? "active" : ""}`}>
          <p
            className={`buttonSejour ${displayNavSejours ? "active" : ""}`}
            onClick={() => setDisplayNavSejours(!displayNavSejours)}
          >
            Séjours{" "}
            <Image
              src={arrowChevron}
              alt="icône flèche"
              width="40"
              height="40"
            />
          </p>
          {!displayNavSejours &&
            [
              { label: "Calendrier", to: "/calendrier" },
              { label: "Réservation", to: "/reservation" },
              { label: "Nous connaître", to: "/nous-connaitre" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link href={link.to} key={link.to}>
                {link.label}
              </Link>
            ))}
          {sejours.map((sejour) => (
            <Link
              key={sejour.label}
              href="/"
              className={`sejour ${displayNavSejours ? "active" : ""}`}
            >
              {sejour.label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
