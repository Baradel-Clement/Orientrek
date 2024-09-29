import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { useRouter } from "next/router";
import checkIcon from "../public/assets/check.svg";
import { NextSeo } from "next-seo";

type Props = {};

const ConditionsDeVente: NextPageWithLayout<Props> = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Conditions de Vente - Orientrek"
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
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <Layout title="Conditions de vente | Orientrek">
        <section className="PageConditions">
          <h1>Conditions de vente</h1>

          <div className="PageConditions-container">
            <button className="drop-shadow" onClick={() => router.back()}>
              <Image src={checkIcon} alt="checkIcon" />
              <p className="bold">Retour</p>
            </button>
            <p className="margintop">
              <span className="bold">Mise à jour du 2 septembre 2024</span>
              <br />
              L'inscription à toutes les prestations vendues par Orientrek,
              implique l'approbation, sans réserve, des conditions de vente
              ci-après. Les prestations de randonnée, de week-end ou de séjour
              tout compris seront nommées de façon générique « séjour » dans le
              présent document. La signature du formulaire d’inscription,
              accompagné de son acompte, sous-entend l’acceptation des
              conditions générales de vente et vaut comme contrat de vente.
            </p>
            <p className="heading bold margintop">
              1 – Inscriptions et réservations
            </p>
            <p className="subheading">1-1- Formulaire d’inscription</p>
            <p className="margintop">
              En renseignant le formulaire d'inscription, le client reconnaît
              expressément avoir pris connaissance des informations relatives à
              son séjour. Tout formulaire d’inscription doit être daté et signé
              par le participant, avant d’être retourné à Orientrek, accompagné
              de son acompte. Ce formulaire établit un contrat de vente entre
              Orientrek et le client. Il sera établi en deux exemplaires, dont
              l'un sera à destination du client, après signature par Orientrek
              et transmis via courrier ou par retour de mail.
            </p>
            <p className="margintop subheading">
              1-2- Validité d’une réservation
            </p>
            <p className="margintop">
              La réception des documents d’inscription par Orientrek n’implique
              la réservation que dans la limite des places disponibles. La
              réservation sera définitive après encaissement de l’acompte et
              confirmation écrite par Orientrek. Une facture du montant total
              sera envoyée par courriel ou courrier au client, valant
              confirmation du séjour.
            </p>
            <p className="margintop subheading">
              1-3- Modalité de versement de l'acompte
            </p>
            <p className="margintop">
              Un acompte de 40 % du montant de la réservation (hors assurances
              complémentaires) sera obligatoire lors de l’inscription, si
              celle-ci intervient à plus de 30 jours avant le départ. <br />{" "}
              <span className="bold">
                À moins de 30 jours avant le départ, ou pour des séjours de
                moins de 4 jours, l’intégralité du prix du séjour sera demandé
                lors de l’inscription.
              </span>{" "}
              <br /> L'acompte peut être effectué par virement, chèque ou carte
              bancaire et sera encaissé dès réception par Orientrek.
            </p>
            <p className="margintop subheading">
              1-4- Modalité de paiement du solde
            </p>
            <p className="margintop">
              Le solde devra être réglé au plus tard 30 jours avant le début du
              séjour,{" "}
              <span className="underline">
                sans relance de la part d’ Orientrek.
              </span>{" "}
              Dans le cas contraire, Orientrek se réserve le droit d’annuler la
              réservation, sans indemnité pour le client. Pour toute inscription
              à moins de 5 jours avant le départ pour un séjour à l’étranger et
              comportant un transport aérien, des frais supplémentaires, d’un
              montant minimum de 150€ par personne, pourront être facturés au
              client. Le règlement du solde du séjour peut s’effectuer par
              virement, chèque ou carte bancaire.
            </p>
            <p className="margintop heading bold">
              2 – Dates et prix des séjours
            </p>
            <p className="margintop">
              Les dates et les prix des séjours sont consultables sur le site
              internet d'Orientrek (
              <a target="_blank" href="orientrek.com">
                www.orientrek.com
              </a>
              ) et sur les fiches techniques correspondantes aux différents
              séjours. Au cours des trente jours qui précèdent la date de départ
              prévue lors de la signature du formulaire d’inscription, le prix
              fixé au contrat ne pourra faire l'objet d’aucune majoration. Avant
              cette date, les prix de vente publiés sont révisables, tant à la
              hausse qu'à la baisse, notamment en cas d’augmentation
              significative du coût des transports ou en cas d’augmentation ou
              de réduction des coûts des prestataires extérieurs à Orientrek.{" "}
              <br /> En cas de modification du prix de vente, Orientrek s’engage
              à prévenir le client déjà inscrit par écrit. Celui- ci pourra
              accepter ou refuser, par réponse écrite, les modifications
              apportées au tarif défini lors de la signature du contrat. En cas
              d’annulation de la part d’un client refusant les modifications de
              prix, celui-ci se verra appliquer les frais d’annulation définis
              ci-après, au paragraphe 3 des présentes conditions de vente.
            </p>
            <p className="heading bold margintop">
              3 – Conditions d’annulation et retenues
            </p>
            <p className="subheading">3-1- Généralités</p>
            <p className="margintop">
              En cas d’annulation du séjour, le client s’engage à avertir
              Orientrek par écrit (mail avec demande d’accusé de réception ou
              courrier recommandé avec accusé de réception), et ce{" "}
              <span className="bold">dès que possible.</span> Il s’engage
              également à contacter par écrit son assureur selon les conditions
              du ou des contrats d’assurance et après l’annulation auprès
              d’Orientrek. C’est la date de ces écrits qui sera retenue pour le
              calcul des frais d’annulation. <br />
              <br /> Dans le cas d’une annulation, le client pourra proposer un
              remplaçant en informant Orientrek,{" "}
              <span className="bold">
                au plus tard 30 jours avant le départ
              </span>
              , par lettre recommandée avec accusé de réception. Ce remplaçant
              ne pourra pas bénéficier de l’assurance annulation, si celle-ci a
              été souscrite par le client qui annule sa réservation, car elle
              est nominative. Les frais de modification des billets d’avion,
              dans le cas d’un séjour « tout compris » à l’étranger, ne seront
              pas pris en charge par Orientrek, ni par l’assurance annulation,
              et seront facturés au client (Cf. § 6.3 du présent document).
            </p>
            <p className="margintop subheading">
              3-2- Annulation de la part du client
            </p>
            <p className="margintop"></p>
            <ul>
              <li>
                En cas d’annulation à plus de 45 jours avant le début du séjour
                : une retenue forfaitaire de 75 € par personne inscrite sera
                appliquée pour les séjours de moins de 4 jours, et 150 € par
                personne inscrite pour les séjours de 4 jours et plus.
              </li>
              <li>
                En cas d’annulation entre 45 et 31 jours avant le début du
                séjour : 15 % du prix du séjour sera retenu.
              </li>
              <li>
                En cas d’annulation entre 30 et 21 jours avant le début du
                séjour : 30% du prix du séjour sera retenu.
              </li>
              <li>
                En cas d’annulation entre 20 et 14 jours avant le début du
                séjour : 50% du prix du séjour sera retenu.
              </li>
              <li>
                En cas d’annulation entre 13 et 7 jours avant le début du séjour
                : 75 % du prix du séjour sera retenu.
              </li>
              <li>
                En cas d’annulation à moins de 7 jours avant le début du séjour
                : 100% du prix du séjour sera retenu.
              </li>
            </ul>
            <p className="margintop subheading">
              3-4- Retenues supplémentaires en cas d’annulation par le client
            </p>
            <p className="margintop">
              Des frais supplémentaires, engendrés par l’annulation des
              réservations de logements et/ou de billets d’avion émis (faisant
              l’objet d’engagements fermes et non remboursables) pourront être
              prélevés sur l’acompte ou facturés en sus des retenues engendrés
              par l’annulation d’un séjour selon le barème défini au §3.3
              précédent. Ces frais supplémentaires seront facturés à l’euro prêt
              du montant des frais d’annulation engagés par Orientrek.
            </p>
            <p className="margintop subheading">
              3-5- Annulation de la part d’Orientrek
            </p>
            <p className="margintop">
              En cas d’annulation d’un séjour par Orientrek, différentes
              solutions de remplacement de prestations équivalentes en valeurs
              seront proposées au client. Dans le cas contraire, Orientrek
              s’engage à rembourser l’intégralité des sommes versées par le
              client, dans un délai de 15 jours. <br />
              <br />
              <span className="underline">
                Si vous effectuez une ou plusieurs réservations de trains et/ou
                d'avion à destination de votre lieu de rendez-vous
              </span>
              , assurez-vous que ces billets puissent être modifiés ou annulés
              sans frais. Orientrek ne sera pas responsable de frais non
              remboursables que le client a engagés{" "}
              <span className="bold">
                jusqu'à la garantie du départ du séjour, soit 21 jours au plus
                tard avant le début du séjour.
              </span>
              <br />
              <br />
              Aucune indemnité compensatoire ne sera versée, aucun frais
              d’annulation ne sera appliqué, aucun remboursement des frais
              engagés avant le séjour par le client ne pourra être réclamé à
              Orientrek.
            </p>
            <p className="heading bold margintop">4 – Assurances</p>
            <p className="margintop">
              Orientrek est assurée, au titre de sa responsabilité civile
              professionnelle par la société HISCOX - 12, quai des Queyries - CS
              41177 - 33072 Bordeaux. La garantie financière, pour les
              opérateurs de voyages et de séjours, est apportée par la société
              Groupama Assurance-Crédit & Caution - 132 rue des Trois Fontanot -
              92000 Nanterre.
            </p>
            <p className="margintop subheading">
              4-1- Responsabilité civile individuelle
            </p>
            <p className="margintop">
              La responsabilité civile de l’accompagnateur en montagne, ou la
              responsabilité civile professionnelle d’Orientrek ne peut se
              substituer à la responsabilité civile individuelle du client. Pour
              participer aux séjours d'Orientrek, il est indispensable de
              posséder une responsabilité civile individuelle et d'être couvert
              au minimum par une assurance assistance/rapatriement, comprenant
              des frais de recherche et de secours en montagne à hauteur de 10
              000 € pour les séjours à l’étranger. Orientrek recommande
              toutefois une assurance multirisques couvrant les frais
              d’annulation, de rapatriement, de maladie, d’accident, de perte ou
              vol de bagages, avec frais de recherche et de secours en montagne
              à hauteur de 10 000 € pour les séjours à l’étranger.
            </p>
            <p className="margintop subheading">
              4-2- Contrat d’assurance EuropAssistance
            </p>
            <p className="margintop">
              Orientrek propose à ses clients de souscrire à un contrat
              d’assurance « Open Tourisme Multirisque plus » proposé par
              EuropAssistance (contrat n°52 124 770). Cette assurance couvre
              l’annulation, le vol, le ratage d’avion, l’interruption,
              l’assistance, le rapatriement et, dans certaines conditions, prend
              en compte les aléas liés au Covid-19. Elle est adaptée aux séjours
              proposés par Orientrek. Son coût s’élève à 4,5% du prix total du
              séjour. Chaque participant pourra décider de souscrire ou non à
              cette assurance dès qu’il le souhaite et ce,{" "}
              <span className="bold">avant le 1er jour du séjour.</span> La
              prise d’effet de cette assurance est soumise à son paiement suite
              à l’inscription au séjour. Un mail de confirmation, accompagné des
              conditions générales de garanties, sera alors envoyé au client dès
              la souscription de ladite assurance.
            </p>
            <p className="margintop subheading">
              4-3- Procédure de déclaration de sinistres à EuropAssistance
            </p>
            <p className="margintop">
              Tous les détails concernant la procédure de déclaration de
              sinistres sont précisés sur le contrat d’assurance qui sera
              transmis par mail au client, après souscription du contrat auprès
              d’Orientrek. Il est impératif pour le client de prendre note de la
              démarche <span className="underline">avant le séjour</span> et de
              connaître les numéros de contact nécessaires à toutes
              interventions d’EuropAssistance durant son séjour.
            </p>
            <p className="heading bold margintop">
              5 – Encadrement et limite de responsabilité
            </p>
            <p className="subheading">
              5-1- L’accompagnateur en montagne, les guides locaux et les
              clients
            </p>
            <p className="margintop">
              L’intégralité de la randonnée itinérante du séjour sera encadrée
              par un accompagnateur en montagne référent, diplômé d’État. En cas
              d’indisponibilité de cet accompagnateur référent, un autre
              accompagnateur en montagne diplômé pourra être engagé par
              Orientrek en remplacement. <br />
              <br />
              Chaque client doit se conformer aux conseils et consignes donnés
              par le professionnel qui encadre cette activité. L’accompagnateur
              ne pourra être tenu pour responsable des incidents, accidents et
              dommages corporels qui pourraient résulter d’une initiative
              personnelle imprudente. <br />
              <br />
              Toute personne non majeure doit être accompagnée d’un adulte sur
              l’ensemble du séjour. <br />
              <br />
              En cas de baignade, le client est le seul juge de sa capacité à se
              mettre dans l’eau. Il engage alors sa propre responsabilité,
              notamment concernant la surveillance des enfants qui viendraient
              se joindre à lui dans l’eau et dont il serait responsable.
            </p>
            <p className="margintop subheading">5-2- Nombre de participants</p>
            <p className="margintop">
              La réalisation d’un séjour est subordonnée à un nombre minimal de
              participants. Ce minimum est précisé sur la fiche technique
              correspondante au séjour.{" "}
              <span className="bold">
                Si ce quota n’est pas atteint 21 jours avant la date de début du
                séjour
              </span>{" "}
              (48h en cas de randonnée à la journée ou demi-journée), Orientrek
              se réserve le droit d’annuler le séjour. Les clients inscrits
              seront alors informés par mail, courrier (ou téléphone pour les
              randonnées à la journée ou demi-journée), puis remboursés par voie
              postale dans un délais de 15 jours en application du § 3.5 des
              présentes conditions de vente.
              <br />
              <br />
              Un nombre maximum de huit participants par séjour sera accepté,
              sauf précision contraire sur la fiche technique, et dans le cas où
              la dernière inscription serait demandée par un couple. Si
              Orientrek accepte cette dernière inscription, le nombre total de
              participants du séjour sera exceptionnellement porté à neuf
              personnes. Dans tous les cas, Orientrek se réserve le droit de
              refuser une ou plusieurs personnes si le nombre maximum de
              participants est atteint pour le séjour.
            </p>
            <p className="margintop subheading">5-3- Respect du programme</p>
            <p className="margintop">
              Orientrek s’engage à respecter le programme défini pour lequel le
              client est inscrit. Cependant, l’accompagnateur en montagne
              référent qui encadre le séjour reste le seul juge de la situation
              et peut être appelé à modifier le programme à tout moment,
              notamment pour des raisons de sécurité (niveau physique du groupe,
              danger de terrain, météo…). Aucune indemnité compensatoire ne sera
              versée en cas de décision de modification du programme par
              l’accompagnateur en montagne, dans l’exercice de sa profession.
            </p>
            <p className="margintop subheading">5-4- Evènements extérieurs</p>
            <p className="margintop">
              Orientrek ne pourra être tenu pour responsable des conséquences
              des événements extérieurs à son fonctionnement, notamment tous
              incidents ou événements imprévisibles (guerres, troubles
              politiques, émeutes, incidents techniques ou administratifs
              extérieurs, encombrement de l’espace aérien, faillite d’un
              prestataire, règles spécifiques liées à une crise sanitaire,
              intempéries, retards (y compris les retards dans les services
              d’expédition du courrier pour l’envoi des billets d’avion,
              passeports…), pannes, pertes ou vols de bagages ou effets
              personnels des clients.
              <br />
              <br />
              Les retards subis ayant pour origine les cas visés ci-dessus ainsi
              que les modifications d’itinéraire/programme qui en découleraient
              éventuellement ne pourront entraîner aucune indemnisation à
              quelque titre que ce soit de la part d’Orientrek, notamment du
              fait de la modification de la durée du voyage initialement prévue
              ou de retard à une escale aérienne.
              <br />
              <br />
              Les éventuels frais additionnels liés à une perturbation (taxes,
              hôtel, parking, rachat de titres de transport…) resteront à la
              charge du voyageur.
              <br />
              <br />
              En cas de défaut d’enregistrement et/ou en cas de retard à
              l’embarquement d’un client, et si celui-ci ne rejoint pas le
              groupe par ces propres moyens, le séjour sera considéré comme
              annulé par le client, le jour du départ. Il sera alors retenu 100%
              du montant total du séjour.
            </p>
            <p className="heading bold margintop">
              6 – Informations importantes pour les séjours à l’étranger
            </p>
            <p className="subheading">6-1- Formalités administratives</p>
            <p className="margintop">
              Avant de s’inscrire à un séjour à l’étranger chaque client veille
              à être en possession d’un passeport ou d’une carte nationale
              d’identité en cours de validité (selon la destination). Un
              voyageur, qui ne pourrait embarquer sur un vol, faute de présenter
              les documents de police ou douanier, ne pourra prétendre à aucun
              remboursement. <br />
              <br />
              Orientrek ne pourra en aucun cas être tenu pour responsable des
              conséquences de l’inobservation par le voyageur des règlements
              policiers ou douaniers préalablement ou au cours du voyage (ex.
              perte des papiers d’identité et/ou billets d’avion…).
            </p>
            <p className="subheading margintop">6-2- Risques sanitaires</p>
            <p className="margintop">
              Il est conseillé de consulter régulièrement les informations
              diffusées par les autorités compétentes sur les risques sanitaires
              du pays du séjour et de suivre les recommandations et mesures
              sanitaires pour lutter contre ces risques (
              <a target="_blank" href="https://sante.gouv.fr/">
                www.sante.gouv.fr
              </a>
              ).
            </p>
            <p className="subheading margintop">
              6-3- Modifications de réservation avant le départ
            </p>
            <p className="margintop">
              Toute demande d’un client pour une modification ou un changement
              portant sur son nom, après l’émission des billets d’avions,
              entraîne l’application par les compagnies aériennes de frais de
              modification. Ces frais devront être couverts par le client,
              auprès d’ Orientrek, avant que soient engagées toutes
              modifications ou changements.
            </p>
            <p className="bold heading margintop">7- Réclamations</p>
            <p className="margintop">
              Tout litige ou réclamation doit être adressée par lettre
              recommandée avec accusé de réception à Orientrek – Samuel Bernard
              – 14 rue Louis Jasseron – 69003 Lyon, dans un délai d’un mois
              après la date de retour du séjour. Ces réclamations feront
              toujours l’objet d’une réponse au client.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ConditionsDeVente;
