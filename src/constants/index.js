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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  jobit,
  tripguide,
  threejs,
  musiclogo,
  godyn,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
   
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },  
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Godynamic",
  icon:godyn,
  
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];



const projects = [
  {
    name: "Music App",
    description:
      " A music application ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
     
    ],
    image: musiclogo,
    app_link: "https://651ad70fb992152f011f67b0--stirring-basbousa-2e4b97.netlify.app/",
    source_code_link: "https://github.com/Akshanshkaushal/React_music_player_app",
  },

  {
    name: "Memory Game",
    description:
      " Web based game that will boost your memory",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: css,
    app_link: "https://akshanshkaushal.github.io/Mind-game/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Keeper App",
    description:
      " A TO-DO List that enables users to keep their daily tasks up to the mark",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
    ],
    image: reactjs,
    app_link: "https://6521b0e01c0751330862e408--fabulous-quokka-bc7f80.netlify.app/",
    source_code_link: "https://github.com/Akshanshkaushal/notes_app",
  },

  {
    name: "Quiz App",
    description:
      "Quiz application made using MERN and Redux",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: redux,
    source_code_link: "https://github.com/Akshanshkaushal/Quiz__interface",
  },
];

export { services, technologies, experiences,projects };