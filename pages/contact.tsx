import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

type Props = {};

const Contact: NextPageWithLayout<Props> = () => (
  <Layout title="Contact | Orientrek">
    <section className="PageContact">
      <div className="PageContact-instructions">
        <h1>Nous contacter</h1>
        <p>Vous avez 3 solutions pour échanger avec Orientrek :</p>
        <p>
          Nous téléphoner au : <span className="underline">06 59 37 37 03</span>
        </p>
        <p>
          Nous envoyer un email à : <a className="underline" href="mailto:contact@orientrek.com">contact@orientrek.com</a>
        </p>
        <p className="underline">Utiliser le formulaire de contact :</p>
      </div>
      <ContactForm />
    </section>
  </Layout>
);

export default Contact;
