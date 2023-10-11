import { motion } from "framer-motion";
import LineGradient3 from "../components/LineGradient3";
import Nomad from "../assets/project-9.jpg";
import Sweet from "../assets/project-4.jpg";
import Solar from "../assets/project-3.jpg";
import Block from "../assets/project-2.jpg";

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

// const Project = ({ title, subtitle, desc, img, link }) => {
//   const list = desc.split(",");
//   return (
//     //CONTAINER
//     <motion.div
//       variants={projectVariant}
//       className="relative xs:mb-6 mb-20 z-10"
//     >
//       {/* Colored Box */}
//       <div className="absolute h-auto min-h-full z-1 top-0 ml-[30%] w-[70%] xs:border-2 border-primary-3 text-sm md:text-sm lg:text-base">
//         {/* Text Box */}
//         <div className="pl-[15%] md:pl-[25%]  md:pt-5">
//           {/* Title Box */}
//           <p className="font-title font-bold leading-5">{title}</p>
//           {/* Subtitle Box */}
//           <p className="font-title  text-primary-light-3">{subtitle}</p>

//           {/* List */}
//           {list.map((l) => {
//             return (
//               <li key={l} className="font-thin md:leading-4 ">
//                 {l}
//               </li>
//             );
//           })}

//           {/* BTN */}
//           <div className="my-2">
//             <a
//               className={`text-dark-1 py-1 px-2 font-normal hover:text-white ${btnAnimationGradient}`}
//               href={link}
//               target="_blank"
//               rel="noreferrer"
//             >
//               See Live Project
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* IMAGE */}
//       <img className="relative w-5/12 p-4 z-100" src={img} alt={title} />
//     </motion.div>
//   );
// };
const Project = ({ title, subtitle, desc, img, link }) => {
  const list = desc.split(",");
  return (
    //CONTAINER
    <motion.div variants={projectVariant} className="flex xs:mb-6 mb-20 z-10">
      {/* IMAGE */}
      <img className=" w-5/12 p-4 pr-0 h-fit z-10" src={img} alt={title} />
      {/* Colored Box */}
      <div className="w-full -ml-[10%] pl-[10%] z-1 xs:border-2 border-primary-3 ">
        {/* Text Box */}
        <div className="h-full p-5">
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
    <section id="projects" className="pt-48 pb-48">
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
          className="md:grid md:grid-cols-2 md:gap-16 xs:gap-1 gap-16"
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
      <div className="mt-9 text-center">
        <a
          className={`text-dark-1 py-3 px-7 font-semibold  hover:text-white mt-[100px] ${btnAnimationGradient}`}
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
