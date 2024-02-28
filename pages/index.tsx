import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

type Props = {};

const Accueil: NextPageWithLayout<Props> = () => (
  <Layout title="Accueil | Orientrek">
    <h1>Welcome to Accueil | Orientrek 👋</h1>
  </Layout>
);

export default Accueil;
