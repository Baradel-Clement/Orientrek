import { NextSeo } from "next-seo";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

type Props = {};

const Contact: NextPageWithLayout<Props> = () => (
  <>
    <NextSeo
      title="Contact - Orientrek"
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
    <Layout title="Contact | Orientrek">
      <section className="PageContact">
        <div className="PageContact-instructions">
          <h1>Nous contacter</h1>
          <p>Trois solutions pour échanger avec Orientrek :</p>
          <p>
            Nous téléphoner au : <span>04 81 91 31 18</span>
          </p>
          <p>
            Nous envoyer un email à :{" "}
            <a className="underline" href="mailto:contact@orientrek.com">
              contact@orientrek.com
            </a>
          </p>
          <p>Utiliser le formulaire de contact :</p>
        </div>
        <ContactForm />
      </section>
    </Layout>
  </>
);

export default Contact;
