import Image from "next/image";
import Layout from "../components/Layout";
import { useHomeStateContext } from "../context/Home";
import { NextPageWithLayout } from "./_app";
import mapJapon from "../public/assets/map-japon.png";
import mapJaponDesktop from "../public/assets/map-japon-desktop.png";
import mapFr from "../public/assets/map-fr.png";
import flag from "../public/assets/flag.png";
import { useEffect, useState } from "react";

type Props = {};

const Accueil: NextPageWithLayout<Props> = () => {
  const {
    setDisplayNavList,
    setDisplayNavSejours,
    sejourHovering,
    setSejourHovering,
  } = useHomeStateContext();
  const [mapJaponActive, setMapJaponActive] = useState(true);

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
          <div className="maps-hint">
            <p className="bold">
              Survolez la carte et découvrez votre prochain trek au Japon
            </p>
          </div>
          <div className="maps-container">
            {/* FLAGS */}

            <Image
              className={`flag flagHoka ${
                sejourHovering === "Hoka" ||
                sejourHovering === "Parc national Daisetsuzan"
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
                sejourHovering === "Couleurs d'automne"
                  ? "selected"
                  : ""
              }`}
              src={flag}
              alt="drapeau"
              width="40"
              height="40"
              onClick={() => setMapJaponActive(!mapJaponActive)}
              onMouseEnter={() => setSejourHovering("Alpes")}
              onMouseOut={() => setSejourHovering("")}
            />

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
            <div className="Accueil-destination"></div>
            <div className="Accueil-destination"></div>
            <div className="Accueil-destination"></div>
            <div className="Accueil-destination"></div>
            <div className="Accueil-destination"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accueil;
