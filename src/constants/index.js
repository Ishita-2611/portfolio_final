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
  electro
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
  
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Executive Member",
    company_name: "SPEC",
  icon:electro,
  
    date: "Oct 2023 - Present",
    points: [
      "Developed and maintained websites using React.js, Tailwind CSS.",
      "Enhanced UI/UX using animated libraries like Gsap, Framer-Motion, and integrated 3-D models using Three.js.",
      "Organized various workshops related to the tech field including GitHub, WebD, and AI/ML."
    ],
  },
];



const projects = [
  {
    name: "Electrothon 6.O Website",
    description:
      "Electrothon, an exhilarating hackathon orchestrated by SPEC-NITH, drew over 500 participants, exemplifying a convergence of innovation and collaboration in the realm of technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "red-text-gradient",
      },
    ],
    image: electro,
    app_link: "https://electrothon-6-gilt.vercel.app/",
    source_code_link: "https://github.com/spec-nith/Electrothon-6",
  },
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
    app_link: "https://react-music-player-app-xi.vercel.app/",
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
    app_link:"https://github.com/Akshanshkaushal/Quiz__interface",
    source_code_link: "https://github.com/Akshanshkaushal/Quiz__interface",
  },
];

export { services, technologies, experiences,projects };