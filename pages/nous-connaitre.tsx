import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import Link from "next/link";
import samuelImg from "../public/assets/samuel.png";
import Image from "next/image";

type Props = {};

const Nous: NextPageWithLayout<Props> = () => {
  return (
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
            la découverte culturelle du Japon. Lors de votre voyage, vous serez
            notamment immergé au cœur des cités historiques de Tokyo et Kyoto.
            Vous découvrirez également des lieux moins connus de l'archipel
            selon votre séjour.
          </p>
          <p>
            Une destination a retenu votre attention ? Rendez-vous sur notre
            page accueil et choisissez votre séjour pour découvrir son contenu
            au jour le jour.
          </p>
          <p>
            Vous souhaitez en savoir plus sur un séjour ou simplement nous
            adresser un message, suivez le lien nous contacter. Vous êtes prêt à
            partir ?
            <Link href={"/difficultes"}>
              Pensez à vérifier le niveau de votre trek ici avant de réserver.
            </Link>
          </p>
          <Image src={samuelImg} alt="image sejour" />
          <p>
            «Venez tenter l'aventure à mes côtés pour réaliser un trek dans les
            montagnes Japonaises. Je vous accompagne et partage avec vous mon
            expérience en toute sécurité. »
          </p>
          <p>Samuel Bernard</p>
        </div>
      </section>
    </Layout>
  );
};

export default Nous;
