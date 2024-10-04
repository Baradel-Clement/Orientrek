import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/assets/check.svg";
import { sejours2025 } from "../utils/sejours";
import bootsActive from "../public/assets/boots.svg";
import bootsInactive from "../public/assets/boots-inactive.svg";
import { NextSeo } from "next-seo";
import { useState } from "react";
import checkIcon from "../public/assets/check.svg";
import ContactForm from "../components/ContactForm";

type Props = {};

const Reservation: NextPageWithLayout<Props> = () => {
  const [displayReservationForm, setDisplayReservationForm] = useState({
    display: false,
    sejour: "",
  });
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
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <Layout title="Réservation | Orientrek">
        <section className="PageReservation">
          <div className="PageReservation-container">
            <h1>Réservation</h1>
            {!displayReservationForm.display && (
              <>
                <p>
                  Orientrek conçoit et propose des séjours innovants avec
                  trekking au Japon. Chaque circuit intègre une randonnée
                  itinérante encadrée par un accompagnateur en montagne français
                  expérimenté, et ce dans différents massifs de l'archipel
                  nippon.
                </p>

                <p>
                  Si vous avez la moindre question sur la réservation de votre
                  séjour, nous sommes présents pour vous accompagner et vous
                  remercions de <Link href={"/contact"}>nous contacter</Link>.
                </p>
                <p>
                  Pour réserver votre séjour, cliquez sur le bouton{" "}
                  <span>S'inscrire</span> à droite du circuit correspondant.
                </p>
              </>
            )}
            {!displayReservationForm.display && (
              <Link href={"/niveaux"} className="btnEchelle drop-shadow">
                Niveaux des treks
              </Link>
            )}
            {!displayReservationForm.display && (
              <Link
                href={"/conditions-de-vente"}
                className="btnEchelle drop-shadow reversed"
              >
                Conditions de Vente
              </Link>
            )}

            <div
              className={`PageReservation-sejours ${
                displayReservationForm.display ? "displayNone" : ""
              }`}
            >
              {!displayReservationForm.display &&
                sejours2025.map((sejour, i) => (
                  <div
                    key={sejour.trek}
                    className="drop-shadow sejour"
                    onClick={() =>
                      setDisplayReservationForm({
                        display: true,
                        sejour: sejour.trek,
                      })
                    }
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
                  </div>
                ))}

              <div className="PageReservation-sejours-buttons">
                {!displayReservationForm.display && (
                  <Link href={"/niveaux"} className="btnEchelle drop-shadow">
                    Niveaux des treks
                  </Link>
                )}
                {!displayReservationForm.display && (
                  <Link
                    href={"/conditions-de-vente"}
                    className="btnEchelle drop-shadow reversed"
                  >
                    Conditions de vente
                  </Link>
                )}
              </div>
            </div>
            {/* 
            
            
            */}

            {displayReservationForm.display && (
              <button
                className="drop-shadow backButton"
                onClick={() =>
                  setDisplayReservationForm({ display: false, sejour: "" })
                }
              >
                <Image src={checkIcon} alt="checkIcon" />
                <p className="bold">Retour</p>
              </button>
            )}

            {displayReservationForm.display && (
              <>
                <p>
                  Félicitations ! Orientrek vous remercie d’avoir choisi le
                  séjour{" "}
                  <span>
                    {
                      sejours2025.find(
                        (e) => e.trek === displayReservationForm.sejour
                      ).trek
                    }{" "}
                    {
                      sejours2025.find(
                        (e) => e.trek === displayReservationForm.sejour
                      ).date
                    } 2025
                  </span>
                </p>

                <p>
                  Veuillez compléter le formulaire ci-dessous et notre équipe
                  vous transmettra l’ensemble des documents nécessaires à votre
                  inscription.
                </p>
              </>
            )}
            {displayReservationForm.display && (
              <ContactForm
                reservation={{
                  isReservation: true,
                  sejour: displayReservationForm.sejour,
                  date: sejours2025.find(
                    (e) => e.trek === displayReservationForm.sejour
                  ).date,
                }}
              />
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Reservation;
