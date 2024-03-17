import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import Link from "next/link";
import Image from "next/image";
import bootsActive from "../public/assets/boots.svg";
import bootsInactive from "../public/assets/boots-inactive.svg";
import { EmblaOptionsType } from "embla-carousel";
import { useCallback } from "react";
import niveaux from "../utils/niveaux";
import chevronRight from "../public/assets/controller-chevron-right.svg";
import chevronLeft from "../public/assets/controller-chevron-left.svg";
import useEmblaCarousel from "embla-carousel-react";
import checkIcon from "../public/assets/check.svg";
import { useRouter } from "next/router";

type Props = {};
const OPTIONS: EmblaOptionsType = { loop: true };

const Reservation: NextPageWithLayout<Props> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const router = useRouter();
  return (
    <Layout title="Niveaux des treks | Orientrek">
      <div className="PageNiveaux">
        <h1 className="bold title-mobile">Niveau</h1>

        {/* MOBILE */}
        <section className="embla-mobile">
          <span className="shadow"></span>
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {niveaux.map((niveau) => (
                <div className="embla__slide" key={niveau.title}>
                  <div className="slide-header">
                    <p>{niveau.title}</p>
                    <div>
                      {niveau.nbBootsActive.map((index) => (
                        <Image
                          key={index}
                          src={bootsActive}
                          alt="bottes"
                          width={18.66}
                          height={20.48}
                        />
                      ))}
                      {niveau.nbBootsInactive.map((index) => (
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
                  <p className="desc bold">{niveau.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="controllers">
            <button onClick={scrollPrev}>
              <Image src={chevronLeft} alt="chevron" />
              <p>Plus facile</p>
            </button>
            <button onClick={scrollNext}>
              <p>Plus dur</p> <Image src={chevronRight} alt="chevron" />
            </button>
          </div>
        </section>

        {/* DESKTOP */}
        <section className="niveaux-container">
          {niveaux.map((niveau, i) => (
            <div key={niveau.title} className={`niveau-${i + 1}`}>
              <div>
                {niveau.nbBootsActive.map((index) => (
                  <Image
                    key={index}
                    src={bootsActive}
                    alt="bottes"
                    width={18.66}
                    height={20.48}
                  />
                ))}
                {niveau.nbBootsInactive.map((index) => (
                  <Image
                    key={index}
                    src={bootsInactive}
                    alt="bottes"
                    width={18.66}
                    height={20.48}
                  />
                ))}
              </div>
              <p className="bold title">{niveau.title}</p>
              <p className="bold desc">{niveau.description}</p>
            </div>
          ))}
        </section>
        <button className="drop-shadow" onClick={() => router.back()}>
          <Image src={checkIcon} alt="checkIcon" />
          <p className="bold">Retour en arrière</p>
        </button>
      </div>
    </Layout>
  );
};

export default Reservation;
