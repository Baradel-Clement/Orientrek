import Image from "next/image";
import Layout from "../components/Layout";
import { useHomeStateContext } from "../context/Home";
import { NextPageWithLayout } from "./_app";
import mapJapon from "../public/assets/map-japon.png";
import mapJaponDesktop from "../public/assets/map-japon-desktop.png";
import mapFr from "../public/assets/map-fr.png";
import flag from "../public/assets/flag.png";
import { useEffect, useState } from "react";
import { sejours2025 } from "../utils/sejours";
import { sejours2026 } from "../utils/sejours";
import SejourButton from "../components/SejourButton";
import destinationImg from "../public/assets/destinationimg.png";
import Link from "next/link";

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

  /* useEffect(() => {
    if (sejourHovering === '')
  }, [sejourHovering]) */
  return (
    <Layout title="Accueil | Orientrek">
      <div className="Accueil">
        {/* MOBILE SECTION */}
        <div className="maps-container-mobile">
          <Image
            className={`map ${mapJaponActive ? "active" : "inactive"}`}
            src={mapJapon}
            alt="carte du japon"
            width="310"
            height="306"
          />
          <Image
            className={`map ${!mapJaponActive ? "active" : "inactive"}`}
            src={mapFr}
            alt="carte du japon"
            width="310"
            height="306"
          />
          <Image
            className="flag flagHoka"
            src={flag}
            alt="drapeau"
            width="40"
            height="40"
            onClick={() => {
              setDisplayNavList(true);
              setDisplayNavSejours(true);
            }}
          />
          <Image
            className="flag flagAlpes"
            src={flag}
            alt="drapeau"
            width="40"
            height="40"
            onClick={() => setMapJaponActive(!mapJaponActive)}
          />
        </div>
        <button
          onClick={() => {
            setDisplayNavList(true);
            setDisplayNavSejours(true);
          }}
          className="bold btn-sejours-mobile"
        >
          Nos séjours en 2025
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
                <SejourButton mode="homepage" sejour={sejour} />
              ))}
            {/* {sejoursYear === 2026 &&
              sejours2026.map((sejour) => (
                <SejourButton mode="homepage" sejour={sejour} />
              ))} */}
          </div>
          <div className="maps-hint">
            <p className="bold">
              Survolez la carte et découvrez votre prochain trek au Japon
            </p>
          </div>
          <div className="maps-container">
            {/* FLAGS */}

            {/* FLAG MAP JAPON */}

            {mapJaponActive && (
              <>
                <Image
                  className={`flag flagHoka ${
                    sejourHovering === "Hoka" ||
                    sejourHovering === "Parc national Daisetsuzan" ||
                    ["Hokkaïdo"].includes(sejourHovering)
                      ? "selected"
                      : ""
                  }`}
                  src={flag}
                  alt="drapeau"
                  width="40"
                  height="40"
                  onClick={() => {
                    setDisplayNavList(true);
                    setDisplayNavSejours(true);
                  }}
                  onMouseEnter={() => setSejourHovering("Hoka")}
                  onMouseOut={() => setSejourHovering("")}
                />
                <Image
                  className={`flag flagAlpes ${
                    sejourHovering === "Alpes" ||
                    sejourHovering === "Mt Tsubakurodake" ||
                    sejourHovering === "Mt Yarigatake" ||
                    sejourHovering === "Mt Kitadake" ||
                    sejourHovering === "Couleurs d'automne" || [
                      "Alpes Japonaises",
                      "Tokyo",
                      "Kyoto",
                      "Miyajima",
                    ].includes(sejourHovering)
                      ? "selected"
                      : ""
                  }`}
                  src={flag}
                  alt="drapeau"
                  width="40"
                  height="40"
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
                <Image
                  className={`flag flagAlpes1 ${
                    sejourHovering === "Mt Tsubakurodake" ? "selected" : ""
                  }`}
                  src={flag}
                  alt="drapeau"
                  width="40"
                  height="40"
                  onClick={() => {
                    setDisplayNavList(true);
                    setDisplayNavSejours(true);
                  }}
                  onMouseEnter={() => setSejourHovering("Mt Tsubakurodake")}
                  onMouseOut={() => setSejourHovering("")}
                />
                <Image
                  className={`flag flagAlpes2 ${
                    sejourHovering === "Mt Yarigatake" ? "selected" : ""
                  }`}
                  src={flag}
                  alt="drapeau"
                  width="40"
                  height="40"
                  onClick={() => {
                    setMapJaponActive(!mapJaponActive);
                    setSejourHovering("");
                  }}
                  onMouseEnter={() => setSejourHovering("Mt Yarigatake")}
                  onMouseOut={() => setSejourHovering("")}
                />
                <Image
                  className={`flag flagAlpes3 ${
                    sejourHovering === "Mt Kitadake" ? "selected" : ""
                  }`}
                  src={flag}
                  alt="drapeau"
                  width="40"
                  height="40"
                  onClick={() => {
                    setMapJaponActive(!mapJaponActive);
                    setSejourHovering("");
                  }}
                  onMouseEnter={() => setSejourHovering("Mt Kitadake")}
                  onMouseOut={() => setSejourHovering("")}
                />
                <Image
                  className={`flag flagAlpes4 ${
                    sejourHovering === "Couleurs d'automne" ? "selected" : ""
                  }`}
                  src={flag}
                  alt="drapeau"
                  width="40"
                  height="40"
                  onClick={() => {
                    setMapJaponActive(!mapJaponActive);
                    setSejourHovering("");
                  }}
                  onMouseEnter={() => setSejourHovering("Couleurs d'automne")}
                  onMouseOut={() => setSejourHovering("")}
                />
              </>
            )}

            {/* MAP */}

            <Image
              className={`map transition ${
                mapJaponActive ? "active" : "inactive"
              }`}
              src={mapJaponDesktop}
              alt="Map of Japan"
              sizes="100vw"
              onClick={() => {
                if (!mapJaponActive) {
                  setMapJaponActive(!mapJaponActive);
                }
              }}
            />
            <Image
              className={`map transition ${
                mapJaponActive ? "inactive" : "active"
              }`}
              src={mapFr}
              alt="Map of Japan"
              sizes="100vw"
              onClick={() => {
                if (mapJaponActive) {
                  setMapJaponActive(!mapJaponActive);
                }
              }}
            />
          </div>
          <div className="maps-news drop-shadow">
            <p className="bold XS">
              Venez rendre visite à l'équipe ORIENTREK au SALON DU RANDONNEUR à
              LYON les 22,23 et 24 mars 2024. Nous vous accueillerons sur le
              stand JAP007 !!
            </p>
          </div>

          {/* Left panel */}
          <div className="Accueil-destinations">
            {[
              {
                img: destinationImg,
                name: "Hokkaïdo",
                to: "/",
                treks: ["Mt Tsubakurodake"],
              },
              {
                img: destinationImg,
                name: "Alpes Japonaises",
                to: "/",
                treks: ["Mt Yarigatake"],
              },
              {
                img: destinationImg,
                name: "Tokyo",
                to: "/",
                treks: ["Parc national Daisetsuzan"],
              },
              {
                img: destinationImg,
                name: "Kyoto",
                to: "/",
                treks: ["Mt Kitadake"],
              },
              {
                img: destinationImg,
                name: "Miyajima",
                to: "/",
                treks: ["Couleurs d'automne"],
              },
            ].map((destination) => (
              <Link
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
                  onMouseEnter={() => setSejourHovering(destination.name)}
                  onMouseOut={() => setSejourHovering("")}
                />
                <p>{destination.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accueil;
