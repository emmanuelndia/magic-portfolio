import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Emmanuel",
  lastName: "N'dia",
  name: `Emmanuel N'dia`,
  role: "Développeur Web",
  avatar: "/images/avatar.png",
  email: "example@gmail.com",
  location: "Africa/Abidjan", 
  languages: ["Français", "Anglais"], 
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/recrutement-agent",
  },
  subline: (
    <>
    Je suis Emmanuel N'dia, développeur Web junior, je crée des expériences utilisateur intuitives et je construis mes propres projets.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
          Emmanuel est un développeur web, passionné par la transformation des défis complexes
          en solutions de design simples et élégantes. Son travail couvre les interfaces numériques, les expériences
          interactives et la convergence de la conception et de la technologie.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expérience Professionnelle",
    experiences: [
      {
        company: "CEI (Commission Electorale Indépendante)",
        timeframe: "Janvier 2025 - Janvier 2026",
        role: "Stagiaire Développeur Web et Maintenance Informatique",
        achievements: [
          "Participation à la création d'applications web facilitant la gestion des différentes opérations de l'entreprise sur cette période",
          "Contribution technique et stratégique lors des élections présidentielles et législatives",
          "Diagnostique, résolution de pannes matérielles et logicielles, configuration et déploiement du parc informatique de l'entreprise",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/cei.png",
            alt: "CEI (Commission Electorale Indépendante)",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Etudes",
    institutions: [
      {
        name: "Groupe CEFIAT Salomon, Abidjan - Plateau",
        description: <>BTS en Informatique Développeur d'Applications (IDA) 2024</>,
      },
      {
        name: "Lycée Municipal de Bonoua, Bonoua",
        description: <>Baccalauréat Série C 2022</>,
      },
      {
        name: "Lycée Moderne de Cocody, Abidjan - Cocody",
        description: <>Brevet d'Etude du Premier Cycle (BEPC) 2019</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences",
    skills: [
      {
        title: "Développement Web et Frameworks",
        description: (
          <>
            <p>Frontend : React, Next.js, Next UI, TypeScript, Tailwind CSS</p>
            <p>Backend : Node.js, Laravel(PHP)</p>
            <p>Langages : JavaScript, TypeScript, PHP, Python, C</p>
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Python",
            icon: "python",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        /* images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ], */
      },
      {
        title: "Données et Infrastructures",
        description: (
          <>
            <p>Base de données : MySQL, PostgreSQL, Prisma ORM</p>
            <p>Services API : REST, Server Actions, Stripe, Supabase</p>
            <p>Outils et DevOps : Git/GitHub, Vercel, VirtualBox, Postman</p>
            
          </>
        ),
        tags: [
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "postgresql",
            icon: "postgresql",
          },
          {
            name: "stripe",
            icon: "stripe",
          },
          {
            name: "mysql",
            icon: "mysql",
          },
          {
            name: "Github",
            icon: "github",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        /* images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ], */
      },
    ],
  },
  softskills: {
    display: true, // set to false to hide this section
    title: "",
    skills: [
      {
        title: "Compétences Personnelles",
        description: (
          <>
            <p>Adaptabilité</p>
            <p>Esprit d'équipe</p>
            <p>Esprit d'apprentissage</p>
            <p>Relationnel</p>
          </>
        ),
      },
      
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projets – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
