import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angularjs,
  redux,
  RxJS,
  nodejs,
  firebase,
  git,
  BGroup,
  freelancing,
  evolveClothing,
  vallierRestaurant,
  digitalAgency,
  realEstate,
  memoGame,
  cpp,
  bootstrap,
  graphQl,
  slotMachine,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Typescript",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angularjs
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "RxJS",
    icon: RxJS,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "GraphQl",
    icon: graphQl,
  },

  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "B Group",
    icon: BGroup,
    iconBg: "#E6DEDD",
    date: "January 2020 - February 2022",
    points: [
      "Front-end developer of the Smart Building Project in the company", "building the user interface(UI)", "Implementing best practices including migrating from JavaScript to TypeScript", "making sure that the code and overall application UI components are optimized", "collaborating closely with backend developers and the whole project team",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelancer",
    icon: freelancing,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - January 2023",
    points: [
      "I have developed web applications for different industries, such as digital agencies, real estate companies, restaurants, individuals, personal portfolios, and universities, using React.",
    ],
  },
];

const projects = [
  {
    name: "Clarifai Face Recognition",
    description:
      `A web application using React, Node, Postgres, Gsap and Scss. it also uses Calrifai API which detects faces in pictures. Use These links to find the frontend and backend code respectively:`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
    ],
    isVideo: true,
  },
  {
    name: "Evolve Clothing",
    description:
      "An Ecommerce Website using React, Redux, Redux-saga, Typescript, Firebase, Scss and Styled-components. it also uses Stripe API test mode to simulate payments. Here is the link to this website: ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: evolveClothing,
    source_code_link: "https://github.com/aminbayat3/Evolve-Clothing",
    link: "https://main--dainty-parfait-122017.netlify.app"
  },
  {
    name: "Digital Agency",
    description:
      "A single page Digital Agency web application with React(Hooks), Redux, Gsap, Html and Sass. Here is the link to the website:",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: digitalAgency,
    source_code_link: "https://github.com/aminbayat3/Digital-Agency",
    link: "https://amin-bayatpour-digital-agency.netlify.app",
    digital: true, 
  },
  {
    name: "Vallier Restaurant",
    description:
      "A Restaurant Website with Javascript, Gsap, HTML, and Sass. Here is the link to the website:",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Gsap",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: vallierRestaurant,
    source_code_link: "https://github.com/aminbayat3/Vallier-Restaurant",
    link: "https://aminbayat3.github.io/Vallier-Restaurant/",
  },
  {
    name: "Zillow Real Estate",
    description:
      "A Real Estate Website with Javascript, HTML, and Css. Here is the link to the website:",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: realEstate,
    source_code_link: "https://github.com/aminbayat3/Zillow-RealEstate",
    link: "https://aminbayat3.github.io/Zillow-RealEstate/",
  },
  {
    name: "Memo Game",
    description:
      "A Memory web-based Game using React, Context API, Gsap, and scss. Here is the link to the website:",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Gsap",
        color: "green-text-gradient",
      },
      {
        name: "Context API",
        color: "pink-text-gradient",
      },
    ],
    image: memoGame,
    source_code_link: "https://amin-bayatpour-memo-game.netlify.app",
    link: "https://amin-bayatpour-memo-game.netlify.app/",
  },
  {
    name: "Slot Machine Game",
    description:
      "A Slot Machine web-based Game using Javascript, Gsap, and scss. Here is the link to the website:",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Gsap",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: slotMachine,
    source_code_link: "https://github.com/aminbayat3/New-Slot-Machine",
    link: "https://amin-bayatpour-slot-machine.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
