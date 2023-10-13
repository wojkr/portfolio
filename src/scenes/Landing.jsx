import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import profileImage from "../assets/profile-IMG.webp";
import Terminal from "../components/Terminal";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery(`(min-width:1060px)`);
  const btnAnimationGradient = `bg-gradient-animation-2 bg-size-300 bg-position-100 hover:bg-position-50 transition-all ease-linear duration-[500ms]`;

  return (
    <section
      id="home"
      className="flex md:justify-between justify-center md:flex-row flex-col md:items-center md:gap-16  py-24 min-h-[100dvh]"
    >
      {/* IMAGE */}
      <motion.div
        onViewportEnter={() => setSelectedPage("home")}
        className="flex justify-center basis-3/5 z-10 md:mt-16 "
      >
        {/* {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:bottom-0 before:right-0 before:aspect-square before:rounded-full before:w-full before:border-0 before:border-primary-1 before:z-[-1] hover:filter hover:brightness-105 hover:saturate-100 filter brightness-90 saturate-75 transition duration-500">
            <img src={profileImage} alt="profile" className=" object-contain" />
          </div>
        ) : ( */}
        <img
          src={profileImage}
          alt="profile"
          className="hover:filter hover:brightness-110 hover:saturate-100 filter brightness-100 saturate-75 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
        />
        {/* )} */}
      </motion.div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 md:mt-0 -mt-12">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="md:text-[6dvw] text-[10dvw] leading-none font-title text-center md:text-end ">
            <span className="md:drop-shadow-none drop-shadow-border-1px">
              WOJCIECH <br></br>
            </span>
            <span className="md:text-[9.15dvw] text-[15.25dvw]">KRUPA</span>
          </p>
          <motion.div
            className="flex justify-center md:justify-end -mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} //half div in view
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Terminal />
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={`flex ${btnAnimationGradient}`}>
            <AnchorLink
              className=" text-dark-1 py-3 px-7 font-semibold  hover:text-white transition duration-500 "
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
              className="rounder-r-sm py-0.5 pr-0.5 font-semibold "
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className="bg-dark-1 hover:text-primary-2 transition duration-500 w-full h-full flex items-center justify-center px-10">
                Let's talk.
              </div>
            </AnchorLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
