import { motion } from "framer-motion";
import LineGradient1 from "../components/LineGradient1";
import Nomad from "../assets/project-9.jpg";
import Sweet from "../assets/project-4.jpg";
import Solar from "../assets/project-3.jpg";
import Block from "../assets/project-2.jpg";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Project = ({ title, subtitle, desc, img, link }) => {
  const list = desc.split(",");
  return (
    //CONTAINER
    <div className="relative xs:mb-6 mb-20 z-10">
      {/* Colored Box */}
      <div className="absolute h-auto min-h-full z-1 top-0 ml-[30%] w-[70%] xs:border-2 border-primary-2 text-sm md:text-sm lg:text-base">
        {/* Text Box */}
        <div className="pl-[15%] md:pl-[25%]  md:pt-5">
          {/* Title Box */}
          <p className="font-title font-bold leading-5">{title}</p>
          {/* Subtitle Box */}
          <p className="font-title  text-primary-light-1">{subtitle}</p>

          {/* List */}
          {list.map((l) => {
            return (
              <li
                key={l}
                className="font-thin text-primary-light-1 md:leading-4 "
              >
                {l}
              </li>
            );
          })}

          {/* BTN */}
          <div className="my-2">
            <a
              className="bg-1 text-dark-1  py-1 px-2 font-normal hover:text-white transition duration-500"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              See Live Project
            </a>
          </div>
        </div>
      </div>
      {/* IMAGE */}
      <img className="relative w-5/12 p-4 z-100" src={img} alt={title} />
    </div>
  );
};

const Projects = ({ setSelectedPage }) => {
  return (
    //------------------------------------------------------MAIN CONTAINER
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center mb-7 "
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
        <p className="font-title mb-2 font-black sm:text-5xl text-4xl">
          <span className="text-primary-1">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient1 width="w-1/3" />
        </div>
      </motion.div>

      {/* PROJCECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 md:gap-16 xs:gap-1 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Project
            title="Nomad Hive"
            subtitle="Marketplace App"
            img={Nomad}
            desc="React, Next.js, Prisma, MongoDB"
            link="https://wojkr.github.io/projects/#1"
          />
          <Project
            title="SweetApp"
            subtitle="Rating Website"
            img={Sweet}
            desc="NodeJS, Express, MongoDB, PassportAuth and more..."
            link="https://wojkr.github.io/projects/#2"
          />
          <Project
            title="Block Breaker"
            subtitle="Game"
            img={Block}
            desc="10 Levels, 11 Bonuses, 7 Game Modes, Touchscreen Devices Mode"
            link="https://wojkr.github.io/projects/#3"
          />
          <Project
            title="Solar System"
            subtitle="Animation"
            img={Solar}
            desc="CSS, SASS, no JS, Creativity"
            link="https://wojkr.github.io/projects/#4"
          />
        </motion.div>
      </div>
      <div className="mt-9 text-center">
        <a
          className="bg-1 text-dark-1 py-3 px-7 font-semibold  hover:text-white transition duration-500 mt-[100px]"
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
