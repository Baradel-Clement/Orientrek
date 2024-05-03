import React from "react";
import Layout from "../../../components/Layout";
import { EmblaOptionsType } from "embla-carousel";
import SliderSejour from "./slider";

export const dynamicParams = false;

interface SejourPageProps {
  params: { name: string };
}

export async function generateStaticParams() {
  return [
    { name: "mont-tsubakurodake" },
    { name: "mont-yarigatake" },
    { name: "parc-national-daisetsuzan" },
    { name: "mont-kitadake" },
    { name: "couleurs-automne" },
  ];
}

async function getSejour(name: string) {
  const data = (await import("../../../utils/sejours")).sejours2025;

  const currentSejour = data.find(
    (sejour) => sejour.slug === `/sejours/${name}`
  );

  return currentSejour;
}


type Props = {
  currentSejour?: {
    trek: string;
    slug: string;
    date: string;
    price: number;
    nbBootsActive: number[];
    nbBootsInactive: number[];
    groupe: string;
    urlImage: string;
    days: {
      range: string;
      number: number;
      description: string;
    }[];
  };
};

type CurrentSejour = {
  trek: string;
  slug: string;
  date: string;
  price: number;
  nbBootsActive: number[];
  nbBootsInactive: number[];
  groupe: string;
  urlImage: string;
  days: {
    range: string;
    number: number;
    description: string;
  }[];
};

const OPTIONS: EmblaOptionsType = { loop: true };

export default async function Sejour({ params }) {
  const currentSejour = await getSejour(params.name);

  return (
    <Layout title={`Trek au ${currentSejour?.trek}`}>
      <SliderSejour currentSejour={currentSejour} />
    </Layout>
  );
}
