const FORMATION_DETAILS = [
  {
    id: 0,
    multiple: true,
    title: "Formation Robotique pour enfants",
    description:
      "Nous fournissons tout ce dont les enfants ont besoin pour passer de zéro à héros de robotique . Ils ne seront jamais à bout de projets lorsqu'ils passeront au niveau supérieur. Non seulement ils acquerront des compétences qui leur serviront toute leur vie, mais ils seront aussi enthousiasmés par les possibilités de la technologie. Une formation en robotique spécialement conçue pour les enfants âgés de 7 à 15 ans pour leur faire comprendre l'origine de l'électricité, les familiariser avec les composants électroniques ainsi que les règles de base de la robotique et créer leur propre robot.",

    goals: [
      { id: 1, goal: "Initiation à la robotique à un jeune âge." },
      {
        id: 2,
        goal: "Ouvrir les portes de la technologie et de la créativité.",
      },
      {
        id: 3,
        goal: "Comprendre l'origine de l'électricité et ses règles.",
      },
      {
        id: 4,
        goal: "Découvrir les différents composants électroniques et leur fonctionnement.",
      },
      {
        id: 5,
        goal: "Apprendre à programmer des robots et différents composants électroniques.",
      },
      { id: 6, goal: "Créer des robots et des dispositifs électroniques." },
      { id: 7, goal: "S'amuser tout en apprenant." },
    ],
    levels: [
      {
        id: 1,
        name: "Electronique",
        description:
          "L'élève découvre des connaissances préliminaires dans l'électronique comme les matériaux conducteurs et isolants, la loi d'ohm et d'autres notions fondamentales tout en exploitant ces dernières dans la conception de leur robot.",
        details: [
          { id: 1, description: "Durée 1.25 mois /  5 semaines " },
          { id: 2, description: "2.5 heures (séance) par semaine " },
          { id: 3, description: "Prix 6000 DA  " },
          {
            id: 4,
            description:
              "Note : Le paiement est effectué le jour de la première session",
            type: "note",
          },
        ],
        programme: [
          { id: 1, description: "Séance 1: Histoire de la robotique " },
          { id: 2, description: "Séance 2: Concepts électroniques de base " },
          { id: 3, description: "Séance 3: Moteur DC" },
          { id: 4, description: "Séance 4: IR sensor" },
          { id: 5, description: "Séance 5: Assemblage final" },
        ],
      },
      {
        id: 2,
        name: "Programmation Scratch",
        description:
          "L'élève découvre les différents composants electronique passant par les capteurs , l'unité de commande et d'autres composants.il est amené à comprendre le fonctionnement de chaque composant et y arriver à le programmer avec scratch pour une fonctionnalité précise.",
        details: [
          { id: 1, description: "Durée 1.5 mois / 6 semaines " },
          { id: 2, description: "2.5 heures (séance) par semaine" },
          { id: 3, description: "Prix 9000 DA | 6000DA par mois" },
          {
            id: 4,
            description:
              "Note : Le paiement est effectué le jour de la première session",
            type: "note",
          },
        ],
        programme: [
          {
            id: 1,
            description: "Séance 1: Découvrir les bases de la programmation",
          },
          {
            id: 2,
            description:
              "Séance 2: Expérimenter la vitesse, direction et durée d'un moteur DC",
          },
          {
            id: 3,
            description: "Séance 3: Programmation du capteur infrarouge",
          },
          {
            id: 4,
            description:
              "Séance 4: Mesure de distance avec le capteur ultrason",
          },
          {
            id: 5,
            description:
              "Séance 5: Détecter les obstacles avec le servo moteur et le capteur infrarouges",
          },
          {
            id: 6,
            description:
              "Séance 6: Découvrir le code derrière chaque bloc sur Mblock",
          },
        ],
      },
      {
        id: 3,
        name: "Programmation C++",
        description:
          "L'enfant conçoit et programme le robot Mobot 2, résout des problèmes techniques, utilise des capteurs et crée des algorithmes.",
        details: [
          { id: 1, description: "Durée 2.5 mois / 10 semaines" },
          { id: 2, description: "2.5 heures (séance) par semaine " },
          { id: 3, description: "Prix 15000 DA | 6000DA par mois" },
          {
            id: 4,
            description:
              "Note : Le paiement est effectué le jour de la première session ou à la première session du mois si le paiement est fait par tranches",
            type: "note",
          },
        ],
        programme: [
          {
            id: 1,
            description:
              "Séance 1: Assemblage mécanique et électronique du robot",
          },
          {
            id: 2,
            description:
              "Séance 2: Réalisation d'un parcours programmé avec scratch",
          },
          {
            id: 3,
            description:
              "Séance 3: Réalisation d'un parcours programme avec Arduino C",
          },
          {
            id: 4,
            description:
              "Séance 4: Programmer le robot suiveur de ligne avec scratch",
          },
          {
            id: 5,
            description:
              "Séance 5: Programmer le robot suiveur de ligne avec Arduino C",
          },
          {
            id: 6,
            description:
              "Séance 6: Programmer le robot détecteur d'obstacle avec scratch",
          },
          {
            id: 7,
            description:
              "Séance 7: Programmer le robot détecteur d'obstacle avec Arduino C",
          },
          {
            id: 8,
            description:
              "Séance 8: Concevoir l'application mobile avec MIT App Inventor",
          },
          {
            id: 9,
            description: "Séance 9: Programmer le robot téléguidé avec Scratch",
          },
          {
            id: 10,
            description:
              "Séance 10: Programmer le robot téléguidé avec Arduino C",
          },
        ],
      },
    ],
  },
  // ================================ 2nd AI ==============================================================================================================================
  {
    id: 1,
    multiple: false,
    title: "Formation Programmation & Intelligence Artificielle pour enfant",
    description:
      "Une formation spécialement créée pour permettre à vos enfants de découvrir le monde de l'intelligence artificielle et de la programmation dès leur plus jeune âgeIls vont non seulement apprendre à se lancer dans la programmation, mais aussi à créer de nombreux projets amusants et à concrétiser leur imagination en créant leurs propres jeux et animations en utilisant l'intelligence artificielle, le machine Learning et la vision intelligente.",

    goals: [
      {
        id: 1,
        goal: "Initiation à la programmation et à l'intelligence artificielle.",
      },
      {
        id: 2,
        goal: "Développer et comprendre la logique algorithmique.",
      },
      {
        id: 3,
        goal: "Apprendre à programmer.",
      },
      {
        id: 4,
        goal: "Créer différentes animations et jeux amusants.",
      },
      {
        id: 5,
        goal: "Découvrez comment les humains peuvent interagir avec les ordinateurs grâce à la vision par ordinateur.",
      },
      {
        id: 6,
        goal: "Ouvrez les portes de la technologie et de la créativité.",
      },
    ],
    programme: [
      {
        id: 1,
        description:
          "Séance 1: Introduction à l'informatique, Système binaire.",
      },
      {
        id: 2,
        description:
          "Séance 2: Algorithmes, Apprendre les bases de la programmation et construire un algorithme",
      },
      {
        id: 3,
        description:
          "Séance 3: Scratch, Construire un jeu en utilisant Scratch..",
      },
      {
        id: 4,
        description:
          "Séance 4: Intelligence artificielle et Machine learning, Qu'est-ce que l'intelligence artificielle et l'apprentissage automatique ?",
      },
      {
        id: 5,
        description:
          "Séance 5: Machine Learning avec du texte, Utilisez l'apprentissage automatique avec des articles et des messages écrits.",
      },
      {
        id: 6,
        description:
          "Séance 6: Machine Learning avec des images, Utilisez l'apprentissage automatique avec la vision par ordinateur.",
      },
    ],
    details: [
      { id: 1, description: "Durée 1.5 mois / 6 semaines" },
      { id: 2, description: "2.5 heures (séance) par semaine " },
      { id: 2, description: "Prix 9000 DA" },
      {
        id: 4,
        description:
          "Note : Le paiement est effectué le jour de la première session",
        type: "note",
      },
    ],
  },
  // ============================== 3rd Sciences et chimie ========================
  {
    id: 2,
    multiple: false,
    title: "Formation Sciences et chimie pour les enfants",
    description:
      "Il n’y a pas de meilleure façon d’apprendre que par des expériences pratiques et amusantes ! Durant ce cours, vos enfants vont découvrir les différents domaines de la science à travers des activités variées et des expériences amusantes qui vont leur faire aimer la science dès un jeune âge.",

    goals: [
      {
        id: 1,
        goal: "Connaître les différents domaines de la science .",
      },
      {
        id: 2,
        goal: "Découvrir les cellules et les plantes, les réactions chimiques, les fonctions du corps humain et tout ce qui concerne l’espace..",
      },
      {
        id: 3,
        goal: "Expérimentez et apprendre via des activités pratiques.",
      },
      {
        id: 4,
        goal: "Intéressez les enfants à la science.",
      },
    ],
    programme: [
      {
        id: 1,
        description: "Séance 1 : Biologie: Sous le microscope",
        items: [
          { id: 1, description: "Structure cellulaire" },
          { id: 2, description: "Comment les plantes se nourrissent-elles ?" },
          {
            id: 3,
            description: "Observer des cellules végétales au microscope",
          },
        ],
      },
      {
        id: 2,
        description: "Séance 2 : Chimie: Qu'est-ce que la matière ?",
        items: [
          { id: 1, description: "Matières et substances" },
          { id: 2, description: "Volcan chimique" },
        ],
      },
      {
        id: 3,
        description: "Séance 3 : Astronomie: Découvrir l'univers",
        items: [
          { id: 1, description: "Explorer le temps et l’espace" },
          { id: 2, description: "Fabriquer un système solaire" },
          { id: 2, description: "Planétarium" },
        ],
      },
      {
        id: 4,
        description: "Séance 4 : Anatomie humaine: Découvrir mon corps",
        items: [
          { id: 1, description: "Organes et fonctions de base" },
          { id: 2, description: "Système de poumon artificiel" },
          { id: 2, description: "Puzzle d’anatomie" },
        ],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois /  4 semaines" },
      { id: 2, description: "2.5 heures (séance) par semaine " },
      { id: 2, description: "Prix 6000 DA" },
      {
        id: 4,
        description:
          "Note : Le paiement est effectué le jour de la première session",
        type: "note",
      },
    ],
  },
  // ============================== 4rd Arduino ========================

  {
    id: 3,
    multiple: false,
    title: "Formation Arduino",
    description: "texte",

    goals: [
      {
        id: 1,
        goal: "texte",
      },
    ],
    programme: [
      {
        id: 1,
        description: "Séance 1 :",
        items: [],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois /  4 semaines" },
      { id: 2, description: "3 heures (séance) par semaine " },
      { id: 2, description: "Prix 9000 DA" },
      {
        id: 4,
        description:
          "Note : Le paiement est effectué le jour de la première session",
        type: "note",
      },
    ],
  },
];
export default FORMATION_DETAILS;
