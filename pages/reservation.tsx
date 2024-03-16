import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/assets/check.svg";
import { sejours2025 } from "../utils/sejours";
import bootsActive from "../public/assets/boots.svg";
import bootsInactive from "../public/assets/boots-inactive.svg";

type Props = {};

const Reservation: NextPageWithLayout<Props> = () => {
  return (
    <Layout title="Réservation | Orientrek">
      <section className="PageReservation">
        <div className="PageReservation-container">
          <h1>Réservation</h1>
          <p>
            Orientrek conçoit et propose des séjours innovants avec trekking au
            Japon. Chaque circuit intègre une randonnée itinérante encadrée par
            un accompagnateur en montagne français expérimenté, et ce dans
            différents massifs de l'archipel nippon.
          </p>
          <p>
            Pour la réservation, Orientrek fonctionne en partenariat avec{" "}
            <span>SERAC</span>, spécialiste des séjours en montagne. Son équipe
            répondra à toutes vos interrogations concernant l'inscription à
            votre séjour. Vous pouvez les joindre par téléphone au 04 76 86 46
            84, par mail à l'adresse contact@serac-montagne.com ou visiter leur
            site internet www.serac-montagne.com.
          </p>
          <p>
            En cliquant sur le bouton <span>S'inscrire</span> du séjour de votre
            choix vous serez redirigé vers la page d'inscription correspondant à
            ce circuit chez notre partenaire <span>SERAC</span>. Vous pourrez
            alors vous inscrire en toute confiance à votre prochain voyage.
          </p>
          <p>
            Si vous avez une interrogation sur la réservation de votre séjour,
            nous sommes présents pour vous accompagner,{" "}
            <Link href={"/contact"}>contactez-nous</Link>.
          </p>
          <Link href={"/niveaux"} className="btnEchelle drop-shadow">
            Échelle des niveaux <Image src={arrow} alt="Icône flèche" />
          </Link>
          <div className="PageReservation-sejours">
            {sejours2025.map((sejour) => (
              <Link
                href={sejour.slug}
                key={sejour.trek}
                className="drop-shadow"
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
                    <p>{sejour.date}</p>
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
              Échelle des niveaux <Image src={arrow} alt="Icône flèche" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
