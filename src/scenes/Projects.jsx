import { motion } from "framer-motion";
import LineGradient1 from "../components/LineGradient1";
import projectImg1 from "../assets/project-1.jpg";
import projectImg2 from "../assets/project-2.jpg";
import projectImg3 from "../assets/project-3.jpg";
import projectImg4 from "../assets/project-4.jpg";
import projectImg5 from "../assets/project-5.jpg";
import projectImg6 from "../assets/project-6.jpg";
import projectImg7 from "../assets/project-7.jpg";
import projectImg8 from "../assets/project-8.jpg";
import projectImg9 from "../assets/project-9.jpg";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, name, desc, img }) => {
  const overlayStyles = `absolute h-full w-full max-w-[1000px] opacity-0 fit hover:opacity-90 transition duration-500
    bg-primary-light-1 z-30 flex flex-col justify-center items-center text-center text-sm md:text-base md:p-10  p-0 text-dark-1`;
  return (
    <motion.div variants={projectVariant} className="relative max-w-[1000px]">
      <div className={overlayStyles}>
        {name !== "" && <p className="text-2xl font-playfair ">{name}</p>}
        <p className=" mt-7 sm:mt-0 lg:mt-7 font-normal ">{desc}</p>
      </div>
      <img className="" src={img} alt={name} />
    </motion.div>
  );
};

const Projects = ({ setSelectedPage }) => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center  "
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
        <p className="font-playfair mb-2 font-semibold text-4xl">
          <span className="text-primary-1">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient1 width="w-1/3" />
        </div>
        <p className=" text-sm mt-5 mb-5 ">
          I am constantly expanding my{" "}
          <span className="text-primary-light-1">knowledge</span> in my spare
          time after my job. Each project presented unique challenges that I was
          able to overcome through{" "}
          <span className="text-primary-light-1">creativity</span> and{" "}
          <span className="text-primary-light-1">problem-solving</span> skills.
        </p>
        <a
          className="bg-1 text-dark-1 py-3 px-7 font-semibold  hover:text-white transition duration-500 mt-[100px] "
          href="https://wojkr.github.io/projects/#"
          target="_blank"
          rel="noreferrer"
        >
          LIVE PROJECTS
        </a>
        <p className="text-sm mt-5 mb-7 ">
          Through my training in various technologies, I have developed the
          following projects:
        </p>
      </motion.div>

      {/* PROJCECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Project
            title="Project 9"
            img={projectImg9}
            name="Nomad Hive"
            desc="This is an online marketplace app that connects travelers with short-term homestays and experiences worldwide. Built with React, Next.js, Prisma, and MongoDB."
          />
          <Project
            title="Project 8"
            img={projectImg8}
            name="Ride Rite"
            desc="Responsive full-stack e-commerce app with Strapi CMS and secure Stripe payment processing platform. Formik and Yup for form validation. Built with React, Redux, and Material-UI."
          />
          <Project
            title="Project 6"
            img={projectImg6}
            name="CardioLab Fitness"
            desc="This project is front-end focused, with a priority on custom-made PNGs and UX design. CardioLab Fitness website was built using React, TypeScript, framer-motion, tailwindcss, vite and Photopea."
          />
          <Project
            title="Project 5"
            img={projectImg5}
            name="Rokku Social app"
            desc='"Rokku" is a dynamic full-stack social media platform that offers users a customized experience with its light/dark mode feature. Built using MERN, Redux, and other technologies including formik, yup, bcrypt, cors, dotenv, express, helmet, jsonwebtoken, mongoose, morgan, and multer.'
          />
          <Project
            title="Project 3"
            img={projectImg3}
            name="pureCSS Solar System"
            desc="The solar system animation project features all planets and some moons, with no use of JS. First time using SASS. Initially intending to maintain true planet-to-orbit diameter ratios; rescaled for better visual impact."
          />
          <Project
            title="Project 1"
            img={projectImg1}
            name="CoffeeHouse"
            desc="Website with social media features using React, including a working email contact form, full auth with confirmation (Userfront), user accounts (CRUD), and a comment section (CRUD) with ratings and votes."
          />
          <Project
            title="Project 4"
            img={projectImg4}
            name="SweetApp"
            desc="The pudding rating website, with an interactive map. My first full-stack project, backend focused: NodeJS Express, Mongo DB, full Passport Auth with confirmation. In the project also: EJS for rendering views, Cloudinary for uploading images, Helmet for security, and Joi for validation."
          />
          <Project
            title="Project 2"
            img={projectImg2}
            name="Block Breaker"
            desc="I created a game from scratch using VanillaJS and CSS, which includes 10 levels, 11 bonuses, 7 game modes, and control buttons for touchscreen devices. I continue to make incremental improvements to the project over time."
          />
          <Project
            title="Project 7"
            img={projectImg7}
            name=""
            desc="The portfolio website that you are currently viewing was developed using a modern technology stack, which includes React, Tailwind, and Framer-Motion. My objective was to create a visually appealing design that highlights my work and skills in a professional and engaging manner."
          />
          {/* <div
            className="flex justify-center items-center py-16 bg-primary-2
              max-w-[1000px] max-h-[1000px] text-2xl font-playfair font-semibold"
          >
            <a
              href="https://github.com/wojkr"
              target="_blank"
              className="hover:text-dark-1 transition duration-500 text-center "
              rel="noreferrer"
            >
              AND MORE:
              <div className="flex justify-center mt-3">
                <SiGithub size={48} />
              </div>
            </a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
