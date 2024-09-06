import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/assets/check.svg";
import { sejours2025 } from "../utils/sejours";
import bootsActive from "../public/assets/boots.svg";
import bootsInactive from "../public/assets/boots-inactive.svg";
import { NextSeo } from "next-seo";

type Props = {};

const Reservation: NextPageWithLayout<Props> = () => {
  return (
    <>
      <NextSeo
        title="Réservation - Orientrek"
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
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />
      <Layout title="Réservation | Orientrek">
        <section className="PageReservation">
          <div className="PageReservation-container">
            <h1>Réservation</h1>
            <p>
              Orientrek conçoit et propose des séjours innovants avec trekking au Japon. Chaque circuit intègre une randonnée itinérante encadrée par un accompagnateur en montagne français expérimenté, et ce dans différents massifs de l'archipel nippon.
            </p>

            <p>
              Si vous avez la moindre question sur la réservation de votre séjour, nous sommes présents pour vous accompagner et vous remercions de <Link href={"/contact"}>nous contacter</Link>.
            </p>
            <p>
              Pour réserver votre séjour, cliquez sur le bouton <span>S'inscrire</span> à droite du circuit correspondant.
            </p>
            <Link href={"/niveaux"} className="btnEchelle drop-shadow">
              Niveaux des treks <Image src={arrow} alt="Icône flèche" />
            </Link>
            <div className="PageReservation-sejours">
              {sejours2025.map((sejour, i) => (
                <Link
                  href={sejours2025[i].serac}
                  key={sejour.trek}
                  className="drop-shadow"
                  target="_blank"
                >
                  <Image
                    src={`${sejour.urlImage}/vignette.png`}
                    alt="image sejour"
                    width={568.79}
                    height={374.55}
                  />
                  <div className="sejour-infos">
                    <div className="sejour-desc">
                      <p>{sejour.trek}</p>
                      <p>{sejour.date} 2025</p>
                    </div>
                    <div className="sejour-bottom">
                      <div>
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
                      <p>S'inscrire</p>
                    </div>
                  </div>
                </Link>
              ))}

              <Link href={"/niveaux"} className="btnEchelle drop-shadow">
                Niveaux des treks <Image src={arrow} alt="Icône flèche" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Reservation;
