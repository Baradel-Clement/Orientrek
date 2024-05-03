"use client"

import Image from "next/image";
import bootsActive from "../../public/assets/boots.svg";
import bootsInactive from "../../public/assets/boots-inactive.svg";
import { EmblaOptionsType } from "embla-carousel";
import { useCallback } from "react";
import plusIcon from "../../public/assets/plus.png";
import minusIcon from "../../public/assets/minus.png";
import useEmblaCarousel from "embla-carousel-react";
import checkIcon from "../../public/assets/check.svg";
import { useRouter } from "next/navigation";


const OPTIONS: EmblaOptionsType = { loop: true };

const SliderNiveaux = ({ niveaux }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const router = useRouter();
  if (!niveaux) return null;
  return (
    <>
      <div className="PageNiveaux">
        <h1 className="bold title-mobile">Niveaux des treks</h1>

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
                        />
                      ))}
                      {niveau.nbBootsInactive.map((index) => (
                        <Image
                          key={index}
                          src={bootsInactive}
                          alt="bottes"
                          width={18.66}
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
              <Image src={minusIcon} alt="chevron" />
              <p>Niveau</p>
            </button>
            <button onClick={scrollNext}>
              <p>Niveau</p> <Image src={plusIcon} alt="chevron" />
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
                  />
                ))}
                {niveau.nbBootsInactive.map((index) => (
                  <Image
                    key={index}
                    src={bootsInactive}
                    alt="bottes"
                    width={18.66}
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
          <p className="bold">Retour</p>
        </button>
      </div>
    </>
  )
}

export default SliderNiveaux;