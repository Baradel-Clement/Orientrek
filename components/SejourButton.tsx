import Link from "next/link";
import React from "react";
import { useHomeStateContext } from "../context/Home";
import Image from "next/image";
import bootsActive from "../public/assets/boots.svg";
import bootsInactive from "../public/assets/boots-inactive.svg";
import sejourImg from "../public/assets/sejourimg.png";

const SejourButton = ({ mode, sejour }) => {
  const { displayNavSejours, setSejourHovering } = useHomeStateContext();
  return (
    <Link
      key={sejour.trek}
      href={sejour.slug}
      className={`sejour transition hover-shadow transition ${sejour.trek} ${
        displayNavSejours ? "active" : ""
      }`}
      onMouseEnter={() => setSejourHovering(sejour.trek)}
      onMouseOut={() => setSejourHovering('')}
    >
      <Image
        src={sejourImg}
        alt="image sejour"
        width={107.6}
        height={68.91}
        placeholder="blur"
      />
      <div className="sejour-desc">
        <p className="white XXS bold">
          {sejour.trek}
        </p>
        <p className="white XXS bold">{sejour.date}</p>
        <div className="sejour-difficulty">
          {sejour.nbBootsActive.map(() => (
            <Image
              src={bootsActive}
              alt="bottes"
              width={18.66}
              height={20.48}
            />
          ))}
          {sejour.nbBootsInactive.map(() => (
            <Image
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
