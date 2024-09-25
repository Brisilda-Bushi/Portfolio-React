import i18next from "../i18n";
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
  storybook,
  tailwind,
  nodejs,
  nextjs,
  mongodb,
  git,
  figma,
  aws,
  SKF,
  DCI,
  carrent,
  freebie,
  ig_clone,
  js_portfolio,
  pokemon,
  alpaca,
  e_commerce,
  threejs,
  homenest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: i18next.t("About"),
  },
  {
    id: "work",
    title: "Work",
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
    title: "React/Nextjs Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "SKF",
    icon: SKF,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Frontend Development: Leveraged AWS CodeCommit & Amplify, Next.js, TypeScript, Storybook, Jest, React Testing Library, SWR, and an internal component library using Ant Design to develop robust, cross-browser compatibility and responsive user interfaces.",
      "Backend Development: Implemented scalable backend solutions with AWS Lambda, DynamoDB, CodeCommit, CodeBuild, CloudWatch, S3, API Gateway, TypeScript, and Node.js, ensuring efficient data processing and system integration.",
      "Security and Compliance: Ensured adherence to security protocols and compliance standards throughout the development lifecycle, implementing best practices to safeguard data and maintain system integrity.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "SKF",
    icon: SKF,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Collaborate with UI and Branding Team, to enhance the internal design system.",
      "Create Lo-Fi and Hi-Fi designs, and later used Hi-Fi designs for prototyping.",
      "Hosted and Conducted usability tests with various end user profiles.",
      "Use Figma to create/alter UI components according to our needs, utilised UX Tweak to do user research and A/B Testing with prototypes.",
    ],
  },
  {
    title: "Web Developer Tutor",
    company_name: "DCI",
    icon: DCI,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Dec 2021",
    points: [
      "Creating exercises for my fellow learners.",
      "Plan targeted lessons around questions and project concepts.",
      "Help during the final project, while working on my final project.",
      "Live Coding: Facilitated interactive live coding sessions, demonstrating best practices and solving complex exercises in real-time to enhance students' understanding and coding proficiency.",
      "Mentoring: Offered personalized guidance and support to students, addressing challenging concepts and fostering a collaborative learning environment to promote skill development and confidence.",
    ],
  },
];

const projects = [
  {
    name: "HomeNest",
    description:
      "WIP: Freelance voluntary project, the client requested a one pager in which people can check their services and reach out to them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: homenest,
    web_code_link: "https://homenest.onrender.com/",
    source_code_link: "https://github.com/Brisilda-Bushi/homenest",
  },
  {
    name: "Instagram Clone",
    description:
      "Mobile-based platform that allows users to register, sign in, create a post, like and comment others posts.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "yup",
        color: "pink-text-gradient",
      },
    ],
    image: ig_clone,
    web_code_link: "https://github.com/Brisilda-Bushi/IG-clone",
    source_code_link: "https://github.com/Brisilda-Bushi/IG-clone",
  },
  {
    name: "Freebie",
    description:
      "Web application that enables users to find or post items for free on their location. They can register and log in to interact with the users that have posted items to be given for free.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: freebie,
    web_code_link: "https://freebie-b8v3.onrender.com/",
    source_code_link: "https://github.com/Brisilda-Bushi/Freebie",
  },
  {
    name: "Previous Portfolio",
    description:
      "Web application which is responsive from desktop to mobile view and also has a dark mode, this was my first portofolio that I have worked during the end of attending the bootcamp.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: js_portfolio,
    web_code_link: "https://portfolio-server-gzuz.onrender.com/",
    source_code_link: "https://github.com/Brisilda-Bushi/Portfolio",
  },
  {
    name: "Car Auction (Code Challenge)",
    description:
      "A Web application that allows users to see the time limit for the auctions in real time.",
    tags: [
      {
        name: "angular",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mocha",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    web_code_link: "https://frontend-carsale-coding-challenge.netlify.app/",
    source_code_link:
      "https://github.com/Brisilda-Bushi/Interview-Challenge-FullStack",
  },
  {
    name: "E-Commerce",
    description:
      "A Web application that allows users to register, log in, choose the item they would like to purchase and add it to their cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: e_commerce,
    web_code_link: "https://cat-bam.onrender.com/",
    source_code_link: "https://github.com/Brisilda-Bushi/B.A.M-eCommerce",
  },
  {
    name: "Pokemon Lite",
    description:
      "A mini game web application that allows 2 users in the same room to choose their own pokemon from the list and have a duel.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    web_code_link: "https://pokemon-lite.netlify.app/",
    source_code_link: "https://github.com/Brisilda-Bushi/AMB-Project-Pokemon",
  },
  {
    name: "Alpaca Farm",
    description:
      "A static web application that is advertising a farm that is raising alpacas, people can visit this location for fun activities.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: alpaca,
    web_code_link: "https://alpaca-project.netlify.app/",
    source_code_link: "https://github.com/Brisilda-Bushi/Alpaca-Project",
  },
];

export { services, technologies, experiences, projects };
