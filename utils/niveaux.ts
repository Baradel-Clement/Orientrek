const niveaux = [
  {
    nbBootsActive: [1],
    nbBootsInactive: [2, 3, 4, 5],
    title: "Découverte",
    description: "Randonnées pour découvrir les paysages à la demi-journée. (2 à 4 heures de marche avec un dénivelé inférieur à 600 m)",
  },
  {
    nbBootsActive: [1, 2],
    nbBootsInactive: [3, 4, 5],
    title: "Initié",
    description: "Randonnées peu techniques, accessibles à toute personne pratiquant une activité sportive régulière (5 à 6 heures de marche avec un dénivelé inférieur à 800 m)",
  },
  {
    nbBootsActive: [1, 2, 3],
    nbBootsInactive: [4, 5],
    title: "Confirmé",
    description: "Le trek nécessite d’être à l’aise sur des terrains variés et requiert un effort assez soutenu. Un minimum d’entraînement est requis (6 à 7 heures de marche et jusqu’à 1100 m de dénivelé)",
  },
  {
    nbBootsActive: [1, 2, 3, 4],
    nbBootsInactive: [5],
    title: "Avancé",
    description: "Le trek est exigeant physiquement et requiert un entraînement préalable à votre participation. Une bonne agilité est nécessaire pour progresser sereinement sur les terrains techniques. Pour les treks avec portage, vous devez être habitué à porter une charge d'environ 7 à 8 kg en plus de vos effets personnels sur une durée d'une semaine (nourriture et matériel commun de bivouac). Les étapes peuvent cumuler 1200 m de dénivelé et durer 8 heures de marche.",
  },
  {
    nbBootsActive: [1, 2, 3, 4, 5],
    nbBootsInactive: [],
    title: "Expert",
    description: "Pour des personnes sportives confirmées, ayant déjà réalisées des treks de niveau 4. Les étapes peuvent régulièrement dépasser 1500 m de dénivelé et durer 9 heures de marche sur des terrains techniques et exposés.",
  },
];

export default niveaux;
