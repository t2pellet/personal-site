import { LINKEDIN } from '@/constants';
import { SectionEnum } from '@/types';

const aboutMe = `
<div>
<b>Salut !</b> Je suis Tenzin, <b>diplômé</b> en <b>Informatique</b> <div class='tooltip tooltip-bottom' data-tip='diplômé'>🎓</div> de l'Université de Waterloo avec près de <b>2 ans</b> d'<b>expérience professionnelle</b> <div class='tooltip tooltip-bottom' data-tip='travail'>🛠</div>.
  
Ma passion réside dans le développement de fonctionnalités <b>axées sur l'utilisateur</b> qui ont un <b>impact tangible</b>. Voir mon travail prendre vie et <b>influencer positivement</b> les utilisateurs est ce qui me motive.
  
Maîtrisant <b>TypeScript</b>, <b>Next.js</b> et <b>React</b>, je possède également un ensemble de compétences polyvalent qui s'étend à <b>Java</b>, <b>Spring</b>, <b>C#</b> et <b>Unity</b>.
  
Hors du monde d'informatique, je suis en apprentissage de la <div class='tooltip tooltip-bottom' data-tip='guitare'>🎸</div><b>guitare</b> et j'apprécie plonger dans les domaines de la <div class='tooltip tooltip-bottom' data-tip='photographie'>📸</div> <b>photographie</b>, des <div class='tooltip tooltip-bottom' data-tip='jeux de société'>🎲</div> <b>jeux de société</b> et de <div class='tooltip tooltip-bottom' data-tip='D&D'>🧙🏾‍♂️</div><b>D&D</b>.
  
Si mon travail vous intrigue, comme <b>Metalworks</b> ou <b>Strawgolem</b>, n'hésitez pas à me contacter.
  
Connectons-nous et explorons ensemble les possibilités infinies de la technologie ! <a class='decoration-0' href=${LINKEDIN} target='_blank'><b>Connectons-nous</b></a>.
</div>

`;

const skills = `
<p class='text-center'>Voici quelques-unes de mes compétences ! J'apprends constamment de nouvelles choses, donc cela pourrait être un peu obsolète ;)

Vous pouvez également consulter les <a href='#${SectionEnum.PROJECTS}'><b>projets</b></a> et les <a href='#${SectionEnum.WORK}'><b>emplois</b></a> dans lesquels je les ai utilisés !</p>`;

const contact = `
<p class='text-center'>Envie de prendre contact ? Allons-y ! 🔥

Vous pouvez consulter mon CV et me trouver sur ces réseaux sociaux, ou remplir le formulaire ci-dessous ! ✍🏽</p>`;

export default {
  titles: {
    about: 'Moi',
    skills: 'Compétences',
    projects: 'Projets',
    school: 'Éducation',
    work: 'Expérience',
    contact: 'Contact',
  },
  sections: {
    aboutMe: {
      content: aboutMe,
      readMore: 'Lire Plus',
      contact: 'Contact',
    },
    skills,
    projects: {
      metalworks:
        "Une application full-stack Next.JS / Express.JS pour l'hébergement de FoundryVTT sur DigitalOcean",
      website:
        'Le site sur lequel vous vous trouvez ! Réalisé avec Next.JS 13, TailwindCSS et DaisyUI',
      strawgolem:
        'Un mod Minecraft Java qui ajoute une créature agricole, avec plus de 10 millions de téléchargements !',
    },
    school: {
      waterloo: {
        major: 'Informatique',
        date: 'Août 2019 - Décembre 2023',
      },
      marianopolis: {
        major: 'Sciences Pures et Appliquées',
        date: 'Août 2017 - Juin 2019',
      },
    },
    work: {
      vividSeats: {
        date: 'Janvier 2023 - Août 2023',
        role: 'Stagiaire Ingénieur Logiciel',
        description:
          "Développement d'applications web et mobiles full-stack pour Vivid Seats, travaillant sur la page d'accueil, le paiement, les pages d'événements, etc.",
      },
      lifion: {
        date: 'Mai 2022 - Août 2022',
        role: 'Stagiaire Développeur Logiciel',
        description:
          "Développement d'applications web React côté client, principalement axé sur les fonctionnalités liées à la connexion et aux flux de compte.",
      },
      bunch: {
        date: 'Septembre 2021 - Décembre 2021',
        role: 'Stagiaire Développeur de Jeux',
        description:
          'Développement de jeux mobiles tels que Mars Dash en C# et Unity.',
      },
      paramountCommerce: {
        date: 'Janvier 2021 - Avril 2021',
        role: 'Stagiaire Développeur Java',
        description:
          "Développement d'une application web full-stack Spring Boot, amélioration des suites de tests automatisés avec JUnit, Selenium et Appium.",
      },
    },
    contact: {
      content: contact,
      form: {
        name: 'Entrez votre nom',
        email: 'Entrez votre adresse e-mail',
        phone: 'Entrez votre numéro de téléphone',
        message: 'Votre message',
        submit: 'Envoyer 🚀',
      },
    },
  },
  transitions: {
    label: 'Continue',
    content: {
      projects: 'Vous voulez savoir où je les ai utilisées ?',
      work: "Vous voulez savoir où j'ai travaillé ?",
      school: 'Vous voulez en savoir plus sur mon éducation ?',
      contact: 'Prenons Contact',
    },
  },
} as const;
