import { Fondamento } from "next/font/google";

export const fondamento = Fondamento({ weight: "400", subsets: ["latin"] });

export const JOBS = [
  {
    title: "Video Editor",
    company: "SkewerLab",
    companyLink: "https://www.skewerlab.com",
    href: "/work/skewerlab-editor",
    summary:
      "Make videos optimized to tailor content for multiple audiences. Thanks to SkewerLab, hundreds of videos can be generated from a single project.",
    role: ["Web developer", "Technical advisor"],
    responsibilities: [
      "Features definition",
      "Web application development/debugging",
      "Writing internal/external documentation",
      "Customer reference for integration and project distribution",
      "Improve workflow and application release process",
    ],
    stack: [
      "React/JS vanilla",
      "Webpack",
      "HlsJS & VideoJS",
      "Cypress/Jest",
      "CI/CD (Gitlab)",
      "Git Flow",
      "Jira & Confluence",
    ],
  },
  {
    title: "User Manger",
    company: "SkewerLab",
    companyLink: "https://www.skewerlab.com",
    href: "/work/skewerlab-user_manager",
    summary: "summary TODO",
  },
  {
    title: "Video Player",
    company: "SkewerLab",
    companyLink: "https://www.skewerlab.com",
    href: "/work/skewerlab-player",
    summary: "summary TODO",
  },
  {
    title: "MyRole v3",
    company: "MyRole",
    companyLink: "https://myrole.fr",
    href: "/work/my-role",
    summary:
      "Redesign of the MyRole front-end application (administrative management application for intermittent workers in the film and audiovisual industries).",
    role: ["Web developer", "Technical advisor"],
    responsibilities: [
      "Features definition",
      "Web application development/debugging",
      "Applications architecture",
    ],
    stack: [
      "React",
      "Tailwind",
      "Storybook",
      "Cypress",
      "React Query",
      "Git Flow",
    ],
  },
  {
    title: "Video player",
    company: "Video Run Run",
    companyLink: "https://www.videorunrun.com",
    href: "/work/video-run-run",
    summary:
      "This project provides a customizable video player built with TypeScript, VideoJS, and Vite.js. It includes features such as chapter markers, saliency tracking, and a custom control bar.",
    role: ["Web developer"],
    responsibilities: ["Features definition", "Writing internal documentation"],
    stack: ["TypeScript", "VideoJS", "ViteJS", "Sass"],
  },
  // {
  //   title: "",
  //   company: "",
  //   companyLink: "",
  //   href: "/work/",
  //   summary: "",
  //   role: ["Web developer"],
  //   responsibilities: [""],
  //   stack: [],
  // },
];
