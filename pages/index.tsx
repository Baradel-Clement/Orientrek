import Image from "next/image";
import Layout from "../components/Layout";
import { useHomeStateContext } from "../context/Home";
import { NextPageWithLayout } from "./_app";
import mapJapon from "../public/assets/map-japon.png";
import mapAlpes from "../public/assets/map-alpes.png";
import flag from "../public/assets/flag.png";
import { useEffect, useState } from "react";
import { sejours2025 } from "../utils/sejours";
import { sejours2026 } from "../utils/sejours";
import SejourButton from "../components/SejourButton";
import hokaDestinationImg from "../public/assets/destinations/hoka.png";
import alpesDestinationImg from "../public/assets/destinations/alpes.png";
import tokyoDestinationImg from "../public/assets/destinations/tokyo.png";
import kyotoDestinationImg from "../public/assets/destinations/kyoto.png";
import miyajimaDestinationImg from "../public/assets/destinations/miyajima.png";
import Link from "next/link";
import { NextSeo } from "next-seo";

type Props = {};

const Accueil: NextPageWithLayout<Props> = () => {
  const {
    setDisplayNavList,
    setDisplayNavSejours,
    sejourHovering,
    setSejourHovering,
  } = useHomeStateContext();
  const [mapJaponActive, setMapJaponActive] = useState(true);
  const [sejoursYear, setSejoursYear] = useState(2025);

  return (
    <>
      <NextSeo
        title="Séjours avec trekking au Japon / Orientrek"
        description="Découvrez le Japon authentique avec Orientrek ! Treks guidés par Samuel Bernard dans les Alpes Japonaises et Hokkaido. Explorez, vivez, partagez !"
        canonical="https://www.orientrek.com/"
        openGraph={{
          type: "website",
          url: "https://www.orientrek.com/",
          title: "Séjours avec trekking au Japon / Orientrek",
          description:
            "Découvrez le Japon authentique avec Orientrek ! Treks guidés par Samuel Bernard dans les Alpes Japonaises et Hokkaido. Explorez, vivez, partagez !",
          images: [
            {
              url: "https://www.orientrek.com/assets/remote/opengraph.png",
              width: 1200,
              height: 630,
              alt: "Découvrez le Japon authentique avec Orientrek ! Treks guidés par Samuel Bernard dans les Alpes Japonaises et Hokkaido. Explorez, vivez, partagez !",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <Layout title="Séjours avec trekking au Japon / Orientrek">
        <div className="Accueil">
          {/* MOBILE SECTION */}
          <div className="maps-container-mobile">
            <Image
              className={`map map-japon ${
                mapJaponActive ? "active" : "inactive"
              }`}
              src={mapJapon}
              placeholder="blur"
              alt="carte du japon"
              onClick={() => {
                if (!mapJaponActive) {
                  setMapJaponActive(!mapJaponActive);
                }
              }}
            />
            <Image
              className={`map map-alpes ${
                !mapJaponActive ? "active" : "inactive"
              }`}
              src={mapAlpes}
              placeholder="blur"
              alt="carte des alpes japonaises"
              onClick={() => {
                if (mapJaponActive) {
                  setMapJaponActive(!mapJaponActive);
                }
              }}
            />
            {mapJaponActive && (
              <>
                <Link href="/sejours/parc-national-daisetsuzan">
                  <Image
                    className="flag flagHoka"
                    src={flag}
                    alt="drapeau"
                    width="31"
                    height="47"
                  />
                </Link>
                <Image
                  className="flag flagAlpes"
                  src={flag}
                  alt="drapeau"
                  width="31"
                  height="47"
                  onClick={() => setMapJaponActive(!mapJaponActive)}
                />
              </>
            )}
            {!mapJaponActive && (
              <>
                <Link href="/sejours/mont-tsubakurodake">
                  <Image
                    className={`flag flagAlpes1`}
                    src={flag}
                    placeholder="blur"
                    alt="drapeau"
                    width="31"
                    height="47"
                  />
                </Link>
                <Link href="/sejours/mont-yarigatake">
                  <Image
                    className={`flag flagAlpes2`}
                    src={flag}
                    placeholder="blur"
                    alt="drapeau"
                    width="31"
                    height="47"
                  />
                </Link>
                <Link href="/sejours/mont-kitadake">
                  <Image
                    className={`flag flagAlpes3`}
                    src={flag}
                    placeholder="blur"
                    alt="drapeau"
                    width="31"
                    height="47"
                  />
                </Link>
                <Link href="/sejours/couleurs-automne">
                  <Image
                    className={`flag flagAlpes4`}
                    src={flag}
                    placeholder="blur"
                    alt="drapeau"
                    width="31"
                    height="47"
                  />
                </Link>
              </>
            )}
          </div>
          <button
            onClick={() => {
              setDisplayNavList(true);
              setDisplayNavSejours(true);
            }}
            className="bold btn-sejours-mobile"
          >
            Séjours 2025
          </button>

          {/* DESKTOP SECTION */}
          <div className="Accueil-main">
            {/* RIGHT PANEL */}
            <div className="nav-upper-sejours drop-shadow">
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
                    mode="homepage"
                    sejour={sejour}
                    key={sejour.trek}
                  />
                ))}
              {/* {sejoursYear === 2026 &&
              sejours2026.map((sejour) => (
                <SejourButton mode="homepage" sejour={sejour} />
              ))} */}
            </div>
            <div className="maps-hint">
              <p className="bold">
                Baladez-vous sur les cartes et choissisez votre prochain trek au
                Japon
              </p>
            </div>
            <div className="maps-container">
              {/* FLAGS */}

              {/* FLAG MAP JAPON */}

              {mapJaponActive && (
                <>
                  <Link
                    className="flagHoka"
                    href="/sejours/parc-national-daisetsuzan"
                  >
                    <Image
                      className={`flag flagHoka ${
                        sejourHovering === "Hoka" ||
                        sejourHovering === "Parc national Daisetsuzan" ||
                        ["Hokkaïdo"].includes(sejourHovering)
                          ? "selected"
                          : ""
                      }`}
                      src={flag}
                      placeholder="blur"
                      alt="drapeau"
                      width="41"
                      height="62"
                      onMouseEnter={() => setSejourHovering("Hokkaïdo")}
                      onMouseOut={() => setSejourHovering("")}
                    />
                  </Link>
                  <Image
                    className={`flag flagAlpes ${
                      sejourHovering === "Alpes" ||
                      sejourHovering === "Mt Tsubakurodake" ||
                      sejourHovering === "Mt Yarigatake" ||
                      sejourHovering === "Mt Kitadake" ||
                      sejourHovering === "Couleurs d'automne" ||
                      [
                        "Alpes japonaises",
                        "Tokyo",
                        "Kyoto",
                        "Miyajima",
                      ].includes(sejourHovering)
                        ? "selected"
                        : ""
                    }`}
                    src={flag}
                    placeholder="blur"
                    alt="drapeau"
                    width="41"
                    height="62"
                    onClick={() => {
                      setMapJaponActive(!mapJaponActive);
                      setSejourHovering("");
                    }}
                    onMouseEnter={() => setSejourHovering("Alpes")}
                    onMouseOut={() => setSejourHovering("")}
                  />
                </>
              )}

              {/* FLAG MAP ALPES */}

              {!mapJaponActive && (
                <>
                  <Link
                    className="flagAlpes1"
                    href="/sejours/mont-tsubakurodake"
                  >
                    <Image
                      className={`flag flagAlpes1 ${
                        sejourHovering === "Mt Tsubakurodake" ? "selected" : ""
                      }`}
                      src={flag}
                      placeholder="blur"
                      alt="drapeau"
                      width="41"
                      height="62"
                      onMouseEnter={() => setSejourHovering("Mt Tsubakurodake")}
                      onMouseOut={() => setSejourHovering("")}
                    />
                  </Link>
                  <Link className="flagAlpes2" href="/sejours/mont-yarigatake">
                    <Image
                      className={`flag flagAlpes2 ${
                        sejourHovering === "Mt Yarigatake" ? "selected" : ""
                      }`}
                      src={flag}
                      placeholder="blur"
                      alt="drapeau"
                      width="41"
                      height="62"
                      onMouseEnter={() => setSejourHovering("Mt Yarigatake")}
                      onMouseOut={() => setSejourHovering("")}
                    />
                  </Link>
                  <Link className="flagAlpes3" href="/sejours/mont-kitadake">
                    <Image
                      className={`flag flagAlpes3 ${
                        sejourHovering === "Mt Kitadake" ? "selected" : ""
                      }`}
                      src={flag}
                      placeholder="blur"
                      alt="drapeau"
                      width="41"
                      height="62"
                      onMouseEnter={() => setSejourHovering("Mt Kitadake")}
                      onMouseOut={() => setSejourHovering("")}
                    />
                  </Link>
                  <Link className="flagAlpes4" href="/sejours/couleurs-automne">
                    <Image
                      className={`flag flagAlpes4 ${
                        sejourHovering === "Couleurs d'automne"
                          ? "selected"
                          : ""
                      }`}
                      src={flag}
                      placeholder="blur"
                      alt="drapeau"
                      width="41"
                      height="62"
                      onMouseEnter={() =>
                        setSejourHovering("Couleurs d'automne")
                      }
                      onMouseOut={() => setSejourHovering("")}
                    />
                  </Link>
                </>
              )}

              {/* MAP */}

              <Image
                className={`map transition map-japon ${
                  mapJaponActive ? "active" : "inactive"
                }`}
                src={mapJapon}
                placeholder="blur"
                alt="Map of Japan"
                onClick={() => {
                  if (!mapJaponActive) {
                    setMapJaponActive(!mapJaponActive);
                  }
                }}
              />
              <Image
                className={`map transition map-alpes ${
                  mapJaponActive ? "inactive" : "active"
                }`}
                src={mapAlpes}
                placeholder="blur"
                alt="Map of Japan"
                onClick={() => {
                  if (mapJaponActive) {
                    setMapJaponActive(!mapJaponActive);
                  }
                }}
              />
            </div>
            <div className="maps-news drop-shadow">
              <p className="bold">
                Vieillir c’est comme escalader une montagne. Vous êtes un peu
                essoufflé, mais la vue est bien meilleure. Ingrid Bergman
              </p>
            </div>

            {/* Left panel */}
            <div className="Accueil-destinations">
              {[
                {
                  img: miyajimaDestinationImg,
                  name: "Matsumoto",
                  to: "/sejours/mont-tsubakurodake",
                  treks: ["Mt Tsubakurodake", "Alpes", "Couleurs d'automne"],
                },
                {
                  img: alpesDestinationImg,
                  name: "Alpes japonaises",
                  to: "/sejours/mont-yarigatake",
                  treks: [
                    "Mt Tsubakurodake",
                    "Mt Yarigatake",
                    "Couleurs d'automne",
                    "Alpes",
                    "Mt Kitadake",
                  ],
                },
                {
                  img: hokaDestinationImg,
                  name: "Hokkaïdo",
                  to: "/sejours/parc-national-daisetsuzan",
                  treks: ["Parc national Daisetsuzan"],
                },
                {
                  img: tokyoDestinationImg,
                  name: "Tokyo",
                  to: "/sejours/mont-kitadake",
                  treks: [
                    "Mt Kitadake",
                    "Mt Yarigatake",
                    "Parc national Daisetsuzan",
                    "Alpes",
                    "Hokkaïdo",
                  ],
                },
                {
                  img: kyotoDestinationImg,
                  name: "Kyoto",
                  to: "/sejours/couleurs-automne",
                  treks: ["Mt Tsubakurodake", "Alpes", "Couleurs d'automne"],
                },
              ].map((destination) => (
                <Link
                  key={destination.name}
                  href={destination.to}
                  className={`Accueil-destination ${
                    sejourHovering === destination.name ||
                    destination.treks.includes(sejourHovering)
                      ? "hovering"
                      : ""
                  }`}
                >
                  <Image
                    src={destination.img}
                    alt="Photo destination"
                    placeholder="blur"
                    width={603.75}
                    height={438.92}
                    onMouseEnter={() => {
                      if (destination.name === "Hokkaïdo") {
                        setMapJaponActive(true);
                      }
                      if (destination.name.includes("Alpes")) {
                        setMapJaponActive(false);
                      }
                      setSejourHovering(destination.name);
                    }}
                    onMouseOut={() => setSejourHovering("")}
                  />
                  <p>{destination.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Accueil;
