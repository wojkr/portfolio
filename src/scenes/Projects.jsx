import { motion } from "framer-motion";
import LineGradient3 from "../components/LineGradient3";
import Nomad from "../assets/project-nomad.webp";
import Sweet from "../assets/project-sweet.webp";
import Solar from "../assets/project-solar.webp";
import Block from "../assets/project-block.webp";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const projectsData = [
  {
    title: "Nomad Hive",
    subtitle: "Marketplace App",
    img: Nomad,
    desc: "React, Next.js, Prisma, MongoDB",
    link: "https://wojkr.github.io/projects/#1",
  },
  {
    title: "SweetApp",
    subtitle: "Rating Website",
    img: Sweet,
    desc: "NodeJS, Express, MongoDB, PassportAuth and more...",
    link: "https://wojkr.github.io/projects/#2",
  },
  {
    title: "Block Breaker",
    subtitle: "Game",
    img: Block,
    desc: "10 Levels, 11 Bonuses, 7 Game Modes, Touchscreen Devices Mode",
    link: "https://wojkr.github.io/projects/#3",
  },
  {
    title: "Solar System",
    subtitle: "Animation",
    img: Solar,
    desc: "CSS, SASS, no JS, Creativity",
    link: "https://wojkr.github.io/projects/#4",
  },
];
const btnAnimationGradient = `bg-gradient-animation-3 w-fit bg-size-300 bg-position-0 hover:bg-position-50 transition-all duration-500`;

const Project = ({ title, subtitle, desc, img, link }) => {
  const list = desc.split(",");
  return (
    //CONTAINER
    <motion.div
      variants={projectVariant}
      className="flex md:flex-row flex-col xs:mb-6 mb-20 z-10"
    >
      {/* IMAGE */}
      <img
        className="md:w-5/12 p-7 pb-0 md:p-4 md:pr-0 w-full h-fit max-w-[600px] z-10"
        src={img}
        alt={title}
      />
      {/* Colored Box */}
      <div className="w-full md:-ml-[10%] md:pl-[10%] md:mt-0 -mt-32 z-1 border-2 border-primary-3">
        {/* Text Box */}
        <div className="h-full md:p-5 p-10 pt-40">
          {/* Title Box */}
          <p className="font-title font-bold leading-5">{title}</p>
          {/* Subtitle Box */}
          <p className="font-title text-primary-light-3">{subtitle}</p>
          <div className="list-square my-5">
            {/* List */}
            {list.map((l) => {
              return (
                <li key={l} className="font-thin md:leading-4">
                  {l}
                </li>
              );
            })}
          </div>

          {/* BTN */}
          <div className={`${btnAnimationGradient} `}>
            <a
              className={`block py-1 px-2 text-dark-1 hover:text-white`}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              See Live Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ setSelectedPage }) => {
  return (
    //------------------------------------------------------MAIN CONTAINER
    <section id="projects" className="py-32">
      <motion.div
        className="md:w-2/5 mx-auto text-center mb-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        onViewportEnter={() => setSelectedPage("projects")}
      >
        {/* ------------------------------------------------------------TITLE */}
        <p className="font-title mb-2 font-black sm:text-5xl text-4xl">
          PRO<span className="text-primary-light-3">JECTS</span>
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient3 width="w-1/3" />
        </div>
      </motion.div>

      {/*------------------------------------------------------------PROJCECTS */}
      <div className="flex justify-center">
        <motion.div
          className="md:grid md:grid-cols-2 md:gap-16 xs:gap-1 gap-16 my-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          onViewportEnter={() => setSelectedPage("projects")}
        >
          {projectsData.map((p) => (
            <Project
              title={p.title}
              subtitle={p.subtitle}
              img={p.img}
              desc={p.desc}
              link={p.link}
            />
          ))}
        </motion.div>
      </div>
      {/*------------------------------------------------------------BIG BTN TO PROJECTS INDEX */}
      <div className={`${btnAnimationGradient} mx-auto`}>
        {/* <div className="mt-9 text-center"> */}
        <a
          className={`block text-dark-1 py-3 px-7 font-semibold  hover:text-white ${btnAnimationGradient}`}
          href="https://wojkr.github.io/projects/#"
          target="_blank"
          rel="noreferrer"
        >
          Projects Showcase Page
        </a>
      </div>
    </section>
  );
};

export default Projects;
