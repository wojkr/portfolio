import Nomad550 from "./assets/nomad-550.webp";
import Nomad350 from "./assets/nomad-350.webp";
import Sweet550 from "./assets/sweet-550.webp";
import Sweet350 from "./assets/sweet-350.webp";
import Solar550 from "./assets/solar-550.webp";
import Solar350 from "./assets/solar-350.webp";
import Block550 from "./assets/block-550.webp";
import Block350 from "./assets/block-350.webp";
import Ride550 from "./assets/ride-550.webp";
import Ride350 from "./assets/ride-350.webp";

export const projectsData = [
  {
    title: "Ride Rite",
    subtitle: "eCommerce",
    img550: Ride550,
    img350: Ride350,
    desc: "React+MUI, Redux, Strapi CMS, Stripe Payment",
    link: "https://wojkr.github.io/projects/#5",
    serverUrl: "https://ride-rite-server.onrender.com/api/items",
    isTurnOnServerNeeded: true,
  },
  {
    title: "Nomad Hive",
    subtitle: "Marketplace App",
    img550: Nomad550,
    img350: Nomad350,
    desc: "React+Tailwind, Next.js, Prisma, MongoDB",
    link: "https://wojkr.github.io/projects/#1",
  },
  {
    title: "SweetApp",
    subtitle: "Rating Website",
    img550: Sweet550,
    img350: Sweet350,
    desc: "NodeJS, Express, MongoDB, PassportAuth and more...",
    link: "https://wojkr.github.io/projects/#2",
    serverUrl: "https://sweet-app-try.onrender.com/desserts",
    isTurnOnServerNeeded: true,
  },
  {
    title: "Block Breaker",
    subtitle: "Game",
    img550: Block550,
    img350: Block350,
    desc: "10 Levels, 11 Bonuses, 7 Game Modes, Touchscreen Devices Mode",
    link: "https://wojkr.github.io/projects/#3",
  },
  {
    title: "Solar System",
    subtitle: "Animation",
    img550: Solar550,
    img350: Solar350,
    desc: "CSS, SASS, no JS, Creativity",
    link: "https://wojkr.github.io/projects/#4",
  },
];
