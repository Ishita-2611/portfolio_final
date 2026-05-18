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
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
  {
    name: "Node.JS",
    icon: nodejs,
  }, 
  {
    name: "Express.JS",
    icon: expressjs,
  },
  {
    name: "Rest API",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "WebSockets",
    icon: expressjs,
  },
  {
    name: "Docker",
    icon: focker,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  
];

const experiences = [
  {
    title: "Training and Placement Representative",
    company_name: "NIT Hamirpur",
  icon:godyn,
  
    date: "March 2026- Present",
    points: [
      "As T&P Representative, I sat at the intersection of industry and campus. I managed recruiter relations, coordinated placement logistics, and ran mock interview sessions — turning placement season from chaos into a structured, student-first process."
    ],
  },
  {
    title: "LinkedIn CoachIn Program 2025",
    company_name: "LinkedIn",
  icon:godyn,
  
    date: "March 2025- July 2025",
    points: [
      "Selected as a LinkedIn CoachIn for 2025, providing personalized career guidance and mentorship to aspiring professionals.",
"Conducted one-on-one coaching sessions, offering tailored advice on resume building, interview preparation, and career development strategies.",
"Received positive feedback from coachees, contributing to their career growth and success in securing job opportunities."
    ],
  },
  {
    title: "Developer Relations Lead",
    company_name: "TEAM SPEC",
  icon:godyn,
  
    date: "August 2025 - March 2026",
    points: [
     "Developed and maintained the Electrothon website, ensuring a smooth and interactive user experience tailored to the event's needs.",
"Worked on various technical projects, leveraging skills in development and problem-solving to deliver impactful solutions.",
"Conducted workshops on machine learning to educate and engage participants, fostering interest and understanding in the field."
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