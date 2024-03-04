import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import sejours from "../utils/sejours";
import Image from "next/image";
import arrowChevron from "../public/assets/arrow-chevron.svg";
import bootsActive from "../public/assets/boots.svg";
import bootsInactive from "../public/assets/boots-inactive.svg";
import sejourImg from "../public/assets/sejourimg.png";
import Hamburger from "hamburger-react";
import { useHomeStateContext } from "../context/Home";

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
  const {
    displayNavList,
    setDisplayNavList,
    displayNavSejours,
    setDisplayNavSejours,
  } = useHomeStateContext();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav>
        <div className="nav-upper">
          <div className="hamburger-shadow" />
          <Hamburger
            color="#FFF"
            rounded
            direction="right"
            easing="ease-in-out"
            toggled={displayNavList}
            toggle={setDisplayNavList}
          />
          <p className="logo">LOGO</p>
        </div>

        <div className={`nav-list ${displayNavList ? "active" : ""}`}>
          <button
            className={`btnSejour XL bold ${displayNavSejours ? "active" : ""}`}
            onClick={() => setDisplayNavSejours(!displayNavSejours)}
          >
            Nos séjours{" "}
            <Image
              src={arrowChevron}
              alt="icône flèche"
              width="30"
              height="30"
            />
          </button>

          {/* NAV LINKS MOBILE */}

          {!displayNavSejours &&
            [
              { label: "Calendrier", to: "/calendrier" },
              { label: "Réservation", to: "/reservation" },
              { label: "Nous connaître", to: "/nous-connaitre" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link href={link.to} key={link.to} className="navLink bold XL bold">
                {link.label}
              </Link>
            ))}

          {/* NAV SEJOURS MOBILE */}
          {sejours.map((sejour) => (
            <Link
              key={sejour.trek}
              href={sejour.slug}
              className={`sejour ${displayNavSejours ? "active" : ""}`}
            >
              <Image
                src={sejourImg}
                alt="image sejour"
                width={107.6}
                height={68.91}
              />
              <div className="sejour-desc">
                <p className="white XS bold">
                  {sejour.trek}
                  {sejour.altitudeTrek ? ` (${sejour.altitudeTrek} m)` : ""}
                </p>
                <p className="white XS bold">{sejour.date}</p>
                <div className="sejour-difficulty">
                  <Image src={bootsActive} alt='bottes' width={18.66} height={20.48} />
                  <Image src={bootsActive} alt='bottes' width={18.66} height={20.48} />
                  <Image src={bootsActive} alt='bottes' width={18.66} height={20.48} />
                  <Image src={bootsActive} alt='bottes' width={18.66} height={20.48} />
                  <Image src={bootsInactive} alt='bottes' width={18.66} height={20.48} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
