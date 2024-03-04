import Image from "next/image";
import Layout from "../components/Layout";
import { useHomeStateContext } from "../context/Home";
import { NextPageWithLayout } from "./_app";
import mapJapon from "../public/assets/map-japon.png";
import mapFr from "../public/assets/map-fr.png";
import flag from "../public/assets/flag.png";
import { useState } from "react";

type Props = {};

const Accueil: NextPageWithLayout<Props> = () => {
  const { setDisplayNavList, setDisplayNavSejours } = useHomeStateContext();
  const [mapJaponActive, setMapJaponActive] = useState(true)
  return (
    <Layout title="Accueil | Orientrek">
      <div className="Accueil">
        <div className="maps-container">
          <Image
            className={`map ${mapJaponActive ? 'active' : 'inactive'}`}
            src={mapJapon}
            alt="carte du japon"
            width="310"
            height="306"
          />
          <Image
            className={`map ${!mapJaponActive ? 'active' : 'inactive'}`}
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
          className="bold"
        >
          Nos treks en 2025
        </button>
      </div>
    </Layout>
  );
};

export default Accueil;
