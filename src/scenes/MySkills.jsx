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

import mySkillsImg from "../assets/my-skills.webp";

const MySkills = ({ setSelectedPage }) => {
  const isAboveMediumLargeScreens = useMediaQuery("(min-width:1300px)");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="skills"
      className="gap-16 py-32 min-h-[100dvh] flex flex-col justify-center z-10"
    >
      {/* FIRST ROW */}
      <div className="md:flex justify-between xl:text-end md:text-start text-center md:items-start gap-20">
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
          <p className="font-title mb-2 font-black text-5xl">
            MY <span className="text-primary-2 ">SKILLS</span>{" "}
          </p>{" "}
          <div className="flex justify-center md:justify-start xl:justify-end my-5">
            <LineGradient width="w-1/4" />
          </div>
          <div className="mt-5 mb-10 text-lg drop-shadow-accent ">
            <p className="font-bold">Engineering Background</p>
            <p className="mb-2 text-primary-light-2 text-sm font-thin">
              B.Eng - Aeronautics and Space Technology,<br></br> Major in
              Aricraft Engines
            </p>
            <p className="font-bold">Creativity & Communication</p>
            <p className="mb-2 text-primary-light-2 text-sm font-thin">
              Yamaha Music Europe Drum Teacher
            </p>
            <p className="font-bold">Communication & Issue Resolution</p>
            <p className="mb-4 text-primary-light-2 text-sm font-thin">
              Hospitality Assistance Manger, <br></br>Client Relations
              Consultant
            </p>
          </div>
        </motion.div>
        {/* /IMAGE */}
        <div
          className={
            isAboveMediumLargeScreens ? "mr-auto w-7/12" : "w-50 m-auto"
          }
        >
          {isAboveMediumScreens ? (
            <motion.div>
              <div className="relative z-0 ml-20 before:absolute before:scale-y-[70%] xl:before:scale-x-[110%] before:scale-x-[85%] before:top-[2%] before:-left-[7%] xl:before:left-[10%] xxl:before:left-[25%] xxxl:before:left-[25%] before:w-full before:max-w-[400px] before:h-full before:max-h-[400px] md:before:max-w-[600px] md:before:max-h-[600px] before:border-2 before:border-primary-2 before:z-[-1]">
                <img
                  src={mySkillsImg}
                  alt=""
                  className="mx-auto w-full max-w-[400px] md:max-w-[600px]"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div>
              <img src={mySkillsImg} alt="" className="mx-auto h-fit" />
            </motion.div>
          )}
        </div>
      </div>
      {/* SKILLS */}
      <section className="flex-col md:flex-row md:flex justify-between md:items-start md:h-full md:gap-16 gap-16 text-sm z-10 md:max-w-none max-w-md mx-auto md:mx-0 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }} //~half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/4 md:mb-0 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:border-primary-3 before:border-2 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-bold font-title text-4xl mb-2">01</p>
            <p className="font-bold font-title text-4xl mb-2 drop-shadow-accent">
              <span className="md:text-primary-light-3 text-primary-3 ">
                Front
              </span>{" "}
              End:
            </p>
          </div>

          <div className="grid gap-4 grid-cols-3 text-center my-5 place-items-center">
            <div className="">
              <SiReact className="text-5xl text-primary-3 mx-auto" />
              React
            </div>
            <div className="">
              <SiRedux className="text-5xl text-primary-3 mx-auto" />
              Redux Toolkit
            </div>
            <div className="">
              <SiNextdotjs className="text-5xl text-primary-3 mx-auto" />
              Next
            </div>
            <div className="">
              <SiTailwindcss className="text-5xl text-primary-3 mx-auto" />
              Tailwind
            </div>
            <div className="">
              <SiMui className="text-5xl text-primary-3 mx-auto" />
              MUI
            </div>
            <div className="text-center">
              <SiBootstrap className="text-5xl text-primary-3 mx-auto" />
              Bootstrap
            </div>
            <div className="">
              <SiSass className="text-5xl text-primary-3 mx-auto" />
              SCSS{" "}
            </div>
            <div className="">
              <SiPhotopea className="text-5xl text-primary-3 mx-auto" />
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
          className="md:w-1/4 md:mb-0 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:border-primary-1 before:border-2 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className=" font-bold font-title text-4xl mb-2">02</p>
            <p className="font-bold font-title text-4xl mb-2 drop-shadow-accent ">
              <span className="md:text-primary-light-1 text-primary-1 ">
                Back
              </span>{" "}
              End:
            </p>
          </div>

          <div className="grid gap-4 grid-cols-3 text-center my-5 place-items-center">
            <div className="">
              <SiDotnet className="text-5xl text-primary-1 mx-auto" />
              .NET
            </div>
            <div className="">
              <SiNodedotjs className="text-5xl text-primary-1 mx-auto" />
              Node.js
            </div>
            <div className="">
              <SiExpress className="text-5xl text-primary-1 mx-auto" />
              Express
            </div>
            <div className="">
              <SiNuget className="text-5xl text-primary-1 mx-auto" />
              Nuget
            </div>
            <div className="">
              <SiNpm className="text-5xl text-primary-1 mx-auto" />
              NPM
            </div>
            <div className="">
              <SiMongodb className="text-5xl text-primary-1 mx-auto" />
              MongoDB
            </div>
            <div className="">
              <DiDotnet className="text-5xl text-primary-1 mx-auto" />
              Entity Framework
            </div>
            <div className="">
              <SiPrisma className="text-5xl text-primary-1 mx-auto" />
              Prisma
            </div>
            <div className="">
              <SiStrapi className="text-5xl text-primary-1 mx-auto" />
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
          className="md:w-1/4"
        >
          <div className="pb-2 relative before:absolute before:h-full before:border-primary-2 before:border-2 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-bold font-title text-4xl mb-2">03</p>
            <p className="font-bold font-title text-4xl mb-2 drop-shadow-accent ">
              <span className="md:text-primary-light-2 text-primary-2">
                And
              </span>{" "}
              More:
            </p>
          </div>

          <div className="grid gap-4 grid-cols-3 text-center mt-5 place-items-center">
            <div className="">
              <SiCsharp className="text-5xl text-primary-2 mx-auto" />
              C#
            </div>
            <div className="">
              <SiJavascript className="text-5xl text-primary-2 mx-auto" />
              Javascript
            </div>
            <div className="">
              <SiTypescript className="text-5xl text-primary-2 mx-auto" />
              Typescript
            </div>
            <div className="">
              <SiGit className="text-5xl text-primary-2 mx-auto" />
              Git
            </div>
            <div className="">
              <SiHoppscotch className="text-5xl text-primary-2 mx-auto" />
              Hoppscotch
            </div>
            <div className="">
              <TbExchange className="text-5xl text-primary-2 mx-auto" />
              REST API
            </div>
            <div className="">
              <FaRobot className="text-5xl text-primary-2 mx-auto " />
              AI tools
            </div>
            <div className="">
              <SiFirebase className="text-5xl text-primary-2 mx-auto" />
              Firebase
            </div>
            <div className="">
              <SiGoogle className="text-5xl text-primary-2 mx-auto" />
              Googling
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default MySkills;
