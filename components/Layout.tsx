import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { sejours2025 } from "../utils/sejours";
import { sejours2026 } from "../utils/sejours";
import Image from "next/image";
import arrowChevron from "../public/assets/arrow-chevron.svg";
import Hamburger from "hamburger-react";
import { useHomeStateContext } from "../context/Home";
import logo from "../public/assets/logo.png";
import closeIcon from "../public/assets/close.svg";
import { useRouter } from "next/router";
import SejourButton from "./SejourButton";
import { closeModal } from "../utils/closeModal";

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
      }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            <Image src={logo} alt="logo Orientrek" width="65" height="65" />
          </Link>

          {/* DESKTOP UPPER SECTION */}
          <div className="nav-upper-container">
            <Link href="/">
              <Image src={logo} alt="logo Orientrek" width="65" height="65" />
            </Link>
            <div className="nav-upper-links">
              <p
                className={`nav-upper-btnDisplayNestedSejours closeModalNestedLinksOff ${
                  displayNestedSejours ? "active" : ""
                }`}
                onClick={() => setDisplayNestedSejours(!displayNestedSejours)}
              >
                Nos Séjours
              </p>

              {/* Nested Links */}
              {displayNestedSejours && (
                <div className="nav-upper-nestedLinks closeModalNestedLinksOff">
                  <Image
                    src={closeIcon}
                    alt="icone fermeture"
                    onClick={() => setDisplayNestedSejours(false)}
                  />
                  <div className="upper-sejours-yearBtn-container">
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
                  </div>

                  {sejoursYear === 2025 &&
                    sejours2025.map((sejour) => (
                      <SejourButton mode="nestedLink" sejour={sejour} />
                    ))}
                  {sejoursYear === 2026 &&
                    sejours2026.map((sejour) => (
                      <SejourButton mode="nestedLink" sejour={sejour} />
                    ))}
                </div>
              )}

              <Link href="/calendrier">Calendrier</Link>
              <Link href="/reservations">Réservation</Link>
              <Link href="/nous-connaitre">Nous connaître</Link>
            </div>
            <Link href="/contact" className="nav-upper-contactBtn drop-shadow">
              Nous contacter : 06 59 37 37 03
            </Link>
            {router.pathname === "/" && (
              <div className="nav-upper-sejours drop-shadow">
                <div className="upper-sejours-yearBtn-container">
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
                </div>
                {sejoursYear === 2025 &&
                  sejours2025.map((sejour) => (
                    <SejourButton mode="homepage" sejour={sejour} />
                  ))}
                {sejoursYear === 2026 &&
                  sejours2026.map((sejour) => (
                    <SejourButton mode="homepage" sejour={sejour} />
                  ))}
              </div>
            )}
          </div>
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
              <Link
                href={link.to}
                key={link.to}
                className="navLink bold L bold"
              >
                {link.label}
              </Link>
            ))}

          {/* NAV SEJOURS MOBILE */}
          {sejours2025.map((sejour) => (
            <SejourButton mode="homepage" sejour={sejour} />
          ))}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
