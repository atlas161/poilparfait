
import { Competition, ServiceCategory, Testimonial } from './types';

export const SITE_NAME = "Lise Gourinchas";
export const SITE_TAGLINE = "L'Art du Toilettage Morphologique & l'Expertise des Rings.";

// URL de réservation globale (à remplacer par votre lien Koalendar général)
export const KOALENDAR_MAIN_URL = "https://koalendar.com/e/demo-booking-link";

export const CONTACT_DETAILS = {
  address: "16110 Agris, France",
  phone: "07 80 56 73 26",
  email: "latelieraupoilparfait@outlook.com",
  mapLink: "https://www.google.com/maps/search/?api=1&query=16110+Agris+France"
};

export const BIO_TEXT = {
  intro: "Sublimer chaque chien par une maîtrise technique du poil et de l'anatomie.",
  paragraph1: "Le toilettage n'est pas qu'une question d'hygiène, c'est une architecture. Forte de 15 ans d'expérience en concours internationaux, j'ai développé une approche du 'Toilettage Morphologique'. Mon objectif ? Utiliser la coupe ciseaux ou l'épilation pour corriger les petits défauts et exalter les qualités naturelles de votre compagnon.",
  paragraph2: "Que ce soit pour un chien de compagnie ou un futur champion, j'applique la même rigueur. Je mets mon expertise des standards de race et ma lecture du chien au service de son esthétique et de son bien-être, dans un cadre apaisé et exclusif."
};

export const COMPETITIONS: Competition[] = [
  {
    id: 'c1',
    title: 'World Dog Show 2023',
    date: 'Août 2023',
    location: 'Genève, Suisse',
    result: 'Best in Show - 3ème Place',
    description: 'Une préparation du poil de 6 mois pour atteindre la texture parfaite le jour J.',
    story: "Le World Dog Show est le sommet de la cynophilie mondiale. Pour cette édition à Genève, je présentais 'Mystic', un Berger Australien au poil particulièrement dense. Le défi technique était immense : conserver le volume naturel tout en sculptant une silhouette dynamique, sans que le ciseau ne laisse la moindre marque visible. \n\nLa préparation a débuté 6 mois en amont avec un protocole d'hydratation strict pour éviter que le poil ne devienne mousseux sous l'effet de l'humidité ambiante du hall d'exposition. Le jour J, le brushing a duré 2h30 pour obtenir ce fini 'vaporeux mais structuré'. Sur le ring d'honneur, face à 20 000 spectateurs, c'est cette précision dans le détail qui a permis de capter la lumière et l'œil du juge.",
    judgeComment: "Une présentation exemplaire. La qualité du grooming met parfaitement en valeur l'encolure et la ligne de dos sans jamais tomber dans l'artifice.",
    imageUrl: 'https://picsum.photos/800/600?random=1',
    gallery: [
      'https://picsum.photos/800/600?random=101',
      'https://picsum.photos/800/600?random=102',
      'https://picsum.photos/800/600?random=103'
    ],
    featured: true,
  },
  {
    id: 'c2',
    title: 'Crufts 2024',
    date: 'Mars 2024',
    location: 'Birmingham, UK',
    result: 'Meilleur de Race (BOB)',
    description: 'Le concours le plus prestigieux au monde. Le grooming a été salué pour son naturel.',
    story: "Crufts n'est pas une exposition comme les autres, c'est une institution. Le sol vert emblématique de Birmingham ne pardonne aucune erreur de mouvement. Avec 'Sirius', un Setter Anglais, l'enjeu était la fluidité. \n\nContrairement aux standards continentaux parfois plus sophistiqués, le jugement anglais privilégie l'aspect fonctionnel et naturel. J'ai donc travaillé exclusivement en épilation manuelle (trimming) pendant les 8 semaines précédant le show, abandonnant totalement la tondeuse. L'objectif était de dégager l'épaule pour libérer le mouvement, tout en gardant des franges riches et soyeuses. Une performance technique qui demande une connaissance anatomique parfaite.",
    judgeComment: "Excellent conditionnement du poil. Le chien est présenté dans un état musculaire et esthétique optimal.",
    imageUrl: 'https://picsum.photos/800/600?random=2',
    gallery: [
      'https://picsum.photos/800/600?random=201',
      'https://picsum.photos/800/600?random=202'
    ],
    featured: true,
  },
  {
    id: 'c3',
    title: 'Championnat de France',
    date: 'Juin 2023',
    location: 'Dijon, France',
    result: 'Best Grooming Award',
    description: 'Prix spécial technique récompensant la qualité de l\'épilation.',
    story: "Ce prix a une saveur particulière car il ne juge pas le chien, mais le travail du toiletteur. Le jury, composé de Meilleurs Ouvriers de France, a scruté chaque détail. \n\nJ'ai réalisé une coupe ciseaux intégrale sur un Caniche Royal. La difficulté réside dans la symétrie parfaite des volumes et la texture 'velours' qui ne doit présenter aucune irrégularité. C'est une sculpture sur vivant qui demande patience et dextérité. Ce prix valide techniquement ce que je propose quotidiennement à mes clients au salon : un travail de précision.",
    imageUrl: 'https://picsum.photos/800/600?random=3',
    featured: false,
  },
  {
    id: 'c4',
    title: 'European Dog Show',
    date: 'Mai 2022',
    location: 'Paris, France',
    result: 'CACIB & RCACIB',
    description: 'Double victoire validant la conformité au standard.',
    story: "À domicile, la pression était forte. Le défi ici était de gérer deux chiens dans deux classes différentes avec seulement 20 minutes d'écart. \n\nCela demande une organisation logistique militaire et une préparation du poil qui 'tient' dans la durée. J'ai utilisé des techniques de laquage spécifiques qui fixent le mouvement sans cartonner le poil, permettant aux chiens de garder leur expression naturelle même après plusieurs heures d'attente.",
    imageUrl: 'https://picsum.photos/800/600?random=4',
    featured: false,
  },
  {
    id: 'c5',
    title: 'Nationale d\'Élevage',
    date: 'Septembre 2021',
    location: 'Montluçon, France',
    result: 'Meilleur Lot d\'Élevage',
    description: 'Présentation d\'un lot de 3 chiens : homogénéité et qualité du toilettage de groupe.',
    story: "La Nationale d'Élevage est le rendez-vous des puristes. Ici, on ne juge pas seulement la beauté, mais la génétique. Présenter un 'Lot d'Élevage' signifie préparer 3 chiens issus de la même lignée pour qu'ils soient parfaitement assortis. \n\nLe challenge était d'harmoniser les toilettages pour gommer les petites différences individuelles et créer une unité visuelle parfaite. C'est un travail d'équipe intense où chaque coup de brosse compte pour la symétrie du groupe.",
    imageUrl: 'https://picsum.photos/800/600?random=5',
    featured: false,
  },
  {
    id: 'c6',
    title: 'Golden Dog Trophy',
    date: 'Juillet 2020',
    location: 'Liège, Belgique',
    result: 'CACS & Meilleur Jeune',
    description: 'Première sortie en classe adulte, validée par un titre majeur.',
    story: "Une compétition en extérieur sous une chaleur intense. Le maintien du volume du poil (le 'Top Knot') sur un chien en mouvement par 30 degrés demande des produits spécifiques et une technique de fixation très légère. \n\nCe résultat a prouvé que mon travail de conditionnement respecte la structure du poil même dans des conditions extrêmes.",
    imageUrl: 'https://picsum.photos/800/600?random=6',
    featured: false,
  },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: 'toilettage',
    title: 'Toilettage & Soins',
    description: 'Des prestations haute couture pour le quotidien, respectueuses de la peau et du poil.',
    items: [
      {
        name: 'Le Bain & Brushing "Signature"',
        price: 'Dès 45€',
        details: ['Cosmétiques haut de gamme', 'Massage', 'Brushing manuel (pas de cage)', 'Coupe des griffes'],
      },
      {
        name: 'Coupe Ciseaux & Restructuration',
        price: '60€ / heure',
        details: ['Étude morphologique', 'Coupe 100% ciseaux', 'Sculpture des volumes', 'Finitions'],
        isPopular: true,
      },
      {
        name: 'Épilation (Trimming)',
        price: '70€ / heure',
        details: ['Technique manuelle', 'Respect du cycle du poil', 'Pour Terriers, Cockers, Teckels...'],
      }
    ]
  },
  {
    id: 'show',
    title: 'Préparation Expo & Handling',
    description: 'L\'expertise technique pour valoriser vos chiens sur les rings de beauté.',
    items: [
      {
        name: 'Grooming d\'Exposition',
        price: 'Sur Devis',
        details: ['Toilettage spécifique au standard', 'Texturisation', 'Finitions ring'],
        isPopular: true,
      },
      {
        name: 'Initiation & Coaching Handling',
        price: '80€ / heure',
        details: ['Apprendre à présenter son chien', 'Allures & Statique', 'Mise en valeur'],
      },
      {
        name: 'Présentation (Jour J)',
        price: '150€ / jour',
        details: ['Prise en charge complète', 'Toilettage minute', 'Présentation ring'],
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Marie L.',
    role: 'Propriétaire de Cocker',
    text: "Enfin quelqu'un qui sait épiler correctement un Cocker ! Le poil de mon chien a retrouvé une couleur et une texture incroyables. Merci Lise.",
    rating: 5,
  },
  {
    id: 't2',
    author: 'Jean-Marc Dubois',
    role: 'Éleveur "Des Terres Sacrées"',
    text: "Lise transforme le potentiel de nos chiens. Ses coupes ciseaux sont d'une précision chirurgicale qui fait la différence en expo.",
    rating: 5,
  },
  {
    id: 't3',
    author: 'Sophie Martin',
    role: 'Propriétaire de Bichon',
    text: "Mon chien ressort toujours magnifique et surtout détendu. On sent l'expérience : elle manipule les chiens avec une douceur et une assurance rares.",
    rating: 5,
  },
  {
    id: 't4',
    author: 'Thomas R.',
    role: 'Client Toilettage',
    text: "La transparence des prix est appréciable, mais c'est surtout le résultat qui vaut le détour. Une vraie coupe 'nounours' qui tient dans le temps.",
    rating: 5,
  },
  {
    id: 't5',
    author: 'Élodie & Marc',
    role: 'Propriétaires de Husky',
    text: "Gros travail de débourrage sur notre Husky. Le salon est impeccable, le matériel professionnel. On voit que c'est une experte.",
    rating: 5,
  },
  {
    id: 't6',
    author: 'Dr. Vétérinaire Lemoine',
    role: 'Partenaire Santé',
    text: "Je recommande Lise pour son respect de l'animal. Elle signale toujours si elle remarque une anomalie cutanée ou physique lors du toilettage.",
    rating: 5,
  }
];
