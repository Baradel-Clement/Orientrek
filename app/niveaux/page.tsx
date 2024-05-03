import Layout from "../../components/Layout";
import { EmblaOptionsType } from "embla-carousel";
import niveaux from "../../utils/niveaux";
import SliderNiveaux from "./slider";

type Props = {};
const OPTIONS: EmblaOptionsType = { loop: true };

export default function Niveaux() {
  return (
    <Layout title="Niveaux des treks | Orientrek">
      <SliderNiveaux niveaux={niveaux} />
    </Layout>
  );
};
