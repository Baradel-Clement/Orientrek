'use client'

import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import checkIcon from "../public/assets/check.svg";

type Props = {};

export default function MentionsLegales() {
  const router = useRouter();
  return (
    <Layout title="Mentions Légales | Orientrek">
      <section className="PageMentions">
        <h1>Mentions légales</h1>

        <div className="PageMentions-container">
          <button className="drop-shadow" onClick={() => router.back()}>
            <Image src={checkIcon} alt="checkIcon" />
            <p className="bold">Retour</p>
          </button>
          <p className="margintop">
            Les présentes mentions légales (mise à jour du 20 mars 2024)
            s'appliquent à tout utilisateur se rendant sur le site
            www.orientrek.com. En consultant les pages de ce site internet, vous
            vous engagez à les respecter sans réserve.
          </p>
          <p className="heading bold margintop">1 – Informations légales</p>
          <p className="margintop">
            Le responsable de la publication du site internet est : <br />
            Samuel Bernard, domicilié 14 rue Louis Jasseron à Lyon 3ème (69003){" "}
            <br />
            Il est joignable par téléphone au 04 81 91 31 18 et par email à
            l'adresse{" "}
            <a href="mailto:contact@orientrek.com">contact@orientrek.com</a>.
          </p>
          <p className="margintop">
            Le présent site est hébergé au Canada par la société Vercel Inc.,
            domicilié 340 S Lemon Ave #4133 Walnut, CA 91789. Leur téléphone est
            le +1 559-288-7060.
          </p>
          <p className="margintop heading bold">
            2 – Activité professionnelle d'accompagnateur en montagne
          </p>
          <p className="margintop">Samuel Bernard est :</p>
          <ul>
            <li>
              titulaire du diplôme d'état DE Alpinisme – AMM, option milieu
              montagnard enneigé (n° de diplôme : DEMMBFC210161 délivré le
              19/10/2021 par le Ministère de la Jeunesse et des Sports)
            </li>
            <li>
              éducateur sportif, carte professionnelle n°06921ED0667 assuré en
              responsabilité civile auprès de la compagnie MMA IARD ASSURANCES
              MUTUELLES, contrat n°105.630.300
            </li>
            <li>
              adhérent au syndicat national des accompagnateurs en montagne
              (SNAM)
            </li>
            <li>
              adhérent à l'association syndicale internationale des guides de
              montagne (UIMLA - Union of International Mountain Leader
              Association)
            </li>
          </ul>
          <p className="margintop heading bold">
            3 – Propriété intellectuelle et droits d'auteur
          </p>
          <p className="margintop">
            Ce site internet est une création intellectuelle originale, son
            design et son ergonomie ne sauraient être repris. Toute
            reproduction, intégrale ou partielle, réalisée sans le consentement
            d'Orientrek est illicite et constitue une contrefaçon sanctionnée
            pénalement par les lois internationales. Les contenus, logos, photos
            et images présentés sur ce site internet sont la propriété
            d'Orientrek, ou de leurs auteurs et ayant droits respectifs. La loi
            n'autorise que des copies ou reproductions réservées à un usage
            privé et non destinées à une utilisation commerciale ou collective.
            Il est formellement interdit de collecter et d'utiliser les
            informations disponibles sur ce site à des fins commerciales. La
            violation d'une de ces dispositions soumet le contrevenant et toutes
            personnes responsables, aux peines pénales et civiles prévues par la
            loi sur la protection du droit d'auteur dans tous les états
            signataires de la convention de Berne. <br />
            La majorité des photos visibles sur le site internet ont été prises
            par la communauté Orientrek et elle en conserve la propriété.
            Certaines photos ont également été achetées sur la banque d'image
            iStock.
          </p>
          <p className="margintop heading bold">4 – Données personnelles</p>
          <p className="margintop">
            Les données personnelles collectées sur le site ne seront en aucun
            cas distribuées à des tiers, ni vendues, ni louées, ni prêtées.
            Conformément à l’article 32 de la loi n°78-17 du 6 janvier 1978
            modifiée en 2004, relative à l’informatique, aux fichiers et aux
            libertés, l’utilisateur est notamment informé que les informations
            qu’il communique par le biais du formulaire de contact sont
            nécessaires pour répondre à sa demande et sont destinées à l’éditeur
            du site. <br />
            Conformément à cette loi, vous bénéficiez d’un droit d’accès et de
            rectification aux informations qui vous concernent, ainsi que d’un
            droit d’opposition au traitement de vos données pour des motifs
            légitimes. Vous pouvez exercer l’ensemble de ces droits auprès du
            responsable de la publication du site en envoyant un courrier
            électronique à{" "}
            <a href="mailto:contact@orientrek.com">contact@orientrek.com</a>.
          </p>
          <p className="margintop heading bold">
            5 – Cookies et analyse du trafic
          </p>
          <p className="margintop">
            Ce site utilise Google Analytics, un service d’analyse du trafic de
            site internet fourni par Google Inc. (« Google »). Google Analytics
            utilise des cookies , qui sont des fichiers textes hébergés sur
            votre ordinateur, pour aider le site internet à analyser
            l’utilisation du site par ses utilisateurs. Les données générées par
            les cookies concernant votre utilisation du site (y compris votre
            adresse IP) sont transmises et stockées par Google sur des serveurs
            situés aux Etats-Unis. Google utilise ces information dans le but
            d’évaluer l’utilisation du site par ses visiteurs, de compiler des
            rapports sur l’activité du site à destination de son éditeur et de
            fournir d’autres services relatifs à l’activité du site et à
            l’utilisation d’Internet. Google est susceptible de communiquer ces
            données à des tiers en cas d’obligation légale ou lorsque ces tiers
            traitent ces données pour le compte de Google, y compris notamment
            l’éditeur de ce site. Google s’engage à ne jamais recouper votre
            adresse IP avec toute autre donnée détenue par Google. Vous pouvez
            désactiver l’utilisation de cookies en sélectionnant les paramètres
            appropriés de votre navigateur. Cependant, une telle désactivation
            pourrait empêcher l’utilisation de certaines fonctionnalités de ce
            site. En acceptant l'usage de cookies sur notre site, vous acceptez
            que Google traite des données vous concernant de la manière et aux
            fins décrites ci-dessus.
          </p>
        </div>
      </section>
    </Layout>
  );
};
