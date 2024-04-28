import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { sejours2025 } from "../utils/sejours";
import { sejours2026 } from "../utils/sejours";
import Image from "next/image";
import arrowChevron from "../public/assets/arrow-chevron.svg";
import arrowSejours2025 from "../public/assets/check.svg";
import Hamburger from "hamburger-react";
import { useHomeStateContext } from "../context/Home";
import logo from "../public/assets/logo.png";
import closeIcon from "../public/assets/close.svg";
import { useRouter } from "next/router";
import SejourButton from "./SejourButton";
import { closeModal } from "../utils/closeModal";
import CookieBanner from "./CookieBanner";

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
    displayNestedSejours,
    setDisplayNestedSejours,
    setSejourHovering,
  } = useHomeStateContext();

  const [sejoursYear, setSejoursYear] = useState(2025);

  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        if (displayNestedSejours) {
          if (closeModal("closeModalNestedLinksOff", e)) {
            setDisplayNestedSejours(false);
          }
        }
        if (displayNavList) {
          if (closeModal("closeModalNavListOff", e)) {
            setDisplayNavList(false);
          }
        }
      }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Découvrez le Japon authentique avec Orientrek ! Treks guidés par Samuel Bernard dans les Alpes Japonaises et Hokkaido. Explorez, vivez, partagez !" />
      </Head>

      <nav>
        <div className="nav-upper">
          {/* MOBILE UPPER SECTION */}
          <Hamburger
            color="#FFF"
            rounded
            direction="right"
            easing="ease-in-out"
            toggled={displayNavList}
            toggle={setDisplayNavList}
          />
          <Link href="/" className="logo">
            <Image
              src={logo}
              alt="logo Orientrek"
              width="65"
              height="65"
              placeholder="blur"
            />
          </Link>

          {/* DESKTOP UPPER SECTION */}
          <div className="nav-upper-container">
            <Link href="/">
              <Image
                src={logo}
                alt="logo Orientrek"
                width="65"
                height="65"
                placeholder="blur"
              />
            </Link>
            <div className="nav-upper-links">
              <Link href="/nous-connaitre">Nous connaître</Link>
              <Link href="/contact">Nous contacter</Link>
              <Link href="/reservation">Réservation</Link>
              <Link href="/mentions-legales">Mentions légales</Link>

              <p
                className={`nav-upper-btnDisplayNestedSejours closeModalNestedLinksOff ${
                  displayNestedSejours ? "active" : ""
                }`}
                onClick={() => {
                  if (router.pathname !== "/")
                    setDisplayNestedSejours(!displayNestedSejours);
                }}
              >
                Séjours 2025
              </p>
              {router.pathname === "/" && (
                <Image src={arrowSejours2025} alt="fléche vers le bas" />
              )}

              {/* Nested Links */}
              {displayNestedSejours && (
                <div className="nav-upper-nestedLinks closeModalNestedLinksOff drop-shadow">
                  <Image
                    src={closeIcon}
                    alt="icone fermeture"
                    onClick={() => setDisplayNestedSejours(false)}
                  />
                  {/* <div className="upper-sejours-yearBtn-container">
                    <button
                      onClick={() => setSejoursYear(2025)}
                      className={`upper-sejours-yearBtn bold hover-shadow transition ${
                        sejoursYear === 2025 ? "active" : ""
                      }`}
                    >
                      2025
                    </button>
                    <button
                      onClick={() => setSejoursYear(2026)}
                      className={`upper-sejours-yearBtn bold hover-shadow transition ${
                        sejoursYear === 2026 ? "active" : ""
                      }`}
                    >
                      2026
                    </button>
                  </div> */}

                  {sejoursYear === 2025 &&
                    sejours2025.map((sejour) => (
                      <SejourButton
                        key={sejour.slug}
                        mode="nestedLink"
                        sejour={sejour}
                      />
                    ))}
                  {sejoursYear === 2026 &&
                    sejours2026.map((sejour) => (
                      <SejourButton
                        key={sejour.slug}
                        mode="nestedLink"
                        sejour={sejour}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`nav-list closeModalNavListOff ${
            displayNavList ? "active" : ""
          }`}
        >
          <button
            className={`btnSejour L bold ${displayNavSejours ? "active" : ""}`}
            onClick={() => setDisplayNavSejours(!displayNavSejours)}
          >
            Séjours 2025{" "}
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
              { label: "Nous connaître", to: "/nous-connaitre" },
              { label: "Nous contacter", to: "/contact" },
              { label: "Réservation", to: "/reservation" },
              { label: "Mentions légales", to: "/mentions-legales" },
            ].map((link) => (
              <Link
                href={link.to}
                key={link.to}
                className="navLink bold L bold"
                onClick={() => {
                  setDisplayNavList(false);
                  setDisplayNavSejours(false);
                }}
              >
                {link.label}
              </Link>
            ))}

          {/* NAV SEJOURS MOBILE */}
          {sejours2025.map((sejour) => (
            <SejourButton key={sejour.slug} mode="homepage" sejour={sejour} />
          ))}
        </div>
      </nav>
      {children}
      <CookieBanner />
    </div>
  );
};

export default Layout;
