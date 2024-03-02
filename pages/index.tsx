import Layout from "../components/Layout";
import { useHomeStateContext } from "../context/Home";
import { NextPageWithLayout } from "./_app";

type Props = {};

const Accueil: NextPageWithLayout<Props> = () => {
  const {
    setDisplayNavList,
    setDisplayNavSejours,
  } = useHomeStateContext();
  return (
    <Layout title="Accueil | Orientrek">
      <div className="Accueil">
        <button onClick={() => {
          setDisplayNavList(true);
          setDisplayNavSejours(true);
        }}>Nos treks en 2025</button>
      </div>
    </Layout>
  );
};

export default Accueil;
