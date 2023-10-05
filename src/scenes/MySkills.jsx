import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient2";
import {
  SiBootstrap,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGoogle,
  SiHoppscotch,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiNuget,
  SiPhotopea,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSass,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbExchange } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

import skillsImage from "../assets/skills-image.png";

const MySkills = ({ setSelectedPage }) => {
  const isAboveMediumLargeScreens = useMediaQuery("(min-width:1300px)");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="skills"
      className="gap-16 py-10 min-h-[100dvh] flex flex-col justify-center"
    >
      {/* FIRST ROW */}
      <div className="md:flex justify-between md:text-start text-center md:items-start mt-32 gap-20">
        <motion.div
          className="lg:w-1/3 md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onViewportEnter={() => setSelectedPage("skills")}
        >
          {/* /MY SKILLS COLUMN */}
          <p className="font-playfair mb-2 font-semibold text-4xl">
            MY <span className="text-primary-2 ">SKILLS</span>{" "}
          </p>{" "}
          <div className="flex justify-center md:justify-start my-5">
            <LineGradient width="w-1/4" />
          </div>
          <p className="font-extralight text-sm mt-5 mb-10  drop-shadow-accent ">
            My background includes a bachelor's degree in mechanical
            engineering, which provided me with a deep understanding of design
            and problem-solving. Furthermore, I have honed my{" "}
            <span className="text-primary-light-2 ">creativity</span> as a
            talented musician, having taught drums for Yamaha Music Europe. With
            <span className="text-primary-light-2"> experience </span>
            as a customer advisor in a finance company and currently working as
            an assistant manager in a hotel, I have excellent{" "}
            <span className="text-primary-light-2">
              communication skills{" "}
            </span>{" "}
            and I am great with customers.
            <br /> I am confident that my combination of technical{" "}
            <span className="text-primary-light-2">knowledge</span> and
            creativity, as well as my ability to communicate effectively, make
            me a <span className="text-primary-light-2">strong candidate</span>{" "}
            for junior web development position.
          </p>
        </motion.div>
        {/* /IMAGE */}
        <div
          className={isAboveMediumLargeScreens ? "flex-grow-1" : "w-50 m-auto"}
        >
          {isAboveMediumScreens ? (
            <motion.div>
              <img src={skillsImage} alt="" className="mx-auto " />
            </motion.div>
          ) : (
            <motion.div>
              <img src={skillsImage} alt="" className="mx-auto" />
            </motion.div>
          )}
        </div>
      </div>
      {/* SKILLS */}
      <section className="md:flex justify-between md:items-start md:h-full mt-32 md:gap-16 text-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }} //~half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/4 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:bg-primary-1 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-semibold text-4xl mb-2">01</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent">
              <span className="md:text-primary-light-1 text-primary-1 ">
                Front
              </span>{" "}
              End:
            </p>
          </div>

          <div className="grid gap-4 grid-cols-3 text-center my-5 place-items-center">
            <div className="">
              <SiReact className="text-5xl text-primary-1 mx-auto" />
              React
            </div>
            <div className="">
              <SiRedux className="text-5xl text-primary-1 mx-auto" />
              Redux Toolkit
            </div>
            <div className="">
              <SiNextdotjs className="text-5xl text-primary-1 mx-auto" />
              Next
            </div>
            <div className="">
              <SiTailwindcss className="text-5xl text-primary-1 mx-auto" />
              Tailwind
            </div>
            <div className="">
              <SiMui className="text-5xl text-primary-1 mx-auto" />
              MUI
            </div>
            <div className="text-center">
              <SiBootstrap className="text-5xl text-primary-1 mx-auto" />
              Bootstrap
            </div>
            <div className="">
              <SiSass className="text-5xl text-primary-1 mx-auto" />
              SCSS{" "}
            </div>
            <div className="">
              <SiPhotopea className="text-5xl text-primary-1 mx-auto" />
              Photopea
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/4 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:bg-primary-2 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className=" font-semibold text-4xl mb-2">02</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent ">
              <span className="md:text-primary-light-2 text-primary-2 ">
                Back
              </span>{" "}
              End:
            </p>
          </div>

          <div className="grid gap-4 grid-cols-3 text-center my-5 place-items-center">
            <div className="">
              <SiDotnet className="text-5xl text-primary-2 mx-auto" />
              .NET
            </div>
            <div className="">
              <SiNodedotjs className="text-5xl text-primary-2 mx-auto" />
              Node.js
            </div>
            <div className="">
              <SiExpress className="text-5xl text-primary-2 mx-auto" />
              Express
            </div>
            <div className="">
              <SiNuget className="text-5xl text-primary-2 mx-auto" />
              Nuget
            </div>
            <div className="">
              <SiNpm className="text-5xl text-primary-2 mx-auto" />
              NPM
            </div>
            <div className="">
              <SiMongodb className="text-5xl text-primary-2 mx-auto" />
              MongoDB
            </div>
            <div className="">
              <DiDotnet className="text-5xl text-primary-2 mx-auto" />
              Entity Framework
            </div>
            <div className="">
              <SiPrisma className="text-5xl text-primary-2 mx-auto" />
              Prisma
            </div>
            <div className="">
              <SiStrapi className="text-5xl text-primary-2 mx-auto" />
              Strapi
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/4 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:bg-primary-3 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-semibold text-4xl mb-2">03</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent ">
              <span className="md:text-primary-light-3 text-primary-3">
                And
              </span>{" "}
              More:
            </p>
          </div>

          <div className="grid gap-4 grid-cols-3 text-center my-5 place-items-center">
            <div className="">
              <SiCsharp className="text-5xl text-primary-3 mx-auto" />
              C#
            </div>
            <div className="">
              <SiJavascript className="text-5xl text-primary-3 mx-auto" />
              Javascript
            </div>
            <div className="">
              <SiTypescript className="text-5xl text-primary-3 mx-auto" />
              Typescript
            </div>
            <div className="">
              <SiGit className="text-5xl text-primary-3 mx-auto" />
              Git
            </div>
            <div className="">
              <SiHoppscotch className="text-5xl text-primary-3 mx-auto" />
              Hoppscotch
            </div>
            <div className="">
              <TbExchange className="text-5xl text-primary-3 mx-auto" />
              REST API
            </div>
            <div className="">
              <FaRobot className="text-5xl text-primary-3 mx-auto " />
              AI tools
            </div>
            <div className="">
              <SiFirebase className="text-5xl text-primary-3 mx-auto" />
              Firebase
            </div>
            <div className="">
              <SiGoogle className="text-5xl text-primary-3 mx-auto" />
              Googling
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default MySkills;
