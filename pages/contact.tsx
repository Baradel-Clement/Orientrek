import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

type Props = {};

const Contact: NextPageWithLayout<Props> = () => (
  <Layout title="Contact | Orientrek">
    <h1>Welcome to Contact | Orientrek 👋</h1>
    <p>Contactez moi pour plus d'info ou un séjour sur-mesure !</p>

    <ContactForm />
  </Layout>
);

export default Contact;