import React, { useCallback, useEffect, useState } from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/Layout";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import chevronRight from "../../public/assets/controller-chevron-right.svg";
import chevronLeft from "../../public/assets/controller-chevron-left.svg";
import checkIcon from "../../public/assets/check.svg";
import downloadIcon from "../../public/assets/download.svg";
import Link from "next/link";
import bootsActive from "../../public/assets/boots.svg";
import bootsInactive from "../../public/assets/boots-inactive.svg";
import phrise from "../../public/assets/phrise.svg";
import TextTransition, { presets } from "react-text-transition";

type Props = {
  currentSejour: {
    trek: string;
    slug: string;
    date: string;
    price: number;
    nbBootsActive: number[];
    nbBootsInactive: number[];
    groupe: string;
    days: {
      number: number;
      description: string;
    }[];
  };
};

const OPTIONS: EmblaOptionsType = { loop: true };

const Séjour: NextPageWithLayout<Props> = ({ currentSejour }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  console.log(currentSejour.days[0].description.length);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApiDesktop || !emblaThumbsApi) return;
      emblaApiDesktop.scrollTo(index);
    },
    [emblaApiDesktop, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApiDesktop || !emblaThumbsApi) return;
    setSelectedIndex(emblaApiDesktop.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApiDesktop.selectedScrollSnap());
  }, [emblaApiDesktop, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApiDesktop) return;
    onSelect();
    emblaApiDesktop.on("select", onSelect);
    emblaApiDesktop.on("reInit", onSelect);
  }, [emblaApiDesktop, onSelect]);
  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  return (
    <Layout title={`Trek au ${currentSejour.trek}`}>
      <div className="PageSejour">
        {/* MOBILE */}
        <h1 className="bold title-mobile">{currentSejour.trek}</h1>
        <section className="embla-mobile">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {currentSejour.days.map((day) => (
                <div className="embla__slide" key={day.number}>
                  <Image
                    src={`/assets/${currentSejour.slug}/${day.number}.png`}
                    alt="Map japon"
                    fill={true}
                  />
                  <div className="slide-description">
                    <p className="day bold">JOUR {day.number}</p>
                    <p className="desc">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="controllers">
            <button onClick={scrollPrev}>
              <Image src={chevronLeft} alt="chevron" /> <p>Jour précédent</p>
            </button>
            <button onClick={scrollNext}>
              <p>Jour suivant</p> <Image src={chevronRight} alt="chevron" />
            </button>
          </div>
          <div className="bottom-buttons">
            <button>
              <p>Fiche technique</p>
              <Image src={downloadIcon} alt="downloadIcon" />
            </button>
            <Link href="/reservation">
              <p>Réservation</p> <Image src={checkIcon} alt="checkIcon" />
            </Link>
          </div>
        </section>

        {/* DESKTOP */}
        <section className="sejour-desktop">
          <div className="sejour-header">
            <div className="sejour-header-left">
              <div className="embla-desktop">
                <div className="embla-desktop__viewport" ref={emblaRefDesktop}>
                  <div className="embla__container">
                    {currentSejour.days.map((day) => (
                      <div className="embla__slide" key={day.number}>
                        <Image
                          src={`/assets/${currentSejour.slug}/${day.number}-desktop.png`}
                          alt="Map japon"
                          fill={true}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="bold drop-shadow">Votre voyage jour par jour :</p>
            </div>
            <div className="sejour-header-right">
              <h1 className="bold title">{currentSejour.trek}</h1>
              <div className="sejour-header-infos">
                <div className="sejour-header-info drop-shadow">
                  <p className="bold">Dates :</p>
                  <p className="bold">{currentSejour.date}</p>
                </div>
                <div className="sejour-header-info drop-shadow">
                  <p className="bold">Prix :</p>
                  <p className="bold">{currentSejour.price} €</p>
                </div>
              </div>
              <div className="sejour-header-infos">
                <div className="sejour-header-info drop-shadow">
                  <p className="bold">Taille du groupe :</p>
                  <p className="bold">{currentSejour.groupe}</p>
                </div>
                <div className="sejour-header-info drop-shadow">
                  <p className="bold">Difficulté :</p>
                  <div>
                    {currentSejour.nbBootsActive.map((index) => (
                      <Image
                        key={index}
                        src={bootsActive}
                        alt="bottes"
                        width={18.66}
                        height={20.48}
                      />
                    ))}
                    {currentSejour.nbBootsInactive.map((index) => (
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
              </div>
              {
                <div className="sejour-header-descDay drop-shadow">
                  <TextTransition springConfig={presets.gentle}>
                    Déscription du jour {selectedIndex + 1}
                  </TextTransition>
                  <TextTransition springConfig={presets.gentle}>
                    {currentSejour.days[selectedIndex].description}
                  </TextTransition>
                </div>
              }
            </div>
          </div>
          <div className="sejour-phrise">
            <Image src={phrise} alt="phrise" />
            <div className="sejour-phrise-thumbs" ref={emblaThumbsRef}>
              {currentSejour.days.map((day) => (
                <div
                  className={`sejour-phrise-thumb
                  ${selectedIndex === day.number - 1 ? "selected" : ""}`}
                  onClick={() => onThumbClick(day.number - 1)}
                >
                  <p>J {day.number}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sejour-buttons">
            <button>
              <p>Fiche technique</p>
              <Image src={downloadIcon} alt="downloadIcon" />
            </button>
            <Link href="/reservation">
              <p>Réservation</p> <Image src={checkIcon} alt="checkIcon" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = (await import("../../utils/sejours")).sejours2025;

  const currentSejour = data.find(
    (sejour) => sejour.slug === context.params.name
  );

  return { props: { currentSejour } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { name: "mont-tsubakurodake" } },
      { params: { name: "mont-yarigatake" } },
      { params: { name: "parc-national-daisetsuzan" } },
      { params: { name: "mont-kitadake" } },
      { params: { name: "couleurs-automne" } },
    ],
    fallback: false, // false or "blocking"
  };
};

export default Séjour;
