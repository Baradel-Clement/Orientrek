import Link from "next/link";
import React from "react";
import { useHomeStateContext } from "../context/Home";
import Image from "next/image";
import bootsActive from "../public/assets/boots.svg";
import bootsInactive from "../public/assets/boots-inactive.svg";
import sejourImg from "../public/assets/mont-tsubakurodake/vignette.png";

const SejourButton = ({ mode, sejour }) => {
  const {
    displayNavSejours,
    sejourHovering,
    setSejourHovering,
    setDisplayNavList,
    setDisplayNavSejours,
    displayNavList,
    setDisplayNestedSejours
  } = useHomeStateContext();

  return (
    <Link
      key={sejour.trek}
      href={sejour.slug}
      className={`sejour transition hover-shadow transition ${sejour.trek} ${
        displayNavSejours ? "active" : ""
      } ${
        mode === "homepage" &&
        (sejourHovering === sejour.region ||
          sejourHovering === sejour.trek ||
          sejour.destination.includes(sejourHovering))
          ? "hovering"
          : ""
      }`}
      onMouseEnter={() => setSejourHovering(sejour.trek)}
      onMouseOut={() => setSejourHovering("")}
      onClick={() => {
        setDisplayNestedSejours(false);
        if (displayNavList) {
          setDisplayNavList(false);
          setDisplayNavSejours(false);
        }
      }}
    >
      <Image
        src={`${sejour.urlImage}/vignette.png`}
        alt="image sejour"
        width={568.79}
        height={374.55}
      />
      <div className="sejour-desc">
        <p className="white XXS bold">{sejour.trek}</p>
        <p className="white XXS bold">{sejour.date}</p>
        <div className="sejour-difficulty">
          {sejour.nbBootsActive.map((index) => (
            <Image
              key={index}
              src={bootsActive}
              alt="bottes"
              width={18.66}
              height={20.48}
            />
          ))}
          {sejour.nbBootsInactive.map((index) => (
            <Image
              key={index}
              src={bootsInactive}
              alt="bottes"
              width={18.66}
              height={20.48}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SejourButton;
