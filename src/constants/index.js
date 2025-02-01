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
    title:"Machine Learning",
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
    name: "Numpy",
    icon: typescript,
  },
  {
    name: "Pandas",
    icon: tailwind,
  },
  {
    name: "Hugging Face",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: mongodb,
  },
  {
    name: "sklearn",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }, 
  
];

const experiences = [
  {
    title: "Executive Member",
    company_name: "TEAM SPEC",
  icon:godyn,
  
    date: "August 2024-Present",
    points: [
     "Developed and maintained the Electrothon website, ensuring a smooth and interactive user experience tailored to the event's needs.",
"Worked on various technical projects, leveraging skills in development and problem-solving to deliver impactful solutions.",
"Conducted workshops on machine learning to educate and engage participants, fostering interest and understanding in the field."
    ],
  },
  {
    title: "Volunteer",
    company_name: "TEAM SPEC",
  icon:godyn,
  
    date: "November 2023 - August 2024",
    points: [
     "Developed and maintained the Electrothon website, ensuring a smooth and interactive user experience tailored to the event's needs.",
"Designed visually appealing posters and graphics to promote the Electrothon event, aligning with the event's branding.",
"Anchored the Electrothon 6.0 event, powered by MLH, engaging the audience and ensuring a seamless flow of the program."
    ],
  },
];



const projects = [
  {
    name: "Smart App & Smart Pen for SLD",
    description:
      " A unique technology for SLD ",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Hardware",
        color: "pink-text-gradient",
      },
     
    ],
    image: musiclogo,
    // app_link: "https://651939d3fe7ae235ecf1d095--elaborate-biscotti-c1c7b9.netlify.app/",
    source_code_link: "https://github.com/Ishita-2611/Smart-App-SLD.git",
  },
  {
    name: "Self Driving Car using BCI Kit",
    description:
      " Brain waves used to control car ",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "DeepSeek",
        color: "green-text-gradient",
      },
      {
        name: "Hardware",
        color: "pink-text-gradient",
      },
     
    ],
    image: jobit,
    // app_link: "https://651939d3fe7ae235ecf1d095--elaborate-biscotti-c1c7b9.netlify.app/",
    // source_code_link: "https://github.com/Ishita-2611/Smart-App-SLD.git",
  },
  {
    name: "Electrothon 7.0 Website",
    description:
      " Hackathon powereed by MLH ",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      
     
    ],
    image: godyn,
    app_link: "https://electrothon.nith.ac.in/",
    source_code_link: "https://github.com/spec-nith/Electrothon_7.0",
  },

  // {
  //   name: "Memory Game",
  //   description:
  //     " Web based game that will boost your memory",
  //   tags: [
  //     {
  //       name: "Html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: css,
  //   app_link: "https://akshanshkaushal.github.io/Mind-game/",
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Keeper App",
  //   description:
  //     " A TO-DO List that enables users to keep their daily tasks up to the mark",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
     
  //   ],
  //   image: reactjs,
  //   app_link: " ",
  //   source_code_link: "https://github.com/",
  // },

  // {
  //   name: "Quiz App",
  //   description:
  //     "Quiz application made using MERN and Redux",
  //   tags: [
  //     {
  //       name: "Reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Redux",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: redux,
  //   source_code_link: "https://github.com/Akshanshkaushal/Quiz__interface",
  // },
];

export { services, technologies, experiences,projects };