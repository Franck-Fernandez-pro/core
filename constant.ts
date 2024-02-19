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
    role: ["Front developer", "Technical advisor"],
    responsibilities: [
      "Features definition",
      "Front Development/Debugging",
      "Writing internal/external documentation",
      "Improve workflow and application release process",
    ],
    stack: [
      "React",
      "Redux",
      "Webpack",
      "CI/CD (Gitlab)",
      "Git Flow",
      "Jira & Confluence",
    ],
    video: "/skewer/demo.mp4",
    images: [
      "/skewer/graph.png",
      "/skewer/media_lib.png",
      "/skewer/key_value.png",
      "/skewer/preview.png",
      "/skewer/external-preview.png",
    ],
  },
  {
    title: "User Manger",
    company: "SkewerLab",
    companyLink: "https://www.skewerlab.com",
    href: "/work/skewerlab-user_manager",
    summary:
      "Originally designed as an internal tool, this solution streamlines the creation, deletion, and modification of users, providing sales teams and project managers with enhanced control over application access.",
    role: ["Web developer", "Web designer"],
    responsibilities: ["Front Development/Debugging", "Web design"],
    stack: ["React", "Bootstrap", "CI/CD (Gitlab)"],
    video: null,
    images: [
      "/user_manager/user.png",
      "/user_manager/profile.png",
      "/user_manager/create.png",
    ],
  },
  {
    title: "Video Player",
    company: "SkewerLab",
    companyLink: "https://www.skewerlab.com",
    href: "/work/skewerlab-player",
    summary:
      "In addition to video scripting, SkewerLab enables data-driven videos to be broadcast with a custom video player.",
    role: ["Web developer", "Technical advisor", "User referent"],
    responsibilities: [
      "Features definition",
      "Front Development/Debugging",
      "Writing internal/external documentation",
      "Customer reference for integration and project distribution",
      "Improve workflow and application release process",
    ],
    stack: ["JS vanilla", "HlsJS", "VideoJS", "M3U8", "Cypress", "Webpack"],
    video: null,
    images: ["/skewer/preview.png", "/skewer/external-preview.png"],
  },
  {
    title: "MyRole v3",
    company: "MyRole",
    companyLink: "https://myrole.fr",
    href: "/work/my-role",
    summary:
      "Redesign of the MyRole front-end application (administrative management application for intermittent workers in the film and audiovisual industries).",
    role: ["Web developer", "Technical advisor", "Internship supervisor"],
    responsibilities: [
      "Features definition",
      "Front Development/Debugging",
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
