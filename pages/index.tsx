import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

type Props = {};

const Accueil: NextPageWithLayout<Props> = () => (
  <Layout title="Accueil | Orientrek">
    <div className="Accueil" />
  </Layout>
);

export default Accueil;
