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
import { useTranslation } from "react-i18next";

export const allData = () => {
    const { t } = useTranslation();
    return {
        navLinks: [
            {
                id: "about",
                title: t("About"),
            },
            {
                id: "work",
                title: t("Work"),
            },
            {
                id: "projects",
                title: t("Projects"),
            },
            {
                id: "contact",
                title: t("Contact"),
            },
        ],
        services: [
            {
                title: t("Web Developer"),
                icon: web,
            },
            {
                title: t("React/Nextjs Developer"),
                icon: mobile,
            },
            {
                title: t("React Native Developer"),
                icon: backend,
            },
            {
                title: t("UI/UX Designer"),
                icon: creator,
            },
        ],
        technologies: [
            {
                name: t("HTML 5"),
                icon: html,
            },
            {
                name: t("CSS 3"),
                icon: css,
            },
            {
                name: t("JavaScript"),
                icon: javascript,
            },
            {
                name: t("TypeScript"),
                icon: typescript,
            },
            {
                name: t("React JS"),
                icon: reactjs,
            },
            {
                name: t("NextJs"),
                icon: nextjs,
            },
            {
                name: t("Storybook"),
                icon: storybook,
            },
            {
                name: t("figma"),
                icon: figma,
            },
            {
                name: t("git"),
                icon: git,
            },
            {
                name: t("Node JS"),
                icon: nodejs,
            },
            {
                name: t("MongoDB"),
                icon: mongodb,
            },
            {
                name: t("Three JS"),
                icon: threejs,
            },
            {
                name: t("AWS"),
                icon: aws,
            },
            {
                name: t("Tailwind CSS"),
                icon: tailwind,
            },
        ],
        experiences: [
            {
                title: t("Web Developer"),
                company_name: t("SKF Lubrication Management"),
                icon: SKF,
                iconBg: "#E6DEDD",
                date: "Jan 2022 - Present",
                points: [
                    t(
                        "Frontend Development: Leveraged AWS CodeCommit & Amplify, Next.js, TypeScript, Storybook, Jest, React Testing Library, SWR, and an internal component library using Ant Design to develop robust, cross-browser compatibility and responsive user interfaces.",
                    ),
                    t(
                        "Backend Development: Implemented scalable backend solutions with AWS Lambda, DynamoDB, CodeCommit, CodeBuild, CloudWatch, S3, API Gateway, TypeScript, and Node.js, ensuring efficient data processing and system integration.",
                    ),
                    t(
                        "Security and Compliance: Ensured adherence to security protocols and compliance standards throughout the development lifecycle, implementing best practices to safeguard data and maintain system integrity.",
                    ),
                    t(
                        "Participating in code reviews and providing constructive feedback to other developers.",
                    ),
                ],
            },
            {
                title: t("UI/UX Designer"),
                company_name: t("SKF Lubrication Management"),
                icon: SKF,
                iconBg: "#E6DEDD",
                date: "Jan 2022 - Present",
                points: [
                    t(
                        "Collaborate with UI and Branding Team, to enhance the internal design system.",
                    ),
                    t(
                        "Create Lo-Fi and Hi-Fi designs, and later used Hi-Fi designs for prototyping.",
                    ),
                    t(
                        "Hosted and Conducted usability tests with various end user profiles.",
                    ),
                    t(
                        "Use Figma to create/alter UI components according to our needs, utilised UX Tweak to do user research and A/B Testing with prototypes.",
                    ),
                ],
            },
            {
                title: t("Web Developer Tutor"),
                company_name: t("DCI"),
                icon: DCI,
                iconBg: "#E6DEDD",
                date: "Jan 2021 - Dec 2021",
                points: [
                    t("Creating exercises for my fellow learners."),
                    t(
                        "Plan targeted lessons around questions and project concepts.",
                    ),
                    t(
                        "Help during the final project, while working on my final project.",
                    ),
                    t(
                        "Live Coding: Facilitated interactive live coding sessions, demonstrating best practices and solving complex exercises in real-time to enhance students' understanding and coding proficiency.",
                    ),
                    t(
                        "Mentoring: Offered personalized guidance and support to students, addressing challenging concepts and fostering a collaborative learning environment to promote skill development and confidence.",
                    ),
                ],
            },
        ],
        projects: [
            {
                name: t("HomeNest"),
                description: t(
                    "WIP: Freelance voluntary project, the client requested a one pager in which people can check their services and reach out to them.",
                ),
                tags: [
                    {
                        name: t("react"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("tailwindcss"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("framer motion"),
                        color: "pink-text-gradient",
                    },
                ],
                image: homenest,
                web_code_link: "https://homenest.onrender.com/",
                source_code_link: "https://github.com/Brisilda-Bushi/homenest",
            },
            {
                name: t("Instagram Clone"),
                description: t(
                    "Mobile-based platform that allows users to register, sign in, create a post, like and comment others posts.",
                ),
                tags: [
                    {
                        name: t("react-native"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("firebase"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("yup"),
                        color: "pink-text-gradient",
                    },
                ],
                image: ig_clone,
                web_code_link: "https://github.com/Brisilda-Bushi/IG-clone",
                source_code_link: "https://github.com/Brisilda-Bushi/IG-clone",
            },
            {
                name: t("Freebie"),
                description: t(
                    "Web application that enables users to find or post items for free on their location. They can register and log in to interact with the users that have posted items to be given for free.",
                ),
                tags: [
                    {
                        name: t("react"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("mongodb"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("express"),
                        color: "orange-text-gradient",
                    },
                    {
                        name: t("scss"),
                        color: "pink-text-gradient",
                    },
                ],
                image: freebie,
                web_code_link: "https://freebie-b8v3.onrender.com/",
                source_code_link: "https://github.com/Brisilda-Bushi/Freebie",
            },
            {
                name: t("Previous Portfolio"),
                description: t(
                    "Web application which is responsive from desktop to mobile view and also has a dark mode, this was my first portofolio that I have worked during the end of attending the bootcamp.",
                ),
                tags: [
                    {
                        name: t("javascript"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("html"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("css"),
                        color: "pink-text-gradient",
                    },
                ],
                image: js_portfolio,
                web_code_link: "https://portfolio-server-gzuz.onrender.com/",
                source_code_link: "https://github.com/Brisilda-Bushi/Portfolio",
            },
            {
                name: t("Car Auction (Code Challenge)"),
                description: t(
                    "A Web application that allows users to see the time limit for the auctions in real time.",
                ),
                tags: [
                    {
                        name: t("angular"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("typescript"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("mocha"),
                        color: "pink-text-gradient",
                    },
                ],
                image: carrent,
                web_code_link:
                    "https://frontend-carsale-coding-challenge.netlify.app/",
                source_code_link:
                    "https://github.com/Brisilda-Bushi/Interview-Challenge-FullStack",
            },
            {
                name: t("E-Commerce"),
                description: t(
                    "A Web application that allows users to register, log in, choose the item they would like to purchase and add it to their cart.",
                ),
                tags: [
                    {
                        name: t("react"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("mongodb"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("express"),
                        color: "orange-text-gradient",
                    },
                    {
                        name: t("bootstrap"),
                        color: "pink-text-gradient",
                    },
                ],
                image: e_commerce,
                web_code_link: "https://cat-bam.onrender.com/",
                source_code_link:
                    "https://github.com/Brisilda-Bushi/B.A.M-eCommerce",
            },
            {
                name: t("Pokemon Lite"),
                description: t(
                    "A mini game web application that allows 2 users in the same room to choose their own pokemon from the list and have a duel.",
                ),
                tags: [
                    {
                        name: t("Javascript"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("html"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("css"),
                        color: "pink-text-gradient",
                    },
                ],
                image: pokemon,
                web_code_link: "https://pokemon-lite.netlify.app/",
                source_code_link:
                    "https://github.com/Brisilda-Bushi/AMB-Project-Pokemon",
            },
            {
                name: t("Alpaca Farm"),
                description: t(
                    "A static web application that is advertising a farm that is raising alpacas, people can visit this location for fun activities.",
                ),
                tags: [
                    {
                        name: t("Javascript"),
                        color: "blue-text-gradient",
                    },
                    {
                        name: t("html"),
                        color: "green-text-gradient",
                    },
                    {
                        name: t("css"),
                        color: "pink-text-gradient",
                    },
                ],
                image: alpaca,
                web_code_link: "https://alpaca-project.netlify.app/",
                source_code_link:
                    "https://github.com/Brisilda-Bushi/Alpaca-Project",
            },
        ],
    };
};
