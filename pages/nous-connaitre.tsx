import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import Link from "next/link";
import samuelImg from "../public/assets/samuel.png";
import samuelImgDesktop from "../public/assets/samuel-desktop.png";
import Image from "next/image";
import { NextSeo } from "next-seo";

type Props = {};

const Nous: NextPageWithLayout<Props> = () => {
  return (
    <>
      <NextSeo
        title="Nous Connaître - Orientrek"
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
      />
      <Layout title="Nous Connaître | Orientrek">
        <section className="PageNous">
          <div className="PageNous-container">
            <h1>Nous connaître</h1>
            <p>
              Orientrek a été imaginé par l'accompagnateur en montagne Samuel
              Bernard, diplômé DE Alpinisme-AMM. Depuis 2010, Samuel arpente les
              sentiers du Japon : Mt Fuji, Alpes japonaises, chemins de Kumano
              Kodo, parc national Iriomote (Okinawa), parc national Daisetsuzan
              (Hokkaïdo),...
            </p>
            <p>
              Par sa connaissance fine du terrain et de la culture japonaise,
              Orientrek développe des séjours alliant la randonnée itinérante et
              la découverte culturelle du Japon. Lors de votre voyage, vous
              serez notamment immergé au cœur de la capitale japonaise.
              <br />
              <br />
              Vous découvrirez également des lieux moins connus de l'archipel
              selon votre séjour.
            </p>
            <p>
              Une destination a retenu votre attention ? Rendez-vous sur notre
              page <Link href={"/"}>accueil</Link> et choisissez votre séjour
              pour découvrir son contenu au jour le jour.
            </p>
            <p>
              Vous souhaitez en savoir plus sur un séjour ou simplement nous
              adresser un message, suivez le lien{" "}
              <Link href={"/contact"}>nous contacter.</Link> <br />
              <br />
              Vous êtes prêt à partir ? Pensez à vérifier le{" "}
              <Link href={"/niveaux"}>niveau de votre trek</Link> ici avant de{" "}
              <Link href={"/reservation"}>réserver.</Link>
            </p>
            <Image
              src={samuelImg}
              alt="Photo de Samuel bernard"
              className="mobile"
            />
            <p className="quote mobile">
              Venez tenter l'aventure à mes côtés pour réaliser un trek dans les
              montagnes japonaises. Je vous accompagne et partage avec vous mon
              expérience en toute sécurité.
            </p>
            <p className="quote mobile">Samuel Bernard</p>
            <div className="quote-desktop drop-shadow">
              <div className="quote-desktop-desc">
                <p>
                  Venez tenter l'aventure à mes côtés pour réaliser un trek dans
                  les montagnes japonaises. Je vous accompagne et partage avec
                  vous mon expérience en toute sécurité.
                </p>
                <p>Samuel Bernard</p>
              </div>
              <Image src={samuelImgDesktop} alt="Photo de Samuel bernard" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Nous;
